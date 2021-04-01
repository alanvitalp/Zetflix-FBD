import React, { useState, useEffect } from 'react'


import EditActors from '../components/EditActors';

const ListActors = () => {
  const [actors, setActors] = useState([]);

  const deleteActor = async (id) => {
    try {
      const deleteActor = await fetch(`http://localhost:5000/actor/${id}`, {
        method: "DELETE"
      });

      setActors(actors.filter(actor => actor.a_id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const getActors = async () => {
    try {
      const response = await fetch("http://localhost:5000/actor");
      const actorsData = await response.json();

      setActors(actorsData);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getActors();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5">List Actors</h1>
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Death Date</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actors, id) => (
            <tr key={actors.s_id}>
              <td>{actors.a_id}</td>
              <td>{actors.a_name}</td>
              <td>{actors.a_bday}</td>
              <td>{actors.a_dday}</td>
              <td><EditActors actor={actors} /></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteActor(actors.a_id)}
                >
                  Delete
                </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
}

export default ListActors;