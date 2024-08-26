import { useEffect } from "react";
import { Action } from "../context/CarContext";

const useCarTimer = (
  isRunning: boolean,
  fuel: number,
  timeOnRoad: number,
  fuelConsumptionRate: number,
  dispatch: React.Dispatch<Action>
) => {
  useEffect(() => {
    if (!isRunning || fuel <= 0) return;

    console.log("Timer started");
    const timer = setInterval(() => {
      const newTimeOnRoad = timeOnRoad + 1;
      const newFuel = Math.max(fuel - fuelConsumptionRate, 0);

      console.log(`Time on road: ${newTimeOnRoad}, Fuel: ${newFuel}`);

      dispatch({ type: "SET_TIME_ON_ROAD", payload: newTimeOnRoad });
      dispatch({ type: "ADJUST_FUEL", payload: newFuel });
    }, 1000);

    return () => {
      console.log("Timer stopped");
      clearInterval(timer);
    };
  }, [isRunning, fuel, timeOnRoad, fuelConsumptionRate, dispatch]);
};

export default useCarTimer;
