const toggleBtn = document.getElementById("tog_btn");
const element = document.getElementById("hide");

toggleBtn.addEventListener("click", function () {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
});
