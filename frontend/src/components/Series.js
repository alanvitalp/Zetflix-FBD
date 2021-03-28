import { useState } from 'react';

import ListSeries from './ListSeries';

const Series = () => {
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [seasonAmount, setSeasonAmount] = useState(0);
  const [director, setDirector] = useState(0);
  const [producer, setProducer] = useState(0);
  const [category, setCategory] = useState(0);


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { id, title, description, seasonAmount, director, producer, category };

      const response = await fetch("http://localhost:5000/series", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      console.log(response);

    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div>
      <h1 className="text-center mt-5">Insert a new serie</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="ID"
          onChange={e => setID(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          onChange={e => setTitle(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Sinopse"
          onChange={e => setDescription(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="SeasonAmount"
          onChange={e => setSeasonAmount(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Producer"
          onChange={e => setProducer(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Director"
          onChange={e => setDirector(e.target.value)}
        />
        <input
          placeholder="Category"
          type="text"
          className="form-control"
          onChange={e => setCategory(e.target.value)} />
        <button className="btn btn-success">Add</button>
      </form>

      <ListSeries />
    </div>
  )
}

export default Series;
