import Image from "next/image";
import weights from "@/photos/weights.webp";
import cardio from "@/photos/cardio.webp";
import nutrition from "@/photos/nutrition.webp";
import Link from "next/link";

const items = [
  { name: "weights", image: weights },
  { name: "cardio", image: cardio },
  { name: "nutrition", image: nutrition },
];

export default function LogPage() {
  return (
    <main className="grid grid-rows-3 h-[calc(100svh-52px)]">
      {items.map((item) => (
        <Link
          key={item.name}
          className="relative bg-black"
          href={`/log/${item.name}`}
        >
          {/* <Image src={item.image} alt={item.name} className="object-cover" /> */}
          <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/2 text-white text-3xl">
            {item.name}
          </h2>
        </Link>
      ))}
    </main>
  );
}
