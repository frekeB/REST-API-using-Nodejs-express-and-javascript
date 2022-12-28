const { request } = require("express");
const express = require("express");

const app = express();

app.use(express.json());

const movies = [
  {
    id: 1,
    name: "Tenet",
  },
  {
    id: 2,
    name: "Inception",
  },
  {
    id: 3,
    name: "Avengers",
  },
  {
    id: 4,
    name: "Big Hero 6",
  },
];

const getMovies = (req, res) => {
  res.send(movies);
};
const getmovie = (req, res) => {
  const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send({ error: "Reource not found" });

  res.send(movie);
};
const addMovie = (req, res) => {
  const name = req.body.name;

  const movie = {
    id: movies.length + 1,
    name,
  };

  movies.push(movie);
  res.send(movie);
};

const updateMovie = (req, res) => {
  const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send({ error: "Reource not found" });

  movie.name = req.body.name;
  res.send(movie);
};
const deleteMovie = (req, res) => {
    const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
    if (!movie) {
      return res.status(404).send({ error: "Resource not found" });
    }
    const index = movies.indexOf(movie);
    movies.splice(index, 1);
  
    res.send(movie);
  }


app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/movies", getMovies);

app.get("/api/movies/:id", getmovie);

app.post("/api/movies", addMovie);

app.put("/api/movies/:id", updateMovie);

app.delete("/api/movies/:id", deleteMovie);



const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}....`);
});
