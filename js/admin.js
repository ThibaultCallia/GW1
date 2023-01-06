// ------------ For color buttons to stay clicked ------------
function toggleClickedClass(event) {
  event.target.classList.toggle("clicked");
}
const buttons = [
  ...document.querySelectorAll(".filter-wrap .colors button label"),
];
buttons.pop();
buttons.forEach((button) =>
  button.addEventListener("click", toggleClickedClass)
);

// ------------- char count --------------------
const textarea = document.querySelector("#description");
const charCount = document.querySelector("#char-count");

textarea.addEventListener("input", () => {
  charCount.textContent = textarea.value.length;
});
// char count limit
const charLimit = 100;

textarea.addEventListener("input", () => {
  charCount.textContent = textarea.value.length;
  if (textarea.value.length > charLimit) {
    textarea.value = textarea.value.substring(0, charLimit);
    charCount.textContent = charLimit;
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black";
  }
});

// ----- deleting default submit behaviour on all add image btns ---
document.querySelectorAll(".add-img").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

// ------  make input field appear when add new brand/category is selected---
const brandSelect = document.querySelector("#brand-select");
const categorySelect = document.querySelector("#category-select");

brandSelect.addEventListener("change", brandInput);
categorySelect.addEventListener("change", catInput);

function brandInput() {
  const selectedValue = brandSelect.options[brandSelect.selectedIndex].value;
  if (selectedValue == "0") {
    // console.log("test if");
    document.querySelector(".newBrand").classList.remove("hidden");
  } else {
    // console.log("test else");
    document.querySelector(".newBrand").classList.add("hidden");
  }
}
function catInput() {
  const selectedValue =
    categorySelect.options[categorySelect.selectedIndex].value;
  if (selectedValue == "0") {
    // console.log("test if");
    document.querySelector(".newCat").classList.remove("hidden");
  } else {
    // console.log("test else");
    document.querySelector(".newCat").classList.add("hidden");
  }
}

//  ----- show input field for colors when button is clicked ---
const btn = document.querySelector(".addNewCol");
const newCol1 = document.querySelector("#newCol1");
const newCol2 = document.querySelector("#newCol2");
const newCol3 = document.querySelector("#newCol3");

let counter = 1;
btn.addEventListener("click", function () {
  if (counter == "1") {
    newCol1.classList.remove("hidden");
    counter++;
  } else if (counter == "2") {
    newCol2.classList.remove("hidden");
    counter++;
  } else {
    newCol3.classList.remove("hidden");
    btn.classList.add("hidden");
  }
});
