"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["automated", "secure", "intelligent", "simple", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full mt-40 xl:mt-70 ">
      <div className="container mx-auto">
        <div className="flex gap-8  items-center justify-center flex-col">
          {/* Heading + dynamic word */}
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl xl:text-7xl max-w-4xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50 ">
                Invoice processing made
              </span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-accent"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 40 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm xl:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-sm xl:max-w-2xl text-center p-2 xl:p-5">
              Stop wasting hours on manual invoice data entry. MojeFaktury
              extracts key data fields from invoices using AI and lets you
              export everything to Excel or CSV in seconds.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-3" variant="outline" asChild>
              <a href="/dashboard">
                Go to dashboard <Gauge className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" className="gap-3" asChild>
              <a href="/signup">
                Start for free <MoveRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
