import Notiflix from 'notiflix';

const submitBtn = document.querySelector("button[type='submit']");
const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const firstDelayValue = form.elements.delay.value;
  const delayStepValue = form.elements.step.value;
  const amountValue = form.elements.delay.value;

  for (let i = 0; i < amountValue; i++) {
    const position = i + 1;

    createPromise(2, 1500)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
});
