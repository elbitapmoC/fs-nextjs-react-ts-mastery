"use client";

import { useEffect } from "react";

const useCarTimer = (
  isRunning: boolean,
  fuel: number,
  timeOnRoad: number,
  fuelConsumptionRate: number,
  setIsRunning: (running: boolean) => void,
  setFuel: (fuel: number) => void,
  setSpeed: (speed: number) => void,
  setTimeOnRoad: (time: number) => void
) => {
  useEffect(() => {
    if (!isRunning || fuel <= 1) {
      if (fuel <= 1) {
        setIsRunning(false); // Stop the car when fuel is too low
        setFuel(0); // Ensure fuel doesn't go below 0
        setSpeed(0); // Stop the car
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeOnRoad(timeOnRoad + 1); // Increment time on the road

      // Explicitly typing prevFuel as number
      setFuel(Math.max(fuel - fuelConsumptionRate, 0)); // Reduce fuel over time
    }, 1000); // Timer interval set to 1 second

    return () => clearInterval(timer); // Clean up the timer on component unmount or if conditions change
  }, [
    isRunning,
    fuel,
    timeOnRoad,
    fuelConsumptionRate,
    setTimeOnRoad,
    setFuel,
    setSpeed,
    setIsRunning,
  ]);
};

export default useCarTimer;
