import { useState } from 'react';

import ListEpisode from '../pages/ListEpisode';

const Episode = () => {
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [length, setLength] = useState(0);
  const [season, setSeason] = useState(0);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { id, title, sinopse, length, season };

      const response = await fetch("http://localhost:5000/episode", {
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
      <h1 className="text-center mt-5">Insert a new episode</h1>
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
          onChange={e => setSinopse(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Length"
          onChange={e => setLength(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="seasonID"
          onChange={e => setSeason(e.target.value)} />
        <button className="btn btn-success">Add</button>
      </form>

      <ListEpisode />
    </div>
  )
}

export default Episode;
