const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Movie = require('./schema');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/flims', async (req, res) => {
    const response = await axios.get('https://swapi.dev/api/films');
    res.send(response.data);
});

app.post('/api/data', async (req, res) => {
    const movie = new Movie({ title: req.body.title });
    await movie.save();
    res.send(movie);
});

app.get('/api/favmovies', async (req, res) => {
    const movies = await Movie.find({});
    res.send(movies);
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

mongoose.connect('mongodb://mongodb:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});