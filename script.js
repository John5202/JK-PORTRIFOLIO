// Select all buttons inside the .skills-list container
const skillButtons = document.querySelectorAll('.skills-list button');

// Add event listeners for hover effects
skillButtons.forEach((button) => {
    // Add hover effect on mouseover
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#11171e'; // Darker blue
        button.style.transform = 'scale(1.05)'; // Slightly enlarge
        button.style.color = '#4b2626'; // Change text color
        button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Add shadow
        button.style.border = '1px solid #f71313'; // Add border
    });

    // Remove hover effect on mouseout
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#d1a96e'; // Original background color
        button.style.transform = 'scale(1)'; // Reset size
        button.style.color = '#322146'; // Reset text color
        button.style.boxShadow = 'none'; // Remove shadow
        button.style.border = 'none'; // Remove border
    });
}); 