"use client";

import React, { useState, useEffect } from "react";
import SpeedControl from "./SpeedControl";
import Dashboard from "./Dashboard";

const Car = () => {
  const [color, setColor] = useState<string>("red");
  const [timeOnRoad, setTimeOnRoad] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [fuel, setFuel] = useState<number>(100);
  const [fuelConsumptionRate, setFuelConsumptionRate] = useState<number>(0.25);
  const [speed, setSpeed] = useState<number>(0);

  useEffect(() => {
    if (!isRunning || fuel <= 1) {
      if (fuel <= 1) {
        setIsRunning(false);
        setFuel(0);
        setSpeed(0);
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeOnRoad((prevTime) => prevTime + 1);
      setFuel((prevFuel) => Math.max(prevFuel - fuelConsumptionRate, 0)); // Ensure fuel doesn't go negative
    }, 1000);

    return () => clearInterval(timer); // Cleanup on stop or unmount
  }, [isRunning, fuel, fuelConsumptionRate]);

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
    if (fuel > 0 && speed < 120) {
      setFuelConsumptionRate((prevRate) => Math.min(prevRate + 0.2, 2)); // Cap fuel consumption rate
      setSpeed((prevSpeed) => Math.min(prevSpeed + 5, 120)); // Cap speed at 120 km/h
    }
  };

  const handleSlowDown = () => {
    setFuelConsumptionRate((prevRate) => Math.max(prevRate - 0.2, 0.25)); // Ensure consumption rate doesn't go below initial
    setSpeed((prevSpeed) => Math.max(prevSpeed - 5, 0)); // Ensure speed doesn't go negative
  };

  return (
    <main className="flex flex-col-reverse items-center">
      <aside>
        <button
          onClick={handleChangeColor}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Change Dashboard Color
        </button>

        {isRunning ? (
          <>
            <button
              onClick={handleRunning}
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Stop 🚗
            </button>
            <SpeedControl
              onSpeedUp={handleSpeedUp}
              onSlowDown={handleSlowDown}
              isDisabled={!isRunning || fuel <= 0}
            />
          </>
        ) : (
          fuel > 0 && (
            <button
              onClick={handleRunning}
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Start 🚗
            </button>
          )
        )}
        <button
          onClick={handleHonk}
          type="button"
          className="flex focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-700"
        >
          Honk
        </button>
      </aside>

      <Dashboard
        isRunning={isRunning}
        speed={speed}
        timeOnRoad={timeOnRoad}
        fuel={fuel}
        color={color}
      />
    </main>
  );
};

export default Car;
