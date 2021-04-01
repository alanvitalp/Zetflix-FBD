import React, { useState, useEffect } from 'react'


import EditStarF from '../components/EditStarF';

const ListStarF = () => {
  const [star, setStar] = useState([]);

  const deleteStar = async (id) => {
    try {
      const deleteStar = await fetch(`http://localhost:5000/star_f/${id}`, {
        method: "DELETE"
      });

      setStar(star.filter(star => star.star_f_id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const getStar = async () => {
    try {
      const response = await fetch("http://localhost:5000/star_f");
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
      <h1 className="text-center mt-5">List Star Film</h1>
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>Actor ID</th>
            <th>Film ID</th>
            <th>Star ID</th>
          </tr>
        </thead>
        <tbody>
          {star.map((star, id) => (
            <tr key={star.star_f_id}>
              <td>{star.a_id}</td>
              <td>{star.f_id}</td>
              <td>{star.star_f_id}</td>

              <td><EditStarF star={star} /></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteStar(star.star_f_id)}
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

export default ListStarF;