
window.addEventListener('scroll', function() {
    const tagline = document.getElementById('tagline');
   
    const windowHeight = window.innerHeight;

    const scrollPosition = window.scrollY;

    // Adjust opacity based on scroll position
    // Modify the values to control when the elements start fading
    const taglineFadeStart = windowHeight * 0.3; // Start fading earlier
  
    let taglineOpacity = 1 - (scrollPosition / taglineFadeStart);
    

    // Ensure opacity values stay within the range 0 to 1
    taglineOpacity = Math.max(0, Math.min(1, taglineOpacity));
    

    // Apply opacity to both elements
    tagline.style.opacity = taglineOpacity;
    
});




   


  // REFRESH

            window.addEventListener('load', () => {
                document.body.classList.add('loaded');
            });


            //MODAL


            // Function to open modal
            function openModal(modalId) {
                // Open the modal
                const modal = document.getElementById(modalId);
                modal.style.display = 'block';
            
                // Disable interaction for the entire page except the modal
                document.body.classList.add('non-interactive');
            }

// Function to close modal
function closeModal(modalId) {
    // Close the modal
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';

    // Restore interaction for the entire page
    document.body.classList.remove('non-interactive');
}



        // JOB OPENINGS


        function checkJobOpenings() {
            // Get the accounting job opening element
            const accountingJobsElement = document.getElementById('accountingJobs');
            // Get the engineering job opening element, but check if it exists
            const engineeringJobsElement = document.getElementById('engineeringJobs');
            const ITJobsElement = document.getElementById('itJobs');
            const warehouseJobsElement = document.getElementById('warehouseJobs');
            const productionJobsElement = document.getElementById('productionJobs');
            const qcJobsElement = document.getElementById('qcJobs');
            const utilityJobsElement = document.getElementById('utilityJobs');
        



            // Check the content of the Accounting job opening header
            if (accountingJobsElement) {
                const accountingJobs = accountingJobsElement.innerText.trim();
        
                // Hide Apply Now button for Accounting if no jobs
                if (accountingJobs.toLowerCase().includes('no job openings')) {
                    document.getElementById('applyAccounting').style.display = 'none';
                }
            }
        

            // Check the content of the Engineering job opening header
            if (engineeringJobsElement) {
                const engineeringJobs = engineeringJobsElement.innerText.trim();
        
                // Hide Apply Now button for Engineering if no jobs
                if (engineeringJobs.toLowerCase().includes('no job openings')) {
                    document.getElementById('applyEngineering').style.display = 'none';
                }
            }


            // IT

            if (ITJobsElement) {
                const itJobs = ITJobsElement.innerText.trim();
        
                // Hide Apply Now button for Engineering if no jobs
                if (itJobs.toLowerCase().includes('no job openings')) {
                    document.getElementById('applyIT').style.display = 'none';
                }
            }


            // WAREHOUSE 

            if (warehouseJobsElement) {
                const warehouseJobs = warehouseJobsElement.innerText.trim();
        
                // Hide Apply Now button for Engineering if no jobs
                if (warehouseJobs.toLowerCase().includes('no job openings')) {
                    document.getElementById('applyWarehouse').style.display = 'none';
                }
            }

            // PRODUCTION 

            if (productionJobsElement) {
                const productionJobs = productionJobsElement.innerText.trim();
        
                // Hide Apply Now button for Engineering if no jobs
                if (productionJobs.toLowerCase().includes('no job openings')) {
                    document.getElementById('applyProduction').style.display = 'none';
                }
            }

            //QUALITY CONTROL 

            if (qcJobsElement) {
                const qcJobs = qcJobsElement.innerText.trim();
        
                // Hide Apply Now button for Engineering if no jobs
                if (qcJobs.toLowerCase().includes('no job openings')) {
                    document.getElementById('applyQualityControl').style.display = 'none';
                }
            }

            // UTILITY 

            if (utilityJobsElement) {
                const utilityJobs = utilityJobsElement.innerText.trim();
        
                // Hide Apply Now button for Engineering if no jobs
                if (utilityJobs.toLowerCase().includes('no job openings')) {
                    document.getElementById('applyUtility').style.display = 'none';
                }
            }


        }
        


        // Run the function when the page loads
        window.onload = checkJobOpenings;
        

