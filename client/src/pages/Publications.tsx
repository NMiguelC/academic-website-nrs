import Footer from "@/components/Footer";
import { ExternalLink, BookOpen, FileText } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOMeta from "@/components/SEOMeta";

export default function Publications() {
  const { t } = useLanguage();
  const internationalArticles = [
    {
      title: "Multilevel governance European Union, Spain and Portugal",
      journal: "International Journal of Social Science and Public Policy",
      year: 2019,
      volume: "Vol. 1, Issue 2",
      doi: "10.33642/ijsspp.v2n2p1",
      description: "Análise dos modelos de governação multinível e sua influência na dinâmica municipal.",
    },
    {
      title: "The motivations of municipalities for emergence and participation in cross-border associations",
      journal: "International Journal of Business and Applied Social Science",
      year: 2018,
      volume: "Vol. 4, Issue 9",
      issn: "E-ISSN: 2469-6501",
      description: "Estudo sobre as motivações das autarquias para participação em associações transfronteiriças.",
    },
  ];

  const nationalArticles = [
    {
      title: "A Cooperação das Câmaras Municipais nas Associações de Municípios: O caso do Distrito de Braga",
      journal: "Revista de Administração Local",
      year: 2007,
      volume: "Ano 30, nº 220",
      pages: "p.463-490",
      issn: "ISSN 0870-810X",
    },
    {
      title: "Gestão Cooperação Interorganizacional na Administração Pública",
      journal: "Revista Centro de Estudos para o Desenvolvimento (CEDREL)",
      year: 2007,
      volume: "nº 200",
      period: "Julho/Agosto",
    },
    {
      title: "Artigo sobre Estudos Avançados em Gestão Pública",
      journal: "Revista APTA",
      year: 2009,
      volume: "nº 13",
      period: "Maio",
    },
    {
      title: "Governo Eletrónico e Sociedade da Inclusão",
      journal: "Revista APTA",
      year: 2010,
      volume: "nº 14",
      period: "Julho",
    },
  ];

  const conferences = [
    {
      title: "Knowledge management and use of digital platforms in the public sector",
      conference: "SIMPPAC",
      year: 2024,
      institution: "Universidade Federal do Ceará, Fortaleza, Brasil",
      status: "no prelo",
    },
    {
      title: "Knowledge management and use of digital platforms in the public sector: the case study of the electronic information system in the brazilian public administration",
      conference: "ICOPEV (6th Edition)",
      year: 2024,
      date: "14-15 Novembro",
      institution: "Universidade do Minho",
      isbn: "ISBN: 978-989-35653-3-9",
    },
    {
      title: "Motivação para o Serviço Público nos Recursos Humanos na Administração Pública",
      conference: "ICSIS",
      year: 2024,
      date: "24-27 Junho",
      institution: "Universidade do Vale do Itajai, Brasil",
    },
    {
      title: "Gestão do Conhecimento na Administração Pública: Recursos Humanos, Tecnologia e Sustentabilidade",
      conference: "ICSIS",
      year: 2024,
      date: "24-27 Junho",
      institution: "Universidade do Vale do Itajai, Brasil",
    },
    {
      title: "Parcerias Público-Privadas na Saúde em Portugal. Oportunidades e Desafios",
      conference: "I Congresso Internacional da História, Saúde e Assistência",
      year: 2025,
      institution: "Universidade do Minho",
      status: "no prelo",
    },
  ];

  return (
    <>
      <SEOMeta title={t("publications.title")} description={t("publications.subtitle")} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
              {t("publications.title")}
            </h1>
            <p className="font-opensans text-lg text-blue-100 max-w-2xl">
              {t("publications.subtitle")}
            </p>
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <Tabs defaultValue="international" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="international">{t("publications.international")}</TabsTrigger>
                <TabsTrigger value="national">{t("publications.national")}</TabsTrigger>
                <TabsTrigger value="conferences">{t("publications.conferences")}</TabsTrigger>
              </TabsList>

              {/* International Articles */}
              <TabsContent value="international" className="space-y-6">
                <h2 className="font-montserrat font-bold text-2xl text-foreground mb-6">
                  Artigos em Revistas Internacionais
                </h2>
                {internationalArticles.map((article, index) => (
                  <div
                    key={index}
                    className="bg-lightGray rounded-lg p-6 border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4">
                      <FileText className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div className="flex-1">
                        <h3 className="font-montserrat font-bold text-lg text-primary mb-2">
                          {article.title}
                        </h3>
                        <p className="font-opensans text-sm text-foreground/70 mb-3">
                          <span className="font-semibold">{article.journal}</span> • {article.year}
                        </p>
                        <p className="font-opensans text-sm text-foreground/60 mb-3">
                          {article.volume} {article.doi && `• DOI: ${article.doi}`}
                          {article.issn && `• ${article.issn}`}
                        </p>
                        {article.description && (
                          <p className="font-opensans text-sm text-foreground leading-relaxed">
                            {article.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              {/* National Articles */}
              <TabsContent value="national" className="space-y-6">
                <h2 className="font-montserrat font-bold text-2xl text-foreground mb-6">
                  Artigos em Revistas Nacionais
                </h2>
                {nationalArticles.map((article, index) => (
                  <div
                    key={index}
                    className="bg-lightGray rounded-lg p-6 border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4">
                      <FileText className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div className="flex-1">
                        <h3 className="font-montserrat font-bold text-lg text-primary mb-2">
                          {article.title}
                        </h3>
                        <p className="font-opensans text-sm text-foreground/70">
                          <span className="font-semibold">{article.journal}</span> • {article.year}
                        </p>
                        <p className="font-opensans text-sm text-foreground/60">
                          {article.volume} {article.period && `• ${article.period}`}
                          {article.pages && `• ${article.pages}`}
                          {article.issn && `• ${article.issn}`}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              {/* Conferences */}
              <TabsContent value="conferences" className="space-y-6">
                <h2 className="font-montserrat font-bold text-2xl text-foreground mb-6">
                  Comunicações em Conferências
                </h2>
                {conferences.map((conf, index) => (
                  <div
                    key={index}
                    className="bg-lightGray rounded-lg p-6 border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4">
                      <BookOpen className="text-primary flex-shrink-0 mt-1" size={24} />
                      <div className="flex-1">
                        <h3 className="font-montserrat font-bold text-lg text-primary mb-2">
                          {conf.title}
                        </h3>
                        <p className="font-opensans text-sm text-foreground/70 mb-2">
                          <span className="font-semibold">{conf.conference}</span> • {conf.year}
                        </p>
                        <p className="font-opensans text-sm text-foreground/60 mb-2">
                          {conf.date && `${conf.date} • `}
                          {conf.institution}
                        </p>
                        {conf.isbn && (
                          <p className="font-opensans text-sm text-foreground/60">
                            {conf.isbn}
                          </p>
                        )}
                        {conf.status && (
                          <div className="mt-3 inline-block bg-primary/10 text-primary px-3 py-1 rounded text-xs font-opensans font-medium">
                            {conf.status}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-lightGray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-montserrat font-bold text-3xl mb-6 text-foreground">
              Interesse em Colaboração?
            </h2>
            <p className="font-opensans text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Para mais informações sobre publicações, citações ou oportunidades de colaboração académica.
            </p>
            <a
              href="mailto:nribeiro@eeg.uminho.pt"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-opensans font-medium hover:bg-blue-900 transition-colors"
            >
              Contactar
              <ExternalLink size={18} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
