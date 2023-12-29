//JavaScript to implement higlight navbar effect
let sections = document.querySelectorAll('.container');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


// Function to animate progress bars
function animateProgressBars() {
    const progressBarElements = document.querySelectorAll('.progress-bar');

    progressBarElements.forEach(progressBar => {
        const targetWidth = progressBar.getAttribute('aria-valuenow');
        progressBar.style.width = `${targetWidth}%`;
    });
}

// Call the animation function after the page loads
window.onload = function () {
    animateProgressBars();
};
