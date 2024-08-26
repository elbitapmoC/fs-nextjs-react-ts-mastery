"use client";

import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define the state shape and action types
interface CarState {
  color: string;
  speed: number; // Speed should start at 1
  fuel: number;
  isRunning: boolean;
  fuelConsumptionRate: number;
  timeOnRoad: number;
}

type Action =
  | { type: "CHANGE_COLOR"; payload: string }
  | { type: "UPDATE_SPEED"; payload: number }
  | { type: "ADJUST_FUEL"; payload: number }
  | { type: "TOGGLE_RUNNING"; payload: boolean }
  | { type: "SET_TIME_ON_ROAD"; payload: number }
  | { type: "ADJUST_FUEL_CONSUMPTION_RATE"; payload: number };

// Initial state
const initialState: CarState = {
  color: "red",
  speed: 1, // Set initial speed to 1
  fuel: 100,
  isRunning: false,
  fuelConsumptionRate: 0.05,
  timeOnRoad: 0,
};

// Reducer function
const carReducer = (state: CarState, action: Action): CarState => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "UPDATE_SPEED":
      return { ...state, speed: action.payload };
    case "ADJUST_FUEL":
      return { ...state, fuel: action.payload };
    case "TOGGLE_RUNNING":
      return { ...state, isRunning: !state.isRunning };
    case "SET_TIME_ON_ROAD":
      return { ...state, timeOnRoad: action.payload };
    case "ADJUST_FUEL_CONSUMPTION_RATE":
      return { ...state, fuelConsumptionRate: action.payload };
    default:
      return state;
  }
};

// Create context
const CarContext = createContext<
  | {
      state: CarState;
      dispatch: React.Dispatch<Action>;
    }
  | undefined
>(undefined);

const CarProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
};

const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("useCarContext must be used within a CarProvider");
  }
  return context;
};

export { CarProvider, useCarContext, type Action };
