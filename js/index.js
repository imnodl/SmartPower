





        
  // Add event listener for scrolling
  window.addEventListener('scroll', function() {
    const tagline = document.getElementById('tagline');
   
    const windowHeight = window.innerHeight;

    const scrollPosition = window.scrollY;

    // Adjust opacity based on scroll position
    // Modify the values to control when the elements start fading
    const taglineFadeStart = windowHeight * 0.2; // Start fading earlier
  

    let taglineOpacity = 1 - (scrollPosition / taglineFadeStart);
   

    // Ensure opacity values stay within the range 0 to 1
    taglineOpacity = Math.max(0, Math.min(1, taglineOpacity));
 

    // Apply opacity to both elements
    tagline.style.opacity = taglineOpacity;
    
});


//SLIDE SHOW

let slideIndex = 0;
let slides = document.getElementsByClassName("slide");

function showSlides() {
// Hide all slides
for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

// Increment slideIndex
slideIndex++;
if (slideIndex > slides.length) { slideIndex = 1; }
if (slideIndex < 1) { slideIndex = slides.length; }

// Show the current slide
slides[slideIndex - 1].style.display = "block";
slides[slideIndex - 1].style.opacity = "1"; 

// Change slide every 3 seconds
setTimeout(showSlides, 3000);
}

// Change slide when arrow is clicked
function changeSlide(n) {
slideIndex += n;
if (slideIndex > slides.length) { slideIndex = 1; }
if (slideIndex < 1) { slideIndex = slides.length; }
showSlides();
}

// Initialize the slideshow
showSlides();



// REFRESH

window.addEventListener('load', () => {
document.body.classList.add('loaded');
});



//LOGO LOAD

// Once the DOM is fully loaded

document.addEventListener("DOMContentLoaded", function() {
// Set a timeout to remove the loading screen after 4 seconds
setTimeout(function() {
 // Fade out the loading screen
 document.getElementById('loading-screen').style.opacity = '0';
 
 // Remove the loading screen after the fade-out transition ends (after 1 second)
 setTimeout(function() {
     document.getElementById('loading-screen').style.display = 'none';
 }, 700); // Give it time to finish the fade-out animation
}, 4000); // 4 seconds for the loading screen
});



// NEXT CONTENT ARROW NAV



document.addEventListener('keydown', function (event) {
    // Check if the down arrow (40) or up arrow (38) key is pressed
    if (event.keyCode === 40) { // Down arrow key
        scrollToNextSection();
    } else if (event.keyCode === 38) { // Up arrow key
        scrollToPreviousSection();
    }
});

// Function to scroll to the next section
function scrollToNextSection() {
    const sections = document.querySelectorAll('.content, .content2, .content3'); // All content sections
    let currentSection = getCurrentSection();

    if (currentSection < sections.length - 1) {
        sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to scroll to the previous section
function scrollToPreviousSection() {
    const sections = document.querySelectorAll('.content, .content2, .content3'); // All content sections
    let currentSection = getCurrentSection();

    if (currentSection > 0) {
        sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
    }
}

// Helper function to determine the current section in view
function getCurrentSection() {
    const sections = document.querySelectorAll('.content, .content2, .content3');
    let currentSection = 0;

    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 20) { // Adjust the value to determine the section in view
            currentSection = index;
        }
    });

    return currentSection;
}




document.getElementById('goup').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default jump to the anchor
    const target = document.querySelector('#what');

   

    // Smooth scroll to the target
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Enable smooth scroll
    });
});



//carousel


let index = 1; // Start from 1 to skip the first clone
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Clone the first and last items
const firstClone = items[0].cloneNode(true);
const lastClone = items[totalItems - 1].cloneNode(true);

// Add clones to the track
track.appendChild(firstClone);
track.insertBefore(lastClone, items[0]);

// Adjust the track's initial position (since we're starting with the second item)
track.style.transform = `translateX(-100%)`;

function showNextItem() {
    index++;

    // Move to the next item
    track.style.transition = 'transform 0.5s ease-in-out';
    const offset = -index * 100; // Calculate the position offset
    track.style.transform = `translateX(${offset}%)`;

    // Check if we've reached the clone of the first item (end of the real carousel)
    if (index === totalItems + 1) {
        setTimeout(() => {
            track.style.transition = 'none'; // Disable transition for instant jump
            index = 1; // Reset back to the real first item
            track.style.transform = `translateX(-100%)`; // Jump back to the real first item
        }, 500); // Delay must match the transition duration (0.5s)
    }
}

// Automatically slide every 4 seconds
setInterval(showNextItem, 3000);

