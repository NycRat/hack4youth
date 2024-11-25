import HealthScoreCarousel from "@/components/health-score-carousel";
import PageTitle from "@/components/page-title";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LogForm from "./log-form";
import { Plus } from "lucide-react";

export default function LogWeightsPage() {
  return (
    <main className="h-[calc(100svh-52px)] flex flex-col">
      <PageTitle className="p-4">Weightlifting</PageTitle>
      <section className="p-8">
        <HealthScoreCarousel category="weights" />
      </section>
      <div className="flex justify-center align-middle flex-1">
        <Sheet>
          <SheetTrigger>
            <Button variant={"outline"} asChild>
              <Plus />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Log Exercise</SheetTitle>
              <SheetDescription>
                <LogForm />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
}
