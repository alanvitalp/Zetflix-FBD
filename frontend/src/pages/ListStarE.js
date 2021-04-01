import React, { useState, useEffect } from 'react'


import EditStarE from '../components/EditStarE';

const ListStarE = () => {
  const [star, setStar] = useState([]);

  const deleteStar = async (id) => {
    try {
      const deleteStar = await fetch(`http://localhost:5000/star_e/${id}`, {
        method: "DELETE"
      });

      setStar(star.filter(star => star.star_e_id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const getStar = async () => {
    try {
      const response = await fetch("http://localhost:5000/star_e");
      const starData = await response.json();

      setStar(starData);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getStar();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5">List Star Episode</h1>
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Actor ID</th>
            <th>Episode ID</th>
          </tr>
        </thead>
        <tbody>
          {star.map((star, id) => (
            <tr key={star.s_id}>
              <td>{star.a_id}</td>
              <td>{star.e_id}</td>
              <td>{star.star_e_id}</td>
              <td><EditStarE star={star} /></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteStar(star.star_e_id)}
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

export default ListStarE;