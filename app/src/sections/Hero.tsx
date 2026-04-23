import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, Calendar, Building2, Wrench, Briefcase } from 'lucide-react';

// Blue energy lines component
function EnergyLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    interface Line {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      width: number;
    }

    const lines: Line[] = [];
    const numLines = 15;

    for (let i = 0; i < numLines; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: 50 + Math.random() * 150,
        speed: 0.5 + Math.random() * 1.5,
        opacity: 0.1 + Math.random() * 0.3,
        width: 1 + Math.random() * 2,
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        const gradient = ctx.createLinearGradient(
          line.x,
          line.y,
          line.x + line.length,
          line.y
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, 0)`);
        gradient.addColorStop(0.5, `rgba(59, 130, 246, ${line.opacity})`);
        gradient.addColorStop(1, `rgba(6, 182, 212, ${line.opacity * 1.5})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = line.width;
        ctx.lineCap = 'round';

        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x + line.length, line.y);
        ctx.stroke();

        line.x += line.speed;

        if (line.x > canvas.width) {
          line.x = -line.length;
          line.y = Math.random() * canvas.height;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}

// Image slideshow component
function ImageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/building-1.png',
    '/images/building-2.png',
    '/images/building-3.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`TecHub Building ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const { language } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Calendar, value: '2027', suffix: '', label: language === 'sl' ? 'otvoritev' : 'opening' },
    { icon: Building2, value: '5.100', suffix: ' m²', label: language === 'sl' ? 'neto površine' : 'net area' },
    { icon: Wrench, value: '6', suffix: '', label: language === 'sl' ? 'proizvodnih celic' : 'production cells' },
    { icon: Briefcase, value: '26', suffix: '', label: language === 'sl' ? 'pisarn' : 'offices' },
  ];

  const mainText = language === 'sl' 
    ? 'Kjer ideja postane prototip, prototip prva serija, prva serija pa nova delovna mesta za našo dolino.'
    : 'Where an idea becomes a prototype, a prototype becomes the first series, and the first series becomes new jobs for our valley.';

  const subText = language === 'sl'
    ? 'Generiramo nov tok tehnoloških prebojev.'
    : 'We generate a new flow of technological breakthroughs.';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <ImageSlideshow />

      {/* Energy Lines Animation */}
      <EnergyLines />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Logo */}
        <div className="mb-5">
          <img
            src="/images/logo-techub-white.png"
            alt="TecHub"
            className="h-20 md:h-28 lg:h-36 mx-auto"
          />
        </div>

        {/* Main Tagline - Subtle white shimmer animation */}
        <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3 leading-relaxed max-w-4xl mx-auto subtle-shimmer-text">
          {mainText}
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base lg:text-lg text-white/70 mb-8 max-w-2xl mx-auto">
          {subText}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <button
            onClick={() => scrollToSection('#spaces')}
            className="group px-5 py-2.5 bg-techub-blue text-white font-semibold rounded-lg hover:bg-techub-blue-dark transition-all flex items-center gap-2 text-sm"
          >
            {language === 'sl' ? 'Razišči prostore' : 'Explore spaces'}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/30 text-sm"
          >
            {language === 'sl' ? 'Izrazi interes' : 'Express interest'}
          </button>
        </div>

        {/* Stats - Even smaller compact boxes */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-white/20 min-w-[100px]"
            >
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <stat.icon className="w-4 h-4 text-techub-accent" />
                <span className="text-lg md:text-xl font-bold text-white">
                  {stat.value}
                  <span className="text-techub-accent text-sm">{stat.suffix}</span>
                </span>
              </div>
              <div className="text-[10px] text-white/60 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>

      <style>{`
        .subtle-shimmer-text {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 1) 25%,
            rgba(255, 255, 255, 0.95) 50%,
            rgba(255, 255, 255, 1) 75%,
            rgba(255, 255, 255, 0.9) 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: subtleShimmer 6s ease-in-out infinite;
        }
        
        @keyframes subtleShimmer {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
      `}</style>
    </section>
  );
}
