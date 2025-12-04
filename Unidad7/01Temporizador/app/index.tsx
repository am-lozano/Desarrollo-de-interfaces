import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning && secondsLeft > 0) {
      intervalId = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    }

    // Limpieza del intervalo cuando cambian las dependencias o se desmonta el componente
    return () => clearInterval(intervalId);
  }, [isRunning, secondsLeft]);

  const toggleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSecondsLeft(60);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Tiempo restante: {secondsLeft}s</h2>
      <button onClick={toggleStartPause}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={resetTimer} style={{ marginLeft: "8px" }}>
        Reset
      </button>
    </div>
  );
}
