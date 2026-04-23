import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Send, CheckCircle, Building2, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function InterestForm() {
  const { language } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/maqparvl', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const spaceOptions = language === 'sl' ? [
    { value: 'future-lab', label: 'Future Lab' },
    { value: 'smart-media', label: 'Smart Media' },
    { value: 'coworking', label: 'Coworking' },
    { value: 'offices', label: 'Pisarne' },
  ] : [
    { value: 'future-lab', label: 'Future Lab' },
    { value: 'smart-media', label: 'Smart Media' },
    { value: 'coworking', label: 'Coworking' },
    { value: 'offices', label: 'Offices' },
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gradient-to-b from-white to-techub-bg-light">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'sl' ? 'Hvala za vaše zanimanje!' : 'Thank you for your interest!'}
            </h3>
            <p className="text-gray-600 mb-8">
              {language === 'sl'
                ? 'Prejeli smo vaše povpraševanje in se vam bomo oglasili v najkrajšem možnem času.'
                : 'We have received your inquiry and will get back to you as soon as possible.'}
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              className="bg-techub-blue hover:bg-techub-blue-dark"
            >
              {language === 'sl' ? 'Pošlji novo povpraševanje' : 'Send new inquiry'}
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-techub-bg-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'sl' ? 'Izrazi zanimanje' : 'Express Interest'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'sl'
                ? 'Izpolnite spodnji obrazec in nas kontaktirajte. Z veseljem vam bomo predstavili vse možnosti, ki jih TecHub ponuja za vaše podjetje.'
                : 'Fill out the form below and contact us. We will be happy to present all the options that TecHub offers for your company.'}
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div className="space-y-2">
                <Label htmlFor="company" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-techub-blue" />
                  {language === 'sl' ? 'Ime podjetja' : 'Company Name'}
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder={language === 'sl' ? 'Vnesite ime podjetja' : 'Enter company name'}
                  required
                  className="h-12"
                />
              </div>

              {/* Contact Person */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-techub-blue" />
                  {language === 'sl' ? 'Kontaktna oseba' : 'Contact Person'}
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={language === 'sl' ? 'Vnesite ime in priimek' : 'Enter full name'}
                  required
                  className="h-12"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-techub-blue" />
                  {language === 'sl' ? 'E-pošta' : 'Email'}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={language === 'sl' ? 'Vnesite e-pošto' : 'Enter email'}
                  required
                  className="h-12"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-techub-blue" />
                  {language === 'sl' ? 'Telefon' : 'Phone'}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={language === 'sl' ? 'Vnesite telefonsko številko' : 'Enter phone number'}
                  className="h-12"
                />
              </div>

              {/* Space Selection */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="space" className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-techub-blue" />
                  {language === 'sl' ? 'Izberite prostor' : 'Select Space'}
                </Label>
                <Select name="space" required>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder={language === 'sl' ? 'Izberite prostor' : 'Select space'} />
                  </SelectTrigger>
                  <SelectContent>
                    {spaceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-techub-blue" />
                  {language === 'sl' ? 'Sporočilo' : 'Message'}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={language === 'sl' ? 'Opišite vaše potrebe in želje...' : 'Describe your needs and wishes...'}
                  rows={5}
                  className="resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-techub-blue hover:bg-techub-blue-dark text-lg font-semibold"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {language === 'sl' ? 'Pošiljanje...' : 'Sending...'}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    {language === 'sl' ? 'Pošlji povpraševanje' : 'Send Inquiry'}
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
