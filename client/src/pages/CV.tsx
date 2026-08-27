import { Download, Award, BookOpen, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import SEOMeta from "@/components/SEOMeta";

export default function CV() {
  const { t, language } = useLanguage();

  const education = [
    {
      pt: {
        title: "Doutor em Gestão Pública / Ciência Política (Ph.D.)",
        institution: "Universidade de Santiago de Compostela (USC) • 2012",
        program: "Programa de Doutoramento em Processos Políticos Contemporâneos",
        note: "Homologação portuguesa: Universidade do Porto (Reg. nº 55/2013)"
      },
      en: {
        title: "Ph.D. in Public Management / Political Science",
        institution: "University of Santiago de Compostela (USC) • 2012",
        program: "Doctoral Program in Contemporary Political Processes",
        note: "Portuguese homologation: University of Porto (Reg. no. 55/2013)"
      }
    },
    {
      pt: {
        title: "Mestre em Administração Pública",
        institution: "Universidade do Minho • 2006",
        program: "Mestrado em Administração Pública",
        note: ""
      },
      en: {
        title: "Master's in Public Administration",
        institution: "University of Minho • 2006",
        program: "Master's Degree in Public Administration",
        note: ""
      }
    },
    {
      pt: {
        title: "Master Business Administration (MBA)",
        institution: "Universidade Fernando Pessoa • 2005",
        program: "Master Business Administration (MBA)",
        note: ""
      },
      en: {
        title: "Master Business Administration (MBA)",
        institution: "Fernando Pessoa University • 2005",
        program: "Master Business Administration (MBA)",
        note: ""
      }
    },
    {
      pt: {
        title: "Licenciatura em Filosofia",
        institution: "Universidade Católica Portuguesa • 1999",
        program: "Tese: Filosofia económica e política Adam Smith",
        note: ""
      },
      en: {
        title: "Bachelor's Degree in Philosophy",
        institution: "Catholic University of Portugal • 1999",
        program: "Thesis: Economic and Political Philosophy of Adam Smith",
        note: ""
      }
    }
  ];

  const experience = [
    {
      pt: {
        title: "Professor Convidado Equiparado a Professor Auxiliar",
        institution: "Universidade do Minho • Desde 2008",
        department: "Escola de Economia, Gestão e Ciência Política",
        duties: [
          "Docente de Licenciaturas em Ciência Política, Administração Pública e Relações Internacionais",
          "Professor de Mestrados em Ciência Política, Economia e Administração Pública",
          "Orientador de dissertações de mestrado"
        ]
      },
      en: {
        title: "Guest Professor Equivalent to Associate Professor",
        institution: "University of Minho • Since 2008",
        department: "School of Economics, Management and Political Science",
        duties: [
          "Lecturer in Bachelor's programs in Political Science, Public Administration and International Relations",
          "Professor in Master's programs in Political Science, Economics and Public Administration",
          "Supervisor of master's dissertations"
        ]
      }
    },
    {
      pt: {
        title: "Professor e Docente",
        institution: "Instituto Politécnico de Bragança – Escola Sup. Comunicação Administração Turismo • 2017 / 2018",
        department: "Mestrado em Administração Pública, Gestão Pública / Adm. Autárquica e Licenciatura em Gestão e Administração Pública",
        duties: [
          "Professor Mestrado em Administração Pública, Gestão Pública / Adm. Autárquica",
          "Docente Licenciatura em Gestão e Administração Pública",
          "Orientador de dissertações de mestrado"
        ]
      },
      en: {
        title: "Professor and Lecturer",
        institution: "Polytechnic Institute of Bragança – School of Communication, Administration and Tourism • 2017 / 2018",
        department: "Master's in Public Administration, Public Management / Municipal Administration & Bachelor's in Management and Public Administration",
        duties: [
          "Professor in the Master's in Public Administration, Public Management / Municipal Administration",
          "Lecturer in the Bachelor's in Management and Public Administration",
          "Supervisor of master's dissertations"
        ]
      }
    },
    {
      pt: {
        title: "Professor Adjunto - Regente e Docente",
        institution: "Instituto Superior Politécnico Gaia - ISPGAYA • 2009 a 2013",
        department: "Escola Sup. Desenvolvimento Social e Comunitário",
        duties: [
          "Regente e Docente de Licenciaturas"
        ]
      },
      en: {
        title: "Adjunct Professor - Course Director and Lecturer",
        institution: "Higher Polytechnic Institute of Gaia - ISPGAYA • 2009 to 2013",
        department: "Higher School of Social and Community Development",
        duties: [
          "Course Director and Lecturer in Bachelor's degree programs"
        ]
      }
    },
    {
      pt: {
        title: "Docente e Consultor",
        institution: "Instituto Nacional de Administração - INA • 2010, 2011",
        department: "Curso de Estudos Avançados em Gestão Pública (CEAGP – INA)",
        duties: [
          "Disciplina / U.C.: Administração Pública e Boa Governança"
        ]
      },
      en: {
        title: "Lecturer and Consultant",
        institution: "National Institute of Administration - INA • 2010, 2011",
        department: "Advanced Studies Course in Public Management (CEAGP – INA)",
        duties: [
          "Course / U.C.: Public Administration and Good Governance"
        ]
      }
    },
    {
      pt: {
        title: "Entre outros",
        institution: "Outras Experiências Académicas e Profissionais",
        department: "Colaboração institucional e consultoria especializada",
        duties: [
          "Participação em júris académicos, comissões científicas e projetos de consultoria em Administração Pública e Políticas Públicas."
        ]
      },
      en: {
        title: "Among others",
        institution: "Other Academic and Professional Experiences",
        department: "Institutional collaboration and specialized consulting",
        duties: [
          "Participation in academic juries, scientific committees, and consulting projects in Public Administration and Public Policy."
        ]
      }
    }
  ];

  const awards = [
    {
      pt: "Investigador do Centro de Investigação em Ciência Política (CICP) - Universidade do Minho (desde 2023)",
      en: "Researcher at the Research Center in Political Science (CICP) - University of Minho (since 2023)",
      note_pt: "Investigador integrado no CICP",
      note_en: "Integrated researcher at CICP"
    },
    {
      pt: "Membro Afiliado da Associação Portuguesa de Ciência Política (APCP)",
      en: "Affiliated Member of the Portuguese Association of Political Science (APCP)",
      note_pt: "",
      note_en: ""
    }
  ];

  const competencies_pt = [
    "Gestão Pública e Administração Pública",
    "Gestão de Recursos Humanos",
    "Políticas Sociais e Welfare Pluralism",
    "Governação Multinível",
    "Gestão da Inovação e Mudança",
    "Gestão do Conhecimento",
    "Governo Eletrónico",
    "Investigação Científica",
    "Docência Universitária",
    "Consultoria em Administração Pública"
  ];

  const competencies_en = [
    "Public Management and Public Administration",
    "Human Resources Management",
    "Social Policies and Welfare Pluralism",
    "Multilevel Governance",
    "Innovation and Change Management",
    "Knowledge Management",
    "E-Government",
    "Scientific Research",
    "University Teaching",
    "Public Administration Consulting"
  ];

  const competencies = language === "pt" ? competencies_pt : competencies_en;

  return (
    <>
      <SEOMeta title={t("cv.title")} description={t("cv.subtitle")} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
                  {t("cv.title")}
                </h1>
                <p className="font-opensans text-lg text-blue-100 max-w-2xl">
                  {t("cv.subtitle")}
                </p>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-opensans font-medium hover:bg-blue-50 transition-colors"
              >
                <Download size={20} />
                {t("cv.downloadCV")}
              </a>
            </div>
          </div>
        </section>

        {/* CV Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Education */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="text-primary" size={32} />
                <h2 className="font-montserrat font-bold text-3xl text-foreground">
                  {t("cv.education")}
                </h2>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => {
                  const data = language === "pt" ? edu.pt : edu.en;
                  return (
                    <div key={index} className="bg-lightGray rounded-lg p-6 border-l-4 border-primary">
                      <h3 className="font-montserrat font-bold text-lg text-primary mb-2">
                        {data.title}
                      </h3>
                      <p className="font-opensans text-sm text-foreground/70 mb-2">
                        {data.institution}
                      </p>
                      <p className="font-opensans text-foreground">
                        {data.program}
                      </p>
                      {data.note && (
                        <p className="font-opensans text-sm text-foreground/60 mt-2">
                          {data.note}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="text-primary" size={32} />
                <h2 className="font-montserrat font-bold text-3xl text-foreground">
                  {t("cv.experience")}
                </h2>
              </div>

              <div className="space-y-6">
                {experience.map((exp, index) => {
                  const data = language === "pt" ? exp.pt : exp.en;
                  return (
                    <div key={index} className="bg-lightGray rounded-lg p-6 border-l-4 border-primary">
                      <h3 className="font-montserrat font-bold text-lg text-primary mb-2">
                        {data.title}
                      </h3>
                      <p className="font-opensans text-sm text-foreground/70 mb-3">
                        {data.institution}
                      </p>
                      <p className="font-opensans text-foreground mb-3 font-semibold">
                        {data.department}
                      </p>
                      {data.duties.length > 0 && (
                        <ul className="font-opensans text-sm text-foreground/70 space-y-2">
                          {data.duties.map((duty, i) => (
                            <li key={i}>• {duty}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Awards & Distinctions */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-primary" size={32} />
                <h2 className="font-montserrat font-bold text-3xl text-foreground">
                  {t("cv.awards")}
                </h2>
              </div>

              <div className="space-y-4">
                {awards.map((award, index) => {
                  const text = language === "pt" ? award.pt : award.en;
                  const note = language === "pt" ? award.note_pt : award.note_en;
                  return (
                    <div key={index} className="bg-lightGray rounded-lg p-6 border-l-4 border-primary">
                      <p className="font-opensans text-foreground">
                        {text}
                      </p>
                      {note && (
                        <p className="font-opensans text-sm text-foreground/60 mt-2">
                          {note}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Competencies */}
            <div className="mb-16">
              <h2 className="font-montserrat font-bold text-3xl text-foreground mb-8">
                {t("cv.competencies")}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {competencies.map((competency, index) => (
                  <div
                    key={index}
                    className="bg-primary/10 text-primary px-4 py-3 rounded-lg font-opensans font-medium"
                  >
                    {competency}
                  </div>
                ))}
              </div>
            </div>

            {/* Download CTA */}
            <div className="bg-gradient-to-r from-primary to-blue-900 rounded-lg p-8 text-white text-center">
              <h3 className="font-montserrat font-bold text-2xl mb-4">
                {language === "pt" ? "Descarregar CV Completo" : "Download Full CV"}
              </h3>
              <p className="font-opensans text-blue-100 mb-6">
                {language === "pt" 
                  ? "Obtenha a versão completa do meu curriculum vitae em formato PDF" 
                  : "Get the complete version of my curriculum vitae in PDF format"}
              </p>
              <Button className="bg-white text-primary hover:bg-blue-50">
                <Download className="mr-2" size={20} />
                {t("cv.downloadCV")}
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
