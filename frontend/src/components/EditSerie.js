import React, { useState } from 'react'

const EditSerie = ({ serie }) => {
  const [id, setID] = useState(serie.s_id);
  const [title, setTitle] = useState(serie.s_title);
  const [description, setDescription] = useState(serie.s_sinopse);
  const [seasonAmount, setSeasonAmount] = useState(serie.s_season_amount);
  const [director, setDirector] = useState(serie.d_id);
  const [producer, setProducer] = useState(serie.p_id);
  const [category, setCategory] = useState(serie.c_id);



  const updateSerie = async (id) => {
    // e.preventDefault();
    try {
      const body = { id, title, description, seasonAmount, director, producer, category }
      const response = await fetch(`http://localhost:5000/series/${id}`, {
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
        data-target={`#id${serie.s_id}`}
      >
        Edit Serie

      </button>
      <div className="modal" id={`id${serie.s_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar série</h4>
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
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
              <input type="text"
                className="form-control"
                value={seasonAmount}
                onChange={(e) => setSeasonAmount(e.target.value)} />
              <input type="text"
                className="form-control"
                value={producer}
                onChange={(e) => setProducer(e.target.value)} />
              <input type="text"
                className="form-control"
                value={director}
                onChange={(e) => setDirector(e.target.value)} />
              <input type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => updateSerie(serie.s_id)}
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

export default EditSerie
