import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-12 relative overflow-hidden">
      {/* Christmas decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-white to-blue-600"></div>
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ❄️
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold">
                МИТУ
              </div>
              <div>
                <h3 className="font-bold">МИТУ</h3>
                <p className="text-xs text-blue-200">С 2009 года</p>
              </div>
            </div>
            <p className="text-blue-200 leading-relaxed text-sm">
              Международный Инженерно-технологический колледж — современное учебное заведение, 
              готовящее квалифицированных специалистов для различных отраслей экономики Казахстана.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors text-sm">
                  О колледже
                </a>
              </li>
              <li>
                <a href="#programs" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Специальности
                </a>
              </li>
              <li>
                <a href="#leadership" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Руководство
                </a>
              </li>
              <li>
                <a href="#news" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Новости
                </a>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="font-bold text-lg mb-4">Студентам</h3>
            <ul className="space-y-2">
              <li>
                <a href="#students" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Учебные ресурсы
                </a>
              </li>
              <li>
                <a href="#students" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Расписание
                </a>
              </li>
              <li>
                <a href="#students" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Студенческая жизнь
                </a>
              </li>
              <li>
                <a href="#applicants" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Поступление
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-blue-200">
                📍 г. Алматы, пр. Аль-Фараби
              </li>
              <li>
                <a href="tel:+77750075055" className="text-blue-200 hover:text-white transition-colors">
                  📞 +7 (775) 007-50-55
                </a>
              </li>
              <li>
                <a href="mailto:college@metu.kz" className="text-blue-200 hover:text-white transition-colors">
                  ✉️ college@metu.kz
                </a>
              </li>
              <li className="text-blue-200">
                🕐 Пн-Пт: 9:00 - 18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-sm text-center md:text-left">
              © {currentYear} Международный Инженерно-технологический колледж. Все права защищены.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-blue-200">Сделано с</span>
              <Heart className="text-red-500 fill-red-500" size={16} />
              <span className="text-blue-200">для будущих специалистов</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-blue-300 font-semibold">
              ✨ С Новым 2026 Годом! Желаем успехов в учебе и новых достижений! ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
