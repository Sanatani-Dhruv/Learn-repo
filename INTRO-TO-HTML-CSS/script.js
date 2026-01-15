/* Show Nav-Container on Small Screen by Toggling 3-Lines */
document.addEventListener('DOMContentLoaded', function () {
    const toggler = document.querySelector('.toggler');
    const nav_container = document.querySelector('.nav-container');
    toggler.addEventListener('click', function () {
        nav_container.classList.toggle('show_nav-container');
    })
})

/* Remove Nav-Container on Small Screen when Tapping on Blank Area */
document.addEventListener('DOMContentLoaded', () => {
    const blank_area = document.querySelector('.dark-on-show_nav-container');
    const nav_container = document.querySelector('.nav-container');
    blank_area.addEventListener('click', function () {
        nav_container.classList.remove('show_nav-container');
    })
})

/* Remove Nav-Container on Small Screen when Clicking any Nav-Link */
document.addEventListener('DOMContentLoaded', () => {
    const nav_link = document.querySelectorAll('.nav-link');
    const nav_container = document.querySelectorAll('.nav-container');
    nav_link.addEventListener('click', function () {
        nav_container.classList.remove('show_nav-container');
    })
})

/* Function to Make Back-to-top Button Appear on Scroll */

// Get the button:
let mybutton = document.getElementById("back-to-top");

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {

        setTimeout(() => {
            mybutton.style.display = "block";
        }, 10);


    } else {
        mybutton.style.display = "none";
    }
}

/* 
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
*/