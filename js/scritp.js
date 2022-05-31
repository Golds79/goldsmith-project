const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});
/* MUSIC */
function music1() {
  document.getElementById('golds').src =
    'https://www.youtube.com/embed/aY9QqKzgyx8';
}
function music2() {
  document.getElementById('golds').src =
    'https://www.youtube.com/embed/_8fBpEsfRNk';
}
function music3() {
  document.getElementById('golds').src =
    'https://www.youtube.com/embed/JvwycMpStxw';
}
function music4() {
  document.getElementById('golds').src =
    'https://www.youtube.com/embed/llUssYpERu8';
}
function music5() {
  document.getElementById('golds').src =
    'https://www.youtube.com/embed/yLN-pNjg-LI';
}
