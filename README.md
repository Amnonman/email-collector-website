# Email Collector Website

This project is a simple website that collects email addresses and stores them in a JSON file. It displays the total number of collected emails on the website.

## Setup and Running the Project

1. Make sure you have Node.js installed on your system.

2. Clone the repository:
   ```
   git clone <repository-url>
   cd email-collector-website
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

5. Open your web browser and navigate to `http://localhost:3000` to view the website.

## Features

- Collects email addresses from users
- Stores email addresses in a JSON file
- Displays the total number of collected emails
- Prevents duplicate email submissions

## File Structure

- `index.html`: The main HTML file for the website
- `style.css`: CSS styles for the website
- `script.js`: Client-side JavaScript for handling form submission and updating the email count
- `server.js`: Node.js server that handles API requests and manages email storage
- `emails.json`: JSON file that stores the collected email addresses (created automatically)

## Deployment

This project can be easily deployed to platforms like GitHub Pages or Netlify. Make sure to set up the necessary environment variables and build commands according to your chosen platform.

## Contributing

Feel free to submit issues and pull requests to improve the project.