import { ArrowLeft, FileText, Scale, Users, Shield, Mail } from 'lucide-react';

export default function TermsPage() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-techub-bg-light">
      {/* Header */}
      <header className="bg-white border-b border-techub-bg-warm sticky top-0 z-40">
        <div className="section-container">
          <div className="section-inner py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-techub-blue flex items-center justify-center">
                <span className="text-white font-sora font-bold text-lg">T</span>
              </div>
              <span className="font-sora font-semibold text-xl text-techub-gray-dark">TecHub</span>
            </a>
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-techub-blue hover:text-techub-blue-dark transition-colors"
            >
              <ArrowLeft size={18} />
              Nazaj
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="section-container py-12">
        <div className="section-inner max-w-4xl">
          <div className="bg-white rounded-2xl shadow-card p-8 sm:p-12">
            {/* Title */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 rounded-xl bg-techub-blue/10 flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-techub-blue" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-sora font-bold text-techub-gray-dark">
                Pogoji uporabe
              </h1>
              <p className="text-techub-gray mt-2">
                Zadnja posodobitev: 1. februar 2026
              </p>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-techub-gray leading-relaxed">
                Dobrodošli na spletni strani TecHub - Tehnološki park Velenje. Z uporabo te spletne strani 
                in storitev se strinjate s spodaj navedenimi pogoji uporabe. Prosimo, da jih natančno preberete 
                pred uporabo naših storitev.
              </p>

              {/* Section 1 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-techub-blue" />
                  1. Splošne določbe
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    <strong>1.1.</strong> TecHub (v nadaljevanju: "mi", "nas", "naš") je tehnološki park, 
                    ki zagotavlja prostor, infrastrukturo in programe za razvoj tehnoloških startupov.
                  </p>
                  <p>
                    <strong>1.2.</strong> Spletna stran www.techub.si (v nadaljevanju: "spletna stran") 
                    je last podjetja TecHub d.o.o., Velenje.
                  </p>
                  <p>
                    <strong>1.3.</strong> Z uporabo spletne strani potrjujete, da ste prebrali, razumeli 
                    in se strinjate s temi pogoji uporabe.
                  </p>
                  <p>
                    <strong>1.4.</strong> Pridržujemo si pravico do sprememb teh pogojev brez predhodnega 
                    obvestila. Spremembe stopijo v veljavo z objavo na spletni strani.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-techub-blue" />
                  2. Uporaba storitev
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    <strong>2.1.</strong> TecHub ponuja naslednje storitve:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Najem prostorov (pisarne, proizvodne celice, coworking)</li>
                    <li>Dostop do laboratorijev (Future Lab, Smart Media Room)</li>
                    <li>Startup programi (predinkubacija, inkubacija, faza rasti)</li>
                    <li>Mentorstvo in svetovanje</li>
                    <li>Mreženje in povezovanje z industrijo</li>
                    <li>Dostop do investitorjev</li>
                  </ul>
                  <p>
                    <strong>2.2.</strong> Za uporabo storitev je potrebna predhodna prijava in sklenitev 
                    ustrezne pogodbe.
                  </p>
                  <p>
                    <strong>2.3.</strong> Pridržujemo si pravico do zavrnitve prijave, če ne izpolnjujete 
                    pogojev za vstop v posamezni program ali najem prostora.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-techub-blue" />
                  3. Pogoji za najem prostorov
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    <strong>3.1.</strong> Prostore lahko najamejo:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Startup podjetja, mlajša od 3 let</li>
                    <li>Podjetja, katerih dejavnost je skladna s tehnološko specializacijo TecHuba</li>
                    <li>Podjetja z jasnim razvojnim načrtom in potencialom rasti</li>
                  </ul>
                  <p>
                    <strong>3.2.</strong> Najemnik se zavezuje k:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Rednemu plačevanju najemnine po veljavnem ceniku</li>
                    <li>Skrbnem ravnanju z najetimi prostori in opremo</li>
                    <li>Upoštevanju hišnega reda in varnostnih predpisov</li>
                    <li>Sodelovanju v skupnosti TecHub</li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-techub-blue" />
                  4. Startup programi
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    <strong>4.1.</strong> TecHub ponuja tri glavne programe:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li><strong>Predinkubacija:</strong> Za tiste z idejo, ki jo želijo preizkusiti (3-6 mesecev)</li>
                    <li><strong>Inkubacija:</strong> Intenzivna podpora za zgodnje faze rasti (0-3 leta)</li>
                    <li><strong>Faza rasti:</strong> Podpora za uveljavljene startupe pri širitvi (3+ leta)</li>
                  </ul>
                  <p>
                    <strong>4.2.</strong> Vstop v program je možen le po uspešni prijavi in izboru s strani 
                    strokovne komisije.
                  </p>
                  <p>
                    <strong>4.3.</strong> Udeleženci programa se zavezujejo k aktivnemu sodelovanju, 
                    rednemu poročanju o napredku in upoštevanju programa.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-techub-blue" />
                  5. Intelektualna lastnina
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    <strong>5.1.</strong> Vsa intelektualna lastnina, ki jo ustvarite med uporabo naših 
                    storitev, ostaja vaša last.
                  </p>
                  <p>
                    <strong>5.2.</strong> TecHub ne prevzema odgovornosti za zaščito vaše intelektualne 
                    lastnine. Priporočamo, da ustrezno zaščitite svoje inovacije.
                  </p>
                  <p>
                    <strong>5.3.</strong> Vsebine na spletni strani (besedila, slike, logotipi) so 
                    last TecHuba in jih ni dovoljeno kopirati brez predhodnega dovoljenja.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Scale className="w-5 h-5 text-techub-blue" />
                  6. Omejitev odgovornosti
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    <strong>6.1.</strong> TecHub ne odgovarja za:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Poslovni neuspeh najemnikov in udeležencev programov</li>
                    <li>Škodo, nastalo zaradi nepravilne uporabe opreme</li>
                    <li>Izgubo podatkov ali premoženja</li>
                    <li>Prekinitve storitev zaradi višje sile</li>
                  </ul>
                  <p>
                    <strong>6.2.</strong> Uporabniki uporabljajo storitve na lastno odgovornost.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-techub-blue" />
                  7. Prekinitev sodelovanja
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    <strong>7.1.</strong> TecHub si pridržuje pravico do prekinitve sodelovanja v primeru:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Kršitve pogojev uporabe</li>
                    <li>Neplačevanja najemnine</li>
                    <li>Škodljivega vedenja do drugih članov skupnosti</li>
                    <li>Nespoštovanja varnostnih predpisov</li>
                  </ul>
                </div>
              </section>

              {/* Section 8 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-techub-blue" />
                  8. Kontakt
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    Za vprašanja glede pogojev uporabe nas kontaktirajte:
                  </p>
                  <div className="bg-techub-bg-light rounded-xl p-6">
                    <p className="font-semibold text-techub-gray-dark">TecHub d.o.o.</p>
                    <p>Velenje, Slovenija</p>
                    <p className="mt-2">
                      E-pošta:{' '}
                      <a href="mailto:info@techub.si" className="text-techub-blue hover:underline">
                        info@techub.si
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Acceptance */}
              <div className="mt-12 p-6 bg-techub-blue-50 rounded-xl border border-techub-blue/20">
                <p className="text-techub-gray-dark font-medium text-center">
                  Z uporabo spletne strani TecHub potrjujete, da ste prebrali, razumeli in se strinjate 
                  z zgoraj navedenimi pogoji uporabe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-techub-bg-warm mt-12">
        <div className="section-container py-6">
          <div className="section-inner text-center text-sm text-techub-gray-light">
            <p>© 2026 TecHub. Vse pravice pridržane.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
