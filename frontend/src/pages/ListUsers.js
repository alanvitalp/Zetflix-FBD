import React, { useState, useEffect } from 'react'
import EditUser from '../components/EditUser';

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  const deleteUser = async (id) => {
    try {
      const deleteUser = await fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE"
      });

      const filterUsers = users.filter((user) => user.u_id !== id);

      setUsers(filterUsers);

    } catch (e) {
      console.log(e);
    }
  }

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const usersData = await response.json();

      setUsers(usersData);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // console.log(category);

  return (
    <div>
      <h1 className="text-center mt-5">List users</h1>
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => (
            <tr key={user.u_id}>
              <td>{user.u_id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.u_type}</td>
              <td><EditUser users={user} /></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.u_id)}
                >
                  Delete
                </button></td>
            </tr>

          ))}
        </tbody>
      </table>
    </div >
  )
}

export default ListUsers;