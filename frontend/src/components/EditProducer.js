import React, { useState } from 'react'

const EditProducer = ({ producer }) => {
  const [id, setID] = useState(producer.p_id);
  const [name, setName] = useState(producer.p_name);
  const [contact, setContact] = useState(producer.p_con);
  const [website, setWebsite] = useState(producer.p_web);
  const [address, setAddress] = useState(producer.p_adr);


  const updateProducer = async (id) => {
    // e.preventDefault();
    try {
      const body = { id, name, contact, website, address }
      const response = await fetch(`http://localhost:5000/producer/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      console.log(response);

    } catch (err) {

      console.error(err.message);
    }
  }

  return (
    <div>
      <button type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${producer.p_id}`}
      >
        Edit Producer

      </button>
      <div className="modal" id={`id${producer.p_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Produtora</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <input type="text"
                className="form-control"
                value={id}
                onChange={(e) => setID(e.target.value)} />
              <input type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)} />
              <input type="text"
                className="form-control"
                value={contact}
                onChange={(e) => setContact(e.target.value)} />
              <input type="text"
                className="form-control"
                value={website}
                onChange={(e) => setWebsite(e.target.value)} />
              <input type="text"
                className="form-control"
                value={address}
                onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => updateProducer(producer.p_id)}
              >
                Editar</button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProducer
