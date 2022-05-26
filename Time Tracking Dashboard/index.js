const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

const workHrs = document.querySelector(".work-hrs");
const workHrsPrev = document.querySelector(".work-hrs-prev");
const playHrs = document.querySelector(".play-hrs");
const playHrsPrev = document.querySelector(".play-hrs-prev");
const studyHrs = document.querySelector(".study-hrs");
const studyHrsPrev = document.querySelector(".study-hrs-prev");
const exerciseHrs = document.querySelector(".exercise-hrs");
const exerciseHrsPrev = document.querySelector(".exercise-hrs-prev");
const socialHrs = document.querySelector(".social-hrs");
const socialHrsPrev = document.querySelector(".social-hrs-prev");
const selfcareHrs = document.querySelector(".selfcare-hrs");
const selfcareHrsPrev = document.querySelector(".selfcare-hrs-prev");

const fetchData = async () => {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const showDailyData = async () => {
  let data = await fetchData();

  daily.classList.add("active");
  weekly.classList.remove("active");
  monthly.classList.remove("active");

  workHrs.textContent = data[0].timeframes.daily.current + "hrs";
  workHrsPrev.textContent =
    "Last Day - " + data[0].timeframes.daily.previous + "hrs";

  playHrs.textContent = data[1].timeframes.daily.current + "hrs";
  playHrsPrev.textContent =
    "Last Day - " + data[1].timeframes.daily.previous + "hrs";

  studyHrs.textContent = data[2].timeframes.daily.current + "hrs";
  studyHrsPrev.textContent =
    "Last Day - " + data[2].timeframes.daily.previous + "hrs";

  exerciseHrs.textContent = data[3].timeframes.daily.current + "hrs";
  exerciseHrsPrev.textContent =
    "Last Day - " + data[3].timeframes.daily.previous + "hrs";

  socialHrs.textContent = data[4].timeframes.daily.current + "hrs";
  socialHrsPrev.textContent =
    "Last Day - " + data[4].timeframes.daily.previous + "hrs";

  selfcareHrs.textContent = data[5].timeframes.daily.current + "hrs";
  selfcareHrsPrev.textContent =
    "Last Day - " + data[5].timeframes.daily.previous + "hrs";
};

const showWeeklyData = async () => {
  let data = await fetchData();

  daily.classList.remove("active");
  monthly.classList.remove("active");
  weekly.classList.add("active");

  workHrs.textContent = data[0].timeframes.weekly.current + "hrs";
  workHrsPrev.textContent =
    "Last Week - " + data[0].timeframes.weekly.previous + "hrs";

  playHrs.textContent = data[1].timeframes.weekly.current + "hrs";
  playHrsPrev.textContent =
    "Last Week - " + data[1].timeframes.weekly.previous + "hrs";

  studyHrs.textContent = data[2].timeframes.weekly.current + "hrs";
  studyHrsPrev.textContent =
    "Last Week - " + data[2].timeframes.weekly.previous + "hrs";

  exerciseHrs.textContent = data[3].timeframes.weekly.current + "hrs";
  exerciseHrsPrev.textContent =
    "Last Week - " + data[3].timeframes.weekly.previous + "hrs";

  socialHrs.textContent = data[4].timeframes.weekly.current + "hrs";
  socialHrsPrev.textContent =
    "Last Week - " + data[4].timeframes.weekly.previous + "hrs";

  selfcareHrs.textContent = data[5].timeframes.weekly.current + "hrs";
  selfcareHrsPrev.textContent =
    "Last Week - " + data[5].timeframes.weekly.previous + "hrs";
};

const showMonthlyData = async () => {
  let data = await fetchData();

  monthly.classList.add("active");
  daily.classList.remove("active");
  weekly.classList.remove("active");

  workHrs.textContent = data[0].timeframes.monthly.current + "hrs";
  workHrsPrev.textContent =
    "Last Month - " + data[0].timeframes.monthly.previous + "hrs";

  playHrs.textContent = data[1].timeframes.monthly.current + "hrs";
  playHrsPrev.textContent =
    "Last Month - " + data[1].timeframes.monthly.previous + "hrs";

  studyHrs.textContent = data[2].timeframes.monthly.current + "hrs";
  studyHrsPrev.textContent =
    "Last Month - " + data[2].timeframes.monthly.previous + "hrs";

  exerciseHrs.textContent = data[3].timeframes.monthly.current + "hrs";
  exerciseHrsPrev.textContent =
    "Last Month - " + data[3].timeframes.monthly.previous + "hrs";

  socialHrs.textContent = data[4].timeframes.monthly.current + "hrs";
  socialHrsPrev.textContent =
    "Last Month - " + data[4].timeframes.monthly.previous + "hrs";

  selfcareHrs.textContent = data[5].timeframes.monthly.current + "hrs";
  selfcareHrsPrev.textContent =
    "Last Month - " + data[5].timeframes.monthly.previous + "hrs";
};

window.onload = showWeeklyData;

daily.addEventListener("click", showDailyData);
weekly.addEventListener("click", showWeeklyData);
monthly.addEventListener("click", showMonthlyData);
