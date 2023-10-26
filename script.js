function displayImage() {
  const fileInput = document.getElementById("image");
  const uploadedImage = document.getElementById("uploaded-image");

  // Check if a file is selected
  if (fileInput.files && fileInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
    };

    // Read the selected image file and set it as the source of the image element
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    // Clear the image source if no file is selected
    uploadedImage.src = "";
  }
}

document
  .getElementById("generate-caption")
  .addEventListener("click", function () {
    // Get the image description from the textarea
    const description = document.getElementById("description").value;

    // Here, you can send the description to your backend for caption generation
    // For now, let's display a placeholder caption
    const placeholderCaption =
      "A beautiful image with a wonderful description!";
    document.getElementById("caption-text").textContent = placeholderCaption;
  });
