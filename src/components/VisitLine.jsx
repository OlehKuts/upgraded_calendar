import { fullNameCutter } from "../utils/fullNameCutter";
export const VisitLine = ({
  isUsual,
  date,
  patient,
  removePatient,
  openAddForm,
  dayNumber,
  curMonth,
  today,
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
  const backCl =
    doctor === "Володя"
      ? `lavenderBlush`
      : doctor === "Іван"
      ? `aliceBlue`
      : doctor === "Олег"
      ? `cornsilk`
      : "white";
  const allowRemove = (e) => {
    e.stopPropagation();
    if (!patientName) {
      openAddForm(dayNumber, curMonth);
      return;
    }
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
