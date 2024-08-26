import React from 'react';

const SpeedLimitAlert = ({
  speed,
  isRunning,
}: {
  speed: number;
  isRunning: boolean;
}) => {
  return (
    speed > 100 &&
    isRunning && <p className="text-yellow-500">Caution: Speeding! 🚓</p>
  );
};

export default SpeedLimitAlert;
