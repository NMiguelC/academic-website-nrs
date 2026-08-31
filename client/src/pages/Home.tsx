// Design philosophy: premium academic editorial platform positioning Nuno Ribeiro e Silva
// as Professor of Political Science and researcher using football to understand identity and society.

import { siteConfig } from "@/config";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Globe, Shield, Award, FileText, Mic, Radio } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOMeta from "@/components/SEOMeta";
import ProtectedImage from "@/components/ProtectedImage";

const FRONT_COVER = "/images/a-bola-e-a-bandeira-front-cover.webp";
const PROFILE_PHOTO = "/images/nuno-ribeiro-e-silva-profile.webp";

export default function Home() {
  const { language } = useLanguage();
  const pt = language === "pt";
  const copy = pt ? {
    name: "Nuno Ribeiro e Silva",
    title: "Professor de Ciência Política e Investigador",
    subtitle: "Futebol, Identidade e Sociedade",
    intro: "Utilizo o futebol como lente para compreender identidade, memória, cultura, poder e conflito nas sociedades contemporâneas.",
    bookCta: "Conhecer o Livro",
    aboutCta: "Sobre o Autor",
    whyTitle: "Porque estudar futebol?",
    whyP1: "O futebol não é apenas um fenómeno desportivo.",
    whyP2: "É também um espaço onde se expressam identidades coletivas, memórias históricas, conflitos culturais e formas de poder.",
    whyP3: "Através da Ciência Política procuro compreender aquilo que o futebol revela sobre as sociedades contemporâneas.",
    bookSectionLabel: "Nova Publicação em Destaque",
    bookTitle: "A Bola e a Bandeira",
    bookSubtitle: "Futebol, Política e Identidade no Mundo",
    bookDesc: "Uma obra de referência que analisa o desporto como laboratório social e político através de 21 estudos de caso internacionais.",
    bookFull: "Explorar Obra e Capa",
    areasLabel: "Eixos de Investigação",
    areasTitle: "Áreas de Destaque",
    society: "Futebol e Sociedade",
    societyDesc: "Análise sociológica e institucional das dinâmicas comunitárias e das fraturas coletivas ativadas pelos rituais desportivos.",
    identity: "Futebol e Identidade",
    identityDesc: "Estudo dos nacionalismos, regionalismos, pertenças locais e da construção de narrativas coletivas em torno dos clubes e seleções.",
    politics: "Futebol e Política",
    politicsDesc: "Investigação sobre o poder, geopolítica, ativismo de claques e a instrumentalização política do desporto nas democracias contemporâneas.",
    mediaTitle: "Media e Divulgação",
    mediaDesc: "Espaço dedicado a entrevistas, podcasts, artigos de opinião e conferências sobre o papel político e cultural do desporto.",
    mediaCta: "Ver Espaço Media",
    contactTitle: "",
    contactDesc: "Para colaborações académicas, intervenções públicas ou solicitações da imprensa, outras.",
    contactCta: "Entrar em Contacto",
  } : {
    name: "Nuno Ribeiro e Silva",
    title: "Professor of Political Science and Researcher",
    subtitle: "Football, Identity and Society",
    intro: "Using football as a lens to understand identity, memory, culture, power and conflict in contemporary societies.",
    bookCta: "View the Book",
    aboutCta: "About the Author",
    whyTitle: "Why study football?",
    whyP1: "Football is not merely a sporting phenomenon.",
    whyP2: "It is also a space where collective identities, historical memories, cultural conflicts and forms of power are expressed.",
    whyP3: "Through Political Science, I seek to understand what football reveals about contemporary societies.",
    bookSectionLabel: "Featured Publication",
    bookTitle: "A Bola e a Bandeira",
    bookSubtitle: "Football, Politics and Identity in the World",
    bookDesc: "A reference work analyzing sport as a social and political laboratory through 21 international case studies.",
    bookFull: "Explore Book & Cover",
    areasLabel: "Research Axes",
    areasTitle: "Featured Areas",
    society: "Football and Society",
    societyDesc: "Sociological and institutional analysis of community dynamics and collective fractures activated by sporting rituals.",
    identity: "Football and Identity",
    identityDesc: "Study of nationalisms, regionalisms, local belongings and the construction of collective narratives around clubs and teams.",
    politics: "Football and Politics",
    politicsDesc: "Research on power, geopolitics, supporter activism and the political instrumentalization of sport in contemporary democracies.",
    mediaTitle: "Media and Public Engagement",
    mediaDesc: "Dedicated space for interviews, podcasts, opinion articles and conferences on the political and cultural role of sport.",
    mediaCta: "View Media Space",
    contactTitle: "",
    contactDesc: "For academic collaborations, public interventions or press inquiries, others.",
    contactCta: "Get in Touch",
  };

  return (
    <>
      <SEOMeta
        title={pt ? "Início — Futebol, Identidade e Sociedade" : "Home — Football, Identity and Society"}
        description={pt ? "Nuno Ribeiro e Silva - Professor de Ciência Política e Investigador que utiliza o futebol para compreender identidade, memória, cultura, poder e conflito." : "Nuno Ribeiro e Silva - Professor of Political Science and Researcher using football to understand identity, memory, culture, power and conflict."}
        keywords="futebol e sociedade, futebol e identidade, futebol e política, identidade coletiva, sociologia do futebol, ciência política, Nuno Ribeiro e Silva, A Bola e a Bandeira"
        ogImage={FRONT_COVER}
      />

      <main className="flex-1">
        {/* Hero Principal */}
        <section className="relative overflow-hidden bg-primary text-white py-20 md:py-32">
          <div className="absolute inset-0 opacity-15" aria-hidden="true">
            <div className="absolute -right-32 -top-40 h-96 w-96 rounded-full border-[28px] border-white/30" />
            <div className="absolute -bottom-52 left-1/3 h-[30rem] w-[30rem] rounded-full border border-white/20" />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <p className="mb-3 font-opensans text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                    {siteConfig.name}
                  </p>
                  <h1 className="font-editorial text-4xl font-semibold leading-tight md:text-6xl mb-2">
                    {copy.name}
                  </h1>
                  <p className="font-montserrat text-xl font-semibold text-blue-100 mb-3 md:text-2xl">
                    {copy.title}
                  </p>
                  <p className="font-editorial text-2xl font-medium italic text-blue-200">
                    {copy.subtitle}
                  </p>
                </div>
                <p className="max-w-lg font-opensans text-base leading-relaxed text-blue-50 md:text-lg">
                  {copy.intro}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/book">
                    <Button className="bg-white font-opensans font-medium text-primary hover:bg-blue-50">
                      {copy.bookCta}
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="outline" className="border-white font-opensans font-medium text-white hover:bg-white/10">
                      {copy.aboutCta}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Destaque Visual Imediato do Livro na Homepage */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/25 to-transparent rounded-3xl blur-2xl"></div>
                  <div className="relative w-72 rounded-2xl border-4 border-white/20 bg-white/10 p-3 shadow-2xl md:w-80">
                    <img src={FRONT_COVER} alt="A Bola e a Bandeira — Nuno Ribeiro e Silva" className="w-full rounded-xl shadow-lg" />
                    <div className="mt-3 text-center">
                      <span className="font-opensans text-xs font-semibold uppercase tracking-wider text-blue-200">
                        {pt ? "Obra em Destaque" : "Featured Work"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secção Imediata: Porque Estudar Futebol? */}
        <section className="bg-paper py-20 text-ink dark:bg-secondary dark:text-foreground border-b border-border">
          <div className="container mx-auto max-w-4xl px-4 space-y-6 text-center">
            <p className="font-opensans text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {pt ? "Enquadramento Intelectual" : "Intellectual Framework"}
            </p>
            <h2 className="font-editorial text-3xl font-semibold leading-tight md:text-5xl">
              {copy.whyTitle}
            </h2>
            <div className="mx-auto max-w-2xl space-y-4 font-opensans text-lg leading-relaxed text-ink/85 dark:text-foreground/85">
              <p className="font-semibold text-primary">{copy.whyP1}</p>
              <p>{copy.whyP2}</p>
              <p className="italic text-ink/90 dark:text-foreground/90">{copy.whyP3}</p>
            </div>
            <div className="pt-4">
              <Link href="/about">
                <span className="inline-flex items-center gap-2 font-opensans text-sm font-semibold text-primary hover:underline">
                  {pt ? "Ler perfil académico completo" : "Read full academic profile"} <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Secção de Aprofundamento do Livro na Homepage */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-12 lg:grid-cols-12">
              <div className="flex justify-center lg:col-span-5">
                <div className="w-full max-w-sm border border-border bg-secondary p-6 shadow-xl rounded-xl">
                  <img src={FRONT_COVER} alt="A Bola e a Bandeira" className="w-full rounded-lg shadow-md" />
                </div>
              </div>
              <div className="space-y-6 lg:col-span-7">
                <p className="font-opensans text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  {copy.bookSectionLabel}
                </p>
                <h2 className="font-editorial text-3xl font-semibold text-foreground md:text-5xl">
                  {copy.bookTitle}
                </h2>
                <p className="font-montserrat text-xl font-medium text-primary">
                  {copy.bookSubtitle}
                </p>
                <p className="font-opensans text-base leading-relaxed text-foreground/80 md:text-lg">
                  {copy.bookDesc}
                </p>
                <div className="pt-2">
                  <Link href="/book">
                    <Button className="bg-primary text-white hover:bg-blue-900">
                      {copy.bookFull}
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Áreas de Destaque Substituídas exatamente conforme pedido */}
        <section className="bg-lightGray py-20 dark:bg-background/50 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-2xl space-y-4 text-center">
              <p className="font-opensans text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {copy.areasLabel}
              </p>
              <h2 className="font-editorial text-3xl font-semibold text-foreground md:text-4xl">
                {copy.areasTitle}
              </h2>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
              <div className="border-t border-primary/25 py-6 bg-white dark:bg-card p-6 rounded-xl shadow-sm">
                <Globe className="mb-5 text-primary" size={24} aria-hidden="true" />
                <h3 className="mb-3 font-montserrat text-xl font-bold text-foreground">
                  {copy.society}
                </h3>
                <p className="font-opensans text-sm leading-relaxed text-foreground/70">
                  {copy.societyDesc}
                </p>
              </div>
              <div className="border-t border-primary/25 py-6 bg-white dark:bg-card p-6 rounded-xl shadow-sm">
                <Shield className="mb-5 text-primary" size={24} aria-hidden="true" />
                <h3 className="mb-3 font-montserrat text-xl font-bold text-foreground">
                  {copy.identity}
                </h3>
                <p className="font-opensans text-sm leading-relaxed text-foreground/70">
                  {copy.identityDesc}
                </p>
              </div>
              <div className="border-t border-primary/25 py-6 bg-white dark:bg-card p-6 rounded-xl shadow-sm">
                <Award className="mb-5 text-primary" size={24} aria-hidden="true" />
                <h3 className="mb-3 font-montserrat text-xl font-bold text-foreground">
                  {copy.politics}
                </h3>
                <p className="font-opensans text-sm leading-relaxed text-foreground/70">
                  {copy.politicsDesc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Espaço Media e Divulgação */}
        <section className="bg-background py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-2">
              <Mic size={24} aria-hidden="true" />
            </div>
            <h2 className="font-editorial text-3xl font-semibold text-foreground md:text-4xl">
              {copy.mediaTitle}
            </h2>
            <p className="mx-auto max-w-2xl font-opensans text-base leading-relaxed text-foreground/80">
              {copy.mediaDesc}
            </p>
            <div className="pt-2">
              <Link href="/media">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  {copy.mediaCta}
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
            <div className="mx-auto flex max-w-md items-center justify-center gap-4 border-t border-border pt-6 text-left">
              <ProtectedImage
                src={PROFILE_PHOTO}
                alt={pt ? "Fotografia de Nuno Ribeiro e Silva" : "Portrait of Nuno Ribeiro e Silva"}
                loading="lazy"
                className="h-[74px] w-[55px] rounded-sm object-cover object-top grayscale-[15%]"
              />
              <p className="font-opensans text-sm leading-relaxed text-foreground/65">
                {pt ? "Uma plataforma de investigação, docência e intervenção pública." : "A platform for research, teaching and public engagement."}
              </p>
            </div>
          </div>
        </section>

        {/* Rodapé de Contacto */}
        <section className="bg-primary py-20 text-center text-white">
          <div className="container mx-auto max-w-3xl space-y-6 px-4">
            {copy.contactTitle && (
              <h2 className="font-editorial text-3xl font-semibold md:text-4xl">
                {copy.contactTitle}
              </h2>
            )}
            <p className="mx-auto max-w-2xl font-opensans text-lg leading-relaxed text-blue-100">
              {copy.contactDesc}
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button className="bg-white px-8 py-3 font-opensans font-medium text-primary hover:bg-blue-50">
                  {copy.contactCta}
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
