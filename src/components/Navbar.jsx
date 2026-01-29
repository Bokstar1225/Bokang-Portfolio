import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
      if (window.innerWidth > 800) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav style={styles.nav}>
        <a href="#hero" style={styles.brand} className="name">
          Bokang Tebjani
        </a>

        {isMobile && (
          <button onClick={() => setOpen(true)} style={styles.menuBtn}>
            ☰
          </button>
        )}

        {!isMobile && (
          <div style={styles.links}>
            {["about", "skills", "projects", "contact"].map(link => (
              <a key={link} href={`#${link}`}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Full screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={styles.overlay}
          >
            <button
              onClick={() => setOpen(false)}
              style={styles.closeBtn}
            >
              ✕
            </button>

            <div style={styles.overlayLinks}>
              {["about", "skills", "projects", "contact"].map(link => (
                <a
                  key={link}
                  href={`#${link}`}
                  onClick={() => setOpen(false)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 1.5rem",
    position: "sticky",
    top: 0,
    background: "#0f172a",
    zIndex: 100
  },

  brand: {
    fontWeight: 600,
    textDecoration: "none",
    color: "#e5e7eb",
  },

  menuBtn: {
    fontSize: "1.8rem",
    background: "none",
    color: "#e5e7eb",
    border: "none",
    cursor: "pointer"
  },

  links: {
    display: "flex",
    gap: "1.5rem",
    fontSize: 18,
    paddingRight: 60
  },

  /* Full screen overlay */
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "#0f172a",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  closeBtn: {
    position: "absolute",
    top: "1.5rem",
    right: "1.5rem",
    fontSize: "2rem",
    background: "none",
    color: "#e5e7eb",
    border: "none",
    cursor: "pointer"
  },

  overlayLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    fontSize: "2rem",
    textAlign: "center"
  }
};
