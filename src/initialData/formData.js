export const months = [
  { name: "Січень", value: "January" },
  { name: "Лютий", value: "February" },
  { name: "Березень", value: "March" },
  { name: "Квітень", value: "April" },
  { name: "Травень", value: "May" },
  { name: "Червень", value: "June" },
  { name: "Липень", value: "July" },
  { name: "Серпень", value: "August" },
  { name: "Вересень", value: "September" },
  { name: "Жовтень", value: "October" },
  { name: "Листопад", value: "November" },
  { name: "Грудень", value: "December" },
];
export const getRightMonth = (month) => {
  return month === 11 ? 0 : month + 1;
};
export const getRightYear = (month, year) => {
  return month === 11 ? Number(year) + 1 : year;
};
const date = new Date();
export const patientTemplate = {
  id: "",
  patientName: "",
  day: date.getDate(),
  month: getRightMonth(date.getMonth()),
  year: date.getFullYear(),
  time: ``,
  operation: "",
  doctor: ``,
  phoneNumber: "",
  notes: "",
};
export const doctors = [
  { name: "Особистий лікар", value: "" },
  { name: "В.Я.Кучмій", value: "Володя" },
  { name: "І.І.Піх", value: "Іван" },
  { name: "О.В.Куц", value: "Олег" },
  { name: "В.А.Панченко", value: "Валерій" },
  { name: "Інший", value: "Інший" },
];
