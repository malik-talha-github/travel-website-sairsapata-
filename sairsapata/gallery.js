// Get all images in the "tour" container
const tourImages = document.querySelectorAll('.tour img');

// Add a click event listener to each image
tourImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    // Open a new window or tab with a larger version of the image
    window.open(`/hunza/larger-image-${index + 1}.jpg`, '_blank');
  });
});
