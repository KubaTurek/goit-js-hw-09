import Notiflix from 'notiflix';

const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const inputAmount = document.querySelector('input[name="amount"]');
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

  let amount = Number(inputAmount.value);
  console.log(typeof amount)
  let delayStepValue = Number(delayStep.value);
  let firstDelayValue = Number(firstDelay.value);

    for(let i = 1; i <= amount; i++) {
createPromise(i, firstDelayValue).then(({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay }) => {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
});
firstDelayValue += delayStepValue
    }
}


promiseForm.addEventListener("submit", submitOperator)
