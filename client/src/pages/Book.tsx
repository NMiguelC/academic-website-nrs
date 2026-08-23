// Design philosophy: premium academic editorial in the established #004080 blue palette.
// Warm paper, ink-like serif titles and quiet publication metadata make this page feel
// like an authored book launch rather than a generic product landing page.

import { ArrowRight, BookOpen, CircleHelp, Mail } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOMeta from "@/components/SEOMeta";
import { useLanguage } from "@/contexts/LanguageContext";

const FRONT_COVER = "/manus-storage/a-bola-e-a-bandeira-front-cover_08b70dcb.png";

export default function Book() {
  const { t } = useLanguage();

  return (
    <>
      <SEOMeta
        title={t("book.title")}
        description={t("book.seoDescription")}
        keywords={t("book.keywords")}
        ogImage={FRONT_COVER}
      />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-white/10 bg-primary text-white">
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full border-[28px] border-white/30" />
            <div className="absolute -bottom-52 left-1/3 h-[30rem] w-[30rem] rounded-full border border-white/20" />
          </div>

          <div className="container relative mx-auto px-4 py-16 md:py-24">
            <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(240px,360px)] lg:gap-20">
              <div className="max-w-3xl">
                <p className="mb-5 inline-flex items-center gap-2 border-b border-white/40 pb-2 font-opensans text-xs font-semibold uppercase tracking-[0.2em] text-blue-50">
                  <BookOpen size={15} aria-hidden="true" />
                  {t("book.eyebrow")}
                </p>
                <h1 className="font-editorial text-5xl font-semibold leading-[0.98] tracking-tight md:text-7xl">
                  {t("book.title")}
                </h1>
                <p className="mt-5 max-w-2xl font-montserrat text-xl font-medium text-blue-100 md:text-2xl">
                  {t("book.subtitle")}
                </p>
              </div>

              <blockquote className="border-l border-blue-200/70 pl-6 lg:mb-2">
                <p className="font-editorial text-2xl italic leading-snug text-blue-50 md:text-3xl">
                  “{t("book.intro")}”
                </p>
                <cite className="mt-4 block font-opensans text-xs not-italic uppercase tracking-[0.18em] text-blue-200">
                  {t("book.author")}
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink dark:bg-secondary dark:text-foreground py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-20">
              <figure className="mx-auto w-full max-w-sm lg:sticky lg:top-28">
                <div className="overflow-hidden border border-black/10 bg-white/70 p-3 shadow-xl shadow-black/10 dark:border-white/10 dark:bg-black/10">
                  <img
                    src={FRONT_COVER}
                    alt={t("book.coverAlt")}
                    className="h-auto w-full"
                    loading="eager"
                  />
                </div>
                <figcaption className="mt-4 border-t border-ink/20 pt-3 font-opensans text-xs uppercase tracking-[0.16em] text-ink/65 dark:border-white/20 dark:text-foreground/60">
                  {t("book.coverCaption")}
                </figcaption>
              </figure>

              <article className="max-w-3xl">
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-ink/20 pb-4 dark:border-white/20">
                  <p className="font-opensans text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {t("book.authorLabel")}
                  </p>
                  <p className="font-opensans text-sm text-ink/65 dark:text-foreground/60">
                    {t("book.publicationStatus")}
                  </p>
                </div>
                <h2 className="mt-5 font-editorial text-4xl font-semibold leading-tight text-ink dark:text-foreground md:text-5xl">
                  {t("book.author")}
                </h2>

                <div className="mt-8 space-y-5 font-opensans text-base leading-8 text-ink/80 dark:text-foreground/80 md:text-lg">
                  <p>{t("book.description")}</p>
                  <p>{t("book.longDescription")}</p>
                </div>

                <div className="my-10 border-y border-ink/20 py-8 dark:border-white/20">
                  <p className="font-editorial text-2xl leading-relaxed text-ink md:text-3xl dark:text-foreground">
                    {t("book.pullQuote")}
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    {t("book.themesTitle")}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2" aria-label={t("book.themesTitle")}>
                    {["theme1", "theme2", "theme3", "theme4", "theme5"].map((theme) => (
                      <span
                        key={theme}
                        className="font-opensans text-sm text-ink/80 before:mr-2 before:text-editorial-accent before:content-['•'] dark:text-foreground/80"
                      >
                        {t(`book.${theme}`)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-10 grid gap-6 border-t border-ink/20 pt-8 sm:grid-cols-2 dark:border-white/20">
                  <div>
                    <CircleHelp className="mb-3 text-editorial-accent" size={21} aria-hidden="true" />
                    <h3 className="font-montserrat text-sm font-bold text-ink dark:text-foreground">
                      {t("book.futureTitle")}
                    </h3>
                    <p className="mt-2 font-opensans text-sm leading-6 text-ink/70 dark:text-foreground/70">
                      {t("book.futureDescription")}
                    </p>
                  </div>
                  <div>
                    <Mail className="mb-3 text-editorial-accent" size={21} aria-hidden="true" />
                    <h3 className="font-montserrat text-sm font-bold text-ink dark:text-foreground">
                      {t("book.contactTitle")}
                    </h3>
                    <p className="mt-2 font-opensans text-sm leading-6 text-ink/70 dark:text-foreground/70">
                      {t("book.contactDescription")}
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button className="bg-primary text-white hover:bg-blue-900">
                      {t("book.contactCta")}
                      <ArrowRight className="ml-2" size={18} aria-hidden="true" />
                    </Button>
                  </Link>
                  <Link href="/publications">
                    <Button variant="outline" className="border-primary bg-transparent text-primary hover:bg-primary/5">
                      {t("book.backToPublications")}
                    </Button>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl border-t-2 border-primary/25 pt-8 md:pt-10">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-10">
                <div className="max-w-2xl">
                  <p className="font-montserrat text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    {t("book.availabilityLabel")}
                  </p>
                  <h2 className="mt-3 font-editorial text-3xl font-semibold text-foreground md:text-4xl">
                    {t("book.availabilityTitle")}
                  </h2>
                  <p className="mt-4 font-opensans leading-7 text-foreground/70">
                    {t("book.availabilityDescription")}
                  </p>
                </div>
                <Link href="/contact" className="shrink-0">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    {t("book.availabilityCta")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
