import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  details: string[];
  status: 'completed' | 'current' | 'upcoming';
}

export function Timeline() {
  const { language } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  // Calculate months until project completion (May 2027)
  const calculateMonthsRemaining = () => {
    const now = new Date();
    const targetDate = new Date(2027, 4, 1); // May 2027
    const diffTime = targetDate.getTime() - now.getTime();
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));
    return Math.max(0, diffMonths);
  };

  const monthsRemaining = calculateMonthsRemaining();

  const events: TimelineEvent[] = language === 'sl' ? [
    {
      date: '2024 - 2025',
      title: 'Priprava',
      description: 'Zaključeno',
      details: ['Pridobitev soglasij', 'Projektna dokumentacija', 'Izbor izvajalcev'],
      status: 'completed',
    },
    {
      date: 'September 2025 – april 2027',
      title: 'Gradnja',
      description: 'V teku',
      details: ['Temelji in konstrukcija', 'Inštalacije', 'Fasada', 'Notranja in IKT oprema'],
      status: 'current',
    },
    {
      date: 'Maj 2027',
      title: 'Odprtje',
      description: 'Prihodnje',
      details: ['Svečana otvoritev', 'Sprejem prvh najemnikov', 'Začetek programov'],
      status: 'upcoming',
    },
  ] : [
    {
      date: '2024 - 2025',
      title: 'Preparation',
      description: 'Completed',
      details: ['Obtaining permits', 'Project documentation', 'Selection of contractors'],
      status: 'completed',
    },
    {
      date: 'September 2025 – April 2027',
      title: 'Construction',
      description: 'In progress',
      details: ['Foundations and structure', 'Installations', 'Facade', 'Interior and ICT equipment'],
      status: 'current',
    },
    {
      date: 'May 2027',
      title: 'Opening',
      description: 'Future',
      details: ['Grand opening', 'Acceptance of first tenants', 'Start of programs'],
      status: 'upcoming',
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'sl' ? 'Časovnica projekta' : 'Project Timeline'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'sl' 
              ? 'Spremljajte napredek gradnje in razvoja TecHuba'
              : 'Follow the progress of TecHub construction and development'}
          </p>
        </div>

        {/* Progress Bar - Months until completion */}
        <div className="mb-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-600 mb-1">
                {language === 'sl' ? 'Do zaključka projekta še:' : 'Until project completion:'}
              </p>
              <p className="text-4xl md:text-5xl font-bold text-techub-blue">
                {monthsRemaining} <span className="text-2xl md:text-3xl text-gray-600">
                  {language === 'sl' ? 'mesecev' : 'months'}
                </span>
              </p>
            </div>
            <div className="flex-1 w-full md:w-auto md:max-w-md">
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-techub-blue to-techub-accent rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min(100, ((36 - monthsRemaining) / 36) * 100)}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                {language === 'sl' ? 'Cilj: Maj 2027' : 'Target: May 2027'}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <TimelineEventItem 
                key={index} 
                event={event} 
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineEventItemProps {
  event: TimelineEvent;
  index: number;
  isLeft: boolean;
}

function TimelineEventItem({ event, index, isLeft }: TimelineEventItemProps) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const statusConfig = {
    completed: {
      icon: CheckCircle2,
      bgColor: 'bg-green-500',
      textColor: 'text-green-600',
      borderColor: 'border-green-500',
    },
    current: {
      icon: Clock,
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-600',
      borderColor: 'border-blue-500',
    },
    upcoming: {
      icon: Circle,
      bgColor: 'bg-gray-300',
      textColor: 'text-gray-500',
      borderColor: 'border-gray-300',
    },
  };

  const config = statusConfig[event.status];
  const Icon = config.icon;

  return (
    <div
      ref={ref}
      className={`relative flex items-start md:items-center transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-8 w-full">
        {/* Left Side */}
        <div className={`${isLeft ? 'text-right pr-12' : 'col-start-2 pl-12'}`}>
          {isLeft && (
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <span className={`text-sm font-medium ${config.textColor}`}>{event.date}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-3">{event.description}</p>
              <ul className="space-y-1">
                {event.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-500">• {detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Center Icon */}
        <div className={`absolute left-1/2 -translate-x-1/2 ${!isLeft ? 'col-start-1' : ''}`}>
          <div className={`w-12 h-12 ${config.bgColor} rounded-full flex items-center justify-center shadow-lg ring-4 ring-white`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Right Side */}
        <div className={`${!isLeft ? 'col-start-2 pl-12' : 'pr-12'}`}>
          {!isLeft && (
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <span className={`text-sm font-medium ${config.textColor}`}>{event.date}</span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-3">{event.description}</p>
              <ul className="space-y-1">
                {event.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-500">• {detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden flex items-start w-full">
        <div className={`w-12 h-12 ${config.bgColor} rounded-full flex items-center justify-center shadow-lg ring-4 ring-white flex-shrink-0 z-10`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="ml-6 bg-white rounded-xl p-5 shadow-lg border border-gray-100 flex-1">
          <span className={`text-sm font-medium ${config.textColor}`}>{event.date}</span>
          <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{event.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{event.description}</p>
          <ul className="space-y-1">
            {event.details.map((detail, idx) => (
              <li key={idx} className="text-xs text-gray-500">• {detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
