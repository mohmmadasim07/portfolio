const togglebtn = document.querySelector("#tog");
const links = document.querySelector(".link");

togglebtn.addEventListener("click", function () {
  links.classList.toggle("hide");
});

// togglebtn.addEventListener("click", function () {
//   if (links.classList.contains("hide")) {
//     links.classList.remove("hide");
//   } else {
//     links.classList.add("hide");
//   }
// });
