import "../css/admin.scss";

// ----- deleting default submit behaviour on all add image btns ---
document.querySelectorAll(".add-img").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
  });
});

// document.querySelector("#testTd").addEventListener("click", makeEditable);

// function makeEditable(e) {
//   console.log(e);
//   var input = e.target.querySelector(".editable");
//   input.readOnly = false;
//   input.style.backgroundColor = "#fff";
//   input.focus();
//   input.onblur = function () {
//     input.readOnly = true;
//     input.style.backgroundColor = "#FFC0CB";
//   };
// }
