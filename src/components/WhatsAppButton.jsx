export default function WhatsAppButton({ product }) {
  const phoneNumber = "919552879074";

  const message = `Hello, I want to order:
Product: ${product.name}
Price: ₹${product.price}/kg`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <button style={styles.button}>
        💬 Order on WhatsApp
      </button>
    </a>
  );
}

/* ===== STYLES ===== */
const styles = {
  button: {
    width: "100%",
    background: "#25D366",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "6px",
    fontSize: "15px",
    cursor: "pointer"
  }
};
