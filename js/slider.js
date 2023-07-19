// Written by ChatGPT (18-07-2023):

// Function to handle the image slider
function handleSlider() {
    const sliders = document.querySelectorAll('.Slider');

    sliders.forEach(slider => {
        const projectImages = slider.querySelectorAll('.ProjectImages');
        const leftArrow = slider.querySelector('.LeftArrow');
        const rightArrow = slider.querySelector('.RightArrow');
        let currentIndex = 0;

        // Function to show the current image
        function showImage(index) {
            projectImages.forEach((image, i) => {
                if (i === index) {
                    image.style.display = 'flex'; // Changed to 'flex' instead of 'block'
                } else {
                    image.style.display = 'none';
                }
            });
        }

        // Hide all images except the first one
        showImage(currentIndex);

        // Event listener for the left arrow
        leftArrow.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
            showImage(currentIndex);
        });

        // Event listener for the right arrow
        rightArrow.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % projectImages.length;
            showImage(currentIndex);
        });

        // Function to handle swipe gestures on touch screens
        function handleSwipe(element) {
            let xStart = null;

            element.addEventListener('touchstart', (event) => {
                xStart = event.touches[0].clientX;
            });

            element.addEventListener('touchend', (event) => {
                const xEnd = event.changedTouches[0].clientX;
                const xDiff = xStart - xEnd;

                if (xDiff > 0) {
                    currentIndex = (currentIndex + 1) % projectImages.length;
                } else if (xDiff < 0) {
                    currentIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
                }

                showImage(currentIndex);
            });
        }

        handleSwipe(slider);
    });
}

// Wait for the DOM to be loaded before setting up the slider
document.addEventListener('DOMContentLoaded', handleSlider);
