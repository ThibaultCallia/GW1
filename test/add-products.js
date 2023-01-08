function toggleClickedClass(event) {
  event.target.classList.toggle("clicked");
}

const buttons = document.querySelectorAll(".filter-wrap .colors button label");

buttons.forEach((button) =>
  button.addEventListener("click", toggleClickedClass)
);

function addOptionalImage() {
  const optionalImgs = document.querySelectorAll("#optional-imgs > div");
  const numImgs = optionalImgs.length;
  if (numImgs < 5) {
    const imgContainer = document.querySelector(
      "#img-container-" + (numImgs + 1)
    );
    imgContainer.style.display = "block";
  }
  if (numImgs == 4) {
    document.querySelector("#add-image-button").style.display = "none";
  }
}
