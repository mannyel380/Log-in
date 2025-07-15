document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    const resultDiv = document.getElementById('formResult');

    // Function to handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Access form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Do something with the values, e.g., display them
        resultDiv.textContent = `Thank you, ${name}! We have received your message.`;

        // Optionally, reset the form
        form.reset();
    });
});