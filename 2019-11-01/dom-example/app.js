const images = document.querySelectorAll('img');

images.forEach((element) => {
  element.addEventListener('click', () => {
    images.forEach(image => image.classList.remove('selected'));
    element.classList.add('selected');
  });
});