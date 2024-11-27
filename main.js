function timerun() {
  let now = new Date();
  let hours = String(now.getHours()).padStart(2, "0");
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let seconds = String(now.getSeconds()).padStart(2, "0");
  let miliseconds = String(now.getMilliseconds());
  let timeString = `${hours}:${minutes}:${seconds}:${miliseconds}`;
  document.getElementById("clock").innerHTML = timeString;
}
setInterval(timerun, 0.5);
