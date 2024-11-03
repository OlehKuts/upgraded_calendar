export function compareNumbers(a, b) {
  return (
    Number(a.time.substr(0, a.time.indexOf("."))) -
    Number(b.time.substr(0, a.time.indexOf(".")))
  );
}
