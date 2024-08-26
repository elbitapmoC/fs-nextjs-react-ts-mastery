import React from "react";

interface FuelWarningProps {
  fuel: number;
}

const FuelWarning: React.FC<FuelWarningProps> = ({ fuel }) => {
  return <div>{fuel < 20 && <p>Warning: Low Fuel!</p>}</div>;
};

export default FuelWarning;
