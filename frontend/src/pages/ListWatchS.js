import React, { useState, useEffect } from 'react'


import EditRateS from '../components/EditRateS';

const ListWatchS = () => {
  const [rating, setRating] = useState([]);

  const deleteRating = async (id) => {
    try {
      const deleteRating = await fetch(`http://localhost:5000/watch_s/${id}`, {
        method: "DELETE"
      });

      setRating(rating.filter(rate => rate.watch_s_id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const getRate = async () => {
    try {
      const response = await fetch("http://localhost:5000/watch_s");
      const rateData = await response.json();

      setRating(rateData);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getRate();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5">List Ratings</h1>
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>Rating</th>
            <th>User ID</th>
            <th>Serie ID</th>
            <th>Watch Serie ID</th>
          </tr>
        </thead>
        <tbody>
          {rating.map((rate, id) => (
            <tr key={rate.watch_s_id}>
              <td>{rate.rating_s}</td>
              <td>{rate.u_id}</td>
              <td>{rate.s_id}</td>
              <td>{rate.watch_s_id}</td>
              <td><EditRateS rate={rate} /></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteRating(rate.watch_s_id)}
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

export default ListWatchS;