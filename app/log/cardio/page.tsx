import HealthScoreCarousel from "@/components/health-score-carousel";
import LogForm from "@/app/log/cardio/log-form";
import PageTitle from "@/components/page-title";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BikeIcon, FootprintsIcon, RabbitIcon } from "lucide-react";
import Link from "next/link";

const activities = [
  { name: "walking", icon: <FootprintsIcon /> },
  { name: "running", icon: <RabbitIcon /> },
  { name: "biking", icon: <BikeIcon /> },
];

export default function LogWeightsPage() {
  return (
    <main className="h-[calc(100svh-52px)]">
      <PageTitle className="p-4">Your Cardio</PageTitle>
      <div className="grid grid-rows-2">
        <section className="p-8">
          <HealthScoreCarousel category="cardio" />
        </section>
        <section className="grid grid-rows-3">
          {activities.map((activity) => (
            <div
              key={activity.name}
              className="flex justify-center align-middle"
            >
              <Drawer>
                <DrawerTrigger>
                  <Button variant={"outline"} asChild>
                    {activity.icon} {activity.name}
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Add Cardio Log</DrawerTitle>
                    <DrawerDescription>
                      <LogForm />
                    </DrawerDescription>
                  </DrawerHeader>
                </DrawerContent>
              </Drawer>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
