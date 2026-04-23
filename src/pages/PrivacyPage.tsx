import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Mail, Cookie } from 'lucide-react';

export default function PrivacyPage() {
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
                <Shield className="w-8 h-8 text-techub-blue" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-sora font-bold text-techub-gray-dark">
                Politika zasebnosti
              </h1>
              <p className="text-techub-gray mt-2">
                Zadnja posodobitev: 1. februar 2026
              </p>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none">
              <p className="text-techub-gray leading-relaxed">
                TecHub (Tehnološki park Velenje) se zavezuje k varovanju vaše zasebnosti. Ta politika 
                zasebnosti pojasnjuje, kako zbiramo, uporabljamo, shranjujemo in varujemo vaše osebne 
                podatke, ko uporabljate naše storitve in spletno stran.
              </p>

              {/* Section 1 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <UserCheck className="w-5 h-5 text-techub-blue" />
                  1. Upravljavec osebnih podatkov
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    Upravljavec vaših osebnih podatkov je:
                  </p>
                  <div className="bg-techub-bg-light rounded-xl p-6">
                    <p className="font-semibold text-techub-gray-dark">TecHub d.o.o.</p>
                    <p>Naslov: Velenje, Slovenija</p>
                    <p>
                      E-pošta:{' '}
                      <a href="mailto:info@techub.si" className="text-techub-blue hover:underline">
                        info@techub.si
                      </a>
                    </p>
                  </div>
                  <p>
                    Za vprašanja glede zasebnosti lahko kontaktirate tudi našega pooblaščenca za 
                    varstvo podatkov na zgornjem e-poštnem naslovu.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Database className="w-5 h-5 text-techub-blue" />
                  2. Katere podatke zbiramo
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    <strong>2.1. Podatki, ki nam jih posredujete sami:</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Ime in priimek kontaktne osebe</li>
                    <li>Naziv podjetja</li>
                    <li>E-poštni naslov</li>
                    <li>Telefonska številka</li>
                    <li>Spletna stran podjetja (če jo imate)</li>
                    <li>Področje dela in faza podjetja</li>
                    <li>Velikost ekipe</li>
                    <li>Dodatna sporočila in vprašanja</li>
                  </ul>
                  <p>
                    <strong>2.2. Podatki, ki jih samodejno zbiramo:</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>IP naslov</li>
                    <li>Vrsta brskalnika in operacijskega sistema</li>
                    <li>Datum in čas obiska</li>
                    <li>Ogledane strani</li>
                    <li>Referenčni URL (od kod ste prišli na našo stran)</li>
                  </ul>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-techub-blue" />
                  3. Nameni obdelave podatkov
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    Vaše osebne podatke obdelujemo za naslednje namene:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong>Odgovor na vaša povpraševanja</strong> - za komunikacijo glede prostorov, 
                      programov in storitev TecHub
                    </li>
                    <li>
                      <strong>Izvedba pogodbenega razmerja</strong> - če sklenemo najemno pogodbo ali 
                      se vključite v program
                    </li>
                    <li>
                      <strong>Obveščanje o novostih</strong> - če ste se prijavili na novice (s vašim 
                      soglasjem)
                    </li>
                    <li>
                      <strong>Izboljšava storitev</strong> - analiza uporabe spletne strani za 
                      izboljšavo uporabniške izkušnje
                    </li>
                    <li>
                      <strong>Pravne obveznosti</strong> - izpolnjevanje zakonskih obveznosti
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Eye className="w-5 h-5 text-techub-blue" />
                  4. Pravna podlaga za obdelavo
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    Vaše osebne podatke obdelujemo na podlagi:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong>Soglasja</strong> - ko se strinjate z obdelavo za določene namene 
                      (npr. prejemanje novic)
                    </li>
                    <li>
                      <strong>Pogodbenega razmerja</strong> - ko sklenemo pogodbo o najemu ali 
                      sodelovanju v programu
                    </li>
                    <li>
                      <strong>Zakonske obveznosti</strong> - ko to zahteva zakon
                    </li>
                    <li>
                      <strong>Zakonitih interesov</strong> - za izboljšavo storitev in varnost
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-techub-blue" />
                  5. Shranjevanje in varnost podatkov
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    <strong>5.1. Rok hrambe:</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Povpraševanja brez nadaljnjega sodelovanja: 2 leti</li>
                    <li>Najemna pogodba: 5 let po prenehanju pogodbe</li>
                    <li>Računovodski dokumenti: 10 let (v skladu z zakonom)</li>
                    <li>Novice: do preklica soglasja</li>
                  </ul>
                  <p>
                    <strong>5.2. Varnostni ukrepi:</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Šifriranje podatkov pri prenosu (SSL/TLS)</li>
                    <li>Dostop do podatkov imajo samo pooblaščene osebe</li>
                    <li>Redne varnostne kopije</li>
                    <li>Stroga politika gesel in avtentikacije</li>
                  </ul>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Eye className="w-5 h-5 text-techub-blue" />
                  6. Posredovanje podatkov tretjim osebam
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    Vaše osebne podatke ne prodajamo in ne posredujemo nepooblaščenim tretjim osebam. 
                    Podatke lahko posredujemo:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong>Pogodbenim obdelovalcem</strong> - ponudnikom storitev, ki nam pomagajo 
                      pri poslovanju (npr. gostovanje spletne strani, e-poštne storitve)
                    </li>
                    <li>
                      <strong>Davčnim in drugim organom</strong> - ko to zahteva zakon
                    </li>
                    <li>
                      <strong>Mentorjem in partnerjem</strong> - v okviru programa, če je to potrebno 
                      za vaš razvoj (samo z vašim soglasjem)
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 7 - Cookies */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Cookie className="w-5 h-5 text-techub-blue" />
                  7. Piškotki (Cookies)
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    Naša spletna stran uporablja piškotke za:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong>Nujno potrebne piškotke</strong> - za delovanje spletne strani (npr. 
                      shranjevanje izbir v obrazcih)
                    </li>
                    <li>
                      <strong>Analitične piškotke</strong> - za analizo obiska in izboljšavo strani 
                      (Google Analytics)
                    </li>
                    <li>
                      <strong>Marketinške piškotke</strong> - za prikaz relevantnih vsebin (samo z 
                      vašim soglasjem)
                    </li>
                  </ul>
                  <p>
                    Ob prvem obisku se prikaže obvestilo o piškotkih, kjer lahko upravljate svoje 
                    nastavitve. Piškotke lahko kadarkoli izbrišete v nastavitvah vašega brskalnika.
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <UserCheck className="w-5 h-5 text-techub-blue" />
                  8. Vaše pravice
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    V skladu z GDPR imate naslednje pravice:
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>
                      <strong>Pravica do dostopa</strong> - lahko zahtevate informacije o tem, katere 
                      vaše podatke obdelujemo
                    </li>
                    <li>
                      <strong>Pravica do popravka</strong> - lahko zahtevate popravek netočnih podatkov
                    </li>
                    <li>
                      <strong>Pravica do izbrisa</strong> - lahko zahtevate izbris vaših podatkov 
                      ("pravica do pozabe")
                    </li>
                    <li>
                      <strong>Pravica do omejitve obdelave</strong> - lahko zahtevate, da začasno 
                      prenehamo z obdelavo
                    </li>
                    <li>
                      <strong>Pravica do prenosljivosti</strong> - lahko zahtevate vaše podatke v 
                      strojno berljivi obliki
                    </li>
                    <li>
                      <strong>Pravica do ugovora</strong> - lahko ugovarjate obdelavi na podlagi 
                      zakonitih interesov
                    </li>
                    <li>
                      <strong>Pravica do preklica soglasja</strong> - kadarkoli lahko prekličete 
                      soglasje za prejemanje novic
                    </li>
                  </ul>
                  <p>
                    Za uveljavljanje vaših pravic nas kontaktirajte na{' '}
                    <a href="mailto:info@techub.si" className="text-techub-blue hover:underline">
                      info@techub.si
                    </a>.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-techub-blue" />
                  9. Kontakt
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    Za vprašanja glede zasebnosti in varstva podatkov nas kontaktirajte:
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
                  <p>
                    Če menite, da je prišlo do kršitve vaših pravic, imate pravico vložiti pritožbo 
                    pri Informacijskem pooblaščencu Republike Slovenije.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section className="mt-10">
                <h2 className="text-xl font-sora font-semibold text-techub-gray-dark flex items-center gap-3 mb-4">
                  <Database className="w-5 h-5 text-techub-blue" />
                  10. Spremembe politike zasebnosti
                </h2>
                <div className="space-y-4 text-techub-gray">
                  <p>
                    Pridržujemo si pravico do sprememb te politike zasebnosti. O pomembnejših 
                    spremembah vas bomo obvestili po e-pošti ali z obvestilom na spletni strani. 
                    Spremembe stopijo v veljavo z dnem objave.
                  </p>
                </div>
              </section>

              {/* Acceptance */}
              <div className="mt-12 p-6 bg-techub-blue-50 rounded-xl border border-techub-blue/20">
                <p className="text-techub-gray-dark font-medium text-center">
                  Z uporabo spletne strani TecHub potrjujete, da ste prebrali in razumeli to politiko 
                  zasebnosti ter soglašate z obdelavo vaših osebnih podatkov v skladu z njenimi določbami.
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
