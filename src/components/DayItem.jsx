import React from "react";
import { VisitLine } from "./VisitLine";
import { EmptyCell } from "./EmptyCell";

export const DayItem = ({
  currentDay,
  index,
  removePatient,
  openAddForm,
  month,
  today,
}) => {
  const { dayNumber, patients } = currentDay;
  return (
    <>
      {index % 7 === 5 || index % 7 === 6 ? (
        <>
          <div className="weekend">
            <div className="weekendHeader">{index < 35 ? dayNumber : ""} </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          {dayNumber ? (
            <>
              <div
                className="dayItem"
                onClick={() => openAddForm(dayNumber, month)}
              >
                <VisitLine
                  isUsual={false}
                  date={dayNumber}
                  patient={patients[0]}
                  openAddForm={openAddForm}
                  today={today}
                  dayNumber={dayNumber}
                />
                {patients.map((item, index) => (
                  <VisitLine
                    key={index}
                    isUsual={true}
                    patient={item}
                    removePatient={removePatient}
                    openAddForm={openAddForm}
                    date={dayNumber}
                    curMonth={month}
                    dayNumber={dayNumber}
                    today={today}
                  />
                ))}
              </div>{" "}
            </>
          ) : (
            <EmptyCell />
          )}
        </>
      )}
    </>
  );
};
