export default function WhatsAppButton({ product }) {
  const phoneNumber = "919552879074"; // replace with client's number

  const message = `Hello, I want to order:
Product: ${product.name}
Price: ₹${product.price}/kg`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={whatsappURL} target="_blank">
      <button style={{ background: "#25D366", marginTop: 10 }}>
        📲 Order on WhatsApp
      </button>
    </a>
  );
}
