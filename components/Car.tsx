"use client";

import React, { useState, useEffect } from "react";
import styles from "./Car.module.css";

const Car = () => {
  const [color, setColor] = useState("red");
  const [timeOnRoad, setTimeOnRoad] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return; // Exit early if the car is not running

    const timer = setInterval(() => {
      setTimeOnRoad((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on stop or unmount
  }, [isRunning]);

  const handleRunning = () => {
    setIsRunning((prevRunning) => !prevRunning);
  };

  return (
    <>
      <aside>
        <button
          onClick={() => setColor(color === "blue" ? "green" : "blue")}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Change Dashboard Color
        </button>
        <button
          onClick={handleRunning}
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          {isRunning ? "Stop" : "Start"}
        </button>
      </aside>

      <div className={`${styles.car} ${styles[color]}`}>Car</div>
      <p>
        {isRunning
          ? `Have driven for ${timeOnRoad} seconds`
          : "Parked up atm.."}
      </p>
    </>
  );
};

export default Car;
