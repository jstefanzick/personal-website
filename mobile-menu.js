const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const footerClick = document.querySelector('footer');

hamMenu.addEventListener('click', () => {
  toggleActive();
});

window.onresize = function () {
  var w = window.outerWidth;
  if (w > 833 && hamMenu.classList.contains('active')){
    toggleActive();
  }
};

window.onclick = function(e){
  if(!e.target.classList.contains("ham-list") &&
    !e.target.classList.contains("off-screen-menu") &&
    !e.target.classList.contains("ham-span") &&
    !e.target.classList.contains("ham-menu") &&
    hamMenu.classList.contains('active')){
    toggleActive();
  }
};

toggleActive = () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
  footerClick.classList.toggle('active');
};


