function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = losAngelesTime.format("ddd Do MMMM");
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
      "h:mm"
    )}<small>${losAngelesTime.format("[ ]A")}</small>`;
  }

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");
    sydneyDateElement.innerHTML = sydneyTime.format("ddd Do MMMM");
    sydneyTimeElement.innerHTML = `${sydneyTime.format(
      "h:mm"
    )}<small>${sydneyTime.format("[ ]A")}</small>`;
  }

  //London
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");
    londonDateElement.innerHTML = londonTime.format("ddd Do MMMM");
    londonTimeElement.innerHTML = `${londonTime.format(
      "h:mm"
    )}<small>${londonTime.format("[ ]A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city" >
          <div>
            <h2>${cityName} </h2>
            <div class="date">${cityTime.format("ddd Do MMMM")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format(
              "h:mm"
            )}<small>${cityTime.format("[ ]A")}</small></div>
          </div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
