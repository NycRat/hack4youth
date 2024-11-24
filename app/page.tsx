import Navbar from "@/components/navbar";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="thin">
        <h1 className="text-6xl">L</h1>
        <ThemeToggleButton />
        <Navbar />
      </section>
    </main>
  );
}
