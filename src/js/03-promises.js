import Notiflix from 'notiflix';

const submitBtn = document.querySelector("button[type='submit']");

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`Promise ${position} resolved`);
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`Promise ${position} rejected`);
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
}
