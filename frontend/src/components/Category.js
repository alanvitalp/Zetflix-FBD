import { useState } from 'react';

import ListCategory from '../pages/ListCategory';

const Category = () => {
  const [id, setID] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { id, type, description };

      const response = await fetch("http://localhost:5000/category", {
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
      <h1 className="text-center mt-5">Insert a new category</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="ID"
          onChange={e => setID(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          onChange={e => setDescription(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Type"
          onChange={e => setType(e.target.value)} />
        <button className="btn btn-success">Add</button>
      </form>

      <ListCategory />
    </div>
  )
}

export default Category;
