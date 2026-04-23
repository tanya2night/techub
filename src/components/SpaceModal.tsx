import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Maximize } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface SpaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  space: {
    id: string;
    titleKey: string;
    descriptionKey: string;
    sizeKey: string;
    image: string;
  } | null;
  onExpressInterest: (spaceId?: string) => void;
}

export default function SpaceModal({ isOpen, onClose, space, onExpressInterest }: SpaceModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!space) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden md:w-full md:max-w-3xl md:max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
            >
              <X className="w-6 h-6 text-slate-700" />
            </button>

            {/* Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={space.image}
                alt={Array.isArray(t(space.titleKey)) ? t(space.titleKey)[0] : t(space.titleKey) as string}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {t(space.titleKey)}
                </h2>
                <div className="flex items-center space-x-4 text-white/90">
                  <span className="flex items-center">
                    <Maximize className="w-4 h-4 mr-2" />
                    {t(space.sizeKey)}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Velenje
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {t(space.descriptionKey)}
              </p>

              <div className="bg-slate-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">
                  {t('spaces.modal.features')}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center text-slate-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Sodobna infrastruktura
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Visokohitrostni internet
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Dostop 24/7
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Parkirna mesta
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Svetovalna podpora
                  </li>
                  <li className="flex items-center text-slate-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                    Mrežni dogodki
                  </li>
                </ul>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onExpressInterest(space.id);
                }}
                className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
              >
                {t('spaces.modal.interest')}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
