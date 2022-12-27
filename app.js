const express = require('express');

const app = express();

const movies = [
    {
        id: 1,
        name:"Tenet",
    },
    {
        id: 2,
        name:"Inception",
    },
    {
        id: 3,
        name:"Avengers",
    },
    {
        id: 4,
        name:"Big Hero 6",
    },


]

const getMovies =(req, res)=>{
    res.send(movies);
}

app.get('/', (req, res)=>{
    res.send("hello world");
})

app.get('/api/movies', getMovies);
app.get('/api/movies/:id', (req, res) => {
    res.send(req.params);
})

app.listen(3000,()=>{
    console.log('Listening on port:3000....')
}); 