import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AddItemForm = () => {


    return (
        <div className="AddItemForm">
          <form id='addItemForm'>
            Add Menu Item
            <label>Item:
              <input type='text' name='item'/>
            </label>
            <label>Category: 
              <input type='text' name='category'/>
            </label>
            <label>Price: 
              <input type='number' name='price'/>
            </label>
            <button type='submit'>Add</button>       
          </form>  
        </div>
    )    
}

export default AddItemForm;