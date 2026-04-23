import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function Footer() {
  const { language } = useLanguage();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const privacyText = language === 'sl' ? `
## Politika zasebnosti

### 1. Uvod

TecHub (v nadaljevanju: upravljavec) se zavezuje, da bo varoval vašo zasebnost in varnost vaših osebnih podatkov.

### 2. Osebni podatki

Zbiramo naslednje osebne podatke:
- Ime in priimek
- E-poštni naslov
- Telefonska številka
- Ime podjetja
- Vsebina povpraševanja

### 3. Namen obdelave

Osebni podatki se obdelujejo za namen:
- Odgovora na vaša povpraševanja
- Komunikacije v zvezi z našimi storitvami
- Obveščanja o novostih in dogodkih

### 4. Shranjevanje podatkov

Osebne podatke hranimo toliko časa, kolikor je potrebno za uresničitev namena, za katerega so bili zbrani, oziroma v skladu z zakonskimi zahtevami.

### 5. Vaše pravice

Imate pravico do:
- Dostopa do svojih osebnih podatkov
- Popravka nepravilnih podatkov
- Izbrisa podatkov
- Omejitve obdelave
- Ugovora obdelavi

### 6. Kontakt

Za vprašanja v zvezi z zasebnostjo nas kontaktirajte na: info@techub.si
  ` : `
## Privacy Policy

### 1. Introduction

TecHub (hereinafter: controller) is committed to protecting your privacy and the security of your personal data.

### 2. Personal Data

We collect the following personal data:
- Name and surname
- Email address
- Phone number
- Company name
- Inquiry content

### 3. Purpose of Processing

Personal data is processed for the purpose of:
- Responding to your inquiries
- Communication regarding our services
- Notification of news and events

### 4. Data Storage

Personal data is kept for as long as necessary to achieve the purpose for which it was collected, or in accordance with legal requirements.

### 5. Your Rights

You have the right to:
- Access your personal data
- Correct inaccurate data
- Delete data
- Restrict processing
- Object to processing

### 6. Contact

For questions regarding privacy, contact us at: info@techub.si
  `;

  const termsText = language === 'sl' ? `
## Pogoji uporabe

### 1. Splošne določbe

Spletno mesto TecHub (techub.si) je namenjeno informiranju javnosti o dejavnostih in storitvah TecHuba.

### 2. Avtorske pravice

Vsa vsebina na tem spletnem mestu je zaščena z avtorskimi pravicami. Prepovedano je kopiranje, razmnoževanje ali distribucija vsebine brez predhodnega pisnega dovoljenja.

### 3. Omejitev odgovornosti

- Informacije na spletnem mestu so informativne narave
- Ne prevzemamo odgovornosti za morebitne napake ali pomanjkljivosti
- Pridržujemo si pravico do sprememb vsebine brez predhodnega obvestila

### 4. Povezave na zunanje strani

Spletno mesto lahko vsebuje povezave na zunanje spletne strani. Nismo odgovorni za vsebino teh strani.

### 5. Veljavnost pogojev

Ti pogoji uporabe veljajo od datuma objave. Uporabniki se z uporabo strani strinjajo s temi pogoji.

### 6. Kontakt

Za vprašanja o pogojih uporabe nas kontaktirajte na: info@techub.si
  ` : `
## Terms of Use

### 1. General Provisions

The TecHub website (techub.si) is intended to inform the public about the activities and services of TecHub.

### 2. Copyright

All content on this website is protected by copyright. Copying, reproduction or distribution of content without prior written permission is prohibited.

### 3. Limitation of Liability

- Information on the website is of an informative nature
- We do not assume responsibility for any errors or omissions
- We reserve the right to change content without prior notice

### 4. Links to External Sites

The website may contain links to external websites. We are not responsible for the content of these sites.

### 5. Validity of Terms

These terms of use are valid from the date of publication. Users agree to these terms by using the site.

### 6. Contact

For questions about terms of use, contact us at: info@techub.si
  `;

  const euText = language === 'sl' 
    ? 'Projekt sofinancira Evropska unija iz Sklada za pravičen prehod in poteka v okviru evropske kohezijske politike 2021–2027'
    : 'The project is co-financed by the European Union from the Just Transition Fund and takes place within the framework of the European cohesion policy 2021–2027';

  // Get EU logo based on language
  const euLogoSrc = language === 'en' 
    ? '/images/EN_Co-fundedbytheEU_RGB_NEG.png'
    : '/images/SL_Co-fundedbytheEU_RGB_NEG.png';

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src="/images/logo-techub-white.png"
              alt="TecHub"
              className="h-16 mb-6"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              {language === 'sl'
                ? 'TecHub je inovativni tehnološki center v Velenju, ki združuje prostore, opremo in strokovno podporo za razvoj startup podjetij.'
                : 'TecHub is an innovative technology center in Velenje that combines spaces, equipment and professional support for the development of startup companies.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {language === 'sl' ? 'Politika zasebnosti' : 'Privacy Policy'}
              </button>
              <span className="text-gray-600">|</span>
              <button
                onClick={() => setTermsOpen(true)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {language === 'sl' ? 'Pogoji uporabe' : 'Terms of Use'}
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {language === 'sl' ? 'Hitre povezave' : 'Quick Links'}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'sl' ? 'O nas' : 'About'}
                </a>
              </li>
              <li>
                <a href="#spaces" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'sl' ? 'Prostori' : 'Spaces'}
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'sl' ? 'Programi' : 'Programs'}
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'sl' ? 'Novice' : 'News'}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  {language === 'sl' ? 'Kontakt' : 'Contact'}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {language === 'sl' ? 'Kontakt' : 'Contact'}
            </h4>
            <ul className="space-y-3 text-gray-400">
              <li>TecHub Velenje</li>
              <li>Velenje, Slovenija</li>
              <li>
                <a href="mailto:info@techub.si" className="hover:text-white transition-colors">
                  info@techub.si
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* EU Funding & Logos - 40% smaller */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* EU Funding Text */}
          <div className="text-center mb-8">
            <p className="text-gray-400 text-sm max-w-3xl mx-auto">
              {euText}
            </p>
            <a
              href="https://evropskasredstva.si/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-techub-accent hover:text-techub-accent-light transition-colors text-sm mt-2"
            >
              {language === 'sl' ? 'Več informacij' : 'More information'}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Logos - 40% smaller (h-24 -> h-14, h-20 -> h-12) */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <img
              src="/images/grb-mo-velenje-bel.png"
              alt="Mestna občina Velenje"
              className="h-14 w-auto object-contain"
            />
            <img
              src="/images/IfeelSLO1.png"
              alt="I feel Slovenia"
              className="h-12 w-auto object-contain"
            />
            <img
              src={euLogoSrc}
              alt="EU Co-funded"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} TecHub. {language === 'sl' ? 'Vse pravice pridržane.' : 'All rights reserved.'}</p>
            <p>
              {language === 'sl' 
                ? 'Mestna občina Velenje, Upravljalec objekta Saša inkubator' 
                : 'Municipality of Velenje, Facility manager Saša inkubator'}
            </p>
          </div>
        </div>
      </div>

      {/* Privacy Modal */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {language === 'sl' ? 'Politika zasebnosti' : 'Privacy Policy'}
            </DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm max-w-none mt-4">
            {privacyText.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="text-xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} className="text-lg font-semibold mt-4 mb-2">{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('- ')) {
                return <li key={i} className="ml-4">{line.replace('- ', '')}</li>;
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={i} className="font-bold text-sm mt-4">{line.replace(/\*\*/g, '')}</p>;
              }
              if (line.trim() === '') {
                return <div key={i} className="h-2" />;
              }
              return <p key={i} className="text-gray-600">{line}</p>;
            })}
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {language === 'sl' ? 'Pogoji uporabe' : 'Terms of Use'}
            </DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm max-w-none mt-4">
            {termsText.split('\n').map((line, i) => {
              if (line.startsWith('## ')) {
                return <h2 key={i} className="text-xl font-bold mt-6 mb-3">{line.replace('## ', '')}</h2>;
              }
              if (line.startsWith('### ')) {
                return <h3 key={i} className="text-lg font-semibold mt-4 mb-2">{line.replace('### ', '')}</h3>;
              }
              if (line.startsWith('- ')) {
                return <li key={i} className="ml-4">{line.replace('- ', '')}</li>;
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return <p key={i} className="font-bold text-sm mt-4">{line.replace(/\*\*/g, '')}</p>;
              }
              if (line.trim() === '') {
                return <div key={i} className="h-2" />;
              }
              return <p key={i} className="text-gray-600">{line}</p>;
            })}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}
