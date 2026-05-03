import { v4 as uuidv4 } from "uuid";

export const assignIds = (arrayOfStrings) => {
  const firstItem = { id: uuidv4(), title: "Оберіть лікаря", value: "" };
  const finalArray = arrayOfStrings.length
    ? arrayOfStrings.map((item) => ({
        title: item,
        value: item,
        id: uuidv4(),
      }))
    : [];
  const sortedArray = [...finalArray].sort((a, b) =>
    a.value.localeCompare(b.value),
  );
  return [firstItem, ...sortedArray];
};
