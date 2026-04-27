import React, { useEffect, useState } from "react";
import { ColorAPI } from "./conexion/colorsApi";
import type { Color } from "./conexion/colorsApi";

const Original: React.FC = () => {
  const [correct, setCorrect] = useState<Color | null>(null);
  const [options, setOptions] = useState<Color[]>([]);
  const [result, setResult] = useState("");

  const loadGame = async () => {
    const data = await ColorAPI.getColors();

    if (data.length < 3) return;

    const shuffled = [...data].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);
    const correctColor =
      selected[Math.floor(Math.random() * selected.length)];

    setOptions(selected);
    setCorrect(correctColor);
    setResult("");
  };

  useEffect(() => {
    loadGame();
  }, []);

  const handleAnswer = (option: Color) => {
    if (option.id === correct?.id) {
      setResult("✅ Correcto");
    } else {
      setResult("❌ Incorrecto");
    }
  };

  return (
    <div>
      <h2>🎮 Adivina el color</h2>

      {correct && (
        <>
          <div
            style={{
              width: 150,
              height: 80,
              backgroundColor: correct.color,
              marginBottom: 20,
              border: "2px solid black",
            }}
          />

          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => handleAnswer(opt)}
              style={{ margin: 5 }}
            >
              {opt.title}
            </button>
          ))}

          <p>{result}</p>

          <button onClick={loadGame}>Nuevo juego</button>
        </>
      )}
    </div>
  );
};

export default Original;