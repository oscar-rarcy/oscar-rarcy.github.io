// footer.js by ChatGPT
function updateCurrentYear() {
    const currentYearSpan = document.getElementById('currentYear');
    currentYearSpan.textContent = new Date().getFullYear();
}

// Call the function to set the initial year
updateCurrentYear();

// Update the year every year (on January 1st)
setInterval(updateCurrentYear, 1000 * 60 * 60 * 24); // Check once per day
