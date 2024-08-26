import React from "react";

interface SpeedControlProps {
  onSpeedUp: () => void;
  onSlowDown: () => void;
  isDisabled: boolean;
}

const SpeedControl = ({
  onSpeedUp,
  onSlowDown,
  isDisabled,
}: SpeedControlProps) => {
  return (
    <aside className="flex flex-col">
      <button
        onClick={onSpeedUp}
        type="button"
        disabled={isDisabled}
        className={`focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ${
          isDisabled && "opacity-50 cursor-not-allowed"
        }`}
      >
        Speed Up! 🚀
      </button>
      <button
        onClick={onSlowDown}
        type="button"
        disabled={isDisabled}
        className={`focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ${
          isDisabled && "opacity-50 cursor-not-allowed"
        }`}
      >
        Slowwww Down! 🐌
      </button>
    </aside>
  );
};

export default SpeedControl;
