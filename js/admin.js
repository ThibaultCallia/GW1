// Get the "Add Image" button and the optional image input fields
const addImageButton = document.getElementById("add-image-button");
const optionalImages = document.getElementById("optional-images");

// When the "Add Image" button is clicked, show the optional image input fields
addImageButton.onclick = function () {
  optionalImages.style.display = "block";
  // Disable the "Add Image" button so it can't be clicked again
  addImageButton.disabled = true;
};
