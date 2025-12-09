		// Select all elements with the class 'btn' and loop through each one
document.querySelectorAll('.btn').forEach(btn => {

    // Add a click event listener to each button
    btn.addEventListener('click', () => {

        // Show an alert when the button is clicked
        alert('Download started! (Demo link)');
    });
});
