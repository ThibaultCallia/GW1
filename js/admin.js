import "../css/admin.scss";

function makeEditable(td) {
  var input = td.querySelector(".editable");
  input.readOnly = false;
  input.style.backgroundColor = "#fff";
  input.focus();
  input.onblur = function () {
    input.readOnly = true;
    input.style.backgroundColor = "#eee";
  };
}
