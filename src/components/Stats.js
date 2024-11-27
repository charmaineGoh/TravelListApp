import { jsPDF } from "jspdf";

function Stats({ items, onClearItems }) {
  const total = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percentage = total === 0 ? 0 : Math.round((packed / total) * 100);

  function handleExportPDF() {
    const doc = new jsPDF();
    doc.text("Packing List", 10, 10);

    if (items.length === 0) {
      doc.text("Your packing list is empty.", 10, 20);
    } else {
      items.forEach((item, index) => {
        doc.text(
          `${index + 1}. ${item.quantity} x ${item.description} ${
            item.packed ? "(Packed)" : "(Not Packed)"
          }`,
          10,
          20 + index * 10
        );
      });
    }

    doc.save("PackingList.pdf");
  }

  return (
    <footer className="stats">
      {total === 0 ? (
        <em>Your packing list is empty. Start adding items!</em>
      ) : percentage === 100 ? (
        <em>You got everything! 🎉</em>
      ) : (
        <em>
          You have {total} items in the list. You already packed {packed} (
          {percentage}%).
        </em>
      )}
      {total > 0 && (
        <>
          <button onClick={onClearItems} style={{ marginLeft: "10px" }}>
            Clear All
          </button>
          <button onClick={handleExportPDF} style={{ marginLeft: "10px" }}>
            Download PDF
          </button>
        </>
      )}
    </footer>
  );
}

export default Stats;
