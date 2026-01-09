import WhatsAppButton from "./WhatsAppButton";

export default function ProductCard({ product, addToCart }) {
  return (
    <div style={styles.card}>
      {/* PRODUCT IMAGE */}
      <div style={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
        />
        <span style={styles.priceBadge}>₹{product.price}/kg</span>
      </div>

      {/* PRODUCT INFO */}
      <div style={styles.info}>
        <h3 style={styles.name}>{product.name}</h3>

        <button
          style={styles.cartBtn}
          onClick={() => addToCart(product)}
        >
          🛒 Add to Cart
        </button>

        <WhatsAppButton product={product} />
      </div>
    </div>
  );
}

/* ===== STYLES ===== */
const styles = {
  card: {
    background: "#fff",
    borderRadius: "14px",
    overflow: "hidden",
    boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease",
  },

  imageWrapper: {
    position: "relative",
    overflow: "hidden"
  },

  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    transition: "transform 0.4s ease"
  },

  priceBadge: {
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "#1b5e20",
    color: "#fff",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "14px"
  },

  info: {
    padding: "16px",
    textAlign: "center"
  },

  name: {
    fontSize: "18px",
    marginBottom: "14px",
    color: "#333"
  },

  cartBtn: {
    width: "100%",
    background: "#2e7d32",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    cursor: "pointer",
    marginBottom: "10px"
  }
};
