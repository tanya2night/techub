import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'sl' | 'en';

interface Translations {
  nav: {
    about: string;
    spaces: string;
    programs: string;
    news: string;
    timeline: string;
    contact: string;
    interest: string;
  };
  hero: {
    mainText: string;
    subText: string;
    exploreSpaces: string;
    expressInterest: string;
    stats: {
      opening: string;
      netArea: string;
      productionCells: string;
      offices: string;
    };
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      idea: { title: string; desc: string };
      prototype: { title: string; desc: string };
      series: { title: string; desc: string };
      jobs: { title: string; desc: string };
    };
  };
  spaces: {
    title: string;
    subtitle: string;
    expressInterest: string;
  };
  programs: {
    title: string;
    subtitle: string;
    comingSoon: string;
  };
  news: {
    title: string;
    subtitle: string;
    readMore: string;
  };
  timeline: {
    title: string;
    subtitle: string;
    monthsToGo: string;
    preparation: string;
    construction: string;
    completion: string;
    ready: string;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      space: string;
      selectSpace: string;
    };
  };
  footer: {
    privacy: string;
    terms: string;
    responsible: string;
    euText: string;
    moreInfo: string;
  };
}

const translations: Record<Language, Translations> = {
  sl: {
    nav: {
      about: 'O nas',
      spaces: 'Prostori',
      programs: 'Programi',
      news: 'Novice',
      timeline: 'Časovnica',
      contact: 'Kontakt',
      interest: 'Izrazi interes',
    },
    hero: {
      mainText: 'Kjer ideja postane prototip, prototip prva serija, prva serija pa nova delovna mesta za našo dolino.',
      subText: 'Generiramo nov tok tehnoloških prebojev.',
      exploreSpaces: 'Razišči prostore',
      expressInterest: 'Izrazi interes',
      stats: {
        opening: 'otvoritev',
        netArea: 'neto površine',
        productionCells: 'proizvodnih celic',
        offices: 'pisarn',
      },
    },
    process: {
      title: 'Od ideje do izdelka',
      subtitle: 'Celotna pot podjetniškega razvoja na enem mestu',
      steps: {
        idea: { title: 'IDEJA', desc: 'Rojstvo inovativne zamisli' },
        prototype: { title: 'PROTOTIP', desc: 'Razvoj in testiranje' },
        series: { title: 'SERIJA', desc: 'Proizvodnja prve serije' },
        jobs: { title: 'DELOVNA MESTA', desc: 'Nova zaposlitev za dolino' },
      },
    },
    spaces: {
      title: 'Infrastruktura prebojev',
      subtitle: 'TecHub je tehnološko središče nove generacije – dinamično okolje za razvoj inovacij.',
      expressInterest: 'Izrazi interes',
    },
    programs: {
      title: 'Programi za rast',
      subtitle: 'Programi za rast predstavljajo celovit ekosistem podpore razvoju podjetij, od prvih korakov ideje do faze stabilne rasti.',
      comingSoon: 'Programi za startup podjetja bodo objavljeni kmalu',
    },
    news: {
      title: 'Novice',
      subtitle: 'Sveže informacije o dogajanju v TecHubu',
      readMore: 'Preberi več',
    },
    timeline: {
      title: 'Časovnica',
      subtitle: 'Pot do otvoritve TecHuba',
      monthsToGo: 'mesecev do otvoritve',
      preparation: 'PRIPRAVA',
      construction: 'GRADNJA',
      completion: 'ZAKLJUČEK',
      ready: 'Pripravljeni na naslednji korak?',
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Stopite v stik z nami',
      form: {
        name: 'Ime in priimek',
        email: 'E-pošta',
        company: 'Podjetje',
        message: 'Sporočilo',
        submit: 'Pošlji',
        space: 'Izberite prostor',
        selectSpace: 'Izberite prostor',
      },
    },
    footer: {
      privacy: 'Politika zasebnosti',
      terms: 'Pogoji uporabe',
      responsible: 'Mestna občina Velenje, Upravljalec objekta Saša inkubator',
      euText: 'Projekt sofinancira Evropska unija iz Sklada za pravičen prehod in poteka v okviru evropske kohezijske politike 2021–2027',
      moreInfo: 'Več informacij',
    },
  },
  en: {
    nav: {
      about: 'About',
      spaces: 'Spaces',
      programs: 'Programs',
      news: 'News',
      timeline: 'Timeline',
      contact: 'Contact',
      interest: 'Express interest',
    },
    hero: {
      mainText: 'Where an idea becomes a prototype, a prototype becomes the first series, and the first series becomes new jobs for our valley.',
      subText: 'We generate a new flow of technological breakthroughs.',
      exploreSpaces: 'Explore spaces',
      expressInterest: 'Express interest',
      stats: {
        opening: 'opening',
        netArea: 'net area',
        productionCells: 'production cells',
        offices: 'offices',
      },
    },
    process: {
      title: 'From Idea to Product',
      subtitle: 'The complete entrepreneurial development path in one place',
      steps: {
        idea: { title: 'IDEA', desc: 'Birth of innovative concept' },
        prototype: { title: 'PROTOTYPE', desc: 'Development and testing' },
        series: { title: 'SERIES', desc: 'First series production' },
        jobs: { title: 'JOBS', desc: 'New employment for the valley' },
      },
    },
    spaces: {
      title: 'Breakthrough Infrastructure',
      subtitle: 'TecHub is a next-generation technology center – a dynamic environment for innovation development.',
      expressInterest: 'Express interest',
    },
    programs: {
      title: 'Growth Programs',
      subtitle: 'Growth programs represent a comprehensive ecosystem supporting business development, from the first steps of an idea to the stable growth phase.',
      comingSoon: 'Programs for startup companies will be published soon',
    },
    news: {
      title: 'News',
      subtitle: 'Fresh information about happenings at TecHub',
      readMore: 'Read more',
    },
    timeline: {
      title: 'Timeline',
      subtitle: 'Path to TecHub opening',
      monthsToGo: 'months to opening',
      preparation: 'PREPARATION',
      construction: 'CONSTRUCTION',
      completion: 'COMPLETION',
      ready: 'Ready for the next step?',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in touch with us',
      form: {
        name: 'Full name',
        email: 'Email',
        company: 'Company',
        message: 'Message',
        submit: 'Send',
        space: 'Select space',
        selectSpace: 'Select space',
      },
    },
    footer: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      responsible: 'Municipality of Velenje, Facility Manager Saša Inkubator',
      euText: 'The project is co-financed by the European Union from the Just Transition Fund and takes place within the framework of the European Cohesion Policy 2021–2027',
      moreInfo: 'More information',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('sl');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
