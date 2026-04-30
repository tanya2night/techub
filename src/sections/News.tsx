import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Calendar, ArrowRight, Newspaper, ExternalLink } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  featured: boolean;
  link: string;
}

export function News() {
  const { language } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const newsItems: NewsItem[] = language === 'sl' ? [
    {
      id: 1,
      title: 'Zaključeno betoniranje temeljne plošče tehnološkega parka Velenje',
      date: '16. februar 2026',
      excerpt: 'Zaključeno je betoniranje temeljne plošče tehnološkega parka Velenje, kar predstavlja pomemben mejnik v gradnji objekta.',
      image: '/images/news-betoniranje.jpg',
      featured: true,
      link: 'https://www.velenje.si/zakljuceno-betoniranje-temeljne-plosce-tehnoloskega-parka-velenje/',
    },
    {
      id: 2,
      title: 'Začenjamo z gradnjo Tehnološkega parka Velenje – TechHub',
      date: '11. september 2025',
      excerpt: 'V Velenju smo svečano položili temeljni kamen novega tehnološkega parka TechHub, ki bo postal osrednja točka razvoja inovativnih podjetij v regiji.',
      image: '/images/news-gradnja.jpg',
      featured: true,
      link: 'https://www.velenje.si/novica/zacenjamo-z-gradnjo-tehnoloskega-parka-velenje-techhub',
    },
    {
      id: 3,
      title: 'Z inkubatorji do novega gospodarskega preboja Šaleške doline',
      date: '21. avgust 2025',
      excerpt: 'V mestni občini Velenje zagotavljamo vse potrebne pogoje za razvoj podjetništva in inovativnih projektov.',
      image: '/images/techub5.png',
      featured: true,
      link: 'https://www.velenje.si/novica/z-inkubatorji-do-novega-gospodarskega-preboja-saleske-d',
    },
    {
      id: 4,
      title: 'Iščemo izvajalca gradbenih del za nov tehnološki park v Velenju',
      date: '27. december 2024',
      excerpt: 'Mestna občina Velenje je objavila javni razpis za izbiro izvajalca gradbenih del za nov tehnološki park.',
      featured: false,
      link: 'https://www.velenje.si/novica/iscemo-izvajalca-gradbenih-del-za-nov-tehnoloski-park-v-velenju',
    },
    {
      id: 5,
      title: 'Korak bližje do novega tehnološkega parka',
      date: '11. april 2024',
      excerpt: 'Po uspešni pridobitvi soglasja k projektu INOVATIVNA EKOSISTEMA V PODJETNIŠTVU IN TURIZMU smo začeli z načrtovanjem tehnološkega parka.',
      featured: false,
      link: 'https://www.velenje.si/novica/korak-blizje-do-novega-tehnoloskega-parka',
    },
    {
      id: 6,
      title: 'Ob zaključku del v Stari vasi podpis pogodbe s Kemijskim inštitutom',
      date: '29. november 2023',
      excerpt: 'Zaključena so gradbena dela v Stari vasi in podpisana pogodba s Kemijskim inštitutom za razvoj podjetništva.',
      featured: false,
      link: 'https://www.velenje.si/novica/ob-zakljucku-del-v-stari-vasi-podpis-pogodbe-s-kemijskim-institutom',
    },
    {
      id: 7,
      title: 'Več kot 40 odstotkov 70-milijonskega proračuna namenjamo investicijam',
      date: '14. november 2023',
      excerpt: 'V mestni občini Velenje smo za letošnje leto sprejeli proračun v višini 70 milijonov evrov, od tega več kot 40 % za investicije.',
      featured: false,
      link: 'https://www.velenje.si/novica/vec-kot-40-odstotkov-70-milijonskega-proracuna-namenjamo-investicijam',
    },
  ] : [
    {
      id: 1,
      title: 'Foundation slab concreting of the Velenje Technology Park completed',
      date: 'February 16, 2026',
      excerpt: 'The foundation slab concreting of the Velenje Technology Park has been completed, representing an important milestone in the construction of the building.',
      image: '/images/news-betoniranje.jpg',
      featured: true,
      link: 'https://www.velenje.si/zakljuceno-betoniranje-temeljne-plosce-tehnoloskega-parka-velenje/',
    },
    {
      id: 2,
      title: 'We are starting the construction of the Velenje Technology Park – TechHub',
      date: 'September 11, 2025',
      excerpt: 'In Velenje we ceremonially laid the cornerstone of the new TechHub technology park, which will become the central hub for innovative companies in the region.',
      image: '/images/news-gradnja.jpg',
      featured: true,
      link: 'https://www.velenje.si/novica/zacenjamo-z-gradnjo-tehnoloskega-parka-velenje-techhub',
    },
    {
      id: 3,
      title: 'With incubators to a new economic breakthrough of the Šalek Valley',
      date: 'August 21, 2025',
      excerpt: 'The Municipality of Velenje provides all the necessary conditions for the development of entrepreneurship and innovative projects.',
      image: '/images/techub5.png',
      featured: true,
      link: 'https://www.velenje.si/novica/z-inkubatorji-do-novega-gospodarskega-preboja-saleske-d',
    },
    {
      id: 4,
      title: 'We are looking for a contractor for the new technology park in Velenje',
      date: 'December 27, 2024',
      excerpt: 'The Municipality of Velenje published a public tender for the selection of a contractor for the new technology park.',
      featured: false,
      link: 'https://www.velenje.si/novica/iscemo-izvajalca-gradbenih-del-za-nov-tehnoloski-park-v-velenju',
    },
    {
      id: 5,
      title: 'A step closer to the new technology park',
      date: 'April 11, 2024',
      excerpt: 'After successfully obtaining consent for the INNOVATIVE ECOSYSTEMS IN ENTREPRENEURSHIP AND TOURISM project, we began planning the technology park.',
      featured: false,
      link: 'https://www.velenje.si/novica/korak-blizje-do-novega-tehnoloskega-parka',
    },
    {
      id: 6,
      title: 'Completion of works in Stara vas and contract signing with the Chemical Institute',
      date: 'November 29, 2023',
      excerpt: 'Construction work in Stara vas has been completed and a contract signed with the Chemical Institute for entrepreneurship development.',
      featured: false,
      link: 'https://www.velenje.si/novica/ob-zakljucku-del-v-stari-vasi-podpis-pogodbe-s-kemijskim-institutom',
    },
    {
      id: 7,
      title: 'More than 40 percent of the 70 million budget allocated to investments',
      date: 'November 14, 2023',
      excerpt: 'In the Municipality of Velenje we adopted a budget of 70 million euros for this year, of which more than 40% for investments.',
      featured: false,
      link: 'https://www.velenje.si/novica/vec-kot-40-odstotkov-70-milijonskega-proracuna-namenjamo-investicijam',
    },
  ];

  const featuredNews = newsItems.filter(item => item.featured);
  const listNews = newsItems.filter(item => !item.featured);

  return (
    <section id="news" className="py-24 bg-gradient-to-b from-techub-bg-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'sl' ? 'Novice' : 'News'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'sl' ? 'Spremljajte najnovejše informacije o razvoju TecHuba.' : 'Follow the latest information about TecHub development.'}
          </p>
        </div>

        {/* Featured News Grid - 3 with image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredNews.map((item, index) => (
            <FeaturedNewsCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* News List - without image */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Newspaper className="w-5 h-5 text-techub-blue" />
              {language === 'sl' ? 'Prejšnje novice' : 'Previous news'}
            </h3>
          </div>
          <div className="divide-y divide-gray-100">
            {listNews.map((item, index) => (
              <NewsListItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeaturedNewsCardProps {
  item: NewsItem;
  index: number;
}

function FeaturedNewsCard({ item, index }: FeaturedNewsCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const { language } = useLanguage();

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref as any}
      className={`group block transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-gray-100 h-full">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
          <div className="absolute top-3 right-3">
            <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <Calendar className="w-4 h-4" />
            <span>{item.date}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-techub-blue transition-colors line-clamp-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4">
            {item.excerpt}
          </p>
          <div className="flex items-center text-techub-blue text-sm font-medium">
            <span>{language === 'sl' ? 'Preberi več' : 'Read more'}</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </a>
  );
}

interface NewsListItemProps {
  item: NewsItem;
  index: number;
}

function NewsListItem({ item, index }: NewsListItemProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref as any}
      className={`group block cursor-pointer px-6 py-4 hover:bg-gray-50 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <Calendar className="w-4 h-4" />
            <span>{item.date}</span>
          </div>
          <h4 className="text-base font-semibold text-gray-900 group-hover:text-techub-blue transition-colors">
            {item.title}
          </h4>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-techub-blue flex-shrink-0 mt-5 opacity-0 group-hover:opacity-100 transition-all" />
      </div>
    </a>
  );
}
