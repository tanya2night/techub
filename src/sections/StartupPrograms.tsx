import { motion } from 'framer-motion';
import { Rocket, Lightbulb, Users, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/context/LanguageContext';

interface StartupProgramsProps {
  onExpressInterest: () => void;
}

export default function StartupPrograms({ onExpressInterest }: StartupProgramsProps) {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const programs = [
    {
      icon: Rocket,
      title: 'Accelerator Program',
      description: 'Intenzivni 3-mesečni program za hitro rast startupov.',
      features: ['Mentorstvo', 'Financiranje', 'Mreženje'],
    },
    {
      icon: Lightbulb,
      title: 'Incubator Program',
      description: 'Podpora za zgodnje faze razvoja ideje.',
      features: ['Delavnice', 'Pisarniški prostor', 'Strokovna pomoč'],
    },
    {
      icon: Users,
      title: 'Mentorstvo',
      description: 'Individualno mentorstvo s strokovnjaki.',
      features: ['1-on-1 seje', 'Industrijski mentorji', 'Strateško svetovanje'],
    },
    {
      icon: GraduationCap,
      title: 'Izobraževanja',
      description: 'Redna izobraževanja in delavnice.',
      features: ['Poslovne veščine', 'Tehnične delavnice', 'Mrežni dogodki'],
    },
  ];

  return (
    <section id="programs" className="py-20 lg:py-32 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {t('programs.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('programs.subtitle')}
            </p>
          </motion.div>

          {/* Coming Soon Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white mb-12"
          >
            <Rocket className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              {t('programs.coming.soon')}
            </h3>
            <p className="text-blue-100 max-w-xl mx-auto mb-8">
              Pripravljamo celovite programe za podporo startup podjetjem. Programi bodo vključevali mentorstvo, financiranje, izobraževanja in dostop do infrastrukture.
            </p>
            <button
              onClick={onExpressInterest}
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors"
            >
              {t('programs.express.interest')}
            </button>
          </motion.div>

          {/* Program Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-slate-50 rounded-xl p-6 opacity-60"
              >
                <program.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h4 className="text-lg font-bold text-slate-900 mb-2">{program.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{program.description}</p>
                <ul className="space-y-1">
                  {program.features.map((feature) => (
                    <li key={feature} className="text-xs text-slate-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
