import React from "react";
import { useState } from "react";

const initialItemForm = {
  name: '',
  category: '',
  price: `$${null}`
}

const AddItemForm = () => {
  const [item, setItem] = useState(initialItemForm);
  
  const handleChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    const key = event.target.name;
    setItem({...item, [key]: value});
  }
  
    return (
        <div className="AddItemForm">
          <form id='addItemForm'>
            Add Menu Item
            <label>Item:
              <input type='text' name='name' onChange={handleChange}/>
            </label>
            <label>Category: 
              <input type='text' name='category' onChange={handleChange}/>
            </label>
            <label>Price: 
              $<input type='number' name='price' onChange={handleChange}/>
            </label>
            <button type='submit'>Add</button>       
          </form>  
        </div>
    )    
}

export default AddItemForm;