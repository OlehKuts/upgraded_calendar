export const fullNameCutter = (fullName) => {
  if (fullName === undefined) return;
  const splitedArray = fullName.includes(" ") ? fullName.split(" ") : fullName;
  return fullName.includes(" ") && splitedArray.length > 2
    ? `${splitedArray[0]} ${splitedArray[1][0]}.${splitedArray[2][0]}.`
    : fullName;
};
