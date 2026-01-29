import AnimatedSection from "./AnimatedSection";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent! (connect EmailJS or backend later)");
    setForm({ name: "", email: "", message: "" });
  }

  const formWrapper = {
    display: "flex",
    justifyContent: "center"
  }

  return (
    <section id="contact" style={{marginTop: "44px"}}>
      <AnimatedSection>
        <h2 style={{textAlign: "center", fontSize: 29}}>Contact Me</h2>

        <p style={{ margin: "0.5rem 0 2rem", textAlign: "center" }}>
          Interested in working together or have a question?<br></br>
          Feel free to reach out using the form below.
        </p>

        <form onSubmit={handleSubmit} style={formWrapper}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </AnimatedSection>
    </section>
  );
}
