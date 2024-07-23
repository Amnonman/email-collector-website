document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('email-form');
    const messageElement = document.getElementById('message');
    const emailCountElement = document.getElementById('email-count');
    const toggleListButton = document.getElementById('toggle-list');
    const emailListContainer = document.getElementById('email-list');
    const emailsList = document.getElementById('emails');

    // Function to update email count
    function updateEmailCount() {
        const emails = JSON.parse(localStorage.getItem('emails') || '[]');
        emailCountElement.textContent = emails.length;
    }

    // Function to update email list
    function updateEmailList() {
        const emails = JSON.parse(localStorage.getItem('emails') || '[]');
        emailsList.innerHTML = '';
        emails.forEach(email => {
            const li = document.createElement('li');
            li.textContent = email;
            emailsList.appendChild(li);
        });
    }

    // Initial email count and list update
    updateEmailCount();
    updateEmailList();

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
            updateEmailList();
            form.reset();
        }
    });

    // Toggle email list visibility
    toggleListButton.addEventListener('click', function() {
        if (emailListContainer.style.display === 'none') {
            emailListContainer.style.display = 'block';
            toggleListButton.textContent = 'Hide Email List';
        } else {
            emailListContainer.style.display = 'none';
            toggleListButton.textContent = 'Show Email List';
        }
    });
});