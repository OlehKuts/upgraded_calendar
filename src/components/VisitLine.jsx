import { fullNameCutter } from "../utils/fullNameCutter";
import { backgroundColors } from "../initialData/formData";
export const VisitLine = ({
  isUsual,
  date,
  patient,
  removePatient,
  openAddForm,
  dayNumber,
  curMonth,
  today,
  doctors = [],
}) => {
  const {
    patientName = "",
    time = "",
    operation = "",
    doctor = "",
    phoneNumber = "",
    id = "",
    month = "",
    // notes
  } = patient;

  const allowRemove = (e) => {
    e.stopPropagation();
    if (!patientName) {
      openAddForm(dayNumber, curMonth);
      return;
    }
    removePatient(id, date, month, patientName);
  };
  const doctorIndex = doctors.findIndex((element) => element.value === doctor);
  const backCl = backgroundColors[doctorIndex % 7];
  return (
    <div
      className="visitLine"
      style={{ backgroundColor: doctor ? backCl : "white" }}
    >
      {isUsual ? (
        <>
          <div className="emptyField" onClick={allowRemove}>
            <div className="visitField">{fullNameCutter(patientName)}</div>
            <div className="visitField">{operation}</div>
            <div className="visitField">{phoneNumber}</div>
          </div>
          <div className="visitTime">{time}</div>
          <div className="visitTime">{doctor}</div>
        </>
      ) : (
        <>
          <div
            id="dateLine"
            style={{
              backgroundColor: today === dayNumber ? "springGreen" : "white",
            }}
          >
            {date}
          </div>
        </>
      )}
    </div>
  );
};
