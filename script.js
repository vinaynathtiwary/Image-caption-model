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
