import AnimatedSection from "./AnimatedSection";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects">
      <AnimatedSection>
        <h2 style={{ textAlign: "center" }}>Projects</h2>

        <div style={grid}>
          {projects.map(project => (
            <div key={project.title} style={card}>
              <h3>{project.title}</h3>
              <p style={{ color: "#cbd5f5" }}>{project.description}</p>

              <div style={tags}>
                {project.tech.map(t => (
                  <span key={t} style={tag}>{t}</span>
                ))}
              </div>

              <div style={buttons}>
                <a href={project.github} target="_blank" style={btn}>
                  <FaGithub /> GitHub
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" style={outlineBtn}>
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
  marginTop: "3rem"
};

const card = {
  background: "linear-gradient(145deg, #020617, #040a1d)",
  border: "1px solid rgba(148,163,184,0.1)",
  borderRadius: "18px",
  padding: "2rem",
  transition: "all 0.3s ease",
  boxShadow: "0 10px 40px rgba(0,0,0,0.4)"
};

const tags = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
  margin: "1.2rem 0"
};

const tag = {
  background: "rgba(56,189,248,0.15)",
  color: "#38bdf8",
  padding: "0.3rem 0.7rem",
  borderRadius: "999px",
  fontSize: "0.75rem"
};

const buttons = {
  display: "flex",
  gap: "1rem",
  marginTop: "1.5rem"
};

const btn = {
  display: "block",
  margin: "auto",
  gap: "0.5rem",
  background: "#38bdf8",
  color: "#020617",
  padding: "0.5rem 1rem",
  borderRadius: "8px"
};

const outlineBtn = {
  ...btn,
  background: "transparent",
  border: "1px solid #38bdf8",
  color: "#38bdf8"
};
