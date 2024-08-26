import { CarProvider } from "./components/context/CarContext"; // Ensure this is correct
import Car from "./components/car/Car"; // Ensure the path is correct and case-sensitive

export default function Home() {
  return (
    <CarProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <Car />
        </section>
      </main>
    </CarProvider>
  );
}
