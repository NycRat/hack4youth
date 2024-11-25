import DataChart from "@/components/data-chart";
import PageTitle from "@/components/page-title";

export default function DataPage() {
  return (
    <main className="p-4 space-y-4">
      <PageTitle>Your Progress</PageTitle>
      <DataChart category="cardio" />
      <div className="text-center">Cardio</div>

      <DataChart category="weights" />
      <div className="text-center">Weights</div>

      {/* <DataChart category="nutrients" /> */}
    </main>
  );
}
