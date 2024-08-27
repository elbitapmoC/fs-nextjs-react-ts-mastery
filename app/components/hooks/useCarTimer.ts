import { useEffect, useRef } from "react";
import { Action } from "../context/CarContext";

const useCarTimer = (
  isRunning: boolean,
  fuel: number,
  timeOnRoad: number,
  fuelConsumptionRate: number,
  dispatch: React.Dispatch<Action>
) => {
  const isRunningRef = useRef(isRunning);

  useEffect(() => {
    // Store the current running state in a ref to avoid triggering the effect every render
    isRunningRef.current = isRunning;

    if (!isRunning || fuel <= 0) {
      if (fuel <= 0 && isRunningRef.current) {
        dispatch({ type: "TOGGLE_RUNNING", payload: false });
        dispatch({ type: "UPDATE_SPEED", payload: 0 });
      }
      return;
    }

    const timer = setInterval(() => {
      // Use refs or local state to avoid re-triggering the effect
      if (fuel > 0) {
        const newTimeOnRoad = timeOnRoad + 1;
        const newFuel = Math.max(fuel - (fuelConsumptionRate + 10), 0);

        dispatch({ type: "SET_TIME_ON_ROAD", payload: newTimeOnRoad });
        dispatch({ type: "ADJUST_FUEL", payload: newFuel });

        if (newFuel <= 0) {
          clearInterval(timer);
          dispatch({ type: "TOGGLE_RUNNING", payload: false });
          dispatch({ type: "UPDATE_SPEED", payload: 0 });
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [fuel, fuelConsumptionRate, timeOnRoad, dispatch, isRunning]);
};

export default useCarTimer;
