import Footer from "@/components/Footer";
import { Briefcase, Users, BookOpen, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const services = [
    {
      icon: Briefcase,
      title: "Consultoria em Administracao Publica",
      description: "Consultoria especializada em gestao publica, modernizacao administrativa e otimizacao de processos organizacionais.",
      highlights: ["Diagnostico organizacional", "Estrategia de mudanca", "Implementacao de melhorias"],
    },
    {
      icon: Users,
      title: "Gestao de Recursos Humanos",
      description: "Consultoria em gestao de RH, desenvolvimento de competencias, avaliacao de desempenho e cultura organizacional.",
      highlights: ["Politicas de RH", "Desenvolvimento de talento", "Clima organizacional"],
    },
    {
      icon: BookOpen,
      title: "Formacao e Workshops",
      description: "Programas de formacao personalizados em administracao publica, lideranca, gestao da inovacao e politicas sociais.",
      highlights: ["Formacao customizada", "Workshops interativos", "Certificacao"],
    },
    {
      icon: Zap,
      title: "Coaching Academico e Profissional",
      description: "Coaching individual para desenvolvimento de competencias, preparacao de apresentacoes e orientacao de carreira.",
      highlights: ["Sessoes individuais", "Desenvolvimento de competencias", "Orientacao estrategica"],
    },
  ];

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
              {t("services.title")}
            </h1>
            <p className="font-opensans text-lg text-blue-100 max-w-2xl">
              {t("services.subtitle")}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-white bg-cover bg-center" style={{backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663402528932/aFJGEWoJQGgyMj7jg4gZDh/services-background-NobNBhNFJwur57Dn4nyZ2c.webp)', backgroundAttachment: 'fixed', backgroundBlendMode: 'lighten'}}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service: any, index: number) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-lightGray rounded-lg p-8 border border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
                      <IconComponent className="text-white" size={28} />
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="font-opensans text-foreground/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.highlights.map((highlight: string, i: number) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="font-opensans text-sm text-foreground">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 md:py-24 bg-lightGray">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-montserrat font-bold text-3xl text-foreground mb-12 text-center">
              {t("services.additional")}
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="font-montserrat font-bold text-xl text-primary mb-3">
                  Conferencias e Keynote Speaking
                </h3>
                <p className="font-opensans text-foreground/70 mb-4">
                  Apresentacoes em conferencias, seminarios e eventos sobre temas de administracao publica, politicas sociais e gestao.
                </p>
                <p className="font-opensans text-sm text-foreground/60">
                  Experiencia em conferencias internacionais e nacionais com audiencias de ate 500 participantes.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="font-montserrat font-bold text-xl text-primary mb-3">
                  Investigacao Aplicada
                </h3>
                <p className="font-opensans text-foreground/70 mb-4">
                  Projetos de investigacao customizados para organizacoes publicas e privadas, com foco em aplicabilidade pratica.
                </p>
                <p className="font-opensans text-sm text-foreground/60">
                  Metodologia rigorosa com producao de relatorios e recomendacoes estrategicas.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-border">
                <h3 className="font-montserrat font-bold text-xl text-primary mb-3">
                  Supervisao Academica e Orientacao
                </h3>
                <p className="font-opensans text-foreground/70 mb-4">
                  Orientacao de dissertacoes de mestrado e teses de doutoramento em areas de administracao publica e politicas sociais.
                </p>
                <p className="font-opensans text-sm text-foreground/60">
                  Acompanhamento personalizado desde a definicao do tema ate a defesa final.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-blue-900 rounded-lg p-12 text-white text-center space-y-6">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl">
                {t("services.interested")}
              </h2>
              <p className="font-opensans text-lg text-blue-100 max-w-2xl mx-auto">
                {t("services.interestedDesc")}
              </p>
              <Link href="/contact">
                <Button className="bg-white text-primary hover:bg-blue-50">
                  {t("services.sendMessage")}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
