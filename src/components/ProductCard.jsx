import WhatsAppButton from "./WhatsAppButton";


export default function ProductCard({ product, addToCart }) {
  return (
    <div style={{
      background: "white",
      padding: 15,
      borderRadius: 10,
      boxShadow: "0 0 10px #ccc"
    }}>
      <img src={product.image} width="100%" />
      <h3>{product.name}</h3>
      <p>₹{product.price}/kg</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <WhatsAppButton product={product} />
    </div>
  );
}
