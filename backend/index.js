const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');
// const bodyParser = require('body-parser');

// middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.listen(5000, () => {
  console.log("Server conectado à porta 5000");
})

// insert serie
app.post("/series", async (req, res) => {
  try {
    const body = req.body;

    const newSerie = await pool.query(`INSERT INTO serie VALUES (${body.id},
      '${body.title}',
      '${body.description}',
      ${body.seasonAmount},
      ${body.producer},
      ${body.director},
      ${body.category}
      )`);

    res.json(newSerie.rows);

  } catch (err) {
    console.error(err.message);
  }
})


// get all series
app.get("/series", async (req, res) => {
  try {
    const allSeries = await pool.query("SELECT * from serie");
    res.json(allSeries.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// get a serie

app.get("/series/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const serie = await pool.query(`SELECT * from serie WHERE s_id = ${id}`);

    res.json(serie.rows);

  } catch (err) {
    console.error(err.message);
  }
})


// update a serie

app.put("/series/:id", async (req, res) => {
  try {

    const { id } = req.params;
    const body = req.body;

    const updateSerie = await pool.query(`UPDATE serie 
    SET s_id = ${body.id}, 
    s_title = '${body.title}', 
    s_sinopse = '${body.description}',
    s_season_amount = ${body.seasonAmount} WHERE s_id = ${id}`);

    res.json(updateSerie.rows);
  } catch (err) {
    console.error(err.message);
  }
})


// delete a serie

app.delete("/series/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteSerie = await pool.query(`DELETE FROM serie WHERE s_id = ${id};`);

    res.json(deleteSerie.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// insert film
app.post("/films", async (req, res) => {
  try {
    const body = req.body;

    const newFilm = await pool.query(`INSERT INTO film VALUES (${body.id},
      '${body.title}',
      '${body.release}',
      '${body.description}',
      ${body.length},
      ${body.producer},
      ${body.category},
      ${body.director}
      )`);

    console.log(body);

    res.json(newFilm.rows);

  } catch (err) {
    console.error(err.message);
  }
})

// get all films
app.get("/films", async (req, res) => {
  try {
    const allFilms = await pool.query("SELECT * from film");
    res.json(allFilms.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// get a film

app.get("/films/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const film = await pool.query(`SELECT * from film WHERE s_id = ${id}`);

    res.json(film.rows);

  } catch (err) {
    console.error(err.message);
  }
})

app.put("/films/:id", async (req, res) => {
  try {

    const { id } = req.params;
    const body = req.body;

    const updateFilm = await pool.query(`UPDATE film 
    SET f_id = ${body.id}, 
    f_title = '${body.title}', 
    f_rday = '${body.release}',
    f_sinopse = '${body.description}',
    f_length = ${body.length} WHERE f_id = ${id}`);

    res.json(updateSerie.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.delete("/films/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteFilm = await pool.query(`DELETE FROM film WHERE f_id = ${id}`);

    res.json(deleteFilm.rows);
  } catch (err) {
    console.error(err.message);
  }
})