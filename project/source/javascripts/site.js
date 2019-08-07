// This is where it all goes :)
const svgTriangle = document.querySelector(".svg__triangle");

svgTriangle.addEventListener("click", () => {
  svgTriangle.classList.toggle("svg__triangle-onClick");
  const body = document.querySelector("body");
  body.firstElementChild.classList.toggle("dropdown-show");
  console.log(body.firstElementChild)
});

const services = document.querySelector("#services");

services.addEventListener("click", function() {
  window.scrollTo(0,1000);
})