import { motion } from 'framer-motion';
import { Calendar, Eye, Heart, Share2 } from 'lucide-react';

export function News() {
  const newsItems = [
    {
      title: 'День открытых дверей!',
      date: '18 ноября 2025',
      link: 'https://www.instagram.com/reel/DRNDxPliOa2/',
      image: '🚪',
      description: 'День, когда многие могут посетить наше учебное зведение и выбрать своё будущее!',
      category: 'Reel',
      type: 'video'
    },
    {
      title: 'CAFS 2025',
      date: '13 ноября 2025',
      link: 'https://www.instagram.com/p/DRDA-bKiLgc/',
      image: '💹',
      description: 'Студенты наших экономических специальностей приняли активное участие в форуме и получили уникальную возможность познакомиться с самыми современными трендами отрасли.',
      category: 'Фото',
      type: 'post'
    },
    {
      title: 'Турнир ЖАС БАРЫС',
      date: '3 ноября 2025',
      link: 'https://www.instagram.com/p/DQmOr0QiErH/',
      image: '💪',
      description: 'Республиканский турнир ЖАС БАРЫС. Национальное событие в котором участники борются между собой.',
      category: 'Фото',
      type: 'post'
    },
    {
      title: 'Нет коррупции!',
      date: '26 ноября 2025',
      link: 'https://www.instagram.com/p/DRhrbOeiGIU/',
      image: '🫸',
      description: 'Коллектив колледжа продемонстрировал активное участие, представив свою гражданскую позицию в креативном формате.',
      category: 'Фото',
      type: 'post'
    },
    {
      title: 'AI Álemi',
      date: '22 декабря 2024',
      link: 'https://www.instagram.com/reel/DQ_rAaAiPor/',
      image: '🤖',
      description: 'Во время занятия участникам были предложены теоретические и практические вопросы, а также отмечена их активность и высокий интерес к теме.',
      category: 'Reel',
      type: 'video'
    },
    {
      title: 'Мы за чистоту! Мы - есть чистота!',
      date: '6 декабря 2025',
      link: 'https://www.instagram.com/reel/DR5MHOajZ9p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      image: '🤝',
      description: 'Чистота начинается с каждого из нас - маленький вклад каждого создаёт большое и уютное пространство для всех.',
      category: 'Reel',
      type: 'video'
    },
    {
      title: '«Учеба в Пекине»',
      date: '21 октября 2025',
      link: 'https://www.instagram.com/p/DQElPL4iBCY/',
      image: '🎓',
      description: 'Целью выставки было ознакомление студентов с возможностями получения образования за рубежом и укрепление международного сотрудничества.',
      category: 'Фото',
      type: 'post'
    },
    {
      title: '«NAN FEST-2025»',
      date: '16 октября 2025',
      link: 'https://www.instagram.com/p/DP4ODSkCKNd/',
      image: '🍞',
      description: 'В рамках Всемирного дня хлеба и Года рабочих профессий на базе Алматинского государственного колледжа бизнеса прошёл городской конкурс по компетенции «Пекарское мастерство».',
      category: 'Фото',
      type: 'post'
    },
    {
      title: 'Спортивная жизнь',
      date: '5 декабря 2025',
      link: 'https://www.instagram.com/reel/DR4BpvTCHv3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
      image: '⚽',
      description: 'Спортивные секции и соревнования. Здоровый образ жизни и командный дух — важная часть обучения в МИТУ!',
      category: 'Reel',
      type: 'video'
    },
  ];

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Christmas decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-5 text-5xl opacity-10 animate-bounce">🎁</div>
        <div className="absolute top-20 right-10 text-5xl opacity-10 animate-bounce" style={{ animationDelay: '0.5s' }}>🎅</div>
        <div className="absolute bottom-20 left-20 text-5xl opacity-10 animate-bounce" style={{ animationDelay: '1s' }}>⛄</div>
        <div className="absolute bottom-10 right-20 text-5xl opacity-10 animate-bounce" style={{ animationDelay: '1.5s' }}>🔔</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Новости колледжа
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Следите за последними событиями и достижениями МИТУ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer block"
            >
              {/* Image/Icon */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 h-48 flex items-center justify-center text-9xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="relative z-10 transform group-hover:scale-110 transition-transform">
                  {item.image}
                </div>
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 bg-white/90 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                    ▶ Видео
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Category */}
                <span className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold mb-3">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Link to Instagram */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    <span className="text-2xl">📱</span>
                    Смотреть в Instagram
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105 font-semibold">
            Загрузить еще новости
          </button>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-10 text-6xl">📱</div>
            <div className="absolute bottom-4 right-10 text-6xl">💬</div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Следите за нами в Instagram!</h3>
            <p className="text-xl text-white/90 mb-6">
              Самые свежие новости, фотографии с мероприятий и студенческая жизнь
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.instagram.com/metu.college?igsh=MW40NW91NXd2bW5ibA=="
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg font-semibold inline-flex items-center gap-2"
              >
                <span className="text-2xl">📸</span>
                @metu.college
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}