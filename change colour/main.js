var btn = document.querySelector(".btn");
var body = document.querySelector("body");
var displayValue = document.querySelector("p");
var newBtn = document.querySelector(".newBtn");

var colors = [];

btn.addEventListener("click", colorchange);
newBtn.addEventListener("click", generateGradinet);

function colorsgenarator() {
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function colorchange() {
  colors.push(colorsgenarator());
  let random = Math.floor(Math.random() * colors.length);
  body.style.background = colors[random];
  displayValue.innerHTML = colors[random];
}

function generateGradinet() {
  var degree = Math.floor(Math.random() * 360);
  var gradient =
    "linear-gradient(" +
    degree +
    "deg," +
    colorsgenarator() +
    "," +
    colorsgenarator() +
    ")";
  body.style.background = gradient;
  displayValue.innerHTML = gradient;
}
