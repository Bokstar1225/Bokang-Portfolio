import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="about-section">
      <AnimatedSection>
        <div className="about-heading">
          <h2 className="about-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-copy">
            <p>
              I’m a full-stack developer who enjoys solving practical problems
              with clean, dependable software. I’m especially interested in
              backend development, FinTech-style applications, and the systems
              that help products grow.
            </p>
            <p>
              I work with ASP.NET Core, React, SQL, and REST APIs to build
              applications where thoughtful business logic, well-structured
              data, and a clear user experience fit together. I value solutions
              that are maintainable today and ready to evolve tomorrow.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
