import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';


const refs = {
    
    input: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    
     timer: document.querySelector('.timer'),
    daysTimer: document.querySelector('span[data-days]'),
    hoursTimer: document.querySelector('span[data-hours]'),
    minsTimer: document.querySelector('span[data-minutes]'),
    secsTimer: document.querySelector('span[data-seconds]'),
}   




TIME_DELAY = 1000;

refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
  
    onClose(selectedDates) {
       
        if (selectedDates[0] < Date.now()) {
            Notiflix.Notify.failure('Please choose a date in the future');
        }
        else {
            refs.btnStart.disabled = false;
        }
    },
 
};



flatpickr(refs.input, options);
    
refs.btnStart.addEventListener('click', onStart)

function onStart() {
    const timeId = setInterval(() => {
    let currentTime = new Date(refs.input.value);
        const timeNow = Date.now();
       refs.btnStart.disabled = true;
       
        
        
    
    const deltaTime = currentTime - timeNow;
        const time = convertMs(deltaTime);
         
       
        refs.daysTimer.textContent = time.days;      
        refs.hoursTimer.textContent = time.hours;    
        refs.minsTimer.textContent = time.minutes;    
        refs.secsTimer.textContent = time.seconds;
        
        

        if (deltaTime < 1000) {
            clearInterval(timeId);
            refs.btnStart.disabled = true;
            Notiflix.Notify.success('Goal achieved!!');
        }
}, TIME_DELAY);
}





function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}