import React, { useState, useEffect } from 'react'

import EditDirector from '../components/EditDirector';

const ListDirector = () => {
  const [director, setDirector] = useState([]);

  const deleteDirector = async (id) => {
    try {
      const deleteDirector = await fetch(`http://localhost:5000/director/${id}`, {
        method: "DELETE"
      });

      setDirector(director.filter(director => director.d_id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const getDirector = async () => {
    try {
      const response = await fetch("http://localhost:5000/director");
      const directorData = await response.json();

      setDirector(directorData);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDirector();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5">List Directors</h1>
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
          {director.map((director, id) => (
            <tr key={director.d_id}>
              <td>{director.d_id}</td>
              <td>{director.d_name}</td>
              <td>{director.d_bday}</td>
              <td>{director.d_dday}</td>
              <td><EditDirector director={director} /></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteDirector(director.d_id)}
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

export default ListDirector;