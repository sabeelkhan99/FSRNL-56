const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/moviesDB')
    .then(() => console.log('Connection Open'))
    .catch((err) => console.log(err));


const moviesSchema = new mongoose.Schema({
    name: String,
    year: Number,
    rating: Number,
    isWatched: Boolean
},{versionKey: false, timestamps: true});

const Movie = mongoose.model('Movie', moviesSchema);

// Movie => movies
// User => users
// Product => products

const batman = new Movie({ name: 'Batman', year: 2014, rating: 8.8, isWatched: true });

batman.save()
    .then(() => console.log('movie saved'));

console.log(batman);

