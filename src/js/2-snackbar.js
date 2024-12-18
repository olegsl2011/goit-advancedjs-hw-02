import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.form'),
};

const createPromise = (delay, state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      state === 'rejected' ? reject() : resolve();
    }, delay);
  });
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const delay = Number(refs.form.delay.value);
  const state = refs.form.state.value;

  createPromise(delay, state)
    .then(() => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(() => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });

  refs.form.reset();
});
