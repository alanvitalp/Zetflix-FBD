import React, { useState, useEffect } from 'react'

import EditEpisode from '../components/EditEpisode';

const ListEpisode = () => {
  const [episode, setEpisode] = useState([]);

  const deleteEpisode = async (id) => {
    try {
      const deleteEpisode = await fetch(`http://localhost:5000/episode/${id}`, {
        method: "DELETE"
      });

      setEpisode(episode.filter(ep => ep.e_id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const getEpisode = async () => {
    try {
      const response = await fetch("http://localhost:5000/episode");
      const epData = await response.json();

      setEpisode(epData);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEpisode();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5">List Episodes</h1>
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Sinopse</th>
            <th>Length</th>
            <th>Season ID</th>
          </tr>
        </thead>
        <tbody>
          {episode.map((ep, id) => (
            <tr key={ep.d_id}>
              <td>{ep.e_id}</td>
              <td>{ep.e_title}</td>
              <td>{ep.e_sinopse}</td>
              <td>{ep.e_length}</td>
              <td>{ep.season_id}</td>
              <td><EditEpisode ep={ep} /></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEpisode(ep.e_id)}
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

export default ListEpisode;