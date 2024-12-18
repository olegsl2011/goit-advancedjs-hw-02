import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  startButton: document.querySelector('button[data-start]'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  datetimePicker: document.querySelector('#datetime-picker'),
};

let userSelectedDate = null;
let intervalId = null;

const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = MS_IN_SECOND * 60;
const MS_IN_HOUR = MS_IN_MINUTE * 60;
const MS_IN_DAY = MS_IN_HOUR * 24;

const flatpickrOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = selectedDates[0];
    handleDateSelection(date);
  },
};

flatpickr('#datetime-picker', flatpickrOptions);

const disableStartButton = () =>
  refs.startButton.setAttribute('disabled', true);
const enableStartButton = () => refs.startButton.removeAttribute('disabled');

const handleDateSelection = date => {
  if (date <= Date.now()) {
    iziToast.error({
      message: 'Please choose a date in the future',
      position: 'topRight',
    });
    disableStartButton();
  } else {
    enableStartButton();
    userSelectedDate = date;
  }
};

const convertMs = ms => ({
  days: Math.floor(ms / MS_IN_DAY),
  hours: Math.floor((ms % MS_IN_DAY) / MS_IN_HOUR),
  minutes: Math.floor((ms % MS_IN_HOUR) / MS_IN_MINUTE),
  seconds: Math.floor((ms % MS_IN_MINUTE) / MS_IN_SECOND),
});

const addLeadingZero = value => value.toString().padStart(2, '0');

const updateCountdownDisplay = ({ days, hours, minutes, seconds }) => {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
};

const startCountdown = remainingMs => {
  intervalId = setInterval(() => {
    remainingMs -= MS_IN_SECOND;
    if (remainingMs <= 0) {
      clearInterval(intervalId);
      refs.datetimePicker.removeAttribute('disabled');
      return;
    }
    updateCountdownDisplay(convertMs(remainingMs));
  }, MS_IN_SECOND);
};

refs.startButton.addEventListener('click', () => {
  if (userSelectedDate) {
    disableStartButton();
    refs.datetimePicker.setAttribute('disabled', true);
    startCountdown(userSelectedDate - Date.now());
  }
});
