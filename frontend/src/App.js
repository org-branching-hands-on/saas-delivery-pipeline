import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/items")
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div>
      <h1>Lista de Itens</h1>
      <ItemForm onAdd={setItems} />
      <ItemList items={items} />
    </div>
  );
}
export default App;
