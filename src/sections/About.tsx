import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Lightbulb, FlaskConical, Factory, Users, ChevronRight } from 'lucide-react';

interface StepCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  isLast: boolean;
}

function StepCard({ icon: Icon, title, description, index, isLast }: StepCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div ref={ref} className="relative flex flex-col items-center h-full">
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-16 left-[60%] w-[calc(100%-2rem)] h-0.5">
          <div className="w-full h-full bg-gradient-to-r from-techub-blue via-techub-accent to-techub-blue opacity-50" />
          <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-techub-accent rounded-full animate-pulse" 
               style={{ 
                 left: '0%',
                 animation: 'moveAlongLine 2s linear infinite',
               }} 
          />
        </div>
      )}

      {/* Card - Fixed equal height */}
      <div
        className={`relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl hover:border-techub-blue/30 transition-all duration-500 group w-full h-full flex flex-col ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Step Number */}
        <div className="absolute -top-4 -left-4 w-10 h-10 bg-techub-blue text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
          {index + 1}
        </div>

        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-techub-blue/10 to-techub-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Icon className="w-8 h-8 text-techub-blue" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed flex-grow">{description}</p>

        {/* Arrow indicator */}
        {!isLast && (
          <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-techub-blue text-white rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className="w-5 h-5" />
          </div>
        )}
      </div>

      {/* Mobile connector */}
      {!isLast && (
        <div className="lg:hidden flex flex-col items-center py-4">
          <div className="w-0.5 h-8 bg-gradient-to-b from-techub-blue to-techub-accent" />
          <ChevronRight className="w-6 h-6 text-techub-blue rotate-90" />
        </div>
      )}
    </div>
  );
}

export function About() {
  const { language } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const steps = language === 'sl' ? [
    {
      icon: Lightbulb,
      title: 'IDEJA',
      description: 'Vsaka inovacija se začne z idejo. V TecHubu spodbujamo kreativnost in inovativno razmišljanje. Naši mentorji vam pomagajo oblikovati vašo poslovno vizijo in jo pretvoriti v izvedljiv koncept.',
    },
    {
      icon: FlaskConical,
      title: 'PROTOTIP',
      description: 'S pomočjo sodobne opreme v Future Labu razvijate prototipe vaših produktov. 3D tiskalniki, razvojni kompleti in strokovna podpora vam omogočajo hitre iteracije in testiranje.',
    },
    {
      icon: Factory,
      title: 'SERIJA',
      description: '6 proizvodnih celic vam omogoča preizkušanje, testiranje in izdelavo prvih serij vaših produktov. Od prototipa do prve serije – vse na enem mestu.',
    },
    {
      icon: Users,
      title: 'DELOVNA MESTA',
      description: 'Od uspešnega izdelka na trgu do novih delovnih mest v naši dolini. Podpiramo vas na vsakem koraku poti in ustvarjamo pogoje za rast ter razvoj vašega podjetja.',
    },
  ] : [
    {
      icon: Lightbulb,
      title: 'IDEA',
      description: 'Every innovation starts with an idea. At TecHub, we encourage creativity and innovative thinking. Our mentors help you shape your business vision and turn it into a viable concept.',
    },
    {
      icon: FlaskConical,
      title: 'PROTOTYPE',
      description: 'With modern equipment in the Future Lab, you develop prototypes of your products. 3D printers, development kits and professional support enable rapid iterations and testing.',
    },
    {
      icon: Factory,
      title: 'SERIES',
      description: '6 production cells allow you to test, validate and manufacture the first series of your products. From prototype to first series – all in one place.',
    },
    {
      icon: Users,
      title: 'JOBS',
      description: 'From a successful product on the market to new jobs in our valley. We support you at every step of the journey and create conditions for the growth and development of your company.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-techub-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'sl' ? 'Od ideje do izdelka' : 'From idea to product'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'sl' 
              ? 'TecHub Velenje nastaja kot sodoben tehnološki park nove generacije. V Velenju gradimo razvojno okolje, kjer se bodo povezovali podjetništvo, raziskave, izobraževanje in industrija.'
              : 'TecHub Velenje is emerging as a modern technology park of the new generation. In Velenje, we are building a development environment where entrepreneurship, research, education, and industry will connect.'}
          </p>
        </div>

        {/* Process Steps - Equal height grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes moveAlongLine {
          0% { left: 0%; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
}
