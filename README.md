# Email Collector Website

This project is a simple website that collects email addresses and stores them in the browser's localStorage. It displays the total number of collected emails on the website.

## Features

- Collects email addresses from users
- Stores email addresses in localStorage
- Displays the total number of collected emails
- Prevents duplicate email submissions

## File Structure

- `index.html`: The main HTML file for the website
- `style.css`: CSS styles for the website
- `script.js`: Client-side JavaScript for handling form submission, email storage, and updating the email count

## Deployment

This project is designed to be deployed on GitHub Pages. To deploy:

1. Push your changes to the GitHub repository:
   ```
   git add .
   git commit -m "Update website to use localStorage"
   git push origin main
   ```

2. Go to your GitHub repository settings.
3. Navigate to the "Pages" section.
4. Under "Source", select the branch you want to deploy (usually "main").
5. Click "Save".

GitHub will provide you with a URL where your site is published.

## Local Development

To run the project locally:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd email-collector-website
   ```

2. Open `index.html` in your web browser.

Note: Since this project uses localStorage, you don't need to run a server for local development.

## Contributing

Feel free to submit issues and pull requests to improve the project.

## Note on Data Persistence

This project uses localStorage for storing email addresses. This means:
- Data is stored in the user's browser and will persist across sessions.
- Data is not shared between different browsers or devices.
- Clearing browser data will remove all stored emails.

For a production application, consider implementing a server-side solution for more robust data storage.