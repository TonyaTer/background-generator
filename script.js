var css = document.querySelector("h3");
var color1 = document.querySelector(".color-1");
var color2 = document.querySelector(".color-2");
var randomize = document.querySelector(".rand");
var body = document.getElementById("gradient");


function randomColor(){

	var firstColor = createColor();
	var secondColor = createColor();
	// color1.setAttribute(value, firstColor);
	body.style.background = "linear-gradient(to left, " + firstColor + ", " + secondColor + ")";
	css.textContent = body.style.background + ";";
	console.log(firstColor);
	console.log(secondColor);

}

function createColor(){
	var color = "rgba("
	+ randomValue() + ", "
	+ randomValue() + ", "
	+ randomValue() + ", "
	+ (Math.random() * (1-0)+0).toFixed(2) + ")"
	return color;
}

function randomValue(){
	return Math.floor(Math.random() * (Math.floor(256)-Math.ceil(0)) + Math.ceil(0));
}



function changeColor(){
	body.style.background 
	= "linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
randomize.addEventListener("click", randomColor);