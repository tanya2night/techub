import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Cpu, Video, Users, Building, Mountain, ArrowRight, Mic } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface Space {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  aboutDesc: string;
  features: { title: string; desc: string }[];
  image: string;
  icon: React.ElementType;
  color: string;
  showInterestButton: boolean;
}

export function Spaces() {
  const { language } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [selectedSpace, setSelectedSpace] = useState<Space | null>(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedSpace(null);
  };

  const spaces: Space[] = language === 'sl' ? [
    {
      id: 'future-lab',
      title: 'Future Lab',
      shortDesc: 'Prostor za inovacije in eksperimentiranje',
      fullDesc: 'Srce inovacijskega ekosistema s 3D tiskalniki in prototipnimi materiali.',
      aboutDesc: 'Future Lab bo srce inovacijskega ekosistema TecHub-a. Opremljen bo s sodobnimi 3D tiskalniki, razvojnimi kompleti in prototipnimi materiali, ki bodo omogočali hitre iteracije idej in razvoj novih tehnoloških rešitev.\n\nPoleg tega bo v prostoru na voljo multimedijska oprema za snemanje eksperimentov, izdelavo predstavitvenih vsebin ter dokumentiranje razvoja. Future Lab je lociran v kleti objekta.',
      features: [
        { title: '3D tiskalniki', desc: '3D tiskalniki, 3D skener, laserski rezalnik…' },
        { title: 'Razvojni kompleti', desc: 'Razvojni kompleti (IoT, robotika, AI)' },
        { title: 'Tehnologije brezpilotnih letalnikov', desc: '' },
        { title: 'Multimedijska oprema', desc: '' },
      ],
      image: '/images/space-future-lab.png',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      showInterestButton: true,
    },
    {
      id: 'smart-media',
      title: 'Smart Media Room',
      shortDesc: 'Multimedijski prostor za kreativne predstavitve',
      fullDesc: 'Ustvarjanje visokokakovostnih marketinških in predstavitvenih vsebin.',
      aboutDesc: 'V današnjem digitalnem okolju je hitrost vstopa na trg ključnega pomena za uspeh novih produktov in storitev. Smart Media Room v TecHub-u bo podjetjem omogočal, da v zelo kratkem času ustvarijo visokokakovostne marketinške, izobraževalne in predstavitvene vsebine, ki bodo ključne za njihovo prodajo, investicijske kampanje in promocijo na globalnih trgih.\n\nGre za odlično podporno storitev tehnološkega parka vsem inkubiranim podjetjem, da bodo lahko s to infrastrukturo in opremo hitreje vstopala na trg. Medijski studio je lociran v kleti objekta.',
      features: [
        { title: 'Profesionalna snemalna oprema', desc: '' },
        { title: 'Video montaža', desc: '' },
        { title: 'Zvočni studio', desc: '' },
        { title: 'Streaming oprema', desc: '' },
      ],
      image: '/images/space-smart-media.png',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      showInterestButton: true,
    },
    {
      id: 'coworking',
      title: 'Coworking',
      shortDesc: 'Prostor za inkubirana podjetja',
      fullDesc: 'Coworking prostor bo zasnovan kot odprta pisarna za inkubirana podjetja, ki ne potrebujejo ne proizvodnih prostorov in ne večje pisarne.',
      aboutDesc: 'Coworking prostor bo zasnovan kot odprta pisarna za inkubirana podjetja, ki ne potrebujejo ne proizvodnih prostorov in ne večje pisarne. Pomeni, da ima lahko vsako podjetje svoje delovno okolje, fiksno mizo, stol in ostalo opremo, ki jo uporablja izključno inkubirano podjetje. Znotraj coworkinga so za inkubirana podjetja načrtovana številna fiksna delovna okolja z urejenimi pregradami ter odprta fleksibilna delovna mesta.\n\nCoworking se nahaja na dveh lokacijah v 1. nadstropju, skupaj v izmeri 396,13 m².',
      features: [
        { title: 'Fiksna delovna mesta', desc: 'urejene pregrade ali odprta fleksibilna delovna mesta' },
        { title: 'Odprta, variabilna delovna mesta', desc: '' },
        { title: 'Skupna infrastruktura', desc: '' },
        { title: 'Lokacija v prvem nadstropju', desc: '' },
      ],
      image: '/images/space-coworking-new.png',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      showInterestButton: true,
    },
    {
      id: 'konferencna',
      title: 'Sodobna konferenčna dvorana',
      shortDesc: 'Stičišče znanja in poslovnih priložnosti',
      fullDesc: 'Osrednji prostor za dogodke, seminarje in mreženje.',
      aboutDesc: 'Sodobna konferenčna dvorana v TecHub-u bo osrednji prostor za organizacijo dogodkov, ki bodo v regijo prinašali nova znanja, poslovne priložnosti in podjetniške trende. Z vrhunsko avdio-vizualno opremo bo omogočala izvedbo seminarjev, predavanj, delavnic in poslovnih srečanj na najvišji ravni.\n\nNamenjena bo tako predinkubacijski fazi, inkubaciji in tudi podjetjem, ki so že starejša od 3 let, a še vedno del podjetniškega inkubatorja.\n\nKonferenčna dvorana ne bo le prostor za dogodke, temveč bo osrednje stičišče podjetniške skupnosti. V njej bodo potekali večji dogodki, kot so:\n• Startup konference in investicijski forumi\n• Tehnološki sejmi in demo dnevi\n• Tematske podjetniške delavnice\n• Hackathoni in startup vikendi\n• Mreženjski dogodki in panelne razprave\n\nDvorana bo prav tako odprta za podjetja iz Poslovne cone Stara vas.',
      features: [
        { title: 'Vrhunska AV oprema', desc: '' },
        { title: 'Do 100 mest', desc: '' },
        { title: 'Streaming možnosti', desc: '' },
        { title: 'Opremljena odra', desc: '' },
      ],
      image: '/images/image_dvorana.png',
      icon: Mic,
      color: 'from-orange-500 to-amber-500',
      showInterestButton: false,
    },
    {
      id: 'outdoor',
      title: 'Zunanji pokriti prostor',
      shortDesc: 'Dinamično delovno okolje in stičišče skupnosti',
      fullDesc: 'Atrij za sproščene dogodke, delavnice in mreženje.',
      aboutDesc: 'Atrij na 99,85 m² bo omogočal bolj sproščeno in kreativno sodelovanje različnih ciljnih skupin, kjer se bodo organizirali bolj sproščeni poslovni dogodki in delavnice, namenjene druženju in mreženju.\n\nNudil bo prostor za:\n• Startup vikende, kjer bodo udeleženci razvijali svoje poslovne ideje\n• Hackathone, kjer bodo ekipe reševale tehnološke izzive\n• Mreženjske večere za podjetnike, mentorje in vlagatelje\n• Tematske večere in odprte debate\n• Poletne podjetniške bootcampe',
      features: [
        { title: '99,85 m²', desc: '' },
        { title: 'Pokrit prostor', desc: '' },
        { title: 'Prilagodljiva postavitev', desc: '' },
        { title: 'Za dogodke in mreženje', desc: '' },
      ],
      image: '/images/space-outdoor-new.png',
      icon: Mountain,
      color: 'from-teal-500 to-cyan-500',
      showInterestButton: true,
    },
    {
      id: 'offices',
      title: 'Atraktivni pisarniški prostori',
      shortDesc: 'Za tehnološka startup podjetja',
      fullDesc: '577,97 m² sodobnih pisarn različnih velikosti.',
      aboutDesc: 'TecHub bo ponujal sodobne pisarniške prostore, namenjene tehnološko usmerjenim podjetjem. Prostori bodo oblikovani tako, da bodo omogočali povezovanje podjetnikov in grajenje novih uspešnih zgodb.\n\nPisarniški prostori zajemajo 577,97 m² in so različnih velikosti, primerni za različne faze rasti podjetij.',
      features: [
        { title: '577,97 m²', desc: '' },
        { title: 'Različne velikosti', desc: '' },
        { title: 'Sodobna oprema', desc: '' },
        { title: 'Povezovalno okolje', desc: '' },
      ],
      image: '/images/space-pisarne.jpg',
      icon: Building,
      color: 'from-indigo-500 to-blue-500',
      showInterestButton: true,
    },
  ] : [
    // English versions...
    {
      id: 'future-lab',
      title: 'Future Lab',
      shortDesc: 'Space for innovation and experimentation',
      fullDesc: 'The heart of the innovation ecosystem with 3D printers and prototype materials.',
aboutDesc: 'The heart of TecHub’s innovation ecosystem, Future Lab is a fully equipped space designed for rapid prototyping and experimentation. It features advanced 3D printers, development kits, and a wide range of prototype materials, enabling users to quickly iterate ideas and develop new technological solutions.\n\nThe lab is also equipped with multimedia tools for recording experiments, creating presentation content, and documenting the development process. Future Lab is located in the building’s basement, providing a dedicated environment for focused, hands-on innovation.',
      features: [
        { title: '3D printers', desc: '3D printers, 3D scanner, laser cutter…' },
        { title: 'Development kits', desc: 'Development kits (IoT, robotics, AI)' },
        { title: 'Drone technologies', desc: '' },
        { title: 'Multimedia equipment', desc: '' },
      ],
      image: '/images/space-future-lab.png',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      showInterestButton: true,
    },
    {
      id: 'smart-media',
      title: 'Smart Media Room',
      shortDesc: 'Multimedia space for creative presentations',
      fullDesc: 'Creating high-quality marketing and presentation content.',
aboutDesc: 'The Smart Media Room at TecHub is designed to support fast and effective content creation in today’s demanding digital environment, where speed to market is essential. It enables companies to produce high-quality marketing, educational, and presentation materials in a short time—supporting sales efforts, investment campaigns, and promotion in global markets.\n\nAs a key support service of the technology park, the Smart Media Room provides incubated companies with the infrastructure and equipment needed to accelerate their market entry. The media studio is located in the building’s basement.',
      features: [
        { title: 'Professional recording equipment', desc: '' },
        { title: 'Video editing', desc: '' },
        { title: 'Sound studio', desc: '' },
        { title: 'Streaming equipment', desc: '' },
      ],
      image: '/images/space-smart-media.png',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      showInterestButton: true,
    },
    {
      id: 'coworking',
      title: 'Coworking',
      shortDesc: 'Space for incubated companies',
      fullDesc: 'Coworking space designed as an open office for incubated companies.',
      aboutDesc: 'The coworking space is designed as an open office for incubated companies that do not need production spaces or a larger office. This means that each company can have its own work environment, fixed desk, chair and other equipment that is used exclusively by the incubated company. Within the coworking space, numerous fixed work environments with arranged partitions and open flexible workstations are planned for incubated companies.\n\nThe coworking space is located at two locations on the 1st floor, totaling 396.13 m².',
      features: [
        { title: 'Fixed workstations', desc: 'arranged partitions or open flexible workstations' },
        { title: 'Open, variable workstations', desc: '' },
        { title: 'Shared infrastructure', desc: '' },
        { title: 'Location on the first floor', desc: '' },
      ],
      image: '/images/space-coworking-new.jpg',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      showInterestButton: true,
    },
    {
      id: 'konferencna',
      title: 'Modern Conference Hall',
      shortDesc: 'Hub of knowledge and business opportunities',
      fullDesc: 'Central space for events, seminars and networking.',
aboutDesc: 'The modern conference hall at TecHub serves as a central hub for events that bring new knowledge, business opportunities, and entrepreneurial trends to the region. Equipped with high-quality audio-visual technology, it enables the seamless organization of seminars, lectures, workshops, and business meetings at a professional level.\n\nThe space is designed for companies in pre-incubation, incubation, as well as those that have been operating for more than three years but remain part of the business incubator.\n\nMore than just an event venue, the conference hall acts as a key meeting point for the business community. It will host a variety of major events, including:\n• Startup conferences and investment forums\n• Technology fairs and demo days\n• Thematic business workshops\n• Hackathons and startup weekends\n• Networking events and panel discussions\n\nThe hall will also be open to companies from the Stara vas Business Zone.',
      features: [
        { title: 'Top-notch AV equipment', desc: '' },
        { title: 'Up to 100 seats', desc: '' },
        { title: 'Streaming capabilities', desc: '' },
        { title: 'Equipped stage', desc: '' },
      ],
      image: '/images/image_dvorana.png',
      icon: Mic,
      color: 'from-orange-500 to-amber-500',
      showInterestButton: false,
    },
    {
      id: 'outdoor',
      title: 'Outdoor Covered Space',
      shortDesc: 'Dynamic working environment and community hub',
      fullDesc: 'Atrium for relaxed events, workshops and networking.',
aboutDesc: 'The 99.85 m² atrium is designed to foster relaxed, creative collaboration among diverse target groups. It provides an inviting setting for informal business events, workshops, and networking activities that encourage idea exchange and community building.\n\nThe space will host a variety of dynamic events, including:\n• Startup weekends where participants develop business ideas\n• Hackathons focused on solving technological challenges\n• Networking evenings for entrepreneurs, mentors, and investors\n• Thematic discussions, open debates, and summer business bootcamps.',
      features: [
        { title: '99.85 m²', desc: '' },
        { title: 'Covered space', desc: '' },
        { title: 'Flexible layout', desc: '' },
        { title: 'For events and networking', desc: '' },
      ],
      image: '/images/space-outdoor-new.png',
      icon: Mountain,
      color: 'from-teal-500 to-cyan-500',
      showInterestButton: true,
    },
    {
      id: 'offices',
      title: 'Attractive Office Spaces',
      shortDesc: 'For technology startup companies',
      fullDesc: '577.97 m² of modern offices in various sizes.',
aboutDesc: 'TecHub offers modern office spaces designed for technology-oriented companies, creating an environment that encourages collaboration, networking, and the development of new success stories.\n\nThe office area spans 577.97 m² and includes spaces of various sizes, accommodating companies at different stages of company growth.',      features: [
        { title: '577.97 m²', desc: '' },
        { title: 'Various sizes', desc: '' },
        { title: 'Modern equipment', desc: '' },
        { title: 'Connecting environment', desc: '' },
      ],
      image: '/images/space-pisarne.jpg',
      icon: Building,
      color: 'from-indigo-500 to-blue-500',
      showInterestButton: true,
    },
  ];

  return (
    <section id="spaces" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'sl' ? 'Infrastruktura prebojev' : 'Infrastructure of Breakthroughs'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'sl' 
              ? 'TecHub je tehnološko središče nove generacije – dinamično okolje za razvoj inovacij.'
              : 'TecHub is a next-generation technology center – a dynamic environment for innovation development.'}
          </p>
        </div>

        {/* Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <SpaceCard
              key={space.id}
              space={space}
              index={index}
              onClick={() => setSelectedSpace(space)}
            />
          ))}
        </div>

        {/* Space Detail Dialog */}
        <Dialog open={!!selectedSpace} onOpenChange={() => setSelectedSpace(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedSpace && (
              <>
                <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
                  <img
                    src={selectedSpace.image}
                    alt={selectedSpace.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedSpace.color} opacity-30`} />
                </div>
                <DialogHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${selectedSpace.color} flex items-center justify-center`}>
                      <selectedSpace.icon className="w-6 h-6 text-white" />
                    </div>
                    <DialogTitle className="text-2xl">{selectedSpace.title}</DialogTitle>
                  </div>
                  <DialogDescription className="text-lg text-gray-600">
                    {selectedSpace.fullDesc}
                  </DialogDescription>
                </DialogHeader>
                
                {/* About Section */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">
                    {language === 'sl' ? 'O prostoru' : 'About the space'}
                  </h4>
                  <div className="text-gray-700 whitespace-pre-line">
                    {selectedSpace.aboutDesc}
                  </div>
                </div>

                {/* Features */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4">
                    {language === 'sl' ? 'Ključne značilnosti:' : 'Key Features:'}
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedSpace.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedSpace.color} mt-2 flex-shrink-0`} />
                        <div>
                          <span className="font-medium text-gray-800">{feature.title}</span>
                          {feature.desc && <span className="text-gray-600 text-sm block">{feature.desc}</span>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interest Button */}
                {selectedSpace.showInterestButton && (
                  <div className="mt-8">
                    <button
                      onClick={scrollToContact}
                      className="w-full py-3 bg-techub-blue text-white font-semibold rounded-lg hover:bg-techub-blue-dark transition-colors"
                    >
                      {language === 'sl' ? 'Izrazi interes' : 'Express interest'}
                    </button>
                  </div>
                )}
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

interface SpaceCardProps {
  space: Space;
  index: number;
  onClick: () => void;
}

function SpaceCard({ space, index, onClick }: SpaceCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { language } = useLanguage();

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-gray-100 h-full flex flex-col">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={space.image}
            alt={space.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${space.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
          
          {/* Icon Badge */}
          <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${space.color} flex items-center justify-center shadow-lg`}>
            <space.icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-techub-blue transition-colors">
            {space.title}
          </h3>
          <p className="text-gray-500 text-sm mb-2">{space.shortDesc}</p>
          <p className="text-gray-600 mb-4 flex-grow">{space.fullDesc}</p>
          
          {/* CTA */}
          <div className="flex items-center text-techub-blue font-medium">
            <span>{language === 'sl' ? 'Več informacij' : 'More information'}</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}
