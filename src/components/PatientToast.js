import Toast from "react-bootstrap/Toast"
import { defineDoctorColor } from "../utils/defineDoctorColor";
export const PatientToast = ({patient, deleteToast}) => {
    const {id, phoneNumber, patientName, operation, visitDate, doctor} = patient;
    return (
         <Toast className="patientToast" bg={defineDoctorColor(doctor)}>
      <Toast.Header onClick={() => deleteToast(id)} >
        <strong className="me-auto">{patientName}</strong>
        <small>{visitDate}</small>
      </Toast.Header>
      <div style={{color: "white"}}>{operation}</div>
      <Toast.Body className="text-white fs-5">{phoneNumber}</Toast.Body>
    </Toast>
    )
}