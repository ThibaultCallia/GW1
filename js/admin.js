import "../css/admin.scss";

// ----- deleting default submit behaviour on all add image btns ---
document.querySelectorAll("table td button.label").forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
  });
});
