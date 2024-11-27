function Stats({ items, onClearItems }) {
    const total = items.length;
    const packed = items.filter((item) => item.packed).length;
    const percentage = total === 0 ? 0 : Math.round((packed / total) * 100);
  
    return (
      <footer className="stats">
        {total === 0 ? (
          <em>Your packing list is empty. Start adding items!</em>
        ) : percentage === 100 ? (
          <em>You got everything! 🎉</em>
        ) : (
          <em>
            You have {total} items in the list. You already packed {packed} ({percentage}%).
          </em>
        )}
        {total > 0 && (
          <button onClick={onClearItems} style={{ marginLeft: "10px" }}>
            Clear All
          </button>
        )}
      </footer>
    );
  }
  export default Stats;