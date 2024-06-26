const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 130);
});








let menu = document.querySelector("#menu-icon");
let menulist = document.querySelector(".menulist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  menulist.classList.toggle("open");
};




window.onscroll = () => {
  menu.classList.remove("bx-x");
  menulist.classList.remove("open");
};


const sr = ScrollReveal ({
  distance: '40px',
  duration: 2500,
  reset: true
});

sr.reveal('.hemo-text span',{delay:150, origin: 'top'});
sr.reveal('hemo-text .h-btn',{delay:250, origin: 'bottom'});
sr.reveal('hemo-text h1',{delay:250, origin: 'left'});
sr.reveal('hemo-text h4',{delay:250, origin: 'bottom'});
sr.reveal('.about-img, .abut-text, .skills-row, .educaion-row, .mid-text, .potofolio-content', {
  delay:400, origin: 'top',
});








var typed = new Typed(".input", {
  strings: ["Web Designer.", "Web Developer."],
  typeSpeed: 120,
  backSpeed: 70,
  loop: true,
});

//ANIMASI//











