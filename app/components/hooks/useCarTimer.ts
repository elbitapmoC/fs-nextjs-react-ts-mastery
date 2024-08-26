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

    const timer = setInterval(() => {
      // Calculate the next state values
      const newTimeOnRoad = timeOnRoad + 1;
      const newFuel = Math.max(fuel - fuelConsumptionRate, 0);

      // Dispatch the actions with the new values
      dispatch({ type: "SET_TIME_ON_ROAD", payload: newTimeOnRoad });
      dispatch({ type: "ADJUST_FUEL", payload: newFuel });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, fuel, timeOnRoad, fuelConsumptionRate, dispatch]);
};

export default useCarTimer;
