import { createNumsArr } from "./createNumsArr";
import { patientTemplate } from "../initialData/formData";

export const createMonthlyList = (year, month) => {
  const startDate = new Date(year, month, 1);
  const startWeekDay = startDate.getDay(); // 0-неділя
  const realDaysAmount = getAmountDays(month);
  const realDays = createNumsArr(1, realDaysAmount).map((item) => {
    return {
      dayNumber: item,
      patients: [patientTemplate],
    };
  });
  const emptyDaysAmount = getEmptyDaysAmount(realDaysAmount, startWeekDay);
  const emptyDays = createNumsArr(1, emptyDaysAmount).map((item) => {
    return { dayNumber: null };
  });
  const finalArray = getFinalArray(realDays, emptyDays, startWeekDay);
  return finalArray;
};

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
function getEmptyDaysAmount(totalDays, firstDay) {
  let amount = 4;
  if (totalDays === 28) {
    return 7;
  }
  switch (firstDay) {
    case 1:
    case 2:
    case 3:
    case 4:
      amount = 35 - totalDays;
      break;
    case 0:
    case 6:
      amount = 42 - totalDays;
      break;
    case 5:
      amount = totalDays === 31 ? 42 - totalDays : 35 - totalDays;
      break;
    default:
      amount = 4;
  }
  return amount;
}
function getFinalArray(basicArr, emptyArr, firstDay) {
  let preArr = [];
  let postArr = [];
  switch (firstDay) {
    case 1:
      postArr = emptyArr;
      break;
    case 0:
      preArr = emptyArr.slice(0, 6);
      postArr = emptyArr.slice(6);
      break;
    default:
      preArr = emptyArr.slice(0, firstDay - 1);
      postArr = emptyArr.slice(firstDay - 1);
      break;
  }
  const finalArr = [...preArr, ...basicArr, ...postArr];
  return finalArr;
}

export const createList = (year, month) => {
  const startDate = new Date(year, month, 1);
  const startWeekDay = startDate.getDay(); // 0-неділя
  const realDaysAmount = getAmountDays(month);
  const realDays = createNumsArr(1, realDaysAmount).map((item) => {
    return {
      dayNumber: item,
      patients: [patientTemplate],
    };
  });
  const emptyDaysAmount = getEmptyDaysAmount(realDaysAmount, startWeekDay);
  const emptyDays = createNumsArr(1, emptyDaysAmount).map((item) => {
    return { dayNumber: null };
  });
  const finalArray = getFinalArray(realDays, emptyDays, startWeekDay);
  return emptyDaysAmount;
};
