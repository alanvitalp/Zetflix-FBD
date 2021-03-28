import { useState } from 'react';

import ListSeries from './ListSeries';

const Series = () => {
  const [id, setID] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [seasonAmount, setSeasonAmount] = useState(0);


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { id, title, description, seasonAmount };

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
      <h1 className="text-center mt-5">Hello world!</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input type="text" className="form-control" value={id} onChange={e => setID(e.target.value)} />
        <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="text" className="form-control" value={seasonAmount} onChange={e => setSeasonAmount(e.target.value)} />
        <button className="btn btn-success">Add</button>
      </form>

      <ListSeries />
    </div>
  )
}

export default Series;
