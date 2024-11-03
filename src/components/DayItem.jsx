import React from "react";
import { VisitLine } from "./VisitLine";
import { EmptyCell } from "./EmptyCell";

export const DayItem = ({ currentDay, index, removePatient }) => {
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
              <div className="dayItem">
                <VisitLine
                  isUsual={false}
                  date={dayNumber}
                  patient={patients[0]}
                />
                {patients.map((item, index) => (
                  <VisitLine
                    key={index}
                    isUsual={true}
                    patient={item}
                    removePatient={removePatient}
                    date={dayNumber}
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
