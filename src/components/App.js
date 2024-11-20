import { useState } from "react";

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

   
    if (!description.trim()) {
      alert("Description cannot be empty.");
      return;
    }

    
    const newItem = {
      id: Date.now(),
      description: description.trim(),
      quantity,
      packed: false,
    };

   
    onAddItem(newItem);

   
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li style={{ textDecoration: item.packed ? "line-through" : "none" }}>
      {item.quantity} x {item.description}
    </li>
  );
}

function Stats({ items }) {
  const total = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = total === 0 ? 0 : Math.round((packed / total) * 100);

  return (
    <footer className="stats">
      <em>
        You have {total} items in the list. You already packed {packed} ({percentage}%).
      </em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState([]); 

  function handleAddItem(newItem) {
   
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} />
      <Stats items={items} />
    </div>
  );
}

export default App;


