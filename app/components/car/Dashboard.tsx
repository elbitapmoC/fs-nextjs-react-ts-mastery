import React from "react";
// import styles from "./car.module.css";

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
  return (
    <aside className="m-2">
      <p className={`car ${color}`}>Car</p>
      {isRunning ? (
        <>
          <p>Speed: {speed} km/h</p>
          <p>Have driven for {timeOnRoad} seconds</p>
          <p>Fuel: {fuel.toFixed(2)}%</p>{" "}
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
