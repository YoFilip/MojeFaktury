"use client";

import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { setUserLocale } from "@/lib/locale";
import { locales, type Locale } from "@/i18n/config";
import { useTransition } from "react";
import { useRouter } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSelect({ className }: { className?: string }) {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    const selectedLocale = newLocale as Locale;
    startTransition(async () => {
      try {
        await setUserLocale(selectedLocale);
        router.refresh();
      } catch (error) {
        console.error("Failed to change locale:", error);
      }
    });
  };

  const getLanguageLabel = (locale: string) => {
    switch (locale) {
      case "pl":
        return "PL - Polski";
      case "en":
        return "EN - English";
      default:
        return "EN - English";
    }
  };

  return (
    <Select
      defaultValue={locale}
      onValueChange={handleLocaleChange}
      disabled={isPending}
    >
      <SelectTrigger className={`w-[150px] ${className || ""}`}>
        <SelectValue placeholder={getLanguageLabel(locale)} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("label")}</SelectLabel>
          {locales.map((loc) => (
            <SelectItem key={loc} value={loc}>
              {getLanguageLabel(loc)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
