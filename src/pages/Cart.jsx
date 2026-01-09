export default function Cart({ cart }) {
  const phoneNumber = "919552879074";

  const orderMessage = cart
    .map(item => `- ${item.name} (₹${item.price}/kg)`)
    .join("\n");

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Hello, I want to place this order:\n${orderMessage}`
  )}`;

  return (
    <div className="container">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <p key={index}>{item.name} - ₹{item.price}</p>
      ))}

      {cart.length > 0 && (
        <a href={whatsappURL} target="_blank">
          <button style={{ background: "#25D366", marginTop: 15 }}>
            📲 Order Full Cart on WhatsApp
          </button>
        </a>
      )}
    </div>
  );
}
