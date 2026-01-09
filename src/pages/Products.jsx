import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products({ addToCart }) {
  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <h2 style={styles.title}>🌰 Our Premium Cashews</h2>
        <p style={styles.subtitle}>
          Handpicked • Fresh • Best Quality
        </p>
      </div>

      {/* PRODUCTS GRID */}
      <div style={styles.grid}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

/* ===== STYLES ===== */
const styles = {
  page: {
    padding: "40px 8%",
    background: "#fafafa",
    minHeight: "100vh"
  },

  header: {
    textAlign: "center",
    marginBottom: "40px"
  },

  title: {
    fontSize: "32px",
    color: "#1b5e20",
    marginBottom: "8px"
  },

  subtitle: {
    color: "#555",
    fontSize: "16px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px"
  }
};
