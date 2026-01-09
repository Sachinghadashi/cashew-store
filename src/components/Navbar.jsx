import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#1b5e20", padding: "12px" }}>
      <Link to="/" style={{ color: "white", marginRight: 20 }}>
        🌰 CashewMart
      </Link>
      <Link to="/products" style={{ color: "white", marginRight: 20 }}>
        Products
      </Link>
      <Link to="/cart" style={{ color: "white" }}>
        Cart
      </Link>
    </nav>
  );
}
