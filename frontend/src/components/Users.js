import { useState } from 'react';

import ListUsers from '../pages/ListUsers';

const Users = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");


  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { name, email, type };

      const response = await fetch("http://localhost:5000/users", {
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
      <h1 className="text-center mt-5">Insert a new user</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          onChange={e => setName(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)} />
        <input
          type="text"
          className="form-control"
          placeholder="Type"
          onChange={e => setType(e.target.value)} />

        <button className="btn btn-success">Add</button>
      </form>

      <ListUsers />
    </div>
  )
}

export default Users;
