
function Item({ item, onDeleteItem, onTogglePacked}) {
    return (
      <li style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={item.packed} // Controlled by the item's packed state
          onChange={() => onTogglePacked(item.id)} // Update packed status on change
        />
        {item.quantity} x {item.description}
        <button onClick={() => onDeleteItem(item.id)}>
          X
        </button>
        
      </li>
    );
  }
  