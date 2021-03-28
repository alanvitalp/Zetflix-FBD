import { useState } from 'react';

import ListFilms from './ListFilms';

const Films = () => {
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [release, setRelease] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState(0);
  const [producer, setProducer] = useState(0);
  const [category, setCategory] = useState(0);
  const [director, setDirector] = useState(0);


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { id, title, description, release, director, producer, category, length };

      const response = await fetch("http://localhost:5000/films", {
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
      <h1 className="text-center mt-5">Insert a new film</h1>
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
          placeholder="Release Day"
          onChange={e => setRelease(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Sinopse"
          onChange={e => setDescription(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Length"
          onChange={e => setLength(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Producer"
          onChange={e => setProducer(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Category"
          onChange={e => setCategory(e.target.value)}
        />
        <input
          placeholder="Director"
          type="text"
          className="form-control"
          onChange={e => setDirector(e.target.value)} />
        <button className="btn btn-success">Add</button>
      </form>

      <ListFilms />
    </div>
  )
}

export default Films;
