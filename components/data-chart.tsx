"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { getGlobalState } from "@/lib/state";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function Component({ category }: { category: string }) {
  const chartData = getGlobalState(category);

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="datetime"
          tickLine={false}
          minTickGap={32}
          tickFormatter={(value) => {
            const date = new Date(value);
            return date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });
          }}
        />
        {category == "weights" ? (
          <>
            <Bar dataKey="set-1" fill="var(--color-mobile)" radius={4} />
            <Bar dataKey="set-2" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="set-3" fill="var(--color-mobile)" radius={4} />
            <Bar dataKey="rpe" fill="var(--color-desktop)" radius={4} />
          </>
        ) : (
          <>
            <Bar dataKey="duration" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="distance" fill="var(--color-mobile)" radius={4} />
          </>
        )}
      </BarChart>
    </ChartContainer>
  );
}
