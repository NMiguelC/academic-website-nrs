// Design philosophy: editorial archive for essays on football, identity, memory, culture,
// nationalism and democracy, with catalogue metadata instead of SaaS-style content cards.

import { ArrowRight, Calendar, UserRound } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import BlogSearchBar from "@/components/BlogSearchBar";
import BlogTagsFilter from "@/components/BlogTagsFilter";
import SEOMeta from "@/components/SEOMeta";

interface BlogPost {
  id: string;
  pt: { title: string; excerpt: string; content: string; category: string };
  en: { title: string; excerpt: string; content: string; category: string };
  date: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    pt: {
      title: "O Futebol como Espaço de Pertença e Memória",
      excerpt: "Como os clubes e as seleções guardam memórias coletivas e organizam formas de pertença nas sociedades contemporâneas.",
      content: "O futebol é uma gramática de pertença e memória coletiva, capaz de tornar visíveis conflitos e narrativas que atravessam as comunidades.",
      category: "Futebol e Identidade",
    },
    en: {
      title: "Football as a Space of Belonging and Memory",
      excerpt: "How clubs and national teams preserve collective memories and organise forms of belonging in contemporary societies.",
      content: "Football is a grammar of belonging and collective memory, making visible conflicts and narratives that run through communities.",
      category: "Football and Identity",
    },
    date: "2026-06-15",
    author: "Nuno Ribeiro e Silva",
  },
  {
    id: "2",
    pt: {
      title: "Nacionalismos, Regionalismos e a Linguagem das Bancadas",
      excerpt: "Uma leitura política das bandeiras, dos cânticos e dos símbolos que transformam o estádio num território de afirmação coletiva.",
      content: "As bancadas não são apenas lugares de apoio desportivo: são espaços públicos onde se ensaiam identidades e projetos políticos.",
      category: "Nacionalismos e Regionalismos",
    },
    en: {
      title: "Nationalisms, Regionalisms and the Language of the Stands",
      excerpt: "A political reading of flags, chants and symbols that turn the stadium into a territory of collective affirmation.",
      content: "The stands are not merely places of sporting support: they are public spaces where identities and political projects are rehearsed.",
      category: "Nationalisms and Regionalisms",
    },
    date: "2026-05-20",
    author: "Nuno Ribeiro e Silva",
  },
  {
    id: "3",
    pt: {
      title: "O Futebol e as Instituições nas Sociedades Democráticas",
      excerpt: "Porque é que o desporto deve ser levado a sério pela Ciência Política e pela análise das instituições públicas.",
      content: "Pensar o futebol é também pensar instituições, poder, regulação e os limites da democracia nas sociedades contemporâneas.",
      category: "Futebol e Política",
    },
    en: {
      title: "Football and Institutions in Democratic Societies",
      excerpt: "Why sport should be taken seriously by Political Science and the analysis of public institutions.",
      content: "Thinking about football also means thinking about institutions, power, regulation and the limits of democracy in contemporary societies.",
      category: "Football and Politics",
    },
    date: "2026-04-10",
    author: "Nuno Ribeiro e Silva",
  },
];

export default function Blog() {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach((post) => tags.add(language === "pt" ? post.pt.category : post.en.category));
    return Array.from(tags);
  }, [language]);

  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return blogPosts
      .filter((post) => {
        const data = language === "pt" ? post.pt : post.en;
        const matchesSearch = [data.title, data.excerpt, data.content, data.category]
          .some((field) => field.toLowerCase().includes(query));
        const matchesTags = selectedTags.length === 0 || selectedTags.includes(data.category);
        return matchesSearch && matchesTags;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [language, searchQuery, selectedTags]);

  return (
    <>
      <SEOMeta
        title={t("blog.title")}
        description={t("blog.subtitle")}
        keywords="futebol, identidade, memória, cultura, nacionalismo, política, sociedade"
      />

      <main className="flex-1">
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="mb-3 font-opensans text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
              {language === "pt" ? "Arquivo de ideias" : "Ideas archive"}
            </p>
            <h1 className="font-editorial text-4xl md:text-6xl font-semibold mb-4">
              {t("blog.title")}
            </h1>
            <p className="font-montserrat text-lg text-blue-100 max-w-2xl leading-relaxed">
              {t("blog.subtitle")}
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-paper text-ink dark:bg-secondary dark:text-foreground">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="border-b border-ink/20 pb-5 dark:border-white/20">
              <BlogSearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
              <BlogTagsFilter tags={allTags} selectedTags={selectedTags} onTagSelect={(tag) => setSelectedTags((prev) => prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag])} onClearTags={() => setSelectedTags([])} />
            </div>

            {(searchQuery || selectedTags.length > 0) && (
              <p className="mt-6 font-opensans text-sm text-ink/65 dark:text-foreground/65">
                {filteredPosts.length} {language === "pt" ? "texto(s) encontrado(s)" : "text(s) found"}
              </p>
            )}

            <div className="mt-8">
              {filteredPosts.length === 0 ? (
                <p className="py-12 font-editorial text-2xl text-ink/70 dark:text-foreground/70">
                  {language === "pt" ? "Nenhum texto encontrado." : "No texts found."}
                </p>
              ) : (
                filteredPosts.map((post, index) => {
                  const data = language === "pt" ? post.pt : post.en;
                  const date = new Date(post.date).toLocaleDateString(language === "pt" ? "pt-PT" : "en-US", { year: "numeric", month: "long", day: "numeric" });

                  return (
                    <article key={post.id} className={`py-9 ${index > 0 ? "border-t border-ink/20 dark:border-white/20" : ""}`}>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-opensans text-xs uppercase tracking-[0.12em] text-primary">
                        <span>{data.category}</span>
                        <span className="text-ink/35 dark:text-foreground/35">/</span>
                        <span className="inline-flex items-center gap-1 normal-case tracking-normal text-ink/60 dark:text-foreground/60"><Calendar size={13} /> {date}</span>
                        <span className="inline-flex items-center gap-1 normal-case tracking-normal text-ink/60 dark:text-foreground/60"><UserRound size={13} /> {post.author}</span>
                      </div>
                      <h2 className="mt-4 font-editorial text-3xl md:text-4xl font-semibold leading-tight text-ink dark:text-foreground">
                        {data.title}
                      </h2>
                      <p className="mt-4 max-w-3xl font-opensans text-base leading-7 text-ink/75 dark:text-foreground/75">
                        {data.excerpt}
                      </p>
                      <Link href="/contact" className="mt-5 inline-flex items-center gap-2 font-opensans text-sm font-semibold text-primary hover:underline">
                        {language === "pt" ? "Propor uma conversa sobre este tema" : "Propose a conversation about this topic"}
                        <ArrowRight size={16} />
                      </Link>
                    </article>
                  );
                })
              )}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="font-editorial text-2xl md:text-3xl text-foreground leading-relaxed">
              {language === "pt" ? "Ideias para compreender o que o futebol revela sobre as sociedades." : "Ideas for understanding what football reveals about societies."}
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 font-opensans text-sm font-semibold text-primary hover:underline">
              {language === "pt" ? "Entrar em contacto" : "Get in touch"} <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
