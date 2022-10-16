function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("ddd Do MMMM");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm"
  )}<small>${losAngelesTime.format("[ ]A")}</small>`;

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("ddd Do MMMM");
  sydneyTimeElement.innerHTML = `${sydneyTime.format(
    "h:mm"
  )}<small>${sydneyTime.format("[ ]A")}</small>`;

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonTime.format("ddd Do MMMM");
  londonTimeElement.innerHTML = `${londonTime.format(
    "h:mm"
  )}<small>${londonTime.format("[ ]A")}</small>`;
}
updateTime();
setInterval(updateLosAngeles, 60000);
