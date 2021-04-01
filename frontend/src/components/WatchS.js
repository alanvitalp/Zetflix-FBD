import { useState } from 'react';

import ListWatchS from '../pages/ListWatchS';

const WatchS = () => {
  const [id, setID] = useState(0);
  const [user, setUser] = useState(0);
  const [serie, setSerie] = useState(0);
  const [rating, setRating] = useState(0);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { id, user, serie, rating };

      const response = await fetch("http://localhost:5000/watch_s", {
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
      <h1 className="text-center mt-5">Insert a new rating</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Rating"
          onChange={e => setRating(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="User ID"
          onChange={e => setUser(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Serie ID"
          onChange={e => setSerie(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="ID"
          onChange={e => setID(e.target.value)} />


        <button className="btn btn-success">Add</button>
      </form>

      <ListWatchS />
    </div>
  )
}

export default WatchS;
