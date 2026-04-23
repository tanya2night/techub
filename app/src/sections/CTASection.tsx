import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

export function CTASection() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/building-2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-techub-blue/90 to-techub-blue-dark/90" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'sl' 
                ? 'Pripravljeni na naslednji korak?' 
                : 'Ready for the next step?'}
            </h2>
            <p className="text-xl text-white/90 mb-8">
              {language === 'sl'
                ? 'Pridružite se skupnosti inovatorjev in podjetnikov v TecHubu. Skupaj ustvarjamo prihodnost tehnologije v Savinjski regiji.'
                : 'Join the community of innovators and entrepreneurs at TecHub. Together we are creating the future of technology in the Savinja region.'}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Email</div>
                  <a href="mailto:info@techub.si" className="text-white hover:text-techub-accent transition-colors">
                    info@techub.si
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-white/70">
                    {language === 'sl' ? 'Lokacija' : 'Location'}
                  </div>
                  <span className="text-white">
                    Velenje, Slovenia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Quick Actions */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              {language === 'sl' ? 'Hitre povezave' : 'Quick Links'}
            </h3>
            <div className="space-y-4">
              <a
                href="#spaces"
                className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
              >
                <span className="text-white font-medium">
                  {language === 'sl' ? 'Razišči prostore' : 'Explore spaces'}
                </span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#programs"
                className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
              >
                <span className="text-white font-medium">
                  {language === 'sl' ? 'Oglej si programe' : 'View programs'}
                </span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#news"
                className="flex items-center justify-between p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
              >
                <span className="text-white font-medium">
                  {language === 'sl' ? 'Preberi novice' : 'Read news'}
                </span>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
