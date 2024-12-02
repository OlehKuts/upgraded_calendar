import React, { useEffect, useState } from "react";
import "./styles.css";
import { months } from "./initialData/formData";
import { DayItem } from "./components/DayItem";
import { createMonthlyList } from "./utils/createMonthlyList";
import { Header } from "./components/Header";
import { PatientForm } from "./components/PatientForm";
import { patientTemplate } from "./initialData/formData";
import { Modal } from "./components/Modal";
import { getRightMonth, getRightYear } from "./initialData/formData";
import { RemoveModal } from "./components/RemoveModal";
import { useLocalStorage } from "./custom_hooks/useLocalStorage";
import { getMonthName } from "./utils/getMonthName";
import { compareNumbers } from "./utils/compareNumbers";

export const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const initialMonth = {
    dayList: createMonthlyList(year, month - 1),
    monthId: `${month}_${year}`,
    monthName: getMonthName(month - 1, months),
  };
  const initialNextMonth = {
    dayList: createMonthlyList(
      getRightYear(month - 1, year),
      getRightMonth(month - 1)
    ),
    monthId: `${getRightMonth(month - 1)}_${getRightYear(month - 1, year)}`,
    monthName: getMonthName(getRightMonth(month - 1), months),
  };

  const [thisMonth, setThisMonth] = useLocalStorage("thisMonth", initialMonth);
  const [nextMonth, setNextMonth] = useLocalStorage(
    "nextMonth",
    initialNextMonth
  );
  const [removingData, setRemovingData] = useState({});

  const assistAddPatient = (patient, someMonth) => {
    let newList = [];
    newList = someMonth.dayList.map((item) => {
      if (Number(patient.day) === item.dayNumber && item.patients.length < 3) {
        const intermediate = item.patients.filter((pat) => pat.id);
        return {
          ...item,
          patients: [...intermediate, patient].sort(compareNumbers),
        };
      } else {
        return item;
      }
    });
    return newList;
  };

  const addPatient = (patient) => {
    let newList = [];
    if (Number(patient.month) === month) {
      newList = assistAddPatient(patient, thisMonth);
      setThisMonth((prev) => {
        return { ...prev, dayList: newList };
      });
    } else {
      newList = assistAddPatient(patient, nextMonth);
      setNextMonth((prev) => {
        return { ...prev, dayList: newList };
      });
    }

    console.log(patient.month, month);
  };
  const updateRemovingData = (
    patientId,
    dayNumber,
    monthNumber,
    patientName
  ) => {
    setRemovingData({
      patientId: patientId,
      dayNumber: dayNumber,
      monthNumber: monthNumber,
      patientName: patientName,
    });
    setShowRemoveModal(true);
  };
  // refactor removePatient

  const assistRemovePatient = (rmvData, someMonth) => {
    const { dayNumber, patientId } = rmvData;
    let newList = [];
    newList = someMonth.dayList.map((item) => {
      if (dayNumber === item.dayNumber) {
        const intermediate = item.patients.filter(
          (pat) => pat.id !== patientId
        );
        const newPatients =
          intermediate.length === 0 ? [patientTemplate] : intermediate;
        return {
          ...item,
          patients: newPatients,
        };
      } else {
        return item;
      }
    });
    return newList;
  };

  const removePatient = (rmvData) => {
    let newList = [];
    if (rmvData.monthNumber === month) {
      newList = assistRemovePatient(rmvData, thisMonth);
      setThisMonth((prev) => {
        return { ...prev, dayList: newList };
      });
    } else {
      newList = assistRemovePatient(rmvData, nextMonth);
      setNextMonth((prev) => {
        return { ...prev, dayList: newList };
      });
    }
    setShowRemoveModal(false);
  };
  const resetCalendar = () => {
    setThisMonth(initialMonth);
    setNextMonth(initialNextMonth);
  };
  const updateCalendar = () => {
    setThisMonth(nextMonth);
    setNextMonth(initialNextMonth);
  }
  
  useEffect(() => {
    if (thisMonth.monthId !== initialMonth.monthId) {
      setThisMonth(nextMonth);
      setNextMonth(initialNextMonth);
    };
    console.log(initialMonth.monthId)
    console.log(thisMonth);
    console.log(nextMonth);
  }, []);
  return (
    <div className="App">
      <>
        <button onClick={() => setShowForm(true)}>Додати пацієнта</button>
        <button onClick={resetCalendar}>Очистити</button>
        <Modal open={showForm}>
          <PatientForm add={addPatient} onClose={() => setShowForm(false)} />
        </Modal>
        <Modal open={showRemoveModal}>
          <RemoveModal
            onRemove={() => removePatient(removingData)}
            onClose={() => setShowRemoveModal(false)}
            patientName={removingData.patientName}
          />
        </Modal>
        <h2>{thisMonth.monthName}</h2>
        <Header />

        <div className="calendarContainer">
          {thisMonth.dayList.length ? (
            <>
              {" "}
              {thisMonth.dayList.map((day, index) => (
                <DayItem
                  currentDay={day}
                  key={index}
                  index={index}
                  removePatient={updateRemovingData}
                />
              ))}{" "}
            </>
          ) : (
            <>
              {initialMonth.dayList.map((day, index) => (
                <DayItem
                  currentDay={day}
                  key={index}
                  index={index}
                  removePatient={updateRemovingData}
                />
              ))}{" "}
            </>
          )}
        </div>
        <hr style={{ color: "gray", margin: "20px" }} />
        <h2>{nextMonth.monthName}</h2>
        <Header />
        <div className="calendarContainer" id="nextMonthContainer">
          {nextMonth.dayList.length ? (
            <>
              {" "}
              {nextMonth.dayList.map((day, index) => (
                <DayItem
                  currentDay={day}
                  key={index}
                  index={index}
                  removePatient={updateRemovingData}
                />
              ))}
            </>
          ) : (
            <>
              {initialNextMonth.dayList.map((day, index) => (
                <DayItem
                  currentDay={day}
                  key={index}
                  index={index}
                  removePatient={updateRemovingData}
                />
              ))}
            </>
          )}
        </div>
      </>
      <button onClick={updateCalendar}>Оновити</button>
    </div>
  );
};
