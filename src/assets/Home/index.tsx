import React, { useEffect, useState } from "react";
import { ColorAPI } from "../../conexion/colorsApi";
import type { Color } from "../../conexion/colorsApi";

const Home: React.FC = () => {
  const [colors, setColors] = useState<Color[]>([]);

  useEffect(() => {
    const loadColors = async () => {
      const data = await ColorAPI.getColors();
      setColors(data);
    };

    loadColors();
  }, []);

  return (
    <div>
      <h2>🎨 Colores</h2>

      {colors.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        colors.map((color) => (
          <div key={color.id} style={{ marginBottom: 15 }}>
            <p>{color.title}</p>

            <div
              style={{
                width: 120,
                height: 60,
                backgroundColor: color.color,
                border: "1px solid black",
                borderRadius: "5px",
              }}
            />

            <p>{color.color}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;