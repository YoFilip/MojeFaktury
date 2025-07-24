import Image from "next/image";
import { Header } from "@/components/ui/header";
import { Hero } from "@/components/ui/hero";
import { Tiles } from "@/components/ui/tiles";
import { SliderSection } from "@/components/ui/slider";
import { TextGradientScroll } from "@/components/ui/scrollText";

export default function Home() {
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
              text="MojeFaktury is an intelligent SaaS platform that streamlines invoice processing using advanced OCR (Optical Character Recognition) technology. Built for freelancers, accountants, and small businesses, it lets you easily upload invoices in PDF or image formats and automatically extracts key data such as seller and buyer info, invoice number, issue dates, totals, VAT, and itemized rows. Parsed data can be reviewed, edited, and exported directly to Excel or CSV files — ready for use in accounting software or reports. The platform is fully cloud-based, fast, and requires no installation or setup. With MojeFaktury, you eliminate manual data entry, reduce errors, save valuable time, and gain full control over your invoicing workflow. It’s an essential tool for anyone looking to automate repetitive tasks and focus on growing their business."
            />
          </div>
        </div>
      </div>
      <div className="h-[100vh]" aria-hidden="true" />
    </>
  );
}
