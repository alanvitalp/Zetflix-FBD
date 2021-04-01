import React, { useState } from 'react'

const EditUser = ({ users }) => {
  const [username, setUsername] = useState(users.name);
  const [email, setEmail] = useState(users.email);
  const [type, setType] = useState(users.u_type);

  const updateUser = async (id) => {
    // e.preventDefault();
    try {
      const body = { username, email, type }
      const response = await fetch(`http://localhost:5000/users/${id}`, {
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
        data-target={`#id${users.u_id}`}
      >
        Edit User

      </button>
      <div className="modal" id={`id${users.u_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Editar Usuário</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <input type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
              <input type="text"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
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
                onClick={() => updateUser(users.u_id)}
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

export default EditUser;
