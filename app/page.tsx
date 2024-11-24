import HealthScoreCarousel from "@/components/health-score-carousel";

export default function Home() {
  return (
    <main>
      <section className="thin">
        <h1 className="text-4xl font-black text-center">proTrackr</h1>
        <HealthScoreCarousel />
      </section>
    </main>
  );
}
