"use client";
import React from "react";
import { PlusIcon, ShieldCheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BorderTrail } from "@/components/ui/borderTrail";

export function Pricing() {
  return (
    <section className="relative min-h-screen overflow-hidden py=0">
      <div id="pricing" className="mx-auto w-full space-y-5 px-5 xl:px-20 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl space-y-5"
        >
          <h2 className="mt-5 text-center text-2xl font-bold tracking-tighter md:text-3xl lg:text-5xl font-kalam">
            Pricing Based on Your Success
          </h2>
          <p className="text-muted-foreground mt-5 text-center text-base md:text-lg font-kalam">
            We offer a single price for all our services. We believe that
            pricing is a critical component of any successful business.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-6xl space-y-2"
          >
            <div className="grid md:grid-cols-2 bg-background relative gap-5 border border-dashed border-zinc-400 dark:border-zinc-700 rounded-lg p-4 min-h-[200px]  flex-col justify-between transition-colors duration-200 hover:border-zinc-500 dark:hover:border-zinc-600">
              <PlusIcon className="absolute -top-3 -left-3" />
              <PlusIcon className="absolute -top-3 -right-3" />
              <PlusIcon className="absolute -bottom-3 -left-3" />
              <PlusIcon className="absolute -bottom-3 -right-3" />

              <div className="w-full px-4 pt-5 pb-4 rounded-lg border">
                <div className="space-y-1 ">
                  <div className="flex items-center justify-between">
                    <h3 className="leading-none font-semibold text-lg md:text-xl font-kalam">
                      Monthly
                    </h3>
                    <div className="flex items-center gap-x-1">
                      <span className="text-muted-foreground text-base line-through font-kalam">
                        $10.00
                      </span>
                      <Badge className="font-kalam">25% off</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-base font-kalam">
                    Standard monthly plan. Teraz tylko $7.50/miesiąc!
                  </p>
                </div>
                <div className="mt-10 space-y-4">
                  <div className="text-muted-foreground flex items-end gap-0.5 text-2xl font-kalam">
                    <span className="font-kalam">$</span>
                    <span className="text-foreground -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-5xl font-kalam">
                      7.50
                    </span>
                    <span className="font-kalam">/month</span>
                  </div>
                  <Button
                    className="w-full font-kalam"
                    variant="outline"
                    asChild
                  >
                    <a className="font-kalam" href="#">
                      Start Your Journey
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative w-full rounded-lg border px-4 pt-5 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="leading-none font-semibold text-lg md:text-xl font-kalam">
                      Yearly
                    </h3>
                    <div className="flex items-center gap-x-1">
                      <span className="text-muted-foreground text-base line-through font-kalam">
                        $120.00
                      </span>
                      <Badge className="font-kalam">60% off</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-base font-kalam">
                    Pay yearly and save 60%! Teraz tylko $48/rok!
                  </p>
                </div>
                <div className="mt-10 space-y-4">
                  <div className="text-muted-foreground flex items-end text-2xl font-kalam">
                    <span className="font-kalam">$</span>
                    <span className="text-foreground -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-5xl ml-1 font-kalam">
                      48.00
                    </span>
                    <span className="font-kalam">/year</span>
                  </div>
                  <Button className="w-full font-kalam" asChild>
                    <a className="font-kalam" href="#">
                      Get Started Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-muted-foreground flex items-center justify-center gap-x-2 text-base font-kalam">
              <ShieldCheckIcon className="size-4" />
              <span className="font-kalam">
                Access to all features with no hidden fees
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
