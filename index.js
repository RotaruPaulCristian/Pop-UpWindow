const modalContainer = document.querySelector(".modalContainer");
const button = document.querySelector("button");
const x = document.querySelector(".x");
const section = document.querySelector("section");

function appear() {
  modalContainer.style.display = "block";
  section.style.filter = "blur(10px)";
}

function disappearOnX() {
  modalContainer.style.display = "none";
  section.style.filter = "blur(0px)";
}

function disappearOnClick(event) {
  if (event.target.className == "modalContainer") {
    modalContainer.style.display = "none";
    section.style.filter = "blur(0px)";
  }
}

button.addEventListener("click", appear);

x.addEventListener("click", disappearOnX);

modalContainer.addEventListener("click", disappearOnClick);
