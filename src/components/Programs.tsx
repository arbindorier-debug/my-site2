import { motion } from 'framer-motion';
import { Code, Plane, Building2, Radio, Beer, Utensils, FileCheck, Cake, Scale, Calculator, Briefcase } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      icon: Code,
      title: 'Программное обеспечение',
      description: 'Разработка современного программного обеспечения, веб-приложений и мобильных приложений. Изучение языков программирования, баз данных и технологий разработки.',
      duration: '3 года 10 месяцев',
      qualification: 'Техник-программист',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Plane,
      title: 'Туризм',
      description: 'Организация туристической деятельности, гостиничный бизнес, туристические маршруты и экскурсионное обслуживание. Подготовка специалистов индустрии туризма и гостеприимства.',
      duration: '2 года 10 месяцев',
      qualification: 'Специалист по туризму',
      color: 'from-red-600 to-red-700',
    },
    {
      icon: Building2,
      title: 'Банковское и страховое дело',
      description: 'Финансовые операции, банковские продукты и услуги, страхование, кредитование. Работа с клиентами, анализ финансовых рисков и управление портфелем.',
      duration: '2 года 10 месяцев',
      qualification: 'Специалист банковского дела',
      color: 'from-blue-700 to-blue-800',
    },
    {
      icon: Radio,
      title: 'Радиотехника, электроника и телекоммуникации',
      description: 'Проектирование и эксплуатация радиоэлектронных устройств, систем связи и телекоммуникационного оборудования. Ремонт и настройка электронной аппаратуры.',
      duration: '3 года 10 месяцев',
      qualification: 'Техник-электроник',
      color: 'from-purple-600 to-purple-700',
    },
    {
      icon: Beer,
      title: 'Производство пива, безалкогольных и спиртных напитков',
      description: 'Технология производства различных видов напитков, контроль качества, организация производственного процесса на предприятиях пищевой промышленности.',
      duration: '3 года 10 месяцев',
      qualification: 'Техник-технолог',
      color: 'from-amber-600 to-amber-700',
    },
    {
      icon: Utensils,
      title: 'Технология производства пищевых продуктов',
      description: 'Современные технологии пищевой промышленности, организация производства, контроль качества и безопасности продукции, разработка новых продуктов.',
      duration: '3 года 10 месяцев',
      qualification: 'Техник-технолог',
      color: 'from-green-600 to-green-700',
    },
    {
      icon: FileCheck,
      title: 'Стандартизация, метрология и сертификация',
      description: 'Контроль качества продукции, сертификация систем управления, метрологическое обеспечение производства, проведение испытаний и измерений.',
      duration: '2 года 10 месяцев',
      qualification: 'Техник-метролог',
      color: 'from-indigo-600 to-indigo-700',
    },
    {
      icon: Cake,
      title: 'Хлебопекарное, макаронное и кондитерское производство',
      description: 'Технология приготовления хлебобулочных, кондитерских и макаронных изделий, управление производственными процессами, разработка рецептур.',
      duration: '3 года 10 месяцев',
      qualification: 'Техник-технолог',
      color: 'from-pink-600 to-pink-700',
    },
    {
      icon: Scale,
      title: 'Правоведение',
      description: 'Правовое обеспечение деятельности организаций, знание законодательства, ведение юридической документации, консультирование по правовым вопросам.',
      duration: '2 года 10 месяцев',
      qualification: 'Юрист',
      color: 'from-gray-700 to-gray-800',
    },
    {
      icon: Calculator,
      title: 'Учет и аудит',
      description: 'Бухгалтерский и налоговый учет, финансовая отчетность, аудиторская деятельность, анализ финансово-хозяйственной деятельности предприятий.',
      duration: '2 года 10 месяцев',
      qualification: 'Бухгалтер',
      color: 'from-teal-600 to-teal-700',
    },
    {
      icon: Briefcase,
      title: 'Менеджмент (по отраслям и областям применения)',
      description: 'Управление организациями, планирование деятельности, маркетинг, управление персоналом, организация производственных процессов в различных отраслях.',
      duration: '2 года 10 месяцев',
      qualification: 'Менеджер',
      color: 'from-orange-600 to-orange-700',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-b from-blue-50 to-white relative">
      {/* Christmas decoration */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">🎁</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-pulse">🎅</div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Наши специальности
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Выберите специальность мечты из широкого спектра востребованных направлений подготовки
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group border border-gray-100"
            >
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-6xl opacity-20">
                  <program.icon size={80} />
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    <program.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{program.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed min-h-[120px]">
                  {program.description}
                </p>
                
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Срок обучения:</span>
                    <span className="text-sm font-semibold text-blue-900">{program.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Квалификация:</span>
                    <span className="text-sm font-semibold text-blue-900">{program.qualification}</span>
                  </div>
                </div>

                <button className={`mt-4 w-full py-3 bg-gradient-to-r ${program.color} text-white rounded-lg hover:shadow-lg transition-all transform group-hover:scale-105`}>
                  Подробнее
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-blue-50 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Не нашли подходящую специальность?
          </h3>
          <p className="text-gray-700 mb-6">
            Свяжитесь с нашей приемной комиссией для получения подробной консультации
          </p>
          <a
            href="#contacts"
            className="inline-block px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Связаться с нами
          </a>
        </motion.div>
      </div>
    </section>
  );
}
