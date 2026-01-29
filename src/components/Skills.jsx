import AnimatedSection from "./AnimatedSection";
import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const skills = [
  {
    title: "Frontend",
    icon: <FaCode />,
    items: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Backend",
    icon: <FaServer />,
    items: ["C#", "PHP", "Java", "REST APIs", "ASP.NET Core"]
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    items: ["SQL Server", "MySQL"]
  },
  {
    title: "Tools",
    icon: <FaTools />,
    items: ["Git", "GitHub", "Azure"]
  }
];

export default function Skills() {
  return (
    <section id="skills">
      <AnimatedSection>
        <h2 style={{ textAlign: "center" }}>Skills</h2>

        <div style={grid}>
          {skills.map(skill => (
            <div key={skill.title} style={card}>
              <div style={iconStyle}>{skill.icon}</div>
              <h3>{skill.title}</h3>

              <div style={tags}>
                {skill.items.map(item => (
                  <span key={item} style={tag}>{item}</span>
                ))}
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
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "2rem",
  marginTop: "3rem"
};

const card = {
  background: "linear-gradient(145deg, #020617, #040a1d)",
  border: "1px solid rgba(148,163,184,0.1)",
  borderRadius: "18px",
  padding: "2rem",
  textAlign: "center",
  boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
  transition: "all 0.3s ease"
};

const iconStyle = {
  fontSize: "2.2rem",
  color: "#38bdf8",
  marginBottom: "0.8rem"
};

const tags = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.6rem",
  justifyContent: "center",
  marginTop: "1.2rem"
};

const tag = {
  background: "rgba(56,189,248,0.15)",
  color: "#38bdf8",
  padding: "0.35rem 0.8rem",
  borderRadius: "999px",
  fontSize: "0.75rem"
};
