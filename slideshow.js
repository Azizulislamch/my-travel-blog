let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Increase index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // loop back to first
    }

    // Show current slide
    slides[slideIndex - 1].style.display = "block";

    // Change image every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start slideshow
showSlides();