import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { PointerHighlight } from "@/components/pointer-highlight";
import { items } from "@/data/card-items";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4 flex items-center justify-center gap-2 pb-2">
          <PointerHighlight
            pointerClassName="text-[#05aa44]"
            containerClassName="inline-block"
          >
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://peerlist.io/challenges/interaction-design-challenge-aug25"
              }
              className=" bg-clip-text bg-gradient-to-b dark:from-neutral-200 dark:via-neutral-200 dark:to-neutral-600 from-neutral-600 via-neutral-700 to-neutral-900 px-2 text-transparent"
            >
              Peerlist
            </Link>
          </PointerHighlight>
          <span>Interactive Design Challenge</span>
        </h1>
        <p className="text-xs md:text-base text-neutral-700 dark:text-neutral-300 font-light mb-2">
          Explore a collection of creative UI components built in 7 days. Each
          card below showcases a unique design and interaction, crafted for the
          Peerlist challenge.
        </p>
      </div>
      <BentoGrid className="max-w-4xl w-full mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            link={item.link}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
