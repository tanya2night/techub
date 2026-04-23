import { useEffect, useState } from 'react';
import { X, Calendar, MapPin, Clock, Users, CheckCircle, Send } from 'lucide-react';

interface EventItem {
  id: number;
  title: string;
  date: string;
  time?: string;
  location?: string;
  category: string;
  description: string;
  image: string;
  maxParticipants?: number;
  registeredCount?: number;
}

interface EventRegistrationModalProps {
  event: EventItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventRegistrationModal({ event, isOpen, onClose }: EventRegistrationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    dietaryRequirements: '',
    questions: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Vnesite ime in priimek';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vnesite e-poštni naslov';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Vnesite veljaven e-poštni naslov';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Vnesite telefonsko številko';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Sprejeti morate pogoje udeležbe';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      dietaryRequirements: '',
      questions: '',
      agreeTerms: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen || !event) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-overlay-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div 
        className="relative bg-white rounded-2xl shadow-modal max-w-2xl w-full max-h-[90vh] overflow-hidden animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-techub-gray-dark hover:bg-white transition-colors duration-300 shadow-lg"
          aria-label="Zapri"
        >
          <X size={20} />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero Image */}
          <div className="relative h-48 sm:h-56">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-techub-blue text-white text-xs font-medium rounded-full">
                {event.category}
              </span>
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-xl sm:text-2xl font-sora font-bold text-white">
                {event.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {isSubmitted ? (
              // Success State
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-sora font-bold text-techub-gray-dark mb-2">
                  Prijava uspešna!
                </h3>
                <p className="text-techub-gray mb-6">
                  Hvala za vašo prijavo na dogodek. Potrditev in dodatne informacije boste prejeli na e-pošto.
                </p>
                <div className="bg-techub-blue-50 rounded-xl p-4 mb-6 text-left">
                  <p className="text-sm text-techub-gray">
                    <strong>Dogodek:</strong> {event.title}<br />
                    <strong>Datum:</strong> {event.date}<br />
                    <strong>Prijavljeni:</strong> {formData.name}
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-techub-blue text-white font-medium rounded-xl transition-all duration-300 hover:bg-techub-blue-dark"
                >
                  Zapri
                </button>
              </div>
            ) : (
              // Form State
              <>
                {/* Event Details */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6 p-4 bg-techub-bg-light rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-techub-blue/10 flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-techub-blue" />
                    </div>
                    <div>
                      <p className="text-xs text-techub-gray-light">Datum</p>
                      <p className="text-sm font-medium text-techub-gray-dark">{event.date}</p>
                    </div>
                  </div>
                  
                  {event.time && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-techub-blue/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-techub-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-techub-gray-light">Čas</p>
                        <p className="text-sm font-medium text-techub-gray-dark">{event.time}</p>
                      </div>
                    </div>
                  )}
                  
                  {event.location && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-techub-blue/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-techub-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-techub-gray-light">Lokacija</p>
                        <p className="text-sm font-medium text-techub-gray-dark">{event.location}</p>
                      </div>
                    </div>
                  )}
                  
                  {event.maxParticipants && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-techub-blue/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-techub-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-techub-gray-light">Prosta mesta</p>
                        <p className="text-sm font-medium text-techub-gray-dark">
                          {event.maxParticipants - (event.registeredCount || 0)} / {event.maxParticipants}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-techub-gray mb-6">{event.description}</p>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-sora font-semibold text-techub-gray-dark mb-4">
                    Prijava na dogodek
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-techub-gray-dark mb-1.5">
                        Ime in priimek <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Janez Novak"
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                          errors.name
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-techub-bg-warm focus:border-techub-blue focus:ring-techub-blue/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-techub-gray-dark mb-1.5">
                        E-pošta <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="janez.novak@email.si"
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-techub-bg-warm focus:border-techub-blue focus:ring-techub-blue/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-techub-gray-dark mb-1.5">
                        Telefon <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+386 40 123 456"
                        className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? 'border-red-300 focus:ring-red-200'
                            : 'border-techub-bg-warm focus:border-techub-blue focus:ring-techub-blue/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-techub-gray-dark mb-1.5">
                        Podjetje / Organizacija
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Opcijsko"
                        className="w-full px-4 py-3 rounded-xl border border-techub-bg-warm transition-all duration-300 focus:outline-none focus:border-techub-blue focus:ring-2 focus:ring-techub-blue/20"
                      />
                    </div>
                  </div>

                  {/* Dietary Requirements */}
                  <div>
                    <label className="block text-sm font-medium text-techub-gray-dark mb-1.5">
                      Prehranske omejitve / Alergije
                    </label>
                    <input
                      type="text"
                      name="dietaryRequirements"
                      value={formData.dietaryRequirements}
                      onChange={handleChange}
                      placeholder="npr. vegetarijanska prehrana, alergija na oreščke..."
                      className="w-full px-4 py-3 rounded-xl border border-techub-bg-warm transition-all duration-300 focus:outline-none focus:border-techub-blue focus:ring-2 focus:ring-techub-blue/20"
                    />
                  </div>

                  {/* Questions */}
                  <div>
                    <label className="block text-sm font-medium text-techub-gray-dark mb-1.5">
                      Vprašanja ali dodatne informacije
                    </label>
                    <textarea
                      name="questions"
                      value={formData.questions}
                      onChange={handleChange}
                      placeholder="Imate kakšna vprašanja v zvezi z dogodkom?"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-techub-bg-warm transition-all duration-300 focus:outline-none focus:border-techub-blue focus:ring-2 focus:ring-techub-blue/20 resize-none"
                    />
                  </div>

                  {/* Terms Checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-techub-bg-warm text-techub-blue focus:ring-techub-blue/20 mt-0.5"
                      />
                      <span className="text-sm text-techub-gray">
                        Strinjam se, da TecHub zbira in obdeluje moje osebne podatke za namen organizacije dogodka. 
                        Podatki bodo uporabljeni izključno za komunikacijo v zvezi s tem dogodkom. <span className="text-red-500">*</span>
                      </span>
                    </label>
                    {errors.agreeTerms && (
                      <p className="text-red-500 text-xs mt-1 ml-8">{errors.agreeTerms}</p>
                    )}
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-techub-blue text-white font-medium rounded-xl transition-all duration-300 hover:bg-techub-blue-dark hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Pošiljanje...
                        </>
                      ) : (
                        <>
                          Prijavi se na dogodek
                          <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="inline-flex items-center justify-center px-6 py-4 text-techub-gray font-medium rounded-xl transition-all duration-300 hover:bg-techub-bg-light"
                    >
                      Prekliči
                    </button>
                  </div>

                  <p className="text-xs text-techub-gray-light text-center">
                    <span className="text-red-500">*</span> Označena polja so obvezna
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
