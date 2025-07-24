import * as React from "react";

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
  return (
    <Select defaultValue="en">
      <SelectTrigger className={`w-[150px] ${className || ""}`}>
        <SelectValue placeholder="EN - English" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          <SelectItem value="pl">PL - Polski</SelectItem>
          <SelectItem value="en">EN - English</SelectItem>
          <SelectItem value="es">ES - Español</SelectItem>
          <SelectItem value="fr">FR - Français</SelectItem>
          <SelectItem value="de">DE - Deutsch</SelectItem>
          <SelectItem value="it">IT - Italiano</SelectItem>
          <SelectItem value="pt">PT - Português</SelectItem>
          <SelectItem value="ru">RU - Русский</SelectItem>
          <SelectItem value="zh">ZH - 中文</SelectItem>
          <SelectItem value="ja">JP - 日本語</SelectItem>
          <SelectItem value="ko">KR - 한국어</SelectItem>
          <SelectItem value="ar">AR - العربية</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
