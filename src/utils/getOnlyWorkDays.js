import { createNumsArr } from "./createNumsArr";

export const getOnlyWorkDays = (month = 10, year = "2023") => {
  const initialArr = createNumsArr(1, getAmountDays(Number(month) - 1));
  const finalArr = initialArr.filter((item) =>
    checkWeekDay(item, month - 1, year)
  );
  return finalArr;
};

function checkWeekDay(day = 12, month = 10, year = 2023) {
  const newDate = new Date(year, month, day);
  const dayNumber = newDate.getDay();
  const output = dayNumber === 0 || dayNumber === 6 ? false : true;
  return output;
}
function getAmountDays(month) {
  let amount = 31;
  switch (month) {
    case 1:
      amount = 28;
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      amount = 30;
      break;
    default:
      amount = 31;
  }
  return amount;
}
