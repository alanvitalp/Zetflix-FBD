import React, { useState } from 'react'

const EditStarE = ({ star }) => {
  const [id, setID] = useState(star.star_e_id);
  const [actor, setActor] = useState(star.a_id);
  const [episode, setEpisode] = useState(star.e_id);

  const updateStar = async (id) => {
    // e.preventDefault();
    try {
      const body = { id, actor, episode }
      const response = await fetch(`http://localhost:5000/star_e/${id}`, {
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
        data-target={`#id${star.star_e_id}`}
      >
        Edit Star
      </button>
      <div className="modal" id={`id${star.star_e_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Estrelas</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <input type="text"
                className="form-control"
                value={actor}
                onChange={(e) => setActor(e.target.value)} />

              <input type="text"
                className="form-control"
                value={episode}
                onChange={(e) => setEpisode(e.target.value)} />
              <input type="text"
                className="form-control"
                value={id}
                onChange={(e) => setID(e.target.value)} />

            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => updateStar(star.star_e_id)}
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

export default EditStarE;
