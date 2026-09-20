const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World from Docker');
});



app.use(express.urlencoded({ extended: true }));

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/pages/InputForm.html');
});

app.post('/submit', (req, res) => { 
    const { name, email } = req.body;
    fs.writeFileSync('/app/data/data.txt', `Name: ${name}, Email: ${email}`);
    res.send(`Hello ${name} from ${email}`);
});

app.get('/data', (req, res) => {
    const data = fs.readFileSync('/app/data/data.txt', 'utf8');
    res.send(data);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});



