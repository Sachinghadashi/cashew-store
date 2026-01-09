export default function Cart({ cart }) {
  const phoneNumber = "919552879074";

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const orderMessage = cart
    .map((item, i) => `${i + 1}. ${item.name} - ₹${item.price}/kg`)
    .join("\n");

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hello, I want to place this order:\n\n${orderMessage}\n\nTotal: ₹${totalAmount}`
  )}`;

  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>🛒 Your Cart</h2>

      {/* EMPTY CART */}
      {cart.length === 0 && (
        <div style={styles.empty}>
          <p style={{ fontSize: 18 }}>Your cart is empty</p>
          <p style={{ color: "#666" }}>Add some delicious cashews 🌰</p>
        </div>
      )}

      {/* CART ITEMS */}
      {cart.length > 0 && (
        <>
          <div style={styles.cartBox}>
            {cart.map((item, index) => (
              <div key={index} style={styles.item}>
                <span>{item.name}</span>
                <strong>₹{item.price}</strong>
              </div>
            ))}

            <div style={styles.total}>
              <span>Total Amount</span>
              <strong>₹{totalAmount}</strong>
            </div>
          </div>

          {/* WHATSAPP BUTTON */}
          <a href={whatsappURL} target="_blank" rel="noreferrer">
            <button style={styles.whatsappBtn}>
              📲 Order on WhatsApp
            </button>
          </a>
        </>
      )}
    </div>
  );
}

/* ===== STYLES ===== */
const styles = {
  page: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "20px"
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#1b5e20"
  },

  empty: {
    textAlign: "center",
    background: "#f5f5f5",
    padding: "40px",
    borderRadius: "10px"
  },

  cartBox: {
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    padding: "20px"
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #eee"
  },

  total: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    marginTop: "15px",
    paddingTop: "15px",
    borderTop: "2px solid #ddd"
  },

  whatsappBtn: {
    marginTop: "25px",
    width: "100%",
    padding: "14px",
    fontSize: "18px",
    background: "#25D366",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }
};
