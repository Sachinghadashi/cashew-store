export default function FloatingWhatsApp() {
  const phoneNumber = "919552879074";
  const message = "Hello, I want to know about cashew prices.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      style={styles.button}
      aria-label="Chat on WhatsApp"
    >
      <span style={styles.icon}>💬</span>
    </a>
  );
}

/* ===== STYLES ===== */
const styles = {
  button: {
    position: "fixed",
    bottom: "22px",
    right: "22px",
    width: "60px",
    height: "60px",
    background: "#25D366",
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px",
    boxShadow: "0 6px 14px rgba(0,0,0,0.25)",
    textDecoration: "none",
    zIndex: 1000,
    transition: "transform 0.3s ease"
  },

  icon: {
    lineHeight: 1
  }
};
