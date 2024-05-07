'use strict';

const animations = [
  {
    varName: "--animate-l-eye",
    bodySection: `lEyeLight 5s 1 forwards cubic-bezier(.0,.85,.83,.67) normal`,
  },
  {
    varName: "--animate-r-eye",
    bodySection: `rEyeLight 5s 1 forwards cubic-bezier(.0,.85,.83,.67) normal`,
  },
  {
    varName: "--animate-nose",
    bodySection:`noseLight 5s 1 forwards cubic-bezier(.0,.85,.83,.67) normal`
  },
  {
    varName: "--animate-mouth",
    bodySection: `mouthLight 5s  1 forwards cubic-bezier(.0,.85,.83,.67) normal`
  },
  {
    varName: "--animate-filter",
    bodySection: `filter 5s  1 forwards cubic-bezier(.0,.85,.83,.67) normal`
  },
  {
    varName: "--animate-opacity",
    bodySection: `opacity 5s 1 forwards cubic-bezier(.0,.85,.83,.67) normal`
  },
]

const cursorL = "url(./assets/cursorwhite.png), pointer";
const cursorD = "url(./assets/cursordarkness.png), pointer";
const pumpkin = document.querySelector('.pumpkin');

let lightOn = false;

function switchOn(animations) {
  animations.map(animation => {
    document.documentElement.style.setProperty(animation.varName, animation.bodySection)
  })
	document.documentElement.style.setProperty("--cursor", cursorD);
	pumpkin.style.pointerEvents = "none";
	
	return lightOn = true;
};

function switchOff(animations) {  
  animations.map(animation => {
    document.documentElement.style.setProperty(animation.varName, animation.bodySection["none"]);
  })
	document.documentElement.style.setProperty("--cursor", cursorL);
	
	return lightOn = false;
};

pumpkin.addEventListener('click', () => {
	(!lightOn) ? switchOn(animations) : switchOff(animations);
});
pumpkin.addEventListener('animationend',() => {
	pumpkin.style.pointerEvents = "auto";
});