import { useFormFields } from "../custom_hooks/useFormFields";
import { patientTemplate, doctors } from "../initialData/formData";

export const PatientForm = ({ add, onClose, clickedDay, clickedMonth }) => {
  let mutedPatientTemplate = {
    ...patientTemplate,
    day: clickedDay,
    month: clickedMonth,
  };
  const { fields, changeField, clearForm } =
    useFormFields(mutedPatientTemplate);
  // const day = 11;
  const {
    patientName,
    day = 11,
    month,
    year,
    time,
    operation,
    doctor,
    phoneNumber,
    notes,
  } = fields;
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPatient = {
      patientName,
      day,
      month,
      year,
      time,
      operation,
      doctor,
      phoneNumber,
      notes,
      id: Math.random(),
    };
    add(newPatient);
    onClose();
    clearForm();
  };
  const onFormClose = () => {
    onClose();
    clearForm();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form_container">
          <label htmlFor="patientName">ПІБ пацієнта</label>
          <input
            name="patientName"
            value={patientName}
            onChange={changeField}
            required
          />
          <label htmlFor="day">День</label>
          <input
            name="day"
            type="number"
            max="31"
            value={day}
            onChange={changeField}
          />
          <label htmlFor="month">Місяць</label>
          <input
            name="month"
            type="number"
            max="12"
            value={month}
            onChange={changeField}
          />
          <label htmlFor="">Рік</label>
          <input
            name="year"
            type="number"
            max={Number(year) + 1}
            value={year}
            onChange={changeField}
          />
          <label htmlFor="time">Час</label>
          <input
            name="time"
            value={time}
            onChange={changeField}
            placeholder="час..."
          />
          <label htmlFor="phoneNumber">Номер телефону</label>
          <input
            name="phoneNumber"
            value={phoneNumber}
            onChange={changeField}
          />
          <label htmlFor="operation">Операція або діагноз</label>
          <input name="operation" value={operation} onChange={changeField} />

          <label htmlFor="doctor">Лікар</label>
          <select name="doctor" onChange={changeField} value={doctor} required>
            {doctors.map((item, index) => {
              return (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="submitLine">
          <button type="submit">Додати пацієнта</button>
          <button className="rejectBtn" onClick={onFormClose}>
            Скасувати
          </button>
        </div>
      </form>
    </>
  );
};
