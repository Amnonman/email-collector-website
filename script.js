document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');
    
    // Here you would typically send the email to your server
    // For this example, we'll just display a success message
    messageElement.textContent = `Thank you! ${email} has been subscribed.`;
    messageElement.style.color = 'green';
    
    // Clear the input field
    document.getElementById('email').value = '';
});