import React, { useState, useEffect } from 'react'


import EditFilm from './EditFilm';

const ListFilms = () => {
  const [films, setFilms] = useState([]);

  const deleteFilm = async (id) => {
    try {
      const deleteFilm = await fetch(`http://localhost:5000/films/${id}`, {
        method: "DELETE"
      });

      setFilms(films.filter(film => film.f_id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const getFilms = async () => {
    try {
      const response = await fetch("http://localhost:5000/films");
      const filmsData = await response.json();

      setFilms(filmsData);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5">List Films</h1>
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Release Day</th>
            <th>Sinopse</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {films.map((films, id) => (
            <tr key={films.f_id}>
              <td>{films.f_id}</td>
              <td>{films.f_title}</td>
              <td>{films.f_rday}</td>
              <td>{films.f_sinopse}</td>
              <td>{films.f_length}</td>
              <td><EditFilm film={films} /></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteFilm(films.f_id)}
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

export default ListFilms;