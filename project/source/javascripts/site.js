// This is where it all goes :)

  const svgTriangle = document.querySelector(".svg__triangle");

  svgTriangle.addEventListener("click", () => {
   svgTriangle.classList.toggle("svg__triangle-onClick");
   const body = document.querySelector("body");
   body.firstElementChild.classList.toggle("dropdown-show");
   console.log(body.firstElementChild)
  });




const hero2 = document.querySelector(".hero-2");
const img = document.querySelector(".img")
const slider = document.querySelector(".slider");

const t1 = new TimelineMax();

t1.fromTo(img, 2, {height:"0%"}, {height: "80%", ease: Power2.easeInOut})
.fromTo(img, 1.2,{width: "100%"}, {width: "80%",ease: Power2.easeInOut})
.fromTo(slider,1.2, {x:"-100%"}, {x:"0%", ease: Power2.easeInOut}, "-=1.2")
