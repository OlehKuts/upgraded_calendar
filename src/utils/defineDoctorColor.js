export const defineDoctorColor = (doctor) => {
    return doctor === "Олег" ? "warning" : doctor === "Іван" ? "primary" 
    : doctor === "Володя" ? "success" : "secondary"
}