document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');
    const messageElement = document.getElementById('message');
    const emailCountElement = document.getElementById('email-count');

    // Function to update email count
    function updateEmailCount() {
        fetch('/api/count')
            .then(response => response.json())
            .then(data => {
                emailCountElement.textContent = data.count;
            })
            .catch(error => {
                console.error('Error fetching email count:', error);
            });
    }

    // Initial email count update
    updateEmailCount();

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;

        fetch('/api/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                messageElement.textContent = 'Thank you for subscribing!';
                updateEmailCount();
                form.reset();
            } else {
                messageElement.textContent = data.message;
            }
        })
        .catch(error => {
            messageElement.textContent = 'An error occurred. Please try again.';
        });
    });
});