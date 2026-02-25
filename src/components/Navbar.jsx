import { Link } from "react-router-dom";

export default function Navbar({ cartCount = 0 }) {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* LOGO */}
        <Link to="/" style={styles.logo}>
          🌰 PMCashewMart
        </Link>

        {/* NAV LINKS */}
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/products" style={styles.link}>Products</Link>

          <Link to="/cart" style={styles.cartLink}>
            🛒 Cart
            {cartCount > 0 && (
              <span style={styles.badge}>{cartCount}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

/* ===== STYLES ===== */
const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    background: "#1b5e20",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },

  logo: {
    color: "#fff",
    fontSize: "22px",
    fontWeight: "bold",
    textDecoration: "none"
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px"
  },

  cartLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    position: "relative"
  },

  badge: {
    position: "absolute",
    top: "-6px",
    right: "-10px",
    background: "#ffeb3b",
    color: "#000",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
    fontWeight: "bold"
  }
};
