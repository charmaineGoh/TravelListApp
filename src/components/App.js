import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./Packinglist";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {

    setItems((prevItems) => [...prevItems, newItem]);
  }
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  function handleUpdateItem(id, updatedItem) {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? updatedItem : item))
    );
  }
  function handleTogglePacked(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    setItems([]); 
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onTogglePacked={handleTogglePacked} />
      <Stats items={items} onClearItems={handleClearItems}/>
    </div>
  );
}

export default App;


