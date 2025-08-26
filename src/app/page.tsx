import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { PointerHighlight } from "@/components/pointer-highlight";
import { items } from "@/data/card-items";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-12 dark:bg-black">
      <div className="mb-10 w-full max-w-2xl text-center">
        <h1 className="text-md mb-4 flex items-center justify-center gap-2 pb-2 font-extrabold tracking-tight text-neutral-900 md:text-4xl dark:text-neutral-100">
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
              className="bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-900 bg-clip-text px-2 text-transparent dark:from-neutral-200 dark:via-neutral-200 dark:to-neutral-600"
            >
              Peerlist
            </Link>
          </PointerHighlight>
          <span>Interactive Design Challenge</span>
        </h1>
        <p className="mb-2 text-xs font-light text-neutral-700 md:text-base dark:text-neutral-300">
          Explore a collection of creative UI components built in 7 days. Each
          card below showcases a unique design and interaction, crafted for the
          Peerlist challenge.
        </p>
      </div>
      <BentoGrid className="mx-auto w-full max-w-4xl">
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
