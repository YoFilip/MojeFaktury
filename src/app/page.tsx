"use client";

import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Tiles } from "@/components/ui/tiles";
import { SliderSection } from "@/components/ui/slider";
import { TextGradientScroll } from "@/components/ui/scrollText";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("description");

  return (
    <>
      <Header />
      <Hero />
      <SliderSection />
      <div className="w-full py-0 xl:py-30">
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto flex justify-center items-center">
            <TextGradientScroll
              className="text-sm xl:text-2xl leading-relaxed font-kalam text-center justify-center"
              text={t("longText")}
            />
          </div>
        </div>
      </div>
      <div className="h-[100vh]" aria-hidden="true" />
    </>
  );
}
