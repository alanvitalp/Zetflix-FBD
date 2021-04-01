import React, { useState } from 'react'

const EditRate = ({ rate }) => {
  const [id, setID] = useState(rate.watch_f_id);
  const [film, setFilm] = useState(rate.f_id);
  const [user, setUser] = useState(rate.u_id);
  const [rating, setRating] = useState(rate.rating_f);


  const updateRating = async (id) => {
    // e.preventDefault();
    try {
      const body = { id, film, user, rating }
      const response = await fetch(`http://localhost:5000/watch_f/${id}`, {
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
        data-target={`#id${rate.watch_f_id}`}
      >
        Edit Rating

      </button>
      <div className="modal" id={`id${rate.watch_f_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Avaliação</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <input type="text"
                className="form-control"
                value={rating}
                onChange={(e) => setRating(e.target.value)} />
              <input type="text"
                className="form-control"
                value={user}
                onChange={(e) => setUser(e.target.value)} />
              <input type="text"
                className="form-control"
                value={film}
                onChange={(e) => setFilm(e.target.value)} />
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
                onClick={() => updateRating(rate.watch_f_id)}
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

export default EditRate;
