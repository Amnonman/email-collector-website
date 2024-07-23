document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');
    const messageElement = document.getElementById('message');
    const emailCountElement = document.getElementById('email-count');

    // Function to update email count
    function updateEmailCount() {
        const emails = JSON.parse(localStorage.getItem('emails') || '[]');
        emailCountElement.textContent = emails.length;
    }

    // Initial email count update
    updateEmailCount();

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;

        // Get existing emails from localStorage
        let emails = JSON.parse(localStorage.getItem('emails') || '[]');

        // Check if email already exists
        if (emails.includes(email)) {
            messageElement.textContent = 'This email is already subscribed.';
        } else {
            // Add new email
            emails.push(email);
            localStorage.setItem('emails', JSON.stringify(emails));

            messageElement.textContent = 'Thank you for subscribing!';
            updateEmailCount();
            form.reset();
        }
    });
});