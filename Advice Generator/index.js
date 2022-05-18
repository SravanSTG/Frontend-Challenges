const button = document.querySelector(".advice-btn");
const adviceID = document.querySelector(".advice-id");
const advice = document.querySelector(".advice");

button.addEventListener("click", function () {
  fetchAdvice();
});

const url = "https://api.adviceslip.com/advice";

async function fetchAdvice() {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  adviceID.innerHTML = "ADVICE #" + data.slip.id;
  advice.innerHTML = `"${data.slip.advice}"`;
}

window.onload = fetchAdvice();
