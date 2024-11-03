import { fullNameCutter } from "../utils/fullNameCutter";
export const VisitLine = ({ isUsual, date, patient, removePatient }) => {
  const {
    patientName = "",
    time = "",
    operation = "",
    doctor = "",
    phoneNumber = "",
    id = "",
    month = ""
    // notes
  } = patient;
  const backCl =
    doctor === "Володя"
      ? `lavenderBlush`
      : doctor === "Іван"
      ? `aliceBlue`
      : doctor === "Олег"
      ? `cornsilk`
      : "white";
  const allowRemove = () => {
    if (!patientName) return;
    removePatient(id, date, month, patientName);
  };
  return (
    <div className="visitLine">
      {isUsual ? (
        <>
          <div
            className="emptyField"
            style={{ backgroundColor: backCl }}
            onClick={allowRemove}
          >
            <div>{fullNameCutter(patientName)}</div>
            <div>{operation}</div>
            <div>{phoneNumber}</div>
          </div>
          <div className="visitTime" style={{ backgroundColor: backCl }}>
            {time}
          </div>
          <div className="visitTime" style={{ backgroundColor: backCl }}>
            {doctor}
          </div>
        </>
      ) : (
        <>
          <div id="dateLine">{date}</div>
        </>
      )}
    </div>
  );
};
