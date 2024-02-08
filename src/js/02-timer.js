import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const currentTime = new Date();
    if (selectedDates[0] <= currentTime) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
    } else {
      startBtn.disabled = false;
    }
  },
};

let countdownInterval;

flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', () => {
  const selectedDate = new Date(
    document.querySelector('#datetime-picker').value
  );
  startBtn.disabled = true;
  const inputHtml = document.querySelector('#datetime-picker');
  inputHtml.disabled = true;
  const currentTime = new Date();
  let timeDiffrence = selectedDate.getTime() - currentTime.getTime();

  countdownInterval = setInterval(() => {
    const timeRemaining = convertMs(timeDiffrence);
    updateTimerDisplay(timeRemaining);

    if (timeDiffrence <= 0) {
      clearInterval(countdownInterval);
      startBtn.disabled = true;
      return;
    }

    timeDiffrence -= 1000;

    if (timeDiffrence <= 0) {
      clearInterval(countdownInterval);
      startBtn.disabled = true;
      return;
    }
  }, 1000);
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  document.querySelector('[data-days]').textContent = formatTimeUnit(days);
  document.querySelector('[data-hours]').textContent = formatTimeUnit(hours);
  document.querySelector('[data-minutes]').textContent =
    formatTimeUnit(minutes);
  document.querySelector('[data-seconds]').textContent =
    formatTimeUnit(seconds);
}

function formatTimeUnit(unit) {
  return unit.toString().padStart(2, '0');
}
