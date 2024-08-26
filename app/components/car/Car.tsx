"use client";

import React from "react";
import Controls from "./Controls";
import Dashboard from "./Dashboard";
import FuelWarning from "./FuelWarning";
import SpeedLimitAlert from "./SpeedLimitAlert";
import MaintenanceReminder from "./MaintenanceReminder";
import { useCarContext } from "../context/CarContext";
import useCarTimer from "../hooks/useCarTimer";

const Car = () => {
  const {
    isRunning,
    fuel,
    timeOnRoad,
    setIsRunning,
    setFuel,
    setSpeed,
    setTimeOnRoad,
    fuelConsumptionRate,
    speed,
    color, // Correctly included color here
  } = useCarContext();

  useCarTimer(
    isRunning,
    fuel,
    timeOnRoad,
    fuelConsumptionRate,
    setIsRunning,
    setFuel,
    setSpeed,
    setTimeOnRoad
  );

  return (
    <main className="flex flex-col-reverse items-center">
      <Controls />
      <Dashboard
        isRunning={isRunning}
        speed={speed}
        timeOnRoad={timeOnRoad}
        fuel={fuel}
        color={color} // Passed color prop to Dashboard
      />
      <FuelWarning fuel={fuel} />
      <SpeedLimitAlert speed={speed} isRunning={isRunning} />
      <MaintenanceReminder timeOnRoad={timeOnRoad} isRunning={isRunning} />
    </main>
  );
};

export default Car;
