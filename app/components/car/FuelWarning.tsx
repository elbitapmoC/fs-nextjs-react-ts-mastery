import React from "react";

interface FuelWarningProps {
  fuel: number;
  isRunning: boolean;
}

const FuelWarning: React.FC<FuelWarningProps> = ({ fuel, isRunning }) => {
  return <div>{fuel < 20 && isRunning && <p>Warning: Low Fuel!</p>}</div>;
};

export default FuelWarning;
