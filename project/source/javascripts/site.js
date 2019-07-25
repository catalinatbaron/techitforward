// This is where it all goes :)

  const svgTriangle = document.querySelector(".svg__triangle");

  svgTriangle.addEventListener("click", () => {
   svgTriangle.classList.toggle("svg__triangle-onClick");
   const body = document.querySelector("body");
   body.firstElementChild.classList.toggle("dropdown-show");
   console.log(body.firstElementChild)
  });


