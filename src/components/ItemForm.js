import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({onItemFormSubmit}) {
  // controlled input states
   const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce"); // initial value for select


 // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: uuid(),       // unique ID
      name: itemName,   // from state
      category: itemCategory,
    };

    // Pass the new item to the parent via callback prop
    onItemFormSubmit(newItem);
      // Reset form fields after submission
    setItemName("");
    setItemCategory("Produce");
  }


  return (
     <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemName}                      // controlled value
          onChange={(e) => setItemName(e.target.value)}  // update state on change
          required                            // optionally require input
          placeholder="Enter item name"
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory}                 // controlled value
          onChange={(e) => setItemCategory(e.target.value)} // update state on change
        >
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
