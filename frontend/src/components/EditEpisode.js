import React, { useState } from 'react'

const EditEpisode = ({ ep }) => {
  const [id, setID] = useState(ep.e_id);
  const [title, setTitle] = useState(ep.e_title);
  const [sinopse, setSinopse] = useState(ep.e_sinopse);
  const [length, setLength] = useState(ep.e_length);
  const [season, setSeason] = useState(ep.season_id);

  const updateEpisode = async (id) => {
    // e.preventDefault();
    try {
      const body = { id, title, sinopse, length, season }
      const response = await fetch(`http://localhost:5000/episode/${id}`, {
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
        data-target={`#id${ep.e_id}`}
      >
        Edit episode

      </button>
      <div className="modal" id={`id${ep.e_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar episodio</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <input type="text"
                className="form-control"
                value={id}
                onChange={(e) => setID(e.target.value)} />
              <input type="text"
                className="form-control"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
              <input type="text"
                className="form-control"
                value={sinopse}
                onChange={(e) => setSinopse(e.target.value)} />
              <input type="text"
                className="form-control"
                value={length}
                onChange={(e) => setLength(e.target.value)} />
              <input type="text"
                className="form-control"
                value={season}
                onChange={(e) => setSeason(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => updateEpisode(ep.e_id)}
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

export default EditEpisode;
