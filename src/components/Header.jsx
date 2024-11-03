export const Header = () => {
  const weekDays = [
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П'ятниця",
    "Субота",
    "Неділя",
  ];
  return (
    <div className="headerLine">
      {weekDays.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </div>
  );
};
