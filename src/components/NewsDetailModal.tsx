import { useEffect } from 'react';
import { X, Calendar, User, ArrowLeft, Share2, Bookmark } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content?: string;
  featured: boolean;
  image: string;
  author?: string;
}

interface NewsDetailModalProps {
  news: NewsItem | null;
  isOpen: boolean;
  onClose: () => void;
}

// Full content for each news item
const newsContent: Record<number, string> = {
  1: `Z velikim veseljem sporočamo, da se je danes, 15. januarja 2026, uradno začela gradnja TecHuba - tehnološkega parka, ki bo postal središče inovacij in podjetništva v Velenju in širši regiji.

**Zakaj je to pomembno?**

TecHub predstavlja pomemben mejnik v razvoju tehnološkega ekosistema v Savinjski regiji. S 3000+ m² površine bo ponujal prostor za rast najbolj perspektivnih tehnoloških startupov, od ideje do uspešnega podjetja.

**Kaj vse bo na voljo?**

V TecHubu bo na voljo sedem infrastrukturnih enot:
- Future Lab za prototipiranje
- Smart Media Room za produkcijo vsebin
- Proizvodne celice za razvoj izdelkov
- Pisarne na strehi mesta
- Coworking prostor
- Atrij za dogodke
- Sodobna konferenčna dvorana

**Kdo stoji za projektom?**

Projekt TecHub je rezultat sodelovanja med mestno občino Velenje, lokalnim gospodarstvom in evropskimi sredstvi. Projekt je sofinanciran s strani Evropske unije iz Evropskega sklada za regionalni razvoj.

**Kaj sledi?**

Gradnja bo potekala v več fazah. Prva faza zajema gradnjo same stavbe, ki naj bi bila zaključena do konca leta 2026. Nato sledi opremljanje prostorov, ki bo trajalo do pomladi 2027. Uradno odprtje načrtujemo za poletje 2027.

Vabljeni k sledenju našemu napredku!`,

  2: `TecHub je v začetku januarja 2026 uspešno predstavil svoj koncept na največji slovenski IKT konferenci, ki je potekala v Ljubljani.

**O konferenci**

IKT konferenca je največji letni dogodek na področju informacijsko-komunikacijske tehnologije v Sloveniji. Letos se je udeležilo več kot 1500 udeležencev iz vsega sveta.

**Naša predstavitev**

Naša ekipa je predstavila vizijo TecHuba kot katalizatorja tehnoloških prebojev v regiji. Poseben poudarek smo dali na:

- Povezovanju akademskega znanja z industrijo
- Podpori zgodnjim fazam razvoja startupov
- Ustvarjanju ekosistema, ki omogoča hitro testiranje idej
- Mednarodni povezljivosti in dostopu do trgov

**Odziv publike**

Predstavitev je naletela na zelo pozitiven odziv. Številni udeleženci so izrazili zanimanje za sodelovanje in povpraševali o možnostih najema prostorov ter vključitve v naše programe.

**Naprej**

Ta uspešna predstavitev je pomemben korak pri vzpostavljanju TecHuba na zemljevidu slovenskega in mednarodnega tehnološkega ekosistema.`,

  3: `Z velikim veseljem sporočamo, da smo v preteklem tednu podpisali pomembna partnerstva z več vodilnimi velenjskimi podjetji.

**Partnerji**

Med novimi partnerji so:
- Gorenje, d.o.o. - vodilni proizvajalec gospodinjskih aparatov
- KLS Ljubno, d.d. - specializirano za kovinsko predelavo
- ETI, d.d. - proizvajalec elektrotehničnih izdelkov

**Cilj partnerstev**

Cilj teh partnerstev je ustvariti most med inovativnimi startupi in uveljavljenim gospodarstvom. Partnerji bodo:

- Nudili mentorstvo in strokovno podporo
- Omogočili testiranje prototipov v realnem okolju
- Odprli vrata do svojih dobaviteljskih verig
- Zagotovili potencialne stranke za startup produkte

**Koristi za startupa**

Za startup podjetja v TecHubu to pomeni:
- Direkten dostop do industrijskih partnerjev
- Možnosti pilotnih projektov
- Strokovno znanje in izkušnje
- Potencialne investicije

**Skupna vizija**

Vsi partnerji delimo skupno vizijo - ustvariti močan tehnološki ekosistem v regiji, ki bo privabljal talente, spodbujal inovacije in ustvarjal nova delovna mesta.`,

  4: `Vabljeni na info dan TecHuba, ki bo potekal 20. decembra 2025 v Velenju.

**Kdaj in kje?**

- Datum: 20. december 2025
- Čas: 14:00 - 18:00
- Lokacija: Mestna občina Velenje, Cesta zmage 10

**Program**

14:00 - 14:30 Registracija in sprejem
14:30 - 15:00 Uvodna predstavitev TecHuba
15:00 - 15:30 Predstavitev prostorov in programov
15:30 - 16:00 Odmor z malico
16:00 - 17:00 Individualna svetovanja
17:00 - 18:00 Mreženje in druženje

**Kaj boste izvedeli?**

Na info dnevu boste izvedeli vse o:
- Različnih prostorih, ki so na voljo za najem
- Startup programih in podpori
- Pogojih za vstop v inkubator
- Cenah in finančnih modelih
- Časovnici odprtja

**Za koga?**

Info dan je namenjen:
- Startup podjetjem v zgodnjih fazah
- Podjetnikom z inovativnimi idejami
- Raziskovalcem, ki želijo komercializirati svoje rezultate
- Vsem, ki jih zanima tehnološki ekosistem v regiji

**Prijave**

Prijave so obvezne zaradi omejenega števila mest. Prijavite se lahko preko našega spletnega obrazca ali na info@techub.si.`,

  5: `Z veseljem sporočamo, da smo uspešno pridobili vsa potrebna dovoljenja za začetek gradnje TecHuba.

**Pridobljena dovoljenja**

V preteklih mesecih smo uspešno pridobili:
- Gradbeno dovoljenje
- Okoljevarstveno soglasje
- Soglasje za priključitev na infrastrukturo
- Požarno varnostno soglasje
- Vsa ostala potrebna soglasja in mnenja

**Proces pridobivanja**

Proces pridobivanja dovoljenj se je začel v začetku leta 2025 in je trajal približno 10 mesecev. V tem času smo:

- Pripravili vso potrebno dokumentacijo
- Izvedli geodetske in geološke raziskave
- Pridobili vsa soglasja sosedov in relevantnih institucij
- Uskladili projekt z veljavnimi predpisi

**Kaj to pomeni?**

Pridobitev vseh dovoljenj pomeni, da lahko uradno začnemo z gradbenimi deli. To je pomemben mejnik, ki nas približuje cilju - odprtju TecHuba.

**Naslednji koraki**

V naslednjih tednih bomo:
- Izbrali glavnega izvajalca gradbenih del
- Pričeli s pripravljalnimi deli na gradbišču
- Obveščali javnost o napredku

Hvala za vašo podporo!`,
};

export default function NewsDetailModal({ news, isOpen, onClose }: NewsDetailModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !news) return null;

  const fullContent = newsContent[news.id] || news.excerpt;

  // Format content with markdown-like syntax
  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Check if it's a heading (starts with ** and ends with **)
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={index} className="text-xl font-sora font-semibold text-techub-gray-dark mt-8 mb-4">
            {paragraph.replace(/\*\*/g, '')}
          </h3>
        );
      }
      // Check if it's a list
      if (paragraph.includes('\n- ')) {
        const items = paragraph.split('\n- ').filter(item => item.trim());
        return (
          <ul key={index} className="list-disc list-inside space-y-2 my-4 ml-4">
            {items.map((item, i) => (
              <li key={i} className="text-techub-gray">{item.replace(/^- /, '')}</li>
            ))}
          </ul>
        );
      }
      // Regular paragraph
      return (
        <p key={index} className="text-techub-gray leading-relaxed mb-4">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-overlay-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div 
        className="relative bg-white rounded-2xl shadow-modal max-w-3xl w-full max-h-[90vh] overflow-hidden animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-techub-gray-dark hover:bg-white transition-colors duration-300 shadow-lg"
          aria-label="Zapri"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero Image */}
          <div className="relative h-56 sm:h-72">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-techub-blue text-white text-xs font-medium rounded-full">
                {news.category}
              </span>
            </div>

            {/* Back Button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-20 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm text-techub-gray-dark hover:bg-white transition-colors"
            >
              <ArrowLeft size={14} />
              Nazaj
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-sora font-bold text-techub-gray-dark mb-4">
              {news.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-techub-bg-warm">
              <div className="flex items-center gap-2 text-sm text-techub-gray">
                <Calendar size={16} className="text-techub-blue" />
                {news.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-techub-gray">
                <User size={16} className="text-techub-blue" />
                {news.author || 'TecHub Ekipa'}
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {formatContent(fullContent)}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-techub-bg-warm">
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-techub-gray hover:text-techub-blue transition-colors">
                <Share2 size={16} />
                Deli
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-techub-gray hover:text-techub-blue transition-colors">
                <Bookmark size={16} />
                Shrani
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
