import { useState } from 'react';

import ListActors from '../pages/ListActors';

const Actors = () => {
  const [id, setID] = useState(0);
  const [bday, setBday] = useState("");
  const [dday, setDday] = useState("");
  const [name, setName] = useState("");


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { id, bday, dday, name };

      const response = await fetch("http://localhost:5000/actor", {
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
      <h1 className="text-center mt-5">Insert a new Actor(a)</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="ID"
          onChange={e => setID(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={e => setName(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Birth Date"
          onChange={e => setBday(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Death Date"
          onChange={e => setDday(e.target.value)} />

        <button className="btn btn-success">Add</button>
      </form>

      <ListActors />
    </div>
  )
}

export default Actors;
