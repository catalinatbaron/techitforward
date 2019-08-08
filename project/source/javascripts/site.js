// This is where it all goes :)
const svgTriangle = document.querySelector(".svg__triangle");
const body = document.querySelector("body");

svgTriangle.addEventListener("click", (event) => {
  event.preventDefault();
  svgTriangle.classList.toggle("svg__triangle-onClick");
  // const body = document.querySelector("body");
  body.firstElementChild.classList.toggle("dropdown-show");
  
});

const services = document.querySelector("#services");
const about = document.querySelector("#about");
const clients = document.querySelector("#clients");

services.addEventListener("click", function(event) {
  event.preventDefault();
  let servicesItem = document.querySelector('.services__heading');
  let servicesSection = document.querySelector('.services');
  let count = servicesItem.offsetTop - servicesSection.scrollTop - 100;

  window.scroll({top:count, left:0, behavior: 'smooth'});
  svgTriangle.classList.toggle("svg__triangle-onClick");
  body.firstElementChild.classList.toggle("dropdown-show");
});

about.addEventListener("click", function(event) {
  event.preventDefault();
  let aboutItem = document.querySelector('.about__heading');
  let aboutSection = document.querySelector('.about');
  let count = aboutItem.offsetTop - aboutSection.scrollTop - 100 ;

  window.scroll({top:count, left:0, behavior: 'smooth'});
  svgTriangle.classList.toggle("svg__triangle-onClick");
  body.firstElementChild.classList.toggle("dropdown-show");
})

clients.addEventListener("click", function(event) {
  event.preventDefault();
  let clientItem = document.querySelector('.clients__heading');
  let clientsSection = document.querySelector('.portfolio');
  let count = clientItem.offsetTop - clientsSection.scrollTop - 100 ;

  window.scroll({top:count, left:0, behavior: 'smooth'});
  svgTriangle.classList.toggle("svg__triangle-onClick");
  body.firstElementChild.classList.toggle("dropdown-show");
})


const controller = new ScrollMagic.Controller();

const scene =  new ScrollMagic.Scene({
  triggerElement: '.services__heading'
})
.setClassToggle('.cards', 'show')
.addTo(controller);


const scene2 =  new ScrollMagic.Scene({
  triggerElement: '.about__heading',
  offset: 200
})
.setClassToggle('.card-team', 'show')
.addTo(controller);


const scene3 =  new ScrollMagic.Scene({
  triggerElement: '.clients__heading'
})
.setClassToggle('.clients', 'show')
.addTo(controller);


const scene4 =  new ScrollMagic.Scene({
  triggerElement: '.about__heading'
})
.setClassToggle('.about__text', 'show')
.addTo(controller);