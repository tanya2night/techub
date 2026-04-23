import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Rocket, Lightbulb, TrendingUp, Users } from 'lucide-react';

export function Programs() {
  const { language } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const programs = language === 'sl' ? [
    {
      icon: Lightbulb,
      title: 'Predinkubacija',
      description: 'Začetna faza razvoja ideje in validacija poslovnega modela. Intenzivna podpora pri oblikovanju vaše poslovne vizije.',
      features: ['Mentorstvo', 'Delavnice', 'Mreženje'],
    },
    {
      icon: Rocket,
      title: 'Inkubacija',
      description: 'Celovita podpora za zagon in rast vašega podjetja. Dostop do prostorov, opreme in strokovnjakov.',
      features: ['Prostori', 'Opremа', 'Financiranje'],
    },
    {
      icon: TrendingUp,
      title: 'Pospeševanje',
      description: 'Pospešitev rasti obstoječih podjetij s pomočjo mednarodnih povezav in dodatnih virov.',
      features: ['Scale-up', 'Internacionalizacija', 'Investitorji'],
    },
    {
      icon: Users,
      title: 'Mreženje',
      description: 'Povezovanje z industrijo, investitorji in drugimi podjetniki za ustvarjanje novih priložnosti.',
      features: ['Dogodki', 'Partnerstva', 'Skupnost'],
    },
  ] : [
    {
      icon: Lightbulb,
      title: 'Pre-incubation',
      description: 'Initial phase of idea development and business model validation. Intensive support in shaping your business vision.',
      features: ['Mentorship', 'Workshops', 'Networking'],
    },
    {
      icon: Rocket,
      title: 'Incubation',
      description: 'Comprehensive support for launching and growing your company. Access to spaces, equipment and experts.',
      features: ['Spaces', 'Equipment', 'Funding'],
    },
    {
      icon: TrendingUp,
      title: 'Acceleration',
      description: 'Accelerating growth of existing companies through international connections and additional resources.',
      features: ['Scale-up', 'Internationalization', 'Investors'],
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connecting with industry, investors and other entrepreneurs to create new opportunities.',
      features: ['Events', 'Partnerships', 'Community'],
    },
  ];

  const newText = language === 'sl' 
    ? 'Programi za rast predstavljajo celovit ekosistem podpore razvoju podjetij, od prvih korakov ideje do faze stabilne rasti. Skozi različne programe – od predinkubacije, inkubacije do pospeševanja – zagotavljamo podjetjem prilagojeno pomoč, ki vključuje mentorsko vodenje, dostop do sodobnih proizvodnih in razvojnih zmogljivosti, povezovanje z investitorji ter vse potrebno znanje in orodja za uspešen zagon in rast na trgu.'
    : 'Growth programs represent a comprehensive ecosystem of support for business development, from the first steps of an idea to the stage of stable growth. Through various programs – from pre-incubation, incubation to acceleration – we provide companies with tailored assistance, including mentorship, access to modern production and development capabilities, connections with investors, and all the necessary knowledge and tools for successful market launch and growth.';

  return (
    <section id="programs" className="relative py-24 overflow-hidden">
      {/* Hi-Tech Background */}
      <div className="absolute inset-0 bg-slate-900">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Scan Line */}
        <div 
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
          style={{
            animation: 'scanLine 8s linear infinite',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'sl' ? 'Programi za rast' : 'Growth Programs'}
          </h2>
          <p className="text-xl text-blue-200/80 max-w-4xl mx-auto leading-relaxed">
            {newText}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} index={index} />
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <span className="text-white/80 text-lg">
              {language === 'sl' ? 'Več informacij kmalu' : 'More information coming soon'}
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.5; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
        @keyframes scanLine {
          0% { top: 0%; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
}

interface ProgramCardProps {
  program: {
    icon: React.ElementType;
    title: string;
    description: string;
    features: string[];
  };
  index: number;
}

function ProgramCard({ program, index }: ProgramCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all h-full">
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all" />
        
        {/* Icon */}
        <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <program.icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="relative text-xl font-bold text-white mb-3">{program.title}</h3>
        <p className="relative text-blue-200/70 mb-4 text-sm leading-relaxed">{program.description}</p>

        {/* Features */}
        <div className="relative flex flex-wrap gap-2">
          {program.features.map((feature, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs bg-white/10 text-blue-200 rounded-full border border-white/10"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
