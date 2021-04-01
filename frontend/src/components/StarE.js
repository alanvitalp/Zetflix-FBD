import { useState } from 'react';

import ListStarE from '../pages/ListStarE';

const StarF = () => {
  const [id, setID] = useState(0);
  const [actor, setActor] = useState(0);
  const [episode, setEpisode] = useState(0);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { id, actor, episode };

      const response = await fetch("http://localhost:5000/star_e", {
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
      <h1 className="text-center mt-5">Insert a new episode star</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>

        <input
          type="text"
          className="form-control"
          placeholder="Actor ID"
          onChange={e => setActor(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Episode ID"
          onChange={e => setEpisode(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="ID"
          onChange={e => setID(e.target.value)} />

        <button className="btn btn-success">Add</button>
      </form>

      <ListStarE />
    </div>
  )
}

export default StarF;
