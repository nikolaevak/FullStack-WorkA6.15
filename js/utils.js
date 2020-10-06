function getTimestamp() {
  let d = new Date();
  return d.getTime();
}

function randomDivId() {
  let d = Math.floor(Math.random() * 6) + 1; // случайное число от 0 до 6
  let n = Math.floor(Math.random() * 6) + 1; // случайное число от 0 до 6
  return `#slot-${d}${n}`;
}
