let hname = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gardient');
let button = document.getElementById('random');


function backgroundssStyle() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`; 
 
 hname.textContent = `${body.style.background};`;
 }

function newColor(){
   body.style.background = `linear-gradient(to right, ${randomColor()}, ${randomColor()})`; 
 
  hname.textContent = `${body.style.background};`;
 
}

color1.addEventListener('input', backgroundssStyle);
button.addEventListener('click', newColor);
color2.addEventListener('input', backgroundssStyle);
window.onlaod = backgroundssStyle();