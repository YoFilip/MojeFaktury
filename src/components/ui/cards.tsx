"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface CardContent {
  title: string;
  description: string;
}

interface PlusCardProps {
  className?: string;
  title: string;
  description: string;
}

const PlusCard = React.memo<PlusCardProps>(
  ({ className = "", title, description }) => {
    return (
      <div
        className={cn(
          "relative border border-dashed border-zinc-400 dark:border-zinc-700 rounded-lg p-6 bg-white dark:bg-zinc-950 min-h-[200px]",
          "flex flex-col justify-between transition-colors duration-200 hover:border-zinc-500 dark:hover:border-zinc-600",
          className
        )}
      >
        <CornerPlusIcons />
        <div className="relative z-10 space-y-2">
          <h3 className="text-lg xl:text-xl font-bold text-gray-900 font-kalam dark:text-gray-100">
            {title}
          </h3>
          <p className="text-sm xl:text-xl text-gray-700 dark:text-gray-300 font-kalam leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    );
  }
);

PlusCard.displayName = "PlusCard";

const CornerPlusIcons = React.memo(() => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
));

CornerPlusIcons.displayName = "CornerPlusIcons";

const PlusIcon = React.memo<{ className?: string }>(({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={cn("dark:text-white text-black size-6", className)}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
));

PlusIcon.displayName = "PlusIcon";

export const Cards = React.memo(function Cards() {
  const t = useTranslations("cards");
  const cardContents: CardContent[] = React.useMemo(
    () => [
      { title: t("title1"), description: t("description1") },
      { title: t("title2"), description: t("description2") },
      { title: t("title3"), description: t("description3") },
      { title: t("title4"), description: t("description4") },
      { title: t("title5"), description: t("description5") },
    ],
    [t]
  );
  const gridClasses = React.useMemo(
    () => [
      "lg:col-span-3 lg:row-span-2",
      "lg:col-span-2 lg:row-span-2",
      "lg:col-span-4 lg:row-span-1",
      "lg:col-span-2 lg:row-span-1",
      "lg:col-span-2 lg:row-span-1",
    ],
    []
  );
  return (
    <section
      className="bg-white dark:bg-transparent dark:border-gray-800"
      aria-labelledby="cards-section-title"
    >
      <div className="mx-auto container dark:border-gray-800 border-t-0 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-4">
          {cardContents.map((card, idx) => (
            <PlusCard
              key={card.title + idx}
              title={card.title}
              description={card.description}
              className={gridClasses[idx]}
            />
          ))}
        </div>
        <div className="hidden xl:block max-w-2xl ml-auto text-left xl:text-right px-2 xl:px-4 mt-6 lg:-mt-20">
          <h2
            id="cards-section-title"
            className="text-xl md:text-6xl xl:text-6xl font-bold font-kalam text-black dark:text-white mb-4"
          >
            {t("sectionTitle")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 font-kalam text-lg leading-relaxed">
            {t("sectionDescription")}
          </p>
        </div>
      </div>
    </section>
  );
});

Cards.displayName = "Cards";
