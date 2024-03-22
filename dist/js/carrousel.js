// carrousel image autoplay slider
document.addEventListener('DOMContentLoaded', () => {
    // initialize required HTML elements
    const imageSlider = document.querySelector('.image-slider');
    const buttonNext = document.querySelector('.button-next');
    const buttonPrev = document.querySelector('.button-prev');
    const dots = document.querySelectorAll('.dot');
    const slideWrapper = document.querySelector('.slide-wrapper');

    // initialize variables and set initial values
    let currentIndex = parseInt(getComputedStyle(imageSlider).marginLeft);
    let indexValue = 100;
    let showingSlide;

    // function to start the automatic slide change interval
    function startInterval() {
        showingSlide = setInterval(() => {
            updateSlide(-indexValue);
        }, 3000);
    };
    startInterval();

    // function to update the slide position
    function updateSlide(update) {
        currentIndex += update;

        // logic to make the slide continuously loop
        if (currentIndex < -indexValue * (dots.length - 1)) {
            currentIndex = 0;
        } else if (currentIndex > 0) {
            currentIndex = -indexValue * (dots.length - 1);
        }

        // set the left margin of the slider according to currentIndex
        imageSlider.style.marginLeft = currentIndex + '%';

        // update the active state of dots
        updateDotState();
    };

    // function to update the active state of dots
    function updateDotState() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('dot-active', index * -indexValue === currentIndex);
        });
    };

    // event listener for the "Next" button on the slider
    buttonNext.addEventListener('click', () => {
        updateSlide(-indexValue);
    });

    // event listener for the "Prev" button on the slider
    buttonPrev.addEventListener('click', () => {
        updateSlide(indexValue);
    });

    // function to handle dot clicks
    function handleDotClick(index) {
        return () => {
            // update currentIndex and left margin of the slider based on the clicked dot
            currentIndex = -index * indexValue;
            imageSlider.style.marginLeft = currentIndex + '%';

            // update the active state of dots
            updateDotState();
        };
    };

    // event listener for each dot on the slider
    dots.forEach((dot, index) => {
        dot.addEventListener('click', handleDotClick(index));
    });

    // function to stop the automatic slide change interval
    function pauseInterval() {
        clearInterval(showingSlide);
    };

    // function to resume the automatic slide change interval after it's been stopped
    function resumeInterval() {
        startInterval();
    };

    //event listener when the mouse enters the slider area
    slideWrapper.addEventListener('mouseenter', pauseInterval);

    // event listener when the mouse leaves the slider area
    slideWrapper.addEventListener('mouseleave', resumeInterval);
});