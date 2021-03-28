import React, { useState, useEffect } from 'react'


import EditSerie from './EditSerie';

const ListSeries = () => {
  const [series, setSeries] = useState([]);




  const deleteSerie = async (id) => {
    try {
      const deleteSerie = await fetch(`http://localhost:5000/series/${id}`, {
        method: "DELETE",
      });

      setSeries(series.filter(serie => serie.s_id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const getSeries = async () => {
    try {
      const response = await fetch("http://localhost:5000/series");
      const seriesData = await response.json();

      setSeries(seriesData);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getSeries();
  }, []);



  return (
    <div>
      <h1 className="text-center mt-5">List Series</h1>
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Sinopse</th>
            <th>seasonAmount</th>
          </tr>
        </thead>
        <tbody>
          {series.map((series, id) => (
            <tr key={series.s_id}>
              <td>{series.s_id}</td>
              <td>{series.s_title}</td>
              <td>{series.s_sinopse}</td>
              <td>{series.s_season_amount}</td>
              <td><EditSerie serie={series} /></td>
              <td><button className="btn btn-danger" onClick={() => deleteSerie(series.s_id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  )
}

export default ListSeries;