import HealthScoreCarousel from "@/components/health-score-carousel";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PlusIcon } from "@radix-ui/react-icons";

export default function LogWeightsPage() {
  return (
    <main>
      <section className="p-8">
        <HealthScoreCarousel />
      </section>
      <Sheet>
        <SheetTrigger>
          <Button variant={"outline"} asChild>
            <PlusIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </main>
  );
}
