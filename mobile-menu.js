const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
})

window.onresize = function () {
  var w = window.outerWidth;
  if (w > 833 && hamMenu.classList.contains('active')){
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
  }
}