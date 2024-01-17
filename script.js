document.addEventListener('DOMContentLoaded', function() {
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');

    portfolioBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const imageContainer = this.querySelector('.image-container');
            imageContainer.classList.add('clicked');
        });
    });
});