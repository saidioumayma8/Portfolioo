const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Transporter
// IMPORTANT: For Gmail, you need an App Password if 2FA is on.
// For testing, we can use Ethereal (fake SMTP).
// Replace with real credentials for production.
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your SMTP provider
    auth: {
        user: 'your-email@gmail.com', // REPLACE THIS
        pass: 'your-app-password'     // REPLACE THIS
    }
});

// API Endpoint
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, // Sender address (might be overridden by SMTP provider)
        to: 'oumaymasaidi908@gmail.com', // Your email address
        subject: `Portfolio Contact: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
