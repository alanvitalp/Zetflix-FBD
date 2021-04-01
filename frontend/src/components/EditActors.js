import React, { useState } from 'react'

const EditActors = ({ actor }) => {
  const [id, setID] = useState(actor.a_id);
  const [bday, setBday] = useState(actor.a_bday);
  const [dday, setDday] = useState(actor.a_dday);
  const [name, setName] = useState(actor.a_dday);

  const updateActor = async (id) => {
    // e.preventDefault();
    try {
      const body = { id, bday, dday, name }
      const response = await fetch(`http://localhost:5000/actor/${id}`, {
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
        data-target={`#id${actor.a_id}`}
      >
        Edit Actor

      </button>
      <div className="modal" id={`id${actor.a_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Ator(a)</h4>
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
                value={bday}
                onChange={(e) => setBday(e.target.value)} />
              <input type="text"
                className="form-control"
                value={dday}
                onChange={(e) => setDday(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => updateActor(actor.a_id)}
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

export default EditActors;
