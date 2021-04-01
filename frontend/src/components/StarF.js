import { useState } from 'react';

import ListStarF from '../pages/ListStarF';

const StarF = () => {
  const [id, setID] = useState(0);
  const [actor, setActor] = useState(0);
  const [film, setFilm] = useState(0);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { id, actor, film };

      const response = await fetch("http://localhost:5000/star_f", {
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
      <h1 className="text-center mt-5">Insert a new film star</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Actor ID"
          onChange={e => setActor(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Film ID"
          onChange={e => setFilm(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Star ID"
          onChange={e => setID(e.target.value)} />
        <button className="btn btn-success">Add</button>
      </form>

      <ListStarF />
    </div>
  )
}

export default StarF;
