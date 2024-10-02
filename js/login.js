
      
        
        
         // Add event listener for scrolling
         window.addEventListener('scroll', function() {
            const tagline = document.getElementById('tagline');
            const tagline2 = document.getElementById('tagline2');
            const windowHeight = window.innerHeight;
    
            const scrollPosition = window.scrollY;
    
            // Adjust opacity based on scroll position
            // Modify the values to control when the elements start fading
            const taglineFadeStart = windowHeight * 0.2; // Start fading earlier
            const tagline2FadeStart = windowHeight * 1.6; // Start fading later
    
            let taglineOpacity = 1 - (scrollPosition / taglineFadeStart);
            let tagline2Opacity = 1 - ((scrollPosition - tagline2FadeStart) / (windowHeight * 0.5)); // Adjusted denominator
    
            // Ensure opacity values stay within the range 0 to 1
            taglineOpacity = Math.max(0, Math.min(1, taglineOpacity));
            tagline2Opacity = Math.max(0, Math.min(1, tagline2Opacity));
    
            // Apply opacity to both elements
            tagline.style.opacity = taglineOpacity;
            tagline2.style.opacity = tagline2Opacity;
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



let index = 0;
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextItem() {
    index = (index + 1) % totalItems; // Loop back to the start
    const offset = -index * 100; // Calculate the position offset
    track.style.transform = `translateX(${offset}%)`;
}

// Automatically slide every 3 seconds
setInterval(showNextItem, 3000);

