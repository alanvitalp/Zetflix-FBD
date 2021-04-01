import { useState } from 'react';
import ListProducers from '../pages/ListProducers';

const Producer = () => {
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState(0);
  const [address, setAddress] = useState(0);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { id, name, contact, website, address };

      const response = await fetch("http://localhost:5000/producer", {
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
      <h1 className="text-center mt-5">Insert a new producer</h1>
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
          placeholder="Contact"
          onChange={e => setContact(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Website"
          onChange={e => setWebsite(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Address"
          onChange={e => setAddress(e.target.value)} />
        <button className="btn btn-success">Add</button>
      </form>

      <ListProducers />
    </div>
  )
}

export default Producer;
