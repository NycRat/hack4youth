"use client";

import { calculateOverallHealthScore } from "@/lib/utils";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

export default function Home() {
  return (
    <main className="p-4 h-[calc(100svh-52px)]">
      <h1 className="text-4xl font-black text-center">proTrackr</h1>

      <section className="flex justify-center align-middle h-5/6">
        <div className="aspect-square w-3/4 m-auto text-center space-y-2">
          <Gauge
            value={calculateOverallHealthScore()}
            cornerRadius="50%"
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 40,
                color: "red",
              },
            }}
          />
          <h2>Today's Health Score</h2>
        </div>
      </section>
      {/* <HealthScoreCarousel /> */}
    </main>
  );
}
