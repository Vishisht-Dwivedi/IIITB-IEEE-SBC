const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 5000;
const eventsArray = require('./events');
const upcomingEvents = require('./upcoming-events');
const teamArray = require('./team');
const facultyArray = require('./faculty');
require("dotenv").config();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());


app.get('/api/events', (req, res) => {
    res.send(eventsArray);
})
app.get('/api/team', (req, res) => {
    res.send(teamArray);
})
app.get('/api/faculty', (req, res) => {
    res.send(facultyArray);
})
app.get('/api/upcoming-events', (req, res) => {
    res.send(upcomingEvents);
})
app.use(express.json());

//Email handling

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.email",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD
    },
});
const sendMail = async (transporter, mailOptions) => {
    try {
        transporter.sendMail(mailOptions);
        console.log("Email has been sent");
    } catch (error) {
        console.log(error);
    }
}

app.post('/form', (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    console.log('Received form data:', req.body);

    const mailOptions = {
        from: process.env.USER,
        to: 'iiitbhopalieee@gmail.com',
        subject: 'Mail from the website',
        text: `Sent By - ${name} \n Email of the sender - ${email} \n Message - ${message}`
    };

    sendMail(transporter, mailOptions);
    res.status(200).json({ message: 'Data received successfully!' });
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
