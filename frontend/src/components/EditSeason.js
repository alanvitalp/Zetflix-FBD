import React, { useState } from 'react'

const EditSeason = ({ season }) => {
  const [id, setID] = useState(season.season_id);
  const [description, setDescription] = useState(season.s_description);
  const [amount, setAmount] = useState(season.s_ep_amount);
  const [serie, setSerie] = useState(season.s_id);

  const updateEpisode = async (id) => {
    // e.preventDefault();
    try {
      const body = { id, description, amount, serie }
      const response = await fetch(`http://localhost:5000/season/${id}`, {
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
        data-target={`#id${season.season_id}`}
      >
        Edit Season

      </button>
      <div className="modal" id={`id${season.season_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Temporada</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <input type="text"
                className="form-control"
                value={id}
                onChange={(e) => setID(e.target.value)} />
              <input type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
              <input type="text"
                className="form-control"
                value={amount}
                onChange={(e) => setAmount(e.target.value)} />
              <input type="text"
                className="form-control"
                value={serie}
                onChange={(e) => setSerie(e.target.value)} />

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => updateEpisode(season.season_id)}
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

export default EditSeason;
