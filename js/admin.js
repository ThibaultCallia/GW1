import "../css/admin.scss";

// ----- deleting default submit behaviour on all add image btns ---
document.querySelectorAll(".add-img").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
