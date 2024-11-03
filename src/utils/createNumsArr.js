export const createNumsArr = (first, last) => {
  if (typeof first !== "number" || typeof last !== "number") return;
  let newArr = [];
  for (let i = first; i < last + 1; i++) {
    newArr = [...newArr, i];
  }
  return newArr;
};
