export default function FloatingWhatsApp() {
  const phoneNumber = "919552879074";
  const message = "Hello, I want to know about cashew prices.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "#25D366",
        color: "white",
        padding: "12px 16px",
        borderRadius: "50px",
        fontSize: 18,
        zIndex: 1000
      }}
    >
      💬 WhatsApp
    </a>
  );
}
