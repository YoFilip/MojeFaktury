"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { SliderSection } from "@/components/ui/slider";
import { TextGradientScroll } from "@/components/ui/scrollText";
import { Cards } from "@/components/ui/cards";
import { Pricing } from "@/components/pricingCard";
const Home = React.memo(() => {
  const t = useTranslations("description");

  return (
    <main role="main">
      <Header />
      <Hero />
      <SliderSection />
      <section
        className="w-full py-0 xl:py-30 mb-20"
        aria-labelledby="description-section"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-8xl mx-auto flex justify-center items-center">
            <TextGradientScroll
              className="text-sm xl:text-2xl leading-relaxed font-kalam text-center justify-center"
              text={t("longText")}
            />
          </div>
        </div>
      </section>
      <Cards />
      <section
        className="w-full py-10 xl:py-30 mb-20"
        aria-labelledby="pricing-section"
      >
        <Pricing />
      </section>
      []
    </main>
  );
});

Home.displayName = "Home";

export default Home;
