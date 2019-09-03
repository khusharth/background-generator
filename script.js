var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button"); 
var color3 = "";
var color4 = "";

// Add selected colors to linear gradient and display the property used
function setGradient() {
   body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
   css.textContent = body.style.background + ";";
 }

// A random color code generator 
function getColor() {
   return ("#" + Math.random().toString(16).slice(2, 8));
 }


// For Random: Add selected colors to linear gradient and also change the input value and show the random colors
function setGradientOnCLick() {
   color3 = getColor();
   color4 = getColor();
   body.style.background = "linear-gradient(to right, " + color3 + ", " + color4 + ")";
   css.textContent = body.style.background + ";";
   color1.value = color3;
   color2.value = color4;
}

 // Dont use setGradient() as we dont want to call it now, Only call at user input
 color1.addEventListener("input", setGradient);
 color2.addEventListener("input", setGradient);
 button.addEventListener("click", setGradientOnCLick);