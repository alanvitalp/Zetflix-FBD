import React, { useState, useEffect } from 'react'


import EditProducer from '../components/EditProducer';

const ListProducers = () => {
  const [producers, setProducers] = useState([]);

  const deleteProducer = async (id) => {
    try {
      const deleteProducer = await fetch(`http://localhost:5000/producer/${id}`, {
        method: "DELETE"
      });

      setProducers(producers.filter(producer => producer.p_id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const getProducers = async () => {
    try {
      const response = await fetch("http://localhost:5000/producer");
      const producerData = await response.json();

      setProducers(producerData);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProducers();
  }, []);

  return (
    <div>
      <h1 className="text-center mt-5">List Producers</h1>
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Website</th>
            <th>Adress</th>
          </tr>
        </thead>
        <tbody>
          {producers.map((producers, id) => (
            <tr key={producers.p_id}>
              <td>{producers.p_id}</td>
              <td>{producers.p_name}</td>
              <td>{producers.p_con}</td>
              <td>{producers.p_web}</td>
              <td>{producers.p_adr}</td>
              <td><EditProducer producer={producers} /></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProducer(producers.p_id)}
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

export default ListProducers;