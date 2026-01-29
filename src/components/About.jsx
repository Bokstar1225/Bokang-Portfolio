import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" style={{marginTop: 265}}>
      <AnimatedSection>
        <h2 style={{textAlign: "center", fontSize: 29}}>About Me</h2>
        <p style={{ maxWidth: "700px", marginTop: "1rem", textAlign: "center", margin: "1rem auto" }}>
          I’m a Software Developer with a strong interest in backend systems,
          FinTech-style applications, and scalable architectures.
          I enjoy turning complex requirements into clean, maintainable solutions.
        </p>

        <p style={{ maxWidth: "700px", marginTop: "1rem", textAlign: "center", margin: "1rem auto" }}>
          My main focus is building real-world applications using technologies
          like ASP.NET Core, React, SQL, and REST APIs. I enjoy working on systems
          that involve business logic, data management, and integration between
          different services.
        </p>
      </AnimatedSection>
    </section>
  );
}
