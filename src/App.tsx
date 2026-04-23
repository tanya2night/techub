import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Spaces } from './sections/Spaces';
import { Programs } from './sections/Programs';
import { News } from './sections/News';
import { Timeline } from './sections/Timeline';
import { CTASection } from './sections/CTASection';
import { InterestForm } from './sections/InterestForm';
import { Footer } from './sections/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Spaces />
          <Programs />
          <News />
          <Timeline />
          <CTASection />
          <InterestForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
