export const transformPatient = ({year, day, month, id, patientName, doctor, operation, phoneNumber}) => {
    return {
        visitDate: `${day}.${month}.${year}`,
        id, patientName, doctor, operation, phoneNumber
    }
}