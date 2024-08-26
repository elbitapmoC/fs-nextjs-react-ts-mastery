import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import Dashboard from "../../app/components/car/Dashboard";
import { CarProvider } from "../../app/components/context/CarContext";

describe("Dashboard Component", () => {
  it("renders fuel level correctly", () => {
    render(
      <CarProvider>
        <Dashboard
          fuel={50}
          speed={60}
          color="red"
          timeOnRoad={30}
          isRunning={false}
        />
      </CarProvider>
    );

    expect(screen.getByText(/Fuel Level: 50%/i)).toBeInTheDocument();
    expect(screen.getByText(/Current Speed: 60 km\/h/i)).toBeInTheDocument();
  });
});
