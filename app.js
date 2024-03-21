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

const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const lightlevel = document.getElementById("lightlevel");
let light = 0;
h1.style.color = "#000141";
p.style.color = "#000141";
lightlevel.addEventListener("click", function () {
  if (light === 0) {
    light += 1;
  } else if (light === 1) {
    light -= 1;
  }
  if (light === 0) {
    document.body.style.backgroundColor = "#ffffff";
    h1.style.color = "#000141";
    p.style.color = "#000141";
  } else if (light === 1) {
    document.body.style.backgroundColor = "#000000";
    h1.style.color = "#2f0085";
    p.style.color = "#4b01d5";
  }
});
