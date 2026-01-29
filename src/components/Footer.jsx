export default function Footer() {
  return (
    <footer style={footer}>
      <p>© {new Date().getFullYear()} Bokang Tebjani</p>
    </footer>
  );
}

const footer = {
  textAlign: "center",
  padding: "2rem 1rem",
  background: "#020617",
  marginTop: "4rem",
  color: "#94a3b8"
};
