import React, { useState } from 'react'

const EditSerie = ({ film }) => {
  const [id, setID] = useState(film.f_id);
  const [title, setTitle] = useState(film.f_title);
  const [release, setRelease] = useState(film.f_rday);
  const [description, setDescription] = useState(film.f_sinopse);
  const [length, setLength] = useState(film.f_length);
  const [producer, setProducer] = useState(film.p_id);
  const [category, setCategory] = useState(film.c_id);
  const [director, setDirector] = useState(film.d_id);


  const updateFilm = async (id) => {
    // e.preventDefault();
    try {
      const body = { id, title, description, release, length, producer, category, director }
      const response = await fetch(`http://localhost:5000/films/${id}`, {
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
        data-target={`#id${film.f_id}`}
      >
        Edit Film

      </button>
      <div className="modal" id={`id${film.f_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Filme</h4>
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
                value={release}
                onChange={(e) => setRelease(e.target.value)} />
              <input type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)} />
              <input type="text"
                className="form-control"
                value={length}
                onChange={(e) => setLength(e.target.value)} />
              <input type="text"
                className="form-control"
                value={producer}
                onChange={(e) => setProducer(e.target.value)} />
              <input type="text"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)} />
              <input type="text"
                className="form-control"
                value={director}
                onChange={(e) => setDirector(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => updateFilm(film.f_id)}
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
