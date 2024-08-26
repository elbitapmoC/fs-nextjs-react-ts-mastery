import React from "react";

const SpeedLimitAlert = ({ speed }: { speed: number }) => {
  return (
    speed > 100 && <p className="text-yellow-500">Caution: Speeding! 🚓</p>
  );
};

export default SpeedLimitAlert;
