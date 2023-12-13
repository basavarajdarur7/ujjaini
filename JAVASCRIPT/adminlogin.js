document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
    const radios = document.querySelectorAll('input[name="slide"]');

    function showSlide(n) {
        slides.forEach(slide => slide.style.display = "none");
        radios.forEach(radio => radio.checked = false);
        slides[n].style.display = "block";
        radios[n].checked = true;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function autoScroll() {
        nextSlide();
        setTimeout(autoScroll, 2000); // Change image every 2 seconds (2000ms)
    }

    autoScroll(); // Start the auto-scrolling

    // Add event listeners to radio buttons to manually switch slides
    radios.forEach((radio, index) => {
        radio.addEventListener("change", () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});
