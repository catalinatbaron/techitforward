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

services.addEventListener("click", function(event) {
  event.preventDefault();
  let servicesItem = document.querySelector('.services__heading');
  let servicesSection = document.querySelector('.services');
  let count = servicesItem.offsetTop - servicesSection.scrollTop;

  window.scroll({top:count, left:0, behavior: 'smooth'});
  svgTriangle.classList.toggle("svg__triangle-onClick");
  body.firstElementChild.classList.toggle("dropdown-show");
});

about.addEventListener("click", function(event) {
  event.preventDefault();
  let aboutItem = document.querySelector('.about__heading');
  let aboutSection = document.querySelector('.about');
  let count = aboutItem.offsetTop - aboutSection.scrollTop ;

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


const controller2 = new ScrollMagic.Controller();

const scene2 =  new ScrollMagic.Scene({
  triggerElement: '.about__heading'
})
.setClassToggle('.card-team', 'show')
.addTo(controller2);


const controller3 = new ScrollMagic.Controller();

const scene3 =  new ScrollMagic.Scene({
  triggerElement: '.clients__heading'
})
.setClassToggle('.clients', 'show')
.addTo(controller2);

const controller4 = new ScrollMagic.Controller();

const scene4 =  new ScrollMagic.Scene({
  triggerElement: '.about'
})
.setClassToggle('.about__text', 'show')
.addTo(controller4);