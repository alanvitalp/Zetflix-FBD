import React, { useState, useEffect } from 'react'


import EditRate from '../components/EditRate';

const ListWatchF = () => {
  const [rating, setRating] = useState([]);

  const deleteRating = async (id) => {
    try {
      const deleteRating = await fetch(`http://localhost:5000/watch_f/${id}`, {
        method: "DELETE"
      });

      setRating(rating.filter(rate => rate.watch_f_id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const getRate = async () => {
    try {
      const response = await fetch("http://localhost:5000/watch_f");
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
            <th>Film ID</th>
            <th>Watch Film ID</th>
          </tr>
        </thead>
        <tbody>
          {rating.map((rate, id) => (
            <tr key={rate.watch_f_id}>
              <td>{rate.rating_f}</td>
              <td>{rate.u_id}</td>
              <td>{rate.f_id}</td>
              <td>{rate.watch_f_id}</td>
              <td><EditRate rate={rate} /></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteRating(rate.watch_f_id)}
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

export default ListWatchF;