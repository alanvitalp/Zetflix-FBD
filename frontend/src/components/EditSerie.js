import React, { useState } from 'react'




const EditSerie = ({ serie }) => {
  const [id, setID] = useState(serie.s_id);
  const [title, setTitle] = useState(serie.s_title);
  const [description, setDescription] = useState(serie.s_sinopse);
  const [seasonAmount, setSeasonAmount] = useState(serie.s_season_amount);


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
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal">Editar</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditSerie
