import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./src/i18n/config";

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,

  // Never redirect to '/default-locale'
  localePrefix: "never",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pl|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
