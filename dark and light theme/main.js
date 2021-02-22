var buton = document.getElementById("toggle");
let itemone = document.querySelectorAll(".oneitem");
let itemtwo = document.querySelectorAll(".twoitem");

buton.addEventListener("click", function () {
  var body = document.querySelector(".container");
  body.classList.toggle("container2");
  itemone.forEach((element) => {
    element.classList.toggle("oneitemtwo");
  });
  itemtwo.forEach((element) => {
    element.classList.toggle("twoitemtwo");
  });
  if (buton.innerHTML == "Dark mode") {
    buton.innerHTML = "Light mode";
  } else {
    buton.innerHTML = "Dark mode";
  }
});
