import React, { useCallback } from "react";
import SpeedControl from "./SpeedControl";
import { useCarContext } from "../context/CarContext";

const Controls = () => {
  const { state, dispatch } = useCarContext();
  const { isRunning, fuel, color, speed } = state;

  const buttonClass = "rounded-lg px-5 py-2.5 m-2";

  const handleRunning = () => {
    dispatch({ type: "TOGGLE_RUNNING" });
  };

  const handleChangeColor = useCallback(() => {
    const current = color === "blue" ? "green" : "blue";
    dispatch({ type: "CHANGE_COLOR", payload: current });
  }, [color, dispatch]);

  const handleHonk = () => alert("🪿 Hooonk!");

  const handleSpeedUp = useCallback(() => {
    if (speed < 120) {
      const newSpeed = speed + 5;
      const newFuelConsumptionRate =
        newSpeed >= 120 ? 0.15 : newSpeed >= 60 ? 0.1 : 0.05;
      dispatch({ type: "UPDATE_SPEED", payload: newSpeed });
      dispatch({
        type: "ADJUST_FUEL_CONSUMPTION_RATE",
        payload: newFuelConsumptionRate,
      });
    }
  }, [speed, dispatch]);

  const handleSlowDown = useCallback(() => {
    const newSpeed = Math.max(speed - 5, 1); // Ensure speed does not drop below 1
    const newFuelConsumptionRate =
      newSpeed >= 120 ? 0.15 : newSpeed >= 60 ? 0.1 : 0.05;
    dispatch({ type: "UPDATE_SPEED", payload: newSpeed });
    dispatch({
      type: "ADJUST_FUEL_CONSUMPTION_RATE",
      payload: newFuelConsumptionRate,
    });
  }, [speed, dispatch]);

  return (
    <aside>
      <button
        onClick={handleChangeColor}
        type="button"
        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${buttonClass}`}
      >
        Change Dashboard Color
      </button>

      {isRunning ? (
        <>
          <button
            onClick={handleRunning}
            type="button"
            className={`text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ${buttonClass}`}
          >
            Stop 🚗
          </button>
          <SpeedControl
            onSpeedUp={handleSpeedUp}
            onSlowDown={handleSlowDown}
            isDisabled={!isRunning || fuel <= 0}
          />
        </>
      ) : (
        fuel > 0 && (
          <button
            onClick={handleRunning}
            type="button"
            className={`text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ${buttonClass}`}
          >
            Start 🚗
          </button>
        )
      )}

      <button
        onClick={handleHonk}
        type="button"
        className={`text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-700 ${buttonClass}`}
      >
        Honk
      </button>
    </aside>
  );
};

export default Controls;
