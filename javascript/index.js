// let edinburghDateElement = document.querySelector("#edinburgh .date");
// edinburghDateElement.innerHTML = "test";

// // Edinburgh
// let edinburghElement = document.querySelector("#edinburgh");
// let edinburghDateElement = edinburghElement.querySelector(".date");
// edinburghDateElement.innerHTML = "October 17th";

// let edinburghTimeElement = edinburghElement.querySelector(".time");
// edinburghTimeElement.innerHTML = "15:41 <small>AM</small>";

function updateTime() {
  // Edinburgh
  let edinburghTime = moment().tz("Europe/London");
  let edinburghElement = document.querySelector("#edinburgh");

  let edinburghDateElement = edinburghElement.querySelector(".date");
  edinburghDateElement.innerHTML = edinburghTime.format("dddd, MMMM Do YYYY");

  // let edinburghTime = moment();
  // let edinburghTimeElement = edinburghElement.querySelector(".time");
  // edinburghTimeElement.innerHTML = `${edinburghTime.format(
  //   "h:mm:ss"
  // )}<small>${edinburghTime.format("A")}</small>`;

  let edinburghTimeElement = edinburghElement.querySelector(".time");
  edinburghTimeElement.innerHTML = edinburghTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Svalbard
  let svalbardTime = moment().tz("Arctic/Longyearbyen");
  let svalbardElement = document.querySelector("#svalbard");

  let svalbardDateElement = svalbardElement.querySelector(".date");
  svalbardDateElement.innerHTML = svalbardTime.format("dddd, MMMM Do YYYY");

  let svalbardTimeElement = svalbardElement.querySelector(".time");
  svalbardTimeElement.innerHTML = svalbardTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Auckland
  let aucklandTime = moment().tz("Pacific/Auckland");
  let aucklandElement = document.querySelector("#auckland");

  let aucklandDateElement = aucklandElement.querySelector(".date");
  aucklandDateElement.innerHTML = aucklandTime.format("dddd, MMMM Do YYYY");

  let aucklandTimeElement = aucklandElement.querySelector(".time");
  aucklandTimeElement.innerHTML = aucklandTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Rothera
  let rotheraTime = moment().tz("Antarctica/Rothera");
  let rotheraElement = document.querySelector("#rothera");

  let rotheraDateElement = rotheraElement.querySelector(".date");
  rotheraDateElement.innerHTML = rotheraTime.format("dddd, MMMM Do YYYY");

  let rotheraTimeElement = rotheraElement.querySelector(".time");
  rotheraTimeElement.innerHTML = rotheraTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
