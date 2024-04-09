const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const footerClick = document.querySelector('footer');
const aboutContent = document.querySelector('.about-content');
const indexContent = document.querySelector('.index-content');
const resumeContent = document.querySelector('.resume-content');
const projectsContent = document.querySelector('.projects-content')
const navHome = document.querySelector('nav')


hamMenu.addEventListener('click', () => {
  toggleActive();
});

hamMenu.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    toggleActive();
  }
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
  navHome.classList.toggle('active');

  if(aboutContent){
    aboutContent.classList.toggle('active');
  }

  if(indexContent){
    indexContent.classList.toggle('active');
  }

  if(resumeContent){
    resumeContent.classList.toggle('active');
  }

  if(projectsContent){
    projectsContent.classList.toggle('active');
  }
};


