export const convertToName = name =>
  name
    .split("-")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
export const convertSeconds = time => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  if (minutes < 1) {
    minutes = "00";
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (seconds === 0) {
    seconds = "00";
  }

  return `${minutes}:${seconds}`;
};
