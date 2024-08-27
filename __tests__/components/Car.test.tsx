import "@testing-library/jest-dom"; // Importing jest-dom for custom matchers

import { render, screen, fireEvent } from "@testing-library/react";
import Car from "../../app/components/car/Car";
import { CarProvider } from "../../app/components/context/CarContext";
import React from "react";

describe("Car Component", () => {
  it("renders the car component correctly", () => {
    render(
      <CarProvider>
        <Car />
      </CarProvider>
    );

    expect(screen.getByText(/The car is parked/i)).toBeInTheDocument();
  });

  it("changes the car state when starting the car", () => {
    render(
      <CarProvider>
        <Car />
      </CarProvider>
    );

    fireEvent.click(screen.getByText(/Start 🚗/i));
    expect(screen.getByText(/Have driven for/i)).toBeInTheDocument();
  });

  it("changes the dashboard color when the button is clicked", () => {
    render(
      <CarProvider>
        <Car />
      </CarProvider>
    );

    const carElement = screen.getByTestId("car-element");

    // Check the initial color class (assuming it's blue initially)
    expect(carElement).toHaveClass("text-red-500");

    // Simulate changing the dashboard color
    fireEvent.click(screen.getByText(/Change Dashboard Color/i));

    // Now, check if the color has changed to green
    expect(carElement).toHaveClass("text-blue-500");
  });
});
