import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Gauge } from "@mui/x-charts/Gauge";

const data = [
  {
    time: "Today",
    score: 50,
  },
  {
    time: "This Week",
    score: 75,
  },
  {
    time: "This Month",
    score: 80,
  },
  {
    time: "All Time",
    score: 70,
  },
];

export default function HealthScoreCarousel() {
  return (
    <Carousel className="w-4/5 max-w-xs m-auto">
      <CarouselContent>
        {data.map((info, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <h2 className="text-center">{info.time}</h2>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <Gauge value={info.score} cornerRadius="50%" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
