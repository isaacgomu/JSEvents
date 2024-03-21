const button = document.querySelector("button");
console.log(button.textContent);
button.addEventListener("click", function () {
  console.log("hi");
});

const buttonhover = document.getElementById("buttonhover");
buttonhover.addEventListener("mouseover", function () {
  console.log("well done");
});
buttonhover.addEventListener("mouseleave", function () {
  console.log("put me back!");
});

const lightlevel = document.getElementById("lightlevel");
let light = 0;
lightlevel.addEventListener("click", function () {
  if (light === 0) {
    light += 1;
  } else if (light === 1) {
    light -= 1;
  }
  if (light === 0) {
    document.body.style.backgroundColor = "#ffffff";
  } else if (light === 1) {
    document.body.style.backgroundColor = "#000000";
  }
});
