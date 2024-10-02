
      
        
        
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
    
        
    //SLIDE SHOW  AUTO with nav arrows
    
    let slideIndex = 0;
    let autoSlideInterval;
    
    // Function to show the current slide
    function showSlides(index) {
        let slides = document.getElementsByClassName("slide");
    
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
    
        // Set the slide index within the bounds of the number of slides
        slideIndex = (index + slides.length) % slides.length; // Wrap around index
    
        // Show the current slide
        slides[slideIndex].style.display = "block";
    }
    
    // Function to automatically advance to the next slide
    function autoSlide() {
        showSlides(slideIndex + 1); // Go to the next slide
    }
    
    // Function to change slides manually
    function changeSlide(n) {
        clearInterval(autoSlideInterval); // Stop auto-slide temporarily
        showSlides(slideIndex + n); // Change slide based on arrow click
    
        // Restart auto-slide
        autoSlideInterval = setInterval(autoSlide, 2500);
    }
    
    // Initialize slideshow and start auto-slide every 5 seconds
    function startSlideshow() {
        showSlides(slideIndex); // Show the initial slide
        autoSlideInterval = setInterval(autoSlide, 2500); // Auto-slide every 5 seconds
    }
    
    // Start the slideshow when the window loads
    window.onload = startSlideshow;
    
    
    // REFRESH

    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
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
