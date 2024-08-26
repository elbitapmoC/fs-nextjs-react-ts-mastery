import React from "react";

const MaintenanceReminder = ({ timeOnRoad }: { timeOnRoad: number }) => {
  return (
    timeOnRoad > 150 && (
      <p className="text-blue-500">Reminder: Time for maintenance! 🛠️</p>
    )
  );
};

export default MaintenanceReminder;
