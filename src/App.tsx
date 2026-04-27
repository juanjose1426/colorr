import React, { useState } from "react";
import Home from "./assets/Home";

const Original: React.FC = () => {
  return <h2>⚙️ Función original</h2>;
};

const App: React.FC = () => {
  const [view, setView] = useState<"home" | "original">("home");

  return (
    <div>
      {/* MENÚ */}
      <nav style={styles.menu}>
        <button
          onClick={() => setView("home")}
          style={{
            ...styles.button,
            backgroundColor: view === "home" ? "#555" : "transparent",
          }}
        >
          Home
        </button>

        <button
          onClick={() => setView("original")}
          style={{
            ...styles.button,
            backgroundColor: view === "original" ? "#555" : "transparent",
          }}
        >
          Función original
        </button>
      </nav>

      {/* CONTENIDO */}
      <div style={styles.content}>
        {view === "home" ? <Home /> : <Original />}
      </div>
    </div>
  );
};

const styles: {
  menu: React.CSSProperties;
  button: React.CSSProperties;
  content: React.CSSProperties;
} = {
  menu: {
    display: "flex",
    gap: "10px",
    backgroundColor: "#222",
    padding: "10px",
  },
  button: {
    color: "white",
    border: "1px solid white",
    padding: "8px",
    cursor: "pointer",
    background: "transparent",
  },
  content: {
    padding: "20px",
  },
};

export default App;