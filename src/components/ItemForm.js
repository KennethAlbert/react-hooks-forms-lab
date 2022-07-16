import { v4 as uuid } from "uuid";
import React, { useState } from "react";

function ItemForm({onItemFormSubmit}) {

  const [newItem, setNewItem] = useState({
    id: "",
    name: "",
    category: "Produce",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  }
  
function handleForm(e) {
  e.preventDefault();

    onItemFormSubmit({
      id: uuid(),
      name: newItem.name,
      category: newItem.category,
    });
}

  return (
    <form className="NewItem" onSubmit={handleForm}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
