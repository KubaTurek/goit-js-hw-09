const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
const createPromisesBtn = document.querySelector("button"); 
const promiseForm = document.querySelector(".form");


function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
setTimeout(() => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay})
  }
}, delay)
  })
}

function submitOperator(event) {
  event.preventDefault();

  const amount = inputAmount.value;
  const delayStepValue = delayStep.value;
  setInterval(() => {

    for(let i = 1; i >= amount; i++) {
createPromise(i, )
    }
})
  }


promiseForm.addEventListener("submit", submitOperator )
