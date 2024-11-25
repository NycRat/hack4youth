import DataChart from "@/components/data-chart";
import PageTitle from "@/components/page-title";

export default function DataPage() {
  return (
    <main className="p-4 space-y-4">
      <PageTitle>Your Progress</PageTitle>
      <DataChart category="cardio" />
      <DataChart category="weights" />
      <DataChart category="nutrients" />
    </main>
  );
}
