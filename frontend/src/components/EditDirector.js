import React, { useState } from 'react'

const EditDirector = ({ director }) => {
  const [id, setID] = useState(director.d_id);
  const [bday, setBday] = useState(director.d_bday);
  const [dday, setDday] = useState(director.d_dday);
  const [name, setName] = useState(director.d_name);

  const updateDirector = async (id) => {
    // e.preventDefault();
    try {
      const body = { id, bday, dday, name }
      const response = await fetch(`http://localhost:5000/director/${id}`, {
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
        data-target={`#id${director.d_id}`}
      >
        Edit Director

      </button>
      <div className="modal" id={`id${director.d_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Diretor</h4>
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
                onClick={() => updateDirector(director.d_id)}
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

export default EditDirector;
