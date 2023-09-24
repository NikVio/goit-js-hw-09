


let firstDelay = [];
let delayStep = {};
let amount = {};


// const refs = {
//   form: document.querySelector('.form'),
//   //delay: document.querySelector('input[name="delay"]'),
//   //step: document.querySelector('input[name="step"]'),
//   //amount: document.querySelector('input[name="amount"]'),
//   submitBtn: document.querySelector('button'),
// }

const form = document.querySelector('.form');

console.log(form);

// const array = [...form.children].map(el => el);
// console.log(array);
firstDelay[form] = form.lastElementChild;
console.log(firstDelay);

// console.log(array);





  






// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });



// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
