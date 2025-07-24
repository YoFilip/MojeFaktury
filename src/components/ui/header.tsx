"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigationMenu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "Smart OCR for invoices and documents.",
    },
    {
      title: "About Us",
      href: "/",
      description: "Learn more about the team behind MojeFaktury.",
    },
    {
      title: "Products",
      description: "All the tools you need to simplify your invoice workflow.",
      items: [
        {
          title: "Smart OCR",
          href: "/",
        },
        {
          title: "Data Extraction",
          href: "/",
        },
        {
          title: "Export to CSV/Excel",
          href: "/",
        },
        {
          title: "Invoice History",
          href: "/",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-background">
      <div className="border-border border-b xl:border-none container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <>
                      <NavigationMenuLink asChild>
                        <Link href={item.href}>
                          <Button variant="outline">{item.title}</Button>
                        </Link>
                      </NavigationMenuLink>
                    </>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm border bg-background shadow-xs !hover:bg-accent/90 !hover:text-white dark:bg-input/30 dark:border-input dark:hover:bg-input/50">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10">
                              Get started
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex lg:justify-center">
          <p className=" text-xl xl:text-3xl font-kalam text-accent xl:mt-5 xl:ml-0 ml-5">
            MojeFaktury
          </p>
        </div>
        <div className="flex justify-end w-full gap-4">
          <Button variant="outline" className="hidden md:inline">
            Book a demo
          </Button>
          <div className="border-r hidden md:inline"></div>
          <Link href="/login" className="hidden xl:inline">
            <Button variant="outline">Sign in</Button>
          </Link>
          <Button className="hidden xl:inline">Get started</Button>
        </div>
        <div className="flex w-12 shrink lg:hidden items-end justify-end">
          <Button
            variant="ghost"
            onClick={() => setOpen(!isOpen)}
            className="z-50 mr-5"
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </Button>
          {isOpen && (
            <>
              {/* Mobile menu */}
              <div className="fixed top-20 left-0 right-0 bottom-0 bg-background border-t border-border shadow-xl z-40 overflow-y-auto">
                <div className="container mx-auto py-6 px-4">
                  <div className="flex flex-col gap-6">
                    {navigationItems.map((item) => (
                      <div
                        key={item.title}
                        className="border-b border-border/50 pb-4 last:border-b-0"
                      >
                        <div className="flex flex-col gap-3">
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="w-full"
                              onClick={() => setOpen(false)}
                            >
                              <Button
                                variant="outline"
                                className="w-full justify-between"
                              >
                                {item.title}
                                <MoveRight className="w-5 h-5 text-muted-foreground" />
                              </Button>
                            </Link>
                          ) : (
                            <div className="p-3">
                              <p className="text-lg font-medium mb-2">
                                {item.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          )}
                          {item.items && (
                            <div className="pl-0 space-y-2">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="w-full block"
                                  onClick={() => setOpen(false)}
                                >
                                  <Button
                                    variant="ghost"
                                    className="w-full justify-between"
                                  >
                                    {subItem.title}
                                    <MoveRight className="w-4 h-4 text-muted-foreground/70" />
                                  </Button>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {/* Mobile action buttons */}
                    <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                      <Link href="/login" className="w-full">
                        <Button
                          variant="outline"
                          className="w-full justify-between"
                        >
                          Sign in
                          <MoveRight className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button className="w-full justify-between">
                        Get started
                        <MoveRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export { Header };
