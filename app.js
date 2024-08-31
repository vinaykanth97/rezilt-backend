const express = require('express')
const connect = require('./src/connect')
const { default: mongoose } = require('mongoose')
const registeredUser = require('./src/models/registerUsers')

const app = express()
const port = 3000

// Check if port is listening
app.listen(port, () => console.log(`Listening on port:${port}!`))

// Initializing DB Connection
connect()



app.post('/registeruser', (req, res) => {
    const newUser = new registeredUser({
        username: 'Tesss',
        email: 'Doe',
        password: "test"
    });
    newUser.save().then(() => res.send('Data saved successfully'))
        .catch(err => res.status(500).send('Failed to save data: ' + err));
});


