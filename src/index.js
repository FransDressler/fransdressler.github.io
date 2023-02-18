import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

const elements = document.getElementsByClassName("alpha");
const navbar = document.getElementsByTagName("nav")[0];
const coords = {x:0, y:0};
const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
  circle.x = 0;
  circle.y =0;
})

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
})

function animateCircles() {

  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length-index)/10;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index +1] || circles[0];
    x += (nextCircle.x-x) *0.3;
    y += (nextCircle.y-y) *0.3;

  })

  requestAnimationFrame(animateCircles)
}

animateCircles();

// check if the navbar element exists
if (navbar) {
  // set initial state of navbar to hidden
  navbar.style.left = "-200px";

  // listen for scroll events
  window.onscroll = function() {
    // get the current scroll position
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // show the navbar if the user has scrolled more than 50px
    if (scrollTop > 50) {
      navbar.style.left = "0";
    } else {
      navbar.style.left = "-200px";
    }
  };
}


for (let i =0; i <=elements.length; i++){
    elements[i].addEventListener('animationend', function(e){
        elements[i].classList.remove('animated');
    });

    elements[i].addEventListener("mouseover", function(e){
        elements[i].classList.add("animated")
    } );
};





