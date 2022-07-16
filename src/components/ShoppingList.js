import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,setItems}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterName, setfilterName] = useState("");
   

  function onFormSubmit(item){
    const newItemList = [...items, item]
   setItems( newItemList)
  }


  
  function handleSearchChange(event) {
    setfilterName(event.target.value)
  }

  function handleAddChange(e) {
    return e.target.value
  }
 

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {

    if (selectedCategory === "All") return true;
     return item.category ===selectedCategory ;
  }).filter(item => {
    if(filterName === ''){
      return true
    } else {
      const name = item.name.toUpperCase()
      return name.includes(filterName.toUpperCase())
    }
  });
  
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onFormSubmit} value={handleAddChange}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
