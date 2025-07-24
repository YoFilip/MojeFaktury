import Image from "next/image";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Tiles } from "@/components/ui/tiles";
import { SliderSection } from "@/components/ui/slider";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SliderSection />
    </>
  );
}
