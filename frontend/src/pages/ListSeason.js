import React, { useState, useEffect } from 'react'


import EditSeason from '../components/EditSeason';

const ListSeason = () => {
  const [season, setSeason] = useState([]);

  const deleteSeason = async (id) => {
    try {
      const deleteSeason = await fetch(`http://localhost:5000/season/${id}`, {
        method: "DELETE"
      });

      setSeason(season.filter(season => season.season_id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const getSeason = async () => {
    try {
      const response = await fetch("http://localhost:5000/season");
      const seasonData = await response.json();

      setSeason(seasonData);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getSeason();
  }, []);

  // console.log(category);

  return (
    <div>
      <h1 className="text-center mt-5">List Seasons</h1>
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Season EP's</th>
            <th>Serie ID</th>
          </tr>
        </thead>
        <tbody>
          {season.map((season, id) => (
            <tr key={season.season_id}>
              <td>{season.season_id}</td>
              <td>{season.s_description}</td>
              <td>{season.s_ep_amount}</td>
              <td>{season.s_id}</td>
              <td><EditSeason season={season} /></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteSeason(season.season_id)}
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

export default ListSeason;