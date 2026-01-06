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
      ? `honeyDew`
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
    <div className="visitLine" style={{ backgroundColor: backCl}}>
      {isUsual ? (
        <>
          <div
            className="emptyField"
            onClick={allowRemove}
          >
            <div className="visitField">{fullNameCutter(patientName)}</div>
            <div className="visitField">{operation}</div>
            <div className="visitField">{phoneNumber}</div>
          </div>
          <div className="visitTime">
            {time}
          </div>
          <div className="visitTime" >
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
