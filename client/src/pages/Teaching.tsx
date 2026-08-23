import Footer from "@/components/Footer";
import { Users, BookOpen, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Teaching() {
  const { t } = useLanguage();
  const undergraduateCourses = [
    { name: "Administracao de Recursos Humanos", years: "2017-2026", students: "50+" },
    { name: "Gestao da Inovacao", years: "2016-2020", students: "40+" },
    { name: "Governo Local e Administracao Autarquica", years: "2008-2018", students: "60+" },
    { name: "Politicas Sociais", years: "2008-2019", students: "50+" },
    { name: "Gestao da Qualidade", years: "2012-2013", students: "35+" },
    { name: "Teoria do Processo Politico", years: "2014-2015", students: "40+" },
  ];

  const mastersCourses = [
    { name: "Administracao e Gestao Publica", years: "2024-2026", students: "30+" },
    { name: "Governacao e Parcerias", years: "2023-2026", students: "25+" },
    { name: "Sistemas de Emprego Publico (GRH)", years: "2021-2024", students: "28+" },
    { name: "Inovacao e Gestao da Mudanca na AP", years: "2015-2016", students: "22+" },
    { name: "Politicas Sociais", years: "2009-2011", students: "30+" },
  ];

  const supervision = [
    "Orientador de dissertacoes de mestrado em Ciencia Politica",
    "Orientador de dissertacoes de mestrado em Administracao Publica",
    "Orientador de dissertacoes de mestrado em Gestao Publica",
    "Orientador de projetos de licenciatura (2008-2011, 2024-2025)",
  ];

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
              {t("teaching.title")}
            </h1>
            <p className="font-opensans text-lg text-blue-100 max-w-2xl">
              {t("teaching.subtitle")}
            </p>
          </div>
        </section>

        {/* Teaching Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Undergraduate Courses */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="text-primary" size={32} />
                <h2 className="font-montserrat font-bold text-3xl text-foreground">
                  {t("teaching.undergraduate")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {undergraduateCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-lightGray rounded-lg p-6 border border-border hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-montserrat font-bold text-lg text-primary mb-3">
                      {course.name}
                    </h3>
                    <div className="space-y-2 font-opensans text-sm text-foreground/70">
                      <p>Anos: {course.years}</p>
                      <p>Alunos por turma: {course.students}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Masters Courses */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-primary" size={32} />
                <h2 className="font-montserrat font-bold text-3xl text-foreground">
                  {t("teaching.masters")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mastersCourses.map((course, index) => (
                  <div
                    key={index}
                    className="bg-lightGray rounded-lg p-6 border border-border hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-montserrat font-bold text-lg text-primary mb-3">
                      {course.name}
                    </h3>
                    <div className="space-y-2 font-opensans text-sm text-foreground/70">
                      <p>Anos: {course.years}</p>
                      <p>Alunos por turma: {course.students}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supervision */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Users className="text-primary" size={32} />
                <h2 className="font-montserrat font-bold text-3xl text-foreground">
                  {t("teaching.supervision")}
                </h2>
              </div>

              <div className="space-y-4">
                {supervision.map((item, index) => (
                  <div
                    key={index}
                    className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary"
                  >
                    <p className="font-opensans text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
