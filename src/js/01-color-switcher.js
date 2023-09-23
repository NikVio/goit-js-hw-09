const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}

refs.stopBtn.disabled = true;

let timerId = null;
INTERVAL_DELAY = 1000;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


refs.startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, INTERVAL_DELAY);
   
    refs.startBtn.disabled = timerId;
    refs.stopBtn.disabled = false;

    console.log('start');
    
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    refs.startBtn.disabled = !timerId;
    refs.stopBtn.disabled = true;
    
})