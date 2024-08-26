"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface CarContextProps {
  color: string;
  setColor: (color: string) => void;
  timeOnRoad: number;
  setTimeOnRoad: (time: number) => void;
  isRunning: boolean;
  setIsRunning: (running: boolean) => void;
  fuel: number;
  setFuel: (fuel: number) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  fuelConsumptionRate: number;
  setFuelConsumptionRate: (rate: number) => void;
}

const CarContext = createContext<CarContextProps | undefined>(undefined);

const CarProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState<string>("red");
  const [timeOnRoad, setTimeOnRoad] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [fuel, setFuel] = useState<number>(100);
  const [fuelConsumptionRate, setFuelConsumptionRate] = useState<number>(0.05);
  const [speed, setSpeed] = useState<number>(5);

  return (
    <CarContext.Provider
      value={{
        color,
        setColor,
        timeOnRoad,
        setTimeOnRoad,
        isRunning,
        setIsRunning,
        fuel,
        setFuel,
        speed,
        setSpeed,
        fuelConsumptionRate,
        setFuelConsumptionRate,
      }}
    >
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

export { CarProvider, useCarContext };
