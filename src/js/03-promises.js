import Notiflix from 'notiflix';

const form = document.querySelector('.form'); 


form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {

    return new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
            if (shouldResolve) {
                resolve({ position, delay });
            } else {
                reject({position, delay})
            }
        }, delay);
    });
}


 

function onSubmit(evt) {
    evt.preventDefault();
    const { delay, step, amount } = evt.currentTarget.elements;
    let delayInput = Number(delay.value);
    let stepInput = Number(step.value);
    let amountInput = Number(amount.value);

    

    for (let i = 1; i <= amountInput; i += 1) {
        
        

        createPromise(i, delayInput)
            .then(({ position, delay }) => {
                Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
            })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
        delayInput += stepInput;
    };
     evt.target.reset();
};
