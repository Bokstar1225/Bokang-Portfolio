import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section style={{marginTop: 130}} id="hero">
      <AnimatedSection>
        <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", textAlign: "center" }}>
          Full-Stack Developer
        </h1>

        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          I build secure, scalable web applications with a strong backend <br></br> focus.
          Experienced in ASP.NET Core, React, SQL, and cloud-ready architectures.
        </p>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#projects" style={primaryBtn}>View Projects</a>
          <a href="https://github.com/Bokstar1225" style={outlineBtn}>GitHub</a>
        </div>
      </AnimatedSection>
    </section>
  );
}

const primaryBtn = {
  padding: "0.75rem 1.6rem",
  background: "#38bdf8",
  color: "#020617",
  borderRadius: "6px"
};

const outlineBtn = {
  ...primaryBtn,
  background: "transparent",
  border: "1px solid #38bdf8",
  color: "#38bdf8"
};
