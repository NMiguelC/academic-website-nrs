import Footer from "@/components/Footer";
import { Lightbulb, Users, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const currentProjects = [
    {
      title: "Gestao do Conhecimento e Plataformas Digitais no Setor Publico",
      description: "Investigacao sobre a implementacao de sistemas de informacao eletronico e gestao do conhecimento na administracao publica brasileira.",
      status: "Em curso",
      focus: ["Transformacao digital", "Gestao do conhecimento", "Setor publico"],
    },
    {
      title: "Parcerias Publico-Privadas na Saude em Portugal",
      description: "Analise das oportunidades e desafios das parcerias publico-privadas no sistema de saude portugues.",
      status: "Em curso",
      focus: ["PPP", "Saude", "Politica publica"],
    },
    {
      title: "Politicas Sociais e Modelos de Protecao Social",
      description: "Estudo comparativo dos modelos Bismarkiano e Beveredgiano de protecao social na Europa.",
      status: "Em curso",
      focus: ["Politicas sociais", "Welfare", "Comparacao europeia"],
    },
  ];

  const completedProjects = [
    {
      title: "Governanca Multinivel e Associacoes de Municipios",
      description: "Investigacao sobre os modelos de governanca multinivel em Espanha e Portugal e sua influencia na dinamica municipal.",
      year: "2018-2019",
      impact: "Publicado em revista internacional",
    },
    {
      title: "Cooperacao Interorganizacional na Administracao Publica",
      description: "Estudo sobre a cooperacao entre camaras municipais nas associacoes de municipios do distrito de Braga.",
      year: "2005-2007",
      impact: "Publicado em revista nacional e apresentado em conferencia europeia",
    },
    {
      title: "Governo Eletronico e Sociedade da Informacao",
      description: "Investigacao sobre a implementacao de governo eletronico e seu impacto na sociedade da informacao.",
      year: "2008-2010",
      impact: "Publicado em revista academica",
    },
  ];

  const partnerships = [
    {
      name: "Centro de Investigacao em Ciencia Politica (CICP)",
      institution: "Universidade do Minho",
      description: "Investigador ativo em projetos de investigacao em ciencia politica e administracao publica",
    },
    {
      name: "Universidade Federal do Ceara",
      institution: "Brasil",
      description: "Colaboracao em investigacao sobre gestao do conhecimento e transformacao digital no setor publico",
    },
    {
      name: "Universidade do Vale do Itajai",
      institution: "Brasil",
      description: "Parceria em investigacao sobre sustentabilidade, inovacao e sociedade",
    },
  ];

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
              {t("projects.title")}
            </h1>
            <p className="font-opensans text-lg text-blue-100 max-w-2xl">
              {t("projects.subtitle")}
            </p>
          </div>
        </section>

        {/* Current Projects */}
        <section className="py-16 md:py-24 bg-white bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663402528932/aFJGEWoJQGgyMj7jg4gZDh/research-background-eYN5PPXUWpnto8a9Vku97V.webp)', backgroundAttachment: 'fixed', backgroundBlendMode: 'lighten'}}>
          <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <Lightbulb className="text-primary" size={32} />
                <h2 className="font-montserrat font-bold text-3xl text-foreground">
                  {t("projects.current")}
                </h2>
              </div>

            <div className="space-y-6">
              {currentProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-lightGray rounded-lg p-8 border-l-4 border-primary hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-montserrat font-bold text-xl text-primary flex-1">
                      {project.title}
                    </h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded text-xs font-opensans font-medium whitespace-nowrap ml-4">
                      {project.status}
                    </span>
                  </div>
                  <p className="font-opensans text-foreground/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.focus.map((item, i) => (
                      <span
                        key={i}
                        className="bg-white border border-primary/20 text-primary px-3 py-1 rounded text-xs font-opensans"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Completed Projects */}
        <section className="py-16 md:py-24 bg-lightGray">
          <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="text-primary" size={32} />
                <h2 className="font-montserrat font-bold text-3xl text-foreground">
                  {t("projects.completed")}
                </h2>
              </div>

            <div className="space-y-6">
              {completedProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 border border-border hover:shadow-md transition-shadow"
                >
                  <h3 className="font-montserrat font-bold text-xl text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="font-opensans text-sm text-foreground/60 mb-4">
                    {project.year}
                  </p>
                  <p className="font-opensans text-foreground/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="bg-primary/5 rounded p-3 border-l-2 border-primary">
                    <p className="font-opensans text-sm text-foreground">
                      <span className="font-semibold">Impacto:</span> {project.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <Users className="text-primary" size={32} />
                <h2 className="font-montserrat font-bold text-3xl text-foreground">
                  {t("projects.partnerships")}
                </h2>
              </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerships.map((partner, index) => (
                <div
                  key={index}
                  className="bg-lightGray rounded-lg p-6 border border-border hover:shadow-md transition-shadow"
                >
                  <h3 className="font-montserrat font-bold text-lg text-primary mb-2">
                    {partner.name}
                  </h3>
                  <p className="font-opensans text-sm text-foreground/60 mb-3">
                    {partner.institution}
                  </p>
                  <p className="font-opensans text-foreground/70">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
