import React, { useMemo } from "react";

interface DashboardProps {
  isRunning: boolean;
  speed: number;
  timeOnRoad: number;
  fuel: number;
  color: string;
}

const Dashboard = ({
  isRunning,
  speed,
  timeOnRoad,
  fuel,
  color,
}: DashboardProps) => {
  const colorClassMap: Record<string, string> = {
    red: "text-red-500",
    blue: "text-blue-500",
    green: "text-green-500",
  };

  const fuelEfficiency = useMemo(() => {
    return (speed / fuel).toFixed(2);
  }, [speed, fuel]);

  return (
    <aside className="m-2">
      <p className={`car ${colorClassMap[color]}`} data-testid="car-element">
        Car
      </p>
      {isRunning ? (
        <>
          <p>Speed: {speed} km/h</p>
          <p>Have driven for {timeOnRoad} seconds</p>
          <p>Fuel: {fuel.toFixed(2)}%</p>
          <p>Fuel Efficiency: {fuelEfficiency} km/l</p>
        </>
      ) : fuel <= 0 ? (
        <p>You ran out of gas... ⛽️</p>
      ) : (
        <p>The car is parked... 🚗💤</p>
      )}
    </aside>
  );
};

export default Dashboard;
