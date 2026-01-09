import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products({ addToCart }) {
  return (
    <div className="container">
      <h2>Our Cashews</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
