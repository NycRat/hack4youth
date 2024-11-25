import { getGlobalState } from "@/lib/state";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const chartConfig = {} satisfies ChartConfig;

export default function DataChart({ category }: { category: string }) {
  const chartData = getGlobalState(category);
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="datetime"
              tickLine={false}
              axisLine={false}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />

            <Bar dataKey="duration" fill="var(--chart-3)" radius={4} />
            <Bar dataKey="distance" fill="var(--chart-2)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
