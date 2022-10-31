import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const dateTimePicker = document.querySelector("input#datetime-picker");
const startBtn = document.querySelector("button[data-start]"); 
const days = document.querySelector("span[data-days]"); 
const hours = document.querySelector("span[data-hours]")
const minutes = document.querySelector("span[data-minutes]")
const seconds = document.querySelector("span[data-seconds]")

let actualDate = new Date();
let selectedDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < actualDate ) {
            Notiflix.Notify.failure("Please choose a date in the future")
        }
        else if (selectedDates[0] > actualDate) 
        {startBtn.disabled = false;
    selectedDate = selectedDates[0].getTime()
    };
    },
  };

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days =Math.floor(ms / day) < 10 ? addLeadingZero(Math.floor(ms / day)) : Math.floor(ms / day);
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
    return { days, hours, minutes, seconds };
  }

  const fp = flatpickr(dateTimePicker, options);
  startBtn.disabled = true;

function startCounting () {

startBtn.disabled = true;
Notiflix.Notify.info('Rozpoczęto odliczanie')
const timeCounting = setInterval(() => {
    let timeLeft = selectedDate - Date.now(); 
    const counting = convertMs(timeLeft);
    if (timeLeft <= 0) {
        Notiflix.Notify.success("Odliczanie zakończone");
        clearInterval(timeCounting); 
    }
    else {timeUpdate(counting);
    }
}, 1000)
}

function timeUpdate(counting) {
    days.textContent = counting.days;
    hours.textContent = counting.hours;
    minutes.textContent = counting.minutes;
    seconds.textContent = counting.seconds;
  }

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }


  startBtn.addEventListener("click", startCounting)
  