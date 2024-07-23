const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));
app.use(express.json());

const EMAILS_FILE = path.join(__dirname, 'emails.json');

function readEmails() {
    if (!fs.existsSync(EMAILS_FILE)) {
        return [];
    }
    const data = fs.readFileSync(EMAILS_FILE, 'utf8');
    return JSON.parse(data);
}

function writeEmails(emails) {
    fs.writeFileSync(EMAILS_FILE, JSON.stringify(emails, null, 2));
}

app.get('/api/count', (req, res) => {
    const emails = readEmails();
    res.json({ count: emails.length });
});

app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const emails = readEmails();
    if (emails.includes(email)) {
        return res.json({ success: false, message: 'Email already subscribed' });
    }

    emails.push(email);
    writeEmails(emails);

    res.json({ success: true, message: 'Subscription successful' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});