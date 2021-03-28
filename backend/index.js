const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');
// const bodyParser = require('body-parser');

// middleware
app.use(cors())
app.use(express.json());

app.listen(5000, () => {
  console.log("Server conectado à porta 5000");
})


// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());



app.post("/series", async (req, res) => {
  try {
    console.log(req.body);
  } catch (e) {
    console.log(e);
  }
})


// app.post("/series", async (req, res) => {
//   try {
//     const { id } = req.body.id;
//     const { title } = req.body.title;
//     const { description } = req.body.description;
//     const { seasonAmount } = req.body.seasonAmount;
//     const { producer } = req.body.producer;
//     const { director } = req.body.director;
//     const { category } = req.body.category;


//     const newSerie = await pool.query(`INSERT INTO serie VALUES (${id},
//        ${title},
//         ${description},
//          ${seasonAmount},
//          ${producer},
//          ${director},
//          ${category},
//          )`);

//     res.json(newSerie);

//   } catch (err) {
//     console.error(err.message);
//   }
// })


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
    const { serieID } = req.body.id;
    const { title } = req.body.title;
    const { description } = req.body.description;
    const { seasonAmount } = req.body.seasonAmount;

    const updateSerie = await pool.query(`UPDATE serie 
    SET s_id = ${serieID}, 
    s_title = ${title}, 
    s_sinopse = ${description},
    s_season_amount = ${seasonAmount} WHERE s_id = ${id}`);
  } catch (err) {
    console.error(err.message);
  }
})


// delete a serie

