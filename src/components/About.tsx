import { motion } from 'framer-motion';
import { GraduationCap, Users, Award, BookOpen, Globe, Target } from 'lucide-react';
import { History } from './History';

export function About() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Качественное образование',
      description: 'Современные образовательные программы, соответствующие международным стандартам',
    },
    {
      icon: Users,
      title: 'Опытные преподаватели',
      description: 'Высококвалифицированный педагогический состав с учеными степенями',
    },
    {
      icon: Award,
      title: 'Признанные дипломы',
      description: 'Государственные дипломы, признаваемые в Казахстане и за рубежом',
    },
    {
      icon: BookOpen,
      title: '10+ специальностей',
      description: 'Широкий выбор востребованных направлений подготовки',
    },
    {
      icon: Globe,
      title: 'Международные связи',
      description: 'Партнерские программы с ведущими учебными заведениями',
    },
    {
      icon: Target,
      title: 'Практическая подготовка',
      description: 'Современные лаборатории и производственная практика на предприятиях',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Christmas decoration */}
      <div className="absolute top-0 right-0 text-9xl opacity-10">❄️</div>
      <div className="absolute bottom-0 left-0 text-9xl opacity-10">⛄</div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            О нашем колледже
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Международный Инженерно-технологический колледж (МИТУ) — это современное учебное заведение, 
            которое готовит высококвалифицированных специалистов в различных областях промышленности, 
            информационных технологий, экономики и сервиса. Расположенный в динамично развивающемся 
            городе Алматы на проспекте Аль-Фараби, наш колледж предоставляет студентам уникальные 
            возможности для профессионального роста и развития.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border-t-4 border-blue-600"
        >
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Наша миссия</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Мы стремимся обеспечить качественное профессиональное образование, которое сочетает 
            фундаментальные знания с практическими навыками, необходимыми для успешной карьеры в 
            современной экономике. Наша цель — подготовка конкурентоспособных специалистов, способных 
            работать в международной среде и вносить значительный вклад в развитие Казахстана.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            МИТУ активно внедряет инновационные методы обучения, использует современное оборудование 
            и технологии, развивает партнерские отношения с ведущими предприятиями и организациями. 
            Мы создаем условия для всестороннего развития личности студента, поддерживаем научную 
            и творческую деятельность, формируем у будущих специалистов профессиональную этику и 
            ответственное отношение к своей профессии.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-4 transform rotate-3 hover:rotate-0 transition-transform">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 text-8xl opacity-20">🎓</div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Почему выбирают МИТУ?</h3>
            <p className="text-xl mb-6 text-blue-100">
              Более 15 лет успешной работы в сфере профессионального образования
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-5xl font-bold mb-2">1000+</div>
                <p className="text-blue-100">Выпускников</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">95%</div>
                <p className="text-blue-100">Трудоустройство</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50+</div>
                <p className="text-blue-100">Партнеров</p>
              </div>
            </div>
          </div>
        </motion.div>

        <History />
      </div>
    </section>
  );
}