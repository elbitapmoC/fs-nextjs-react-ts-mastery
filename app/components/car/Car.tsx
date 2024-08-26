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
  const { state, dispatch } = useCarContext();
  const { isRunning, fuel, speed, color, fuelConsumptionRate, timeOnRoad } =
    state;

  // Pass all required arguments
  useCarTimer(isRunning, fuel, timeOnRoad, fuelConsumptionRate, dispatch);

  return (
    <main className="flex flex-col-reverse items-center">
      <Controls />
      <Dashboard
        isRunning={isRunning}
        speed={speed}
        timeOnRoad={timeOnRoad}
        fuel={fuel}
        color={color}
      />
      <FuelWarning fuel={fuel} />
      <SpeedLimitAlert speed={speed} isRunning={isRunning} />
      <MaintenanceReminder timeOnRoad={timeOnRoad} isRunning={isRunning} />
    </main>
  );
};

export default Car;
