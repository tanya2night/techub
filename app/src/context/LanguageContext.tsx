import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'sl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const translations = {
  sl: {
    'nav.home': 'Domov', 'nav.about': 'O TecHubu', 'nav.spaces': 'Prostori', 'nav.programs': 'Programi',
    'nav.news': 'Aktualno', 'nav.timeline': 'Časovnica', 'nav.contact': 'Kontaktiraj nas', 'nav.language': 'EN',
    'hero.title': 'Tehnološki park Velenje',
    'hero.subtitle': 'Kjer ideja postane prototip, prototip prva serija, prva serija pa nova delovna mesta za našo dolino.',
    'hero.tagline': 'Generiramo nov tok tehnoloških prebojev.',
    'hero.cta.interest': 'Izrazi interes za prostore', 'hero.cta.more': 'Razišči več',
    'hero.stat.opening': 'Odprtje', 'hero.stat.area': 'm² neto površine', 'hero.stat.offices': 'Pisarn', 'hero.stat.coworking': 'Coworking mest',
    'about.eyebrow': 'O TECHUBU', 'about.title': 'O TecHubu',
    'about.description': 'TecHub Velenje nastaja kot sodoben tehnološki park nove generacije. V Velenju gradimo razvojno okolje, kjer se bodo povezovali podjetništvo, raziskave, izobraževanje in industrija. S prototipnim laboratorijem, proizvodnimi celicami, coworkingom, pisarnami in konferenčno dvorano bomo ustvarili pogoje za razvoj novih tehnologij, novih podjetij in novih delovnih mest prihodnosti. TecHub je del širše preobrazbe SAŠA regije v gospodarstvo znanja, tehnologije in podjetništva.',
    'about.process.pre': 'Od', 'about.process.title': 'IDEJE DO IZDELKA',
    'about.process.step1': 'ideja', 'about.process.step2': 'prototip', 'about.process.step3': 'serija', 'about.process.step4': 'delovna mesta',
    'spaces.eyebrow': 'PROSTORI', 'spaces.title': 'Infrastruktura prebojev', 'spaces.subtitle': 'TecHub je tehnološko središče nove generacije – dinamično okolje za razvoj inovacij.',
    'spaces.more.info': 'Več informacij', 'spaces.cta': 'Izrazi interes',
    'spaces.futurelab.title': 'Future Lab', 'spaces.futurelab.subtitle': 'Prostor za inovacije in eksperimentiranje', 'spaces.futurelab.short': 'Srce inovacijskega ekosistema s 3D tiskalniki in prototipnimi materiali.',
    'spaces.smartmedia.title': 'Smart Media Room', 'spaces.smartmedia.subtitle': 'Multimedijski prostor za kreativne predstavitve', 'spaces.smartmedia.short': 'Ustvarjanje visokokakovostnih marketinških in predstavitvenih vsebin.',
    'spaces.coworking.title': 'Coworking', 'spaces.coworking.subtitle': 'Prostor za inkubirana podjetja', 'spaces.coworking.short': '30 fiksnih delovnih okolij za inkubirana podjetja.',
    'spaces.dvorana.title': 'Sodobna konferenčna dvorana', 'spaces.dvorana.subtitle': 'Stičišče znanja in poslovnih priložnosti', 'spaces.dvorana.short': 'Osrednji prostor za dogodke, seminarje in mreženje.',
    'spaces.atrij.title': 'Zunanji pokriti prostor', 'spaces.atrij.subtitle': 'Dinamično delovno okolje in stičišče skupnosti', 'spaces.atrij.short': 'Atrij za sproščene dogodke, delavnice in mreženje.',
    'spaces.pisarne.title': 'Atraktivni pisarniški prostori', 'spaces.pisarne.subtitle': 'Za tehnološka startup podjetja', 'spaces.pisarne.short': '577,97 m² sodobnih pisarn različnih velikosti.',
    'programs.eyebrow': 'PROGRAMI', 'programs.title': 'Programi za rast', 'programs.subtitle': 'Od ideje do uspešnega podjetja - spremljamo te na vsakem koraku', 'programs.coming.soon': 'Programi za startup podjetja bodo objavljeni kmalu',
    'programs.predinkubacija.title': 'Predinkubacija', 'programs.predinkubacija.desc': 'Za tiste, ki imajo idejo in jo želijo preizkusiti.',
    'programs.inkubacija.title': 'Inkubacija', 'programs.inkubacija.subtitle': '0-3 leta', 'programs.inkubacija.desc': 'Intenzivna podpora za zgodnje faze rasti.',
    'programs.rast.title': 'Faza Rasti', 'programs.rast.desc': 'Podpora za uveljavljene startupe pri širitvi.',
    'news.eyebrow': 'AKTUALNO', 'news.title': 'Novice in pomembne informacije', 'news.read.more': 'Preberi več',
    'timeline.eyebrow': 'ČASOVNICA GRADNJE', 'timeline.title': 'Projekt v teku', 'timeline.progress': 'Napredek', 'timeline.months.left': 'Še približno {months} do odprtja', 'timeline.opening.soon': 'Odprtje je pred vrati!',
    'timeline.priprava.title': 'Priprava', 'timeline.priprava.date': '2024 - 2025', 'timeline.status.completed': 'Zaključeno', 'timeline.status.inprogress': 'V teku', 'timeline.status.future': 'Prihodnje',
    'timeline.gradnja.title': 'Gradnja', 'timeline.gradnja.date': 'September 2025 – april 2027', 'timeline.gradnja.item1': 'Temelji in konstrukcija', 'timeline.gradnja.item2': 'Inštalacije', 'timeline.gradnja.item3': 'Fasada', 'timeline.gradnja.item4': 'Notranja in IKT oprema',
    'timeline.odprtje.title': 'Odprtje', 'timeline.odprtje.date': 'Maj 2027', 'timeline.odprtje.item1': 'Svečana otvoritev', 'timeline.odprtje.item2': 'Sprejem prvh najemnikov', 'timeline.odprtje.item3': 'Začetek programov',
    'timeline.faq.title': 'Pogosta vprašanja', 'timeline.faq.q1': 'Kdaj bo TecHub uradno odprt?', 'timeline.faq.a1': 'Načrtovano uradno odprtje TecHuba je predvideno za maj 2027.', 'timeline.faq.q2': 'Kdo lahko najame prostore v TecHubu?', 'timeline.faq.a2': 'Prostore lahko najamejo startup podjetja, mlajša od treh let, katerih dejavnost je skladna s cilji in tehnološko specializacijo inkubatorja.', 'timeline.faq.q3': 'Kako lahko izrazim interes za najem?', 'timeline.faq.a3': 'Interes za najem prostorov lahko izrazite preko spletnega obrazca na naši spletni strani.', 'timeline.faq.q4': 'Ali je TecHub sofinanciran s strani EU?', 'timeline.faq.a4': 'Da, projekt TecHub je sofinanciran s strani Evropske unije iz Evropskega sklada za regionalni razvoj.',
    'cta.title': 'Pripravljen na naslednji korak?', 'cta.subtitle': 'Pridruži se skupnosti inovatorjev v Velenju. Skupaj ustvarjamo prihodnost tehnologije in podjetništva.', 'cta.interest': 'Izrazi interes za prostore', 'cta.contact': 'Kontaktiraj nas',
    'footer.description': 'Tehnološki park Velenje - katalizator tehnoloških prebojev. Vozlišče idej, tehnologij in podjetnosti.', 'footer.navigation': 'Navigacija', 'footer.spaces': 'Prostori', 'footer.contact': 'Kontakt', 'footer.location': 'Velenje, Slovenija',
    'footer.eu.text': 'Operacija se izvaja v okviru javnega razpisa »Spodbude za razvoj inovativnih tehnoloških parkov in inovacijskih vozlišč v obdobju 2021–2027«. Operacija je sofinancirana s strani Evropske unije iz Evropskega sklada za regionalni razvoj in iz državnega proračuna Republike Slovenije.', 'footer.eu.more': 'Več informacij', 'footer.copyright': '© {year} TecHub. Vse pravice pridržane.', 'footer.privacy': 'Zasebnost', 'footer.terms': 'Pogoji uporabe',
    'form.title': 'Prijavite se v TecHub', 'form.subtitle': 'Izpolnite spodnji obrazec in nas kontaktirajte za več informacij o prostorih in programih.', 'form.company.info': 'Podatki o podjetju', 'form.company.name': 'Ime podjetja', 'form.company.name.placeholder': 'npr. TechStart d.o.o.', 'form.website': 'Spletna stran', 'form.website.placeholder': 'www.vasapodjetje.si', 'form.workarea': 'Področje dela', 'form.workarea.placeholder': 'Izberite področje', 'form.company.stage': 'Faza podjetja', 'form.company.stage.placeholder': 'Izberite fazo', 'form.team.size': 'Velikost ekipe', 'form.team.size.placeholder': 'Število zaposlenih', 'form.contact.info': 'Kontaktni podatki', 'form.contact.name': 'Ime in priimek', 'form.contact.name.placeholder': 'Janez Novak', 'form.phone': 'Telefon', 'form.phone.placeholder': '+386 40 123 456', 'form.email': 'E-pošta', 'form.email.placeholder': 'janez.novak@podjetje.si', 'form.space.selection': 'Izbor prostora', 'form.space': 'Prostor / Program', 'form.space.placeholder': 'Izberite prostor', 'form.message': 'Dodatna sporočila / Vprašanja', 'form.message.placeholder': 'Opišite vaš projekt, potrebe ali postavite vprašanja...', 'form.terms.title': 'Pogoji in soglasja', 'form.terms.agree': 'Strinjam se s', 'form.terms.link': 'pogoji uporabe', 'form.privacy.agree': 'Strinjam se z', 'form.privacy.link': 'politiko zasebnosti', 'form.newsletter': 'Želim prejemati novice in obvestila o dogodkih v TecHubu (opcijsko).', 'form.submit': 'Pošlji prijavo', 'form.sending': 'Pošiljanje...', 'form.cancel': 'Prekliči', 'form.required': 'Označena polja so obvezna', 'form.success.title': 'Hvala za vaše zanimanje!', 'form.success.message': 'Vaša prijava je bila uspešno poslana. Naš ekipa vas bo kontaktirala v najkrajšem možnem času.', 'form.success.received': 'Prejeli smo', 'form.success.close': 'Zapri',
    'modal.about.space': 'O prostoru', 'modal.features': 'Ključne značilnosti', 'modal.equipment': 'Oprema', 'modal.close': 'Zapri',
  },
  en: {
    'nav.home': 'Home', 'nav.about': 'About TecHub', 'nav.spaces': 'Spaces', 'nav.programs': 'Programs',
    'nav.news': 'News', 'nav.timeline': 'Timeline', 'nav.contact': 'Contact Us', 'nav.language': 'SLOVENIAN',
    'hero.title': 'Technology Park Velenje',
    'hero.subtitle': 'Where ideas become prototypes, prototypes become first series, and first series become new jobs for our valley.',
    'hero.tagline': 'Generating a new flow of technological breakthroughs.',
    'hero.cta.interest': 'Express interest in spaces', 'hero.cta.more': 'Explore more',
    'hero.stat.opening': 'Opening', 'hero.stat.area': 'm² net area', 'hero.stat.offices': 'Offices', 'hero.stat.coworking': 'Coworking spaces',
    'about.eyebrow': 'ABOUT TECHUB', 'about.title': 'About TecHub',
    'about.description': 'TecHub Velenje is emerging as a modern technology park of the new generation. In Velenje, we are building a development environment where entrepreneurship, research, education, and industry will connect. With a prototyping laboratory, production cells, coworking spaces, offices, and a conference hall, we will create conditions for the development of new technologies, new companies, and new jobs of the future. TecHub is part of the broader transformation of the SAŠA region into a knowledge, technology, and entrepreneurship economy.',
    'about.process.pre': 'From', 'about.process.title': 'IDEA TO PRODUCT',
    'about.process.step1': 'idea', 'about.process.step2': 'prototype', 'about.process.step3': 'series', 'about.process.step4': 'jobs',
    'spaces.eyebrow': 'SPACES', 'spaces.title': 'Breakthrough Infrastructure', 'spaces.subtitle': 'TecHub is a next-generation technology hub – a dynamic environment for developing innovations.',
    'spaces.more.info': 'More information', 'spaces.cta': 'Express interest',
    'spaces.futurelab.title': 'Future Lab', 'spaces.futurelab.subtitle': 'Space for Innovation and Experimentation', 'spaces.futurelab.short': 'The heart of the innovation ecosystem with 3D printers and prototyping materials.',
    'spaces.smartmedia.title': 'Smart Media Room', 'spaces.smartmedia.subtitle': 'Multimedia Space for Creative Presentations', 'spaces.smartmedia.short': 'Creating high-quality marketing and presentation content.',
    'spaces.coworking.title': 'Coworking', 'spaces.coworking.subtitle': 'Space for Incubated Companies', 'spaces.coworking.short': '30 fixed workstations for incubated companies.',
    'spaces.dvorana.title': 'Modern Conference Hall', 'spaces.dvorana.subtitle': 'Hub of Knowledge and Business Opportunities', 'spaces.dvorana.short': 'Central space for events, seminars, and networking.',
    'spaces.atrij.title': 'Outdoor Covered Space', 'spaces.atrij.subtitle': 'Dynamic Work Environment and Community Hub', 'spaces.atrij.short': 'Atrium for relaxed events, workshops, and networking.',
    'spaces.pisarne.title': 'Attractive Office Spaces', 'spaces.pisarne.subtitle': 'For Technology Startup Companies', 'spaces.pisarne.short': '577.97 m² of modern offices in various sizes.',
    'programs.eyebrow': 'PROGRAMS', 'programs.title': 'Growth Programs', 'programs.subtitle': 'From idea to successful company – we support you every step of the way', 'programs.coming.soon': 'Startup programs will be announced soon',
    'programs.predinkubacija.title': 'Pre-incubation', 'programs.predinkubacija.desc': 'For those who have an idea and want to test it.',
    'programs.inkubacija.title': 'Incubation', 'programs.inkubacija.subtitle': '0-3 years', 'programs.inkubacija.desc': 'Intensive support for early growth stages.',
    'programs.rast.title': 'Growth Phase', 'programs.rast.desc': 'Support for established startups in scaling.',
    'news.eyebrow': 'NEWS', 'news.title': 'News and Important Information', 'news.read.more': 'Read More',
    'timeline.eyebrow': 'CONSTRUCTION TIMELINE', 'timeline.title': 'Project in Progress', 'timeline.progress': 'Progress', 'timeline.months.left': 'Approximately {months} until opening', 'timeline.opening.soon': 'Opening is near!',
    'timeline.priprava.title': 'Preparation', 'timeline.priprava.date': '2024 - 2025', 'timeline.status.completed': 'Completed', 'timeline.status.inprogress': 'In Progress', 'timeline.status.future': 'Future',
    'timeline.gradnja.title': 'Construction', 'timeline.gradnja.date': 'September 2025 – April 2027', 'timeline.gradnja.item1': 'Foundations and Structure', 'timeline.gradnja.item2': 'Installations', 'timeline.gradnja.item3': 'Facade', 'timeline.gradnja.item4': 'Interior and ICT Equipment',
    'timeline.odprtje.title': 'Opening', 'timeline.odprtje.date': 'May 2027', 'timeline.odprtje.item1': 'Grand Opening', 'timeline.odprtje.item2': 'First Tenants Move In', 'timeline.odprtje.item3': 'Program Launch',
    'timeline.faq.title': 'Frequently Asked Questions', 'timeline.faq.q1': 'When will TecHub officially open?', 'timeline.faq.a1': 'The planned official opening of TecHub is scheduled for May 2027.', 'timeline.faq.q2': 'Who can rent spaces in TecHub?', 'timeline.faq.a2': 'Spaces can be rented by startup companies younger than three years, whose activities align with the goals and technological specialization of the incubator.', 'timeline.faq.q3': 'How can I express interest in renting?', 'timeline.faq.a3': 'You can express interest in renting spaces through the online form on our website.', 'timeline.faq.q4': 'Is TecHub co-financed by the EU?', 'timeline.faq.a4': 'Yes, the TecHub project is co-financed by the European Union from the European Regional Development Fund.',
    'cta.title': 'Ready for the next step?', 'cta.subtitle': 'Join the community of innovators in Velenje. Together we are creating the future of technology and entrepreneurship.', 'cta.interest': 'Express interest in spaces', 'cta.contact': 'Contact us',
    'footer.description': 'Technology Park Velenje - catalyst for technology breakthroughs. Hub of ideas, technologies, and entrepreneurship.', 'footer.navigation': 'Navigation', 'footer.spaces': 'Spaces', 'footer.contact': 'Contact', 'footer.location': 'Velenje, Slovenia',
    'footer.eu.text': 'The operation is carried out within the framework of the public tender "Incentives for the Development of Innovative Technology Parks and Innovation Hubs in the Period 2021–2027". The operation is co-financed by the European Union from the European Regional Development Fund and from the state budget of the Republic of Slovenia.', 'footer.eu.more': 'More Information', 'footer.copyright': '© {year} TecHub. All rights reserved.', 'footer.privacy': 'Privacy', 'footer.terms': 'Terms of Use',
    'form.title': 'Apply to TecHub', 'form.subtitle': 'Fill out the form below and contact us for more information about spaces and programs.', 'form.company.info': 'Company Information', 'form.company.name': 'Company Name', 'form.company.name.placeholder': 'e.g. TechStart Ltd.', 'form.website': 'Website', 'form.website.placeholder': 'www.yourcompany.com', 'form.workarea': 'Area of Work', 'form.workarea.placeholder': 'Select area', 'form.company.stage': 'Company Stage', 'form.company.stage.placeholder': 'Select stage', 'form.team.size': 'Team Size', 'form.team.size.placeholder': 'Number of employees', 'form.contact.info': 'Contact Information', 'form.contact.name': 'Full Name', 'form.contact.name.placeholder': 'John Doe', 'form.phone': 'Phone', 'form.phone.placeholder': '+386 40 123 456', 'form.email': 'Email', 'form.email.placeholder': 'john.doe@company.com', 'form.space.selection': 'Space Selection', 'form.space': 'Space / Program', 'form.space.placeholder': 'Select space', 'form.message': 'Additional Messages / Questions', 'form.message.placeholder': 'Describe your project, needs, or ask questions...', 'form.terms.title': 'Terms and Consents', 'form.terms.agree': 'I agree to the', 'form.terms.link': 'terms of use', 'form.privacy.agree': 'I agree to the', 'form.privacy.link': 'privacy policy', 'form.newsletter': 'I want to receive news and event notifications from TecHub (optional).', 'form.submit': 'Submit Application', 'form.sending': 'Sending...', 'form.cancel': 'Cancel', 'form.required': 'Fields marked with * are required', 'form.success.title': 'Thank you for your interest!', 'form.success.message': 'Your application has been successfully sent. Our team will contact you as soon as possible.', 'form.success.received': 'We received', 'form.success.close': 'Close',
    'modal.about.space': 'About the Space', 'modal.features': 'Key Features', 'modal.equipment': 'Equipment', 'modal.close': 'Close',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('sl');
  const t = (key: string): string | string[] => translations[language][key as keyof typeof translations.sl] || key;
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
