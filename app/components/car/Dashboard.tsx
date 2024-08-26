import React from "react";

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

  return (
    <aside className="m-2">
      <p className={`car ${colorClassMap[color]}`}>Car</p>
      {isRunning ? (
        <>
          <p>Speed: {speed} km/h</p>
          <p>Have driven for {timeOnRoad} seconds</p>
          <p>Fuel: {fuel.toFixed(2)}%</p>
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
