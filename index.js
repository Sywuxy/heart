const heart = document.querySelector('#heart');
const text = document.querySelector('.heart__text');
const darchekText = document.querySelector('.darchek__text');

heart.addEventListener('click', () => {
  text.classList.add('active');
  darchekText.classList.add('active');
});
