// Design philosophy: academic editorial about page structured around academic background,
// research line with exact requested themes and complete PT/EN parity.

import { Award, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOMeta from "@/components/SEOMeta";
import { useLanguage } from "@/contexts/LanguageContext";
import ProtectedImage from "@/components/ProtectedImage";

const PROFILE_PHOTO = "/manus-storage/nuno-ribeiro-e-silva-profile_6d07eb39.jpg";

export default function About() {
  const { language } = useLanguage();
  const pt = language === "pt";
  const copy = pt ? {
    kicker: "Perfil e Percurso",
    title: "Sobre Nuno Ribeiro e Silva",
    subtitle: "Professor de Ciência Política e Investigador na Universidade do Minho.",
    academicLabel: "Percurso Académico",
    academicTitle: "Rigor científico e sólida formação em Ciência Política",
    academic1: "Nuno Ribeiro e Silva é Doutor em Ciência Política pela Universidade de Santiago de Compostela. Atualmente, exerce funções como Professor Convidado na Universidade do Minho e é investigador no Centro de Investigação em Ciência Política (CICP).",
    academic2: "O seu percurso combina a docência universitária com a investigação nas áreas da Administração Pública, Governação, Políticas Públicas e, de forma especial, a intersecção entre o desporto e as dinâmicas sociopolíticas contemporâneas.",
    researchLabel: "Linha de Investigação Atual",
    researchTitle: "Linha de Investigação Atual",
    researchIntro: "A investigação desenvolvida liga de forma indissociável os seguintes eixos conceptuais:",
    themes: [
      ["Futebol", "Estudado como laboratório institucional, social e político de primeira grandeza."],
      ["Identidade", "Análise das pertenças locais, regionais e nacionais ativadas pelas rivalidades desportivas."],
      ["Memória", "Como os clubes e seleções organizam a memória histórica e o património das comunidades."],
      ["Nacionalismo", "A expressão de lealdades políticas, símbolos patrióticos e soberanias simbólicas."],
      ["Cultura", "Rituais, linguagens e códigos estéticos compartilhados nas bancadas e comunidades de adeptos."],
      ["Sociedade", "As fraturas coletivas, o poder e as dinâmicas democráticas refletidas no ecossistema desportivo."]
    ],
    missionLabel: "Missão Intelectual",
    missionTitle: "A ligação entre Ciência Política, Futebol e Sociedade",
    missionText: "A missão intelectual de Nuno Ribeiro e Silva é decodificar a linguagem do futebol para iluminar os dilemas das nossas sociedades. Ao cruzar a Ciência Política com a sociologia do desporto, o objetivo é dotar leitores, jornalistas, decisores e académicos de ferramentas conceptuais para compreender o que os estádios revelam sobre o poder, a pertença e os conflitos do mundo atual.",
    book: "Conhecer o Livro",
    contact: "Entrar em Contacto",
  } : {
    kicker: "Profile and Background",
    title: "About Nuno Ribeiro e Silva",
    subtitle: "Professor of Political Science and Researcher at the University of Minho.",
    academicLabel: "Academic Background",
    academicTitle: "Scientific rigor and a strong foundation in Political Science",
    academic1: "Nuno Ribeiro e Silva holds a Ph.D. in Political Science from the University of Santiago de Compostela, with Portuguese recognition. He is a Guest Professor at the University of Minho and an active researcher at the Research Centre in Political Science (CICP).",
    academic2: "His work combines university teaching with rigorous research in Public Administration, Governance, Public Policy and, centrally, the intersection between sport and contemporary sociopolitical dynamics.",
    researchLabel: "Current Research Line",
    researchTitle: "Current Research Line",
    researchIntro: "His ongoing research inextricably connects the following conceptual axes:",
    themes: [
      ["Football", "Studied as a major institutional, social, and political laboratory."],
      ["Identity", "Analysis of local, regional, and national belonging activated by sporting rivalries."],
      ["Memory", "How clubs and national teams organize historical memory and community heritage."],
      ["Nationalism", "The expression of political loyalties, patriotic symbols, and symbolic sovereignties."],
      ["Culture", "Rituals, languages, and aesthetic codes shared across stands and supporter communities."],
      ["Society", "Collective fractures, power, and democratic dynamics reflected in the sporting ecosystem."]
    ],
    missionLabel: "Intellectual Mission",
    missionTitle: "The connection between Political Science, Football and Society",
    missionText: "Nuno Ribeiro e Silva’s intellectual mission is to decode the language of football in order to illuminate the dilemmas of our societies. By combining Political Science and the sociology of sport, he offers readers, journalists, decision-makers and academics conceptual tools to understand what stadiums reveal about power, belonging and conflict.",
    book: "Explore the Book",
    contact: "Get in Touch",
  };

  return (
    <>
      <SEOMeta title={copy.title} description={copy.subtitle} keywords="Nuno Ribeiro e Silva, Political Science, football, identity, memory, nationalism, culture, society" />
      <main className="flex-1">
        <section className="bg-primary py-16 text-white md:py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <p className="mb-3 font-opensans text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">{copy.kicker}</p>
            <h1 className="mb-4 font-editorial text-4xl font-semibold md:text-6xl">{copy.title}</h1>
            <p className="max-w-2xl font-montserrat text-lg leading-relaxed text-blue-100">{copy.subtitle}</p>
          </div>
        </section>

        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto max-w-4xl space-y-16 px-4">
            {/* Percurso Académico */}
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 border-b border-primary/35 pb-1.5 font-opensans text-xs font-semibold uppercase tracking-wider text-primary">
                <GraduationCap size={16} aria-hidden="true" /> {copy.academicLabel}
              </div>
              <h2 className="font-editorial text-3xl font-semibold text-foreground">{copy.academicTitle}</h2>
              <div className="space-y-4 font-opensans text-base leading-relaxed text-foreground/80 md:text-lg">
                <p>{copy.academic1}</p>
                <p>{copy.academic2}</p>
              </div>
              <figure className="flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center">
                <ProtectedImage
                  src={PROFILE_PHOTO}
                  alt={pt ? "Fotografia de Nuno Ribeiro e Silva" : "Portrait of Nuno Ribeiro e Silva"}
                  loading="lazy"
                  className="h-52 w-36 rounded-sm object-cover object-top grayscale-[15%] shadow-md sm:h-56 sm:w-40"
                />
                <figcaption className="max-w-xl font-opensans text-sm leading-relaxed text-foreground/70">
                  {pt ? "Nuno Ribeiro e Silva — Professor de Ciência Política e Investigador." : "Nuno Ribeiro e Silva — Professor of Political Science and Researcher."}
                </figcaption>
              </figure>
            </section>

            {/* Linha de Investigação Atual */}
            <section className="space-y-6 border-t border-border pt-16">
              <div className="inline-flex items-center gap-2 border-b border-primary/35 pb-1.5 font-opensans text-xs font-semibold uppercase tracking-wider text-primary">
                <BookOpen size={16} aria-hidden="true" /> {copy.researchLabel}
              </div>
              <h2 className="font-editorial text-3xl font-semibold text-foreground">{copy.researchTitle}</h2>
              <p className="font-opensans text-base leading-relaxed text-foreground/80 md:text-lg">
                {copy.researchIntro}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {copy.themes.map(([term, desc]) => (
                  <div key={term} className="border-t border-primary/25 pt-4">
                    <h3 className="font-montserrat font-bold text-primary uppercase text-sm tracking-wider mb-1">{term}</h3>
                    <p className="font-opensans text-sm text-foreground/75 leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Missão Intelectual */}
            <section className="space-y-6 border-t border-border pt-16">
              <div className="inline-flex items-center gap-2 border-b border-primary/35 pb-1.5 font-opensans text-xs font-semibold uppercase tracking-wider text-primary">
                <Award size={16} aria-hidden="true" /> {copy.missionLabel}
              </div>
              <h2 className="font-editorial text-3xl font-semibold text-foreground">{copy.missionTitle}</h2>
              <p className="font-opensans text-base leading-relaxed text-foreground/80 md:text-lg">{copy.missionText}</p>
              <div className="flex flex-wrap gap-4 pt-6">
                <Link href="/book">
                  <Button className="bg-primary text-white hover:bg-blue-900">
                    {copy.book} <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    {copy.contact}
                  </Button>
                </Link>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
