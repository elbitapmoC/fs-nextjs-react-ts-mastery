import React from "react";

const FuelWarning = ({ fuel }: { fuel: number }) => {
  return fuel < 15 && <p className="text-red-500">Warning: Low Fuel! ⛽️</p>;
};

export default FuelWarning;
