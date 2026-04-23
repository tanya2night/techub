import { useLanguage } from '../contexts/LanguageContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  featured: boolean;
}

export function News() {
  const { language } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const newsItems: NewsItem[] = language === 'sl' ? [
    {
      id: 1,
      title: 'Podpis pogodbe za izgradnjo TecHuba',
      date: '15. marec 2024',
      excerpt: 'V Velenju je bila podpisana pogodba za izgradnjo inovativnega tehnološkega centra TecHub, ki bo postal osrednja točka razvoja startupov v regiji.',
      image: '/images/news-podpis.jpg',
      featured: true,
    },
    {
      id: 2,
      title: 'Začela se je gradnja TecHuba',
      date: '10. april 2024',
      excerpt: 'S svečanim začetkom gradbenih del se je uradno pričelo ustvarjanje novega tehnološkega stičišča v Velenju.',
      image: '/images/news-gradnja.jpg',
      featured: true,
    },
    {
      id: 3,
      title: 'Prvo betoniranje temeljev',
      date: '22. maj 2024',
      excerpt: 'Dokončano je prvo betoniranje temeljev objekta TecHub, kar predstavlja pomemben mejnik v gradbenem procesu.',
      image: '/images/news-betoniranje.jpg',
      featured: true,
    },
    {
      id: 4,
      title: 'TecHub bo ponujal prostore za več kot 100 podjetij',
      date: '1. junij 2024',
      excerpt: 'Po dokončanju bo TecHub lahko sprejel več kot 100 inovativnih podjetij in zagotovil prostor za njihov razvoj.',
      featured: false,
    },
    {
      id: 5,
      title: 'Predstavitev koncepta TecHub na regijskem dogodku',
      date: '15. junij 2024',
      excerpt: 'Koncept TecHuba je bil predstavljen na regijskem dogodku za podjetnike, ki je pritegnil veliko zanimanja.',
      featured: false,
    },
    {
      id: 6,
      title: 'Novi programi podpore za startup podjetja',
      date: '1. julij 2024',
      excerpt: 'Pripravljamo nove programe podpore za startup podjetja, ki bodo vključevali mentorstvo, financiranje in dostop do opreme.',
      featured: false,
    },
  ] : [
    {
      id: 1,
      title: 'Contract signed for TecHub construction',
      date: 'March 15, 2024',
      excerpt: 'In Velenje, a contract was signed for the construction of the innovative TecHub technology center, which will become the central hub for startup development in the region.',
      image: '/images/news-podpis.jpg',
      featured: true,
    },
    {
      id: 2,
      title: 'TecHub construction has begun',
      date: 'April 10, 2024',
      excerpt: 'With the ceremonial start of construction work, the official creation of the new technology hub in Velenje has begun.',
      image: '/images/news-gradnja.jpg',
      featured: true,
    },
    {
      id: 3,
      title: 'First foundation concrete pouring',
      date: 'May 22, 2024',
      excerpt: 'The first foundation concrete pouring of the TecHub building has been completed, representing an important milestone in the construction process.',
      image: '/images/news-betoniranje.jpg',
      featured: true,
    },
    {
      id: 4,
      title: 'TecHub will offer space for over 100 companies',
      date: 'June 1, 2024',
      excerpt: 'Upon completion, TecHub will be able to accommodate over 100 innovative companies and provide space for their development.',
      featured: false,
    },
    {
      id: 5,
      title: 'TecHub concept presented at regional event',
      date: 'June 15, 2024',
      excerpt: 'The TecHub concept was presented at a regional event for entrepreneurs, which attracted great interest.',
      featured: false,
    },
    {
      id: 6,
      title: 'New support programs for startup companies',
      date: 'July 1, 2024',
      excerpt: 'We are preparing new support programs for startup companies, which will include mentorship, funding and access to equipment.',
      featured: false,
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

        {/* Featured News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredNews.map((item, index) => (
            <FeaturedNewsCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* News List */}
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
    <article
      ref={ref}
      className={`group cursor-pointer transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden border border-gray-100 h-full">
        {/* Image Frame */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
    </article>
  );
}

interface NewsListItemProps {
  item: NewsItem;
  index: number;
}

function NewsListItem({ item, index }: NewsListItemProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <article
      ref={ref}
      className={`group cursor-pointer px-6 py-4 hover:bg-gray-50 transition-all duration-500 ${
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
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-techub-blue group-hover:translate-x-1 transition-all flex-shrink-0 mt-4" />
      </div>
    </article>
  );
}
