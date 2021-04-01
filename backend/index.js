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
    s_season_amount = ${body.seasonAmount},
    p_id = ${body.producer},
    d_id = ${body.director},
    c_id = ${body.category} WHERE s_id = ${id}`);

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

    const newFilm = await pool.query(`INSERT INTO film VALUES (
      ${body.id},
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
    const film = await pool.query(`SELECT * from film WHERE f_id = ${id}`);

    res.json(film.rows);

  } catch (err) {
    console.error(err.message);
  }
})

// update film
app.put("/films/:id", async (req, res) => {
  try {

    const { id } = req.params;
    const body = req.body;

    const updateFilm = await pool.query(`UPDATE film 
    SET f_id = ${body.id}, 
    f_title = '${body.title}',
    f_rday = '${body.release}',
    f_sinopse = '${body.description}',
    f_length = ${body.length},
    p_id = ${body.producer},
    c_id = ${body.category},
    d_id = ${body.director} WHERE f_id = ${id}`);

    res.json(updateFilm.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// delete film
app.delete("/films/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteFilm = await pool.query(`DELETE FROM film WHERE f_id = ${id}`);

    res.json(deleteFilm.rows);
  } catch (err) {
    console.error(err.message);
  }
})


// insert category
app.post("/category", async (req, res) => {
  try {
    const body = req.body;

    const newCategory = await pool.query(`INSERT INTO category VALUES (
      ${body.id},
      '${body.description}',
      '${body.type}'
    )`)

    res.json(newCategory.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// get all categories

app.get("/category", async (req, res) => {
  try {
    const category = await pool.query("SELECT * FROM category");

    res.json(category.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// get a category
app.get("/category/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const category = await pool.query(`SELECT * FROM category WHERE c_id = ${id}`);

    res.json(category.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// update a category
app.put("/category/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const updateCategory = await pool.query(`UPDATE category
    SET c_id = ${body.id},
    c_description = '${body.description}',
    c_type = '${body.type}' WHERE c_id = ${id}`)

    res.json(updateCategory.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// delete category
app.delete("/category/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteCategory = await pool.query(`DELETE FROM category WHERE c_id = ${id}`);

    res.json(deleteCategory.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// insert producer
app.post("/producer", async (req, res) => {
  try {
    const body = req.body;

    const newProducer = await pool.query(`INSERT INTO producer VALUES (
      ${body.id},
      '${body.name}',
      '${body.contact}',
      '${body.website}',
      '${body.address}'
    )`)

    res.json(newProducer.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// get all producers
app.get("/producer", async (req, res) => {
  try {
    const producer = await pool.query("SELECT * FROM producer");

    res.json(producer.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// get a producer
app.get("/producer/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const producer = await pool.query(`SELECT * FROM producer WHERE p_id = ${id}`);

    res.json(producer.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// update a producer
app.put("/producer/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const updateProducer = await pool.query(`UPDATE producer
    SET 
    p_id = ${body.id},
    p_name = '${body.name}',
    p_con = '${body.contact}',
    p_web = '${body.website}',
    p_adr = '${body.address}' WHERE p_id = ${id}
    `)

    res.json(updateProducer.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// delete producer
app.delete("/producer/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteProducer = await pool.query(`DELETE FROM producer WHERE p_id = ${id}`);

    res.json(deleteProducer.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// insert director
app.post("/director", async (req, res) => {
  try {
    const body = req.body;

    const newDirector = await pool.query(`INSERT INTO director VALUES (
      ${body.id},
      '${body.name}',
      '${body.bday}',
      '${body.dday}'
    )`)

    res.json(newDirector.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// get all directors
app.get("/director", async (req, res) => {
  try {

    const director = await pool.query(`SELECT * FROM director`);

    res.json(director.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// get a director
app.get("/director/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const director = await pool.query(`SELECT * FROM director WHERE d_id = ${id}`);

    res.json(director.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// update a director
app.put("/director/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const updateDirector = await pool.query(`UPDATE director
    SET d_id = ${body.id},
    d_name = '${body.name}',
    d_bday = '${body.bday}',
    d_dday = '${body.dday}' WHERE d_id = ${id}
    `)

    res.json(updateDirector.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// delete director
app.delete("/director/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteDirector = await pool.query(`DELETE FROM director WHERE d_id = ${id}`);

    res.json(deleteDirector.rows);
  } catch (error) {
    console.error(error.message);
  }
})



// insert actor
app.post("/actor", async (req, res) => {
  try {
    const body = req.body;

    const newActor = await pool.query(`INSERT INTO actor VALUES (
      ${body.id},
      ${body.name},
      '${body.bday}',
      '${body.dday}'
    )`)

    res.json(newActor.rows);
  } catch (error) {
    console.error(error.message);
  }
})


// get all actors
app.get("/actor", async (req, res) => {
  try {

    const actors = await pool.query(`SELECT * FROM actor`);

    res.json(actors.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// get a actor
app.get("/actor/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const actor = await pool.query(`SELECT * FROM actor WHERE a_id = ${id}`);

    res.json(actor.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// update an actor
app.put("/actor/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const updateActor = await pool.query(`UPDATE actor
    SET a_id = ${body.id},
    a_bday = '${body.bday}',
    a_dday = '${body.dday}' WHERE a_id = ${id}
    `)

    res.json(updateActor.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// delete actor
app.delete("/actor/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteActor = await pool.query(`DELETE FROM actor WHERE a_id = ${id}`);

    res.json(deleteActor.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// insert star_f
app.post("/star_f", async (req, res) => {
  try {
    const body = req.body;

    const newStar = await pool.query(`INSERT INTO star_f VALUES (
      ${body.actor},
      ${body.film},
      ${body.id}
    )`)

    console.log(body);

    res.json(newStar.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// get all star_f
app.get("/star_f", async (req, res) => {
  try {

    const star_f = await pool.query(`SELECT * FROM star_f`);

    res.json(star_f.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// get a star_f
app.get("/star_f/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const star_f = await pool.query(`SELECT * FROM star_f WHERE star_f_id = ${id}`);

    res.json(star_f.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// update an star_f
app.put("/star_f/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const updateStar = await pool.query(`UPDATE star_f
    SET a_id = ${body.actor},
    f_id = ${body.film},
    star_f_id = ${body.id} WHERE star_f_id = ${id}`)

    res.json(updateStar.rows);
  } catch (error) {
    console.error(error.message);
  }
})


// delete star_f
app.delete("/star_f/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteStar = await pool.query(`DELETE FROM star_f WHERE star_f_id = ${id}`);

    res.json(deleteStar.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// insert star_e
app.post("/star_e", async (req, res) => {
  try {
    const body = req.body;

    const newStar = await pool.query(`INSERT INTO star_e VALUES (
      ${body.id},
      ${body.actor},
      ${body.episode} 
    )`)

    console.log(body);

    res.json(newStar.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// get all star_e
app.get("/star_e", async (req, res) => {
  try {

    const star_e = await pool.query(`SELECT * FROM star_e`);

    res.json(star_e.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// get a star_e
app.get("/star_e/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const star_e = await pool.query(`SELECT * FROM star_e WHERE star_e_id = ${id}`);

    res.json(star_e.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// update an star_e
app.put("/star_e/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const updateStar = await pool.query(`UPDATE star_e
    SET star_e_id = ${body.id},
    a_id = ${body.actor},
    e_id = ${body.episode} WHERE star_e_id = ${id}`)

    res.json(updateStar.rows);
  } catch (error) {
    console.error(error.message);
  }
})


// delete star_e
app.delete("/star_e/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteStar = await pool.query(`DELETE FROM star_e WHERE star_e_id = ${id}`);

    res.json(deleteStar.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// get all users
app.get("/users", async (req, res) => {
  try {
    const users = await pool.query(`SELECT * FROM u_ser`);

    res.json(users.rows);
  } catch (error) {
    console.log(error);
  }
})

// insert user
app.post("/users", async (req, res) => {
  try {

    let randomID = Math.floor(Math.random() * 5000) + 1;

    const body = req.body;

    const insertUser = await pool.query(`INSERT INTO u_ser VALUES (${randomID}, '${body.name}', '${body.email}', '${body.type}')`);

    console.log(body);

    res.json(insertUser.rows);
  } catch (error) {
    console.log(error);
  }
})

// delete star_e
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteStar = await pool.query(`DELETE FROM u_ser WHERE u_id = ${id}`);

    res.json(deleteStar.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// update an user
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let randomID = Math.floor(Math.random() * 5000) + 1;

    const body = req.body;

    const updateStar = await pool.query(`UPDATE u_ser
    SET u_id = ${randomID},
    name = '${body.username}',
    email = '${body.email}',
    type = '${body.type}' WHERE u_id = ${id}`)

    res.json(updateStar.rows);
  } catch (error) {
    console.error(error.message);
  }
})


// get a user
app.get("/users/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const user = await pool.query(`SELECT * FROM u_ser WHERE u_id = ${id}`);

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// insert watch_f
app.post("/watch_f", async (req, res) => {
  try {

    const body = req.body;

    const insertWatch = await pool.query(`INSERT INTO watch_f VALUES (
      ${body.rating},
      ${body.user}, 
      ${body.film}, 
      ${body.id})`);

    res.json(insertWatch.rows);
  } catch (error) {
    console.log(error);
  }
})

// get a watch_f
app.get("/watch_f/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const user = await pool.query(`SELECT * FROM watch_f WHERE watch_f_id = ${id}`);

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// get all watch_f
app.get("/watch_f", async (req, res) => {
  try {

    const user = await pool.query(`SELECT * FROM watch_f`);

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// update 
app.put("/watch_f/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const updateStar = await pool.query(`UPDATE watch_f
    SET rating_f = ${body.rating},
    u_id = ${body.user},
    f_id = ${body.film},
    watch_f_id = ${body.id} WHERE watch_f_id = ${id}`)

    res.json(updateStar.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// update 
app.put("/watch_s/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const updateStar = await pool.query(`UPDATE watch_s
    SET rating_s = ${body.rating},
    u_id = ${body.user},
    s_id = ${body.serie},
    watch_s_id = ${body.id} WHERE watch_s_id = ${id}`)

    res.json(updateStar.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// delete watch_f
app.delete("/watch_f/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteStar = await pool.query(`DELETE FROM watch_f WHERE watch_f_id = ${id}`);

    res.json(deleteStar.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// get all watch_s
app.get("/watch_s", async (req, res) => {
  try {

    const user = await pool.query(`SELECT * FROM watch_s`);

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// get a watch_s
app.get("/watch_s/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const user = await pool.query(`SELECT * FROM watch_s WHERE watch_s_id = ${id}`);

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// insert watch_s
app.post("/watch_s", async (req, res) => {
  try {

    const body = req.body;

    const insertWatch = await pool.query(`INSERT INTO watch_s VALUES (
      ${body.rating},
      ${body.user}, 
      ${body.serie}, 
      ${body.id} 
      )`);

    res.json(insertWatch.rows);
  } catch (error) {
    console.log(error);
  }
})

// delete watch_s
app.delete("/watch_s/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteStar = await pool.query(`DELETE FROM watch_s WHERE watch_s_id = ${id}`);

    res.json(deleteStar.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// insert user
app.post("/season", async (req, res) => {
  try {

    const body = req.body;

    const insertSeason = await pool.query(`INSERT INTO season VALUES (
      ${body.id}, 
      '${body.description}', 
      ${body.amount}, 
      ${body.serie})`);

    console.log(body);

    res.json(insertSeason.rows);
  } catch (error) {
    console.log(error);
  }
})

// get all seasonos
app.get("/season", async (req, res) => {
  try {

    const season = await pool.query(`SELECT * FROM season`);

    res.json(season.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// get a season

app.get("/season/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const user = await pool.query(`SELECT * FROM season WHERE season_id = ${id}`);

    res.json(user.rows);
  } catch (err) {
    console.error(err.message);
  }
})


// update season
app.put("/season/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const updateSeason = await pool.query(`UPDATE season
    SET season_id = ${body.id},
    s_description = '${body.description}',
    s_ep_amount = ${body.amount},
    s_id = ${body.serie} WHERE season_id = ${id}`)

    res.json(updateSeason.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// delete season
app.delete("/season/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteSeason = await pool.query(`DELETE FROM season WHERE season_id = ${id}`);

    res.json(deleteSeason.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// insert ep
app.post("/episode", async (req, res) => {
  try {

    const body = req.body;

    const insertEP = await pool.query(`INSERT INTO episode VALUES (
      ${body.id},
      '${body.title}', 
      '${body.sinopse}', 
      ${body.length},
      ${body.season})`);

    console.log(body);

    res.json(insertEP.rows);
  } catch (error) {
    console.log(error);
  }
})

// get a ep

app.get("/episode/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const ep = await pool.query(`SELECT * FROM episode WHERE e_id = ${id}`);

    res.json(ep.rows);
  } catch (err) {
    console.error(err.message);
  }
})

// get all eps
app.get("/episode", async (req, res) => {
  try {

    const ep = await pool.query(`SELECT * FROM episode`);

    res.json(ep.rows);
  } catch (err) {
    console.error(err.message);
  }
})


// update ep
app.put("/episode/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const body = req.body;

    const updateEP = await pool.query(`UPDATE episode
    SET e_id = ${body.id},
    e_title = '${body.title}',
    e_sinopse = '${body.sinopse}',
    e_length = ${body.length},
    season_id = ${body.season} WHERE e_id = ${id}`)

    res.json(updateEP.rows);
  } catch (error) {
    console.error(error.message);
  }
})

// delete ep
app.delete("/episode/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteEP = await pool.query(`DELETE FROM episode WHERE e_id = ${id}`);

    res.json(deleteEP.rows);
  } catch (error) {
    console.error(error.message);
  }
})