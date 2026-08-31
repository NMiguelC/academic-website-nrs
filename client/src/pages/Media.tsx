// Design philosophy: editorial public-intervention archive with catalogue rhythm,
// preparing dedicated space for interviews, podcasts, articles and conferences.

import { ArrowRight, FileText, Mic, Radio, Presentation } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOMeta from "@/components/SEOMeta";

const formatsPT = [
  { title: "Entrevistas", desc: "Participação em programas de rádio e televisão, comentários de atualidade e conversas com órgãos de comunicação social sobre geopolítica e desporto.", Icon: Mic },
  { title: "Podcasts", desc: "Conversas aprofundadas em formato áudio sobre a politologia por trás das quatro linhas, identidades e rituais coletivos.", Icon: Radio },
  { title: "Artigos", desc: "Ensaios, crónicas e tribunas de opinião publicados em jornais e revistas de referência da imprensa nacional e internacional.", Icon: FileText },
  { title: "Conferências", desc: "Keynotes, palestras e comunicações em colóquios académicos e mesas-redondas sobre futebol, poder e sociedade.", Icon: Presentation },
];

const formatsEN = [
  { title: "Interviews", desc: "Participation in radio and television programs, current affairs commentary, and conversations with media outlets on geopolitics and sport.", Icon: Mic },
  { title: "Podcasts", desc: "In-depth audio conversations about the political science behind the touchline, identities, and collective rituals.", Icon: Radio },
  { title: "Articles", desc: "Essays, columns, and opinion pieces published in leading national and international newspapers and magazines.", Icon: FileText },
  { title: "Conferences", desc: "Keynotes, lectures, and papers presented at academic colloquia and roundtables on football, power, and society.", Icon: Presentation },
];

const themesPT = [
  ["Eixo 01", "O Estádio como Espelho Político", "Nacionalismos, tensões geopolíticas e manifestações de identidade coletiva em grandes competições internacionais."],
  ["Eixo 02", "Sociologia do Desporto", "Leituras a partir dos 21 estudos de caso de A Bola e a Bandeira, sobre o cruzamento entre poder institucional e claques."],
  ["Eixo 03", "A Politologia por Trás das Quatro Linhas", "A anatomia do poder nos clubes, a memória histórica e a forma como o desporto reflete a democracia contemporânea."],
];

const themesEN = [
  ["Axis 01", "The Stadium as a Political Mirror", "Nationalisms, geopolitical tensions, and expressions of collective identity in major international competitions."],
  ["Axis 02", "Sociology of Sport", "Readings drawn from the 21 case studies in A Bola e a Bandeira, on the intersection between institutional power and supporter groups."],
  ["Axis 03", "The Political Science Behind the Touchline", "Power in clubs, historical memory, and the way sport reflects contemporary democracy."],
];

export default function Media() {
  const { language } = useLanguage();
  const pt = language === "pt";
  const formats = pt ? formatsPT : formatsEN;
  const themes = pt ? themesPT : themesEN;
  
  const copy = pt ? {
    kicker: "Intervenção pública e imprensa",
    title: "Media e Divulgação",
    subtitle: "Espaço dedicado a entrevistas, podcasts, artigos de opinião e conferências sobre o papel político e cultural do desporto.",
    introTitle: "Plataforma de Intervenção Pública",
    introText: "Este espaço centraliza as participações públicas, intervenções nos media e contributos de divulgação científica de Nuno Ribeiro e Silva. Os conteúdos encontram-se estruturados em quatro eixos principais:",
    themesTitle: "Temas Prioritários de Análise",
    contactText: "Para marcação de entrevistas, convites para conferências ou propostas de colaboração na imprensa.",
    contactCta: "Contactar para Imprensa",
  } : {
    kicker: "Public engagement and press",
    title: "Media and Public Engagement",
    subtitle: "Dedicated space for interviews, podcasts, opinion articles and conferences on the political and cultural role of sport.",
    introTitle: "Public Intervention Platform",
    introText: "This space centralizes public appearances, media interventions, and scientific outreach contributions by Nuno Ribeiro e Silva. Content is structured across four main formats:",
    themesTitle: "Priority Analysis Themes",
    contactText: "For interview scheduling, conference invitations, or press collaboration proposals.",
    contactCta: "Press Contact",
  };

  return (
    <>
      <SEOMeta title={copy.title} description={copy.subtitle} keywords="media, entrevistas, podcasts, artigos de opinião, conferências, sociologia do futebol, futebol e política, Nuno Ribeiro e Silva" />
      <main className="flex-1">
        <section className="bg-primary py-16 text-white md:py-24">
          <div className="container mx-auto max-w-5xl px-4">
            <p className="mb-3 font-opensans text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">{copy.kicker}</p>
            <h1 className="mb-4 font-editorial text-4xl font-semibold md:text-6xl">{copy.title}</h1>
            <p className="max-w-2xl font-montserrat text-lg leading-relaxed text-blue-100">{copy.subtitle}</p>
          </div>
        </section>

        <section className="bg-paper py-16 text-ink dark:bg-secondary dark:text-foreground md:py-24">
          <div className="container mx-auto max-w-4xl space-y-16 px-4">
            {/* Introdução aos 4 formatos pedidos */}
            <div className="space-y-6">
              <h2 className="font-editorial text-3xl font-semibold text-ink dark:text-foreground">{copy.introTitle}</h2>
              <p className="font-opensans text-base leading-7 text-ink/80 dark:text-foreground/80">{copy.introText}</p>
              
              <div className="grid gap-6 md:grid-cols-2 pt-4">
                {formats.map(({ title, desc, Icon }) => (
                  <div key={title} className="border-t border-primary/25 pt-6 space-y-3 bg-background p-6 rounded-xl border border-border shadow-sm">
                    <Icon className="text-primary" size={24} aria-hidden="true" />
                    <h3 className="font-montserrat font-bold text-xl text-ink dark:text-foreground">{title}</h3>
                    <p className="font-opensans text-sm leading-relaxed text-ink/75 dark:text-foreground/75">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Temas Prioritários */}
            <div className="space-y-6 border-t border-ink/20 pt-16 dark:border-white/20">
              <h2 className="font-editorial text-3xl font-semibold text-ink dark:text-foreground">{copy.themesTitle}</h2>
              <div className="divide-y divide-ink/20 border-t border-ink/20 dark:divide-white/20 dark:border-white/20">
                {themes.map(([outlet, theme, description], index) => (
                  <article key={theme} className="py-7">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-opensans text-xs font-semibold uppercase tracking-[0.14em] text-primary">0{index + 1} · {outlet}</p>
                      <span className="text-primary" aria-hidden="true">↗</span>
                    </div>
                    <h3 className="mt-3 font-editorial text-2xl font-semibold text-ink dark:text-foreground">{theme}</h3>
                    <p className="mt-2 font-opensans text-sm leading-relaxed text-ink/75 dark:text-foreground/75">{description}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Contacto Media */}
            <div className="border-t-2 border-primary/25 pt-8 text-center">
              <p className="font-editorial text-2xl leading-relaxed text-ink dark:text-foreground">{copy.contactText}</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 font-opensans text-sm font-semibold text-primary hover:underline">
                {copy.contactCta} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
