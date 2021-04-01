import { useState } from 'react';

import ListSeason from '../pages/ListSeason';

const Series = () => {
  const [id, setID] = useState(0);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [serie, setSerie] = useState(0);


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { id, description, amount, serie };

      const response = await fetch("http://localhost:5000/season", {
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
      <h1 className="text-center mt-5">Insert a new season</h1>
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
          onChange={e => setDescription(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Ep Amount"
          onChange={e => setAmount(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Serie ID"
          onChange={e => setSerie(e.target.value)} />

        <button className="btn btn-success">Add</button>
      </form>

      <ListSeason />
    </div>
  )
}

export default Series;
