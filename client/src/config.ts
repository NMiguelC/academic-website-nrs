// Site Configuration - Academic Website for Nuno Ribeiro e Silva
export const siteConfig = {
  // Personal Information
  name: "Nuno Ribeiro e Silva",
  title: "Professor Universitário | Investigador | Consultor",
  bio: "Doutor em Ciência Política — Processos Políticos Contemporâneos (Universidade de Santiago de Compostela) e Professor Convidado Equiparado a Professor Auxiliar na Universidade do Minho desde 2008. A sua investigação situa-se na interseção entre a governação, a administração e gestão pública, as políticas sociais e o estudo do futebol como fenómeno político e identitário.",
  email: "contact@nunoribeirosilva.com",
  
  // Institution
  institution: "Universidade do Minho",
  department: "Escola de Economia, Gestão e Ciência Política",
  address: "Campus de Gualtar",
  city: "Braga",
  country: "Portugal",
  
  // Professional Links
  socialLinks: {
    linkedin: "https://linkedin.com/in/nuno-ribeiro-e-silva-9395414",
    googleScholar: "https://scholar.google.com/citations?user=EwF6wZYAAAAJ&hl=pt-PT",
    orcid: "https://orcid.org/0000-0001-8790-7446",
    apcp: "https://www.apcp.pt/pt/socios#n",
  },
  
  // Research Areas
  researchAreas: [
    "Gestão Pública e Administração Pública",
    "Políticas Sociais e Welfare Pluralism",
    "Gestão do Conhecimento e Plataformas Digitais no Setor Público",
    "Governação Multinível e Associações de Municípios",
    "Recursos Humanos na Administração Pública",
    "Inovação e Gestão da Mudança",
    "Governo Eletrónico e Sociedade da Informação",
  ],
  
  // Values
  values: ["Integridade", "Rigor Científico", "Inovação", "Colaboração", "Impacto Social"],
  
  // Mission & Vision
  mission: "Contribuir para o avanço do conhecimento em Ciência Política, Gestão Pública e Administração Pública, formando líderes e profissionais capazes de enfrentar os desafios contemporâneos.",
  vision: "Ser uma referência nacional e internacional na área de Gestão Pública e Políticas Sociais, promovendo investigação de excelência e sua aplicação prática para o benefício da sociedade.",
  
  // Navigation
  navigation: [
    { label: "home", href: "/" },
    { label: "about", href: "/about" },
    { label: "book", href: "/book" },
    { label: "articles", href: "/blog" },
    { label: "media", href: "/media" },
    { label: "research", href: "/projects" },
    { label: "publications", href: "/publications" },
    { label: "cv", href: "/cv" },
    { label: "contact", href: "/contact" },
  ],
};

// Color Palette - Academic Professional Theme
export const colors = {
  primary: "#004080",      // Azul Primário - Confiança e Profissionalismo
  secondary: "#4A4A4A",    // Cinza Secundário - Sobriedade
  accent: "#007BFF",       // Azul de Destaque - Dinamismo
  lightGray: "#F5F5F5",    // Cinza Claro - Fundo Neutro
  white: "#FFFFFF",        // Branco Neutro - Clareza
};

// Typography
export const typography = {
  headingFont: "Montserrat",
  bodyFont: "Open Sans",
};

// Research Centers
export const researchCenters = [
  {
    name: "Centro de Investigação em Ciência Política (CICP)",
    institution: "Universidade do Minho",
    affiliation: "Investigador",
    since: 2023,
    classification: "Máxima (FCT)",
    description: "Um dos melhores centros de investigação em Ciência Política em Portugal",
  },
];

// Key Publications
export const keyPublications = [
  {
    title: "Multilevel governance European Union, Spain and Portugal",
    journal: "International Journal of Social Science and Public Policy",
    year: 2019,
    doi: "10.33642/ijsspp.v2n2p1",
  },
  {
    title: "The motivations of municipalities for emergence and participation in cross-border associations",
    journal: "International Journal of Business and Applied Social Science",
    year: 2018,
  },
];
