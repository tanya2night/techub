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
    title: string;
    subtitle: string;
    description: string;
    cta: {
      spaces: string;
      interest: string;
    };
    stats: {
      area: string;
      companies: string;
      equipment: string;
      tech: string;
    };
  };
  about: {
    description: string;
  };
  spaces: {
    title: string;
    description: string;
  };
  programs: {
    title: string;
  };
  news: {
    title: string;
    description: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const translations: Record<Language, Translations> = {
  sl: {
    nav: {
      about: 'O TecHubu',
      spaces: 'Prostori',
      programs: 'Programi',
      news: 'Novice',
      timeline: 'Časovnica',
      contact: 'Kontakt',
      interest: 'Izrazi interes',
    },
    hero: {
      title: 'TecHub Velenje',
      subtitle: 'Inovativni tehnološki center za razvoj startup podjetij',
      description: 'Kjer ideja postane prototip, prototip pa uspešen izdelek na trgu. Generiramo nov tok tehnoloških prebojev v Savinjski regiji.',
      cta: {
        spaces: 'Razišči prostore',
        interest: 'Izrazi interes',
      },
      stats: {
        area: 'skupnih površin',
        companies: 'podjetij',
        equipment: 'sodobne opreme',
        tech: 'Tehnologije',
      },
    },
    about: {
      description: 'TecHub Velenje nastaja kot sodoben tehnološki park nove generacije. V Velenju gradimo razvojno okolje, kjer se bodo povezovali podjetništvo, raziskave, izobraževanje in industrija.',
    },
    spaces: {
      title: 'Infrastruktura prebojev',
      description: 'TecHub je tehnološko središče nove generacije – dinamično okolje za razvoj inovacij.',
    },
    programs: {
      title: 'Programi za rast',
    },
    news: {
      title: 'Novice',
      description: 'Spremljajte najnovejše informacije o razvoju TecHuba.',
    },
  },
  en: {
    nav: {
      about: 'About TecHub',
      spaces: 'Spaces',
      programs: 'Programs',
      news: 'News',
      timeline: 'Timeline',
      contact: 'Contact',
      interest: 'Express Interest',
    },
    hero: {
      title: 'TecHub Velenje',
      subtitle: 'Innovative technology center for startup development',
      description: 'Where an idea becomes a prototype, and a prototype becomes a successful product on the market. We generate a new flow of technological breakthroughs in the Savinja region.',
      cta: {
        spaces: 'Explore spaces',
        interest: 'Express interest',
      },
      stats: {
        area: 'total area',
        companies: 'companies',
        equipment: 'modern equipment',
        tech: 'Technology',
      },
    },
    about: {
      description: 'TecHub Velenje is emerging as a modern technology park of the new generation. In Velenje, we are building a development environment where entrepreneurship, research, education, and industry will connect.',
    },
    spaces: {
      title: 'Infrastructure of Breakthroughs',
      description: 'TecHub is a next-generation technology center – a dynamic environment for innovation development.',
    },
    programs: {
      title: 'Growth Programs',
    },
    news: {
      title: 'News',
      description: 'Follow the latest information about TecHub development.',
    },
  },
};

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
