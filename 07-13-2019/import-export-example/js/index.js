import getDateTime from './getDateTime.js';

const h1 = document.querySelector('#currentDateTime');

// setInterval(() => {
//   h1.textContent = getDateTime();
// }, 1000);

function updateTitle() {
  h1.textContent = getDateTime();
  setTimeout(updateTitle, 1000);
}

updateTitle();