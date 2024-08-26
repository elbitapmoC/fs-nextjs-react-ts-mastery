import React from "react";

const MaintenanceReminder = ({
  timeOnRoad,
  isRunning,
}: {
  timeOnRoad: number;
  isRunning: boolean;
}) => {
  return (
    timeOnRoad > 350 &&
    isRunning && (
      <p className="text-blue-500">Reminder: Time for maintenance! 🛠️</p>
    )
  );
};

export default MaintenanceReminder;
