import React, { useState, useEffect } from 'react'


import EditCategory from '../components/EditCategory';

const ListCategory = () => {
  const [category, setCategory] = useState([]);

  const deleteCategory = async (id) => {
    try {
      const deleteCategory = await fetch(`http://localhost:5000/category/${id}`, {
        method: "DELETE"
      });

      setCategory(category.filter(category => category.c_id !== id));

    } catch (err) {
      console.error(err.message);
    }
  };

  const getCategory = async () => {
    try {
      const response = await fetch("http://localhost:5000/category");
      const categoryData = await response.json();

      setCategory(categoryData);

    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  // console.log(category);

  return (
    <div>
      <h1 className="text-center mt-5">List categories</h1>
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {category.map((category, id) => (
            <tr key={category.c_id}>
              <td>{category.c_id}</td>
              <td>{category.c_description}</td>
              <td>{category.c_type}</td>
              <td><EditCategory category={category} /></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCategory(category.c_id)}
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

export default ListCategory;