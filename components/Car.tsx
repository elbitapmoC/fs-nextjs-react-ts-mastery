"use client";

import React, { useState, useEffect } from "react";
import styles from "./Car.module.css";

const Car = () => {
  const [color, setColor] = useState("red");
  const [timeOnRoad, setTimeOnRoad] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [fuel, setFuel] = useState(100);
  const [speedometer, setSpeedometer] = useState(0);

  useEffect(() => {
    if (!isRunning) return; // Exit early if the car is not running

    const timer = setInterval(() => {
      setTimeOnRoad((prevTime) => prevTime + 1);
      setFuel((prevFuel) => Math.max(prevFuel - 0.5, 0)); // Deduct fuel over time
    }, 1000);

    return () => clearInterval(timer); // Cleanup on stop or unmount
  }, [isRunning]);

  const handleRunning = () => {
    setIsRunning((prevRunning) => !prevRunning);
  };

  const handleChangeColor = () => {
    setColor((prevColor) => (prevColor === "blue" ? "green" : "blue"));
  };

  const handleHonk = () => {
    alert("🪿 Hooonk!");
  };

  const handleSpeedUp = () => {
    setSpeedometer((prevSpeed) => prevSpeed + 5);
  };

  const handleSlowDown = () => {
    setSpeedometer((prevSpeed) => prevSpeed - 5);
  };

  return (
    <>
      <aside>
        <button
          onClick={handleChangeColor}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Change Dashboard Color
        </button>

        {isRunning ? (
          <>
            <button
              onClick={handleRunning}
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Stop 🚗
            </button>
            <aside>
              <button
                onClick={handleSpeedUp}
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Speed Up! 🚀
              </button>
              <button
                onClick={handleSlowDown}
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Slowwww Down! 🐌
              </button>
            </aside>
          </>
        ) : (
          <>
            <button
              onClick={handleRunning}
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Start 🚗
            </button>
          </>
        )}
        <button
          onClick={handleHonk}
          type="button"
          className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-700"
        >
          Honk
        </button>
      </aside>

      <div className={`${styles.car} ${styles[color]}`}>Car</div>
      {isRunning ? (
        <>
          <p>Have driven for {timeOnRoad} seconds</p>
          <p>Fuel: {fuel}%</p>
        </>
      ) : (
        <p>The car is resting now... 🚗💤</p>
      )}
    </>
  );
};

export default Car;
