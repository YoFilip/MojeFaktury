import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LoginForm } from "@/components/login-form";
import { LanguageSelect } from "@/components/ui/languageSelect";

const LoginPage = React.memo(() => {
  const t = useTranslations("login");

  return (
    <main className="grid min-h-svh lg:grid-cols-2" role="main">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <header className="flex justify-between items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 font-medium font-kalam text-3xl text-accent hover:text-accent/80 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label="Powrót do strony głównej MojeFaktury"
          >
            MojeFaktury
          </Link>
          <LanguageSelect className="w-[150px]" />
        </header>

        <section
          className="flex flex-1 items-center justify-center"
          aria-labelledby="login-title"
        >
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </section>
      </div>

      <aside
        className="bg-muted relative hidden lg:block overflow-hidden"
        aria-label="Grafika dekoracyjna"
      >
        <div
          className="absolute inset-0 h-full w-full bg-accent/80 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent/60 to-accent/90"
          aria-hidden="true"
        />
        <div className="absolute bottom-6 left-6 right-6 text-white/90">
          <h2 className="text-2xl font-bold mb-2 font-kalam">
            {t("sidebarTitle")}
          </h2>
          <p className="text-white/80 leading-relaxed">
            {t("sidebarDescription")}
          </p>
        </div>
      </aside>
    </main>
  );
});

LoginPage.displayName = "LoginPage";

export default LoginPage;
