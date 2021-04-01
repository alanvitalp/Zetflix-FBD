import React, { useState } from 'react'

const EditCategory = ({ category }) => {
  const [id, setID] = useState(category.c_id);
  const [description, setDescription] = useState(category.c_description);
  const [type, setType] = useState(category.c_type);


  const updateCategory = async (id) => {
    // e.preventDefault();
    try {
      const body = { id, description, type }
      const response = await fetch(`http://localhost:5000/category/${id}`, {
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
        data-target={`#id${category.c_id}`}
      >
        Edit Category

      </button>
      <div className="modal" id={`id${category.c_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar categoria</h4>
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
                value={type}
                onChange={(e) => setType(e.target.value)} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={() => updateCategory(category.c_id)}
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

export default EditCategory;
