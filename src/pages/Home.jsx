export default function Home() {
  return (
    <>
      {/* ===== HEADER / HERO SECTION ===== */}
      <header style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.title}>Premium Quality Cashew Nuts</h1>
          <p style={styles.subtitle}>
            Fresh • Organic • Direct from Farmers
          </p>

          <a href="#products">
            <button style={styles.ctaButton}>
              🛒 Explore Products
            </button>
          </a>
        </div>

        <img
          src="https://www.photowant.com/wp-content/uploads/2024/07/DSC09813-scaled.webp"
          alt="Cashew Nuts"
          style={styles.heroImage}
        />
      </header>

      {/* ===== ABOUT SECTION ===== */}
      <section style={styles.about}>
        <h2>Why Choose Our Cashews?</h2>
        <div style={styles.features}>
          <div style={styles.card}>🌱 100% Natural</div>
          <div style={styles.card}>🏭 Hygienic Processing</div>
          <div style={styles.card}>🚚 Fast Delivery</div>
          <div style={styles.card}>💯 Premium Quality</div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} CashewMart</p>
        <p>📞 Contact: +91 98765 43210</p>
        <p>📍 Maharashtra, India</p>
      </footer>
    </>
  );
}

/* ===== INLINE STYLES (Simple & Clean) ===== */
const styles = {
  hero: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "50px 8%",
    background: "linear-gradient(135deg, #e8f5e9, #ffffff)"
  },

  heroContent: {
    maxWidth: "500px"
  },

  title: {
    fontSize: "42px",
    color: "#1b5e20",
    marginBottom: "10px"
  },

  subtitle: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#444"
  },

  ctaButton: {
    background: "#2e7d32",
    color: "#fff",
    padding: "12px 22px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },

  heroImage: {
    width: "420px",
    maxWidth: "100%",
    borderRadius: "10px",
    marginTop: "20px"
  },

  about: {
    padding: "50px 8%",
    textAlign: "center",
    background: "#fafafa"
  },

  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginTop: "30px"
  },

  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    fontSize: "16px"
  },

  footer: {
    background: "#1b5e20",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    marginTop: "40px"
  }
};
