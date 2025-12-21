import { motion } from 'framer-motion';
import { BookOpen, Calendar, Trophy, Users, Briefcase, Heart, Laptop, Library } from 'lucide-react';

export function Students() {
  const resources = [
    {
      icon: BookOpen,
      title: 'Учебные материалы',
      description: 'Электронная библиотека, учебники, методические пособия и дополнительные материалы для всех специальностей',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Calendar,
      title: 'Расписание занятий',
      description: 'Актуальное расписание лекций, практических занятий и консультаций в онлайн-формате',
      color: 'from-red-600 to-red-700',
    },
    {
      icon: Laptop,
      title: 'Компьютерные классы',
      description: 'Современные компьютерные классы с лицензионным программным обеспечением',
      color: 'from-purple-600 to-purple-700',
    },
    {
      icon: Library,
      title: 'Библиотека',
      description: 'Богатый фонд специализированной литературы, читальные залы и комфортные условия для учебы',
      color: 'from-green-600 to-green-700',
    },
    {
      icon: Briefcase,
      title: 'Практика и стажировка',
      description: 'Производственная практика на ведущих предприятиях города с возможностью дальнейшего трудоустройства',
      color: 'from-orange-600 to-orange-700',
    },
    {
      icon: Trophy,
      title: 'Олимпиады и конкурсы',
      description: 'Участие в республиканских и международных олимпиадах, конкурсах профессионального мастерства',
      color: 'from-yellow-600 to-yellow-700',
    },
  ];

  const activities = [
    {
      icon: Users,
      title: 'Студенческий совет',
      description: 'Активная студенческая жизнь, организация мероприятий, представление интересов студентов',
    },
    {
      icon: Trophy,
      title: 'Спортивные секции',
      description: 'Футбол, волейбол, баскетбол, настольный теннис, участие в соревнованиях между колледжами',
    },
    {
      icon: Heart,
      title: 'Творческие кружки',
      description: 'Вокальная студия, танцевальный коллектив, КВН, театральная студия',
    },
  ];

  const support = [
    'Психологическая поддержка и консультирование',
    'Помощь в адаптации первокурсников',
    'Кураторство и наставничество',
    'Социальная поддержка для льготных категорий',
    'Содействие в трудоустройстве выпускников',
    'Карьерное консультирование',
  ];

  return (
    <section id="students" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Christmas decoration */}
      <div className="absolute top-0 left-0 right-0 flex justify-center gap-8 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-6xl opacity-20" style={{ animation: `float ${3 + i}s ease-in-out infinite` }}>
            ❄️
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Студентам
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Все необходимое для успешной учебы и яркой студенческой жизни
          </p>
        </motion.div>

        {/* Resources */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            Учебные ресурсы и возможности
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${resource.color} p-6 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-7xl opacity-20">
                    <resource.icon size={80} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                      <resource.icon className="text-white" size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-white">{resource.title}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{resource.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Student Life */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            Студенческая жизнь
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border-t-4 border-blue-600"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                  <activity.icon className="text-blue-600" size={32} />
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">{activity.title}</h4>
                <p className="text-gray-600 leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Support Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-t-4 border-red-600">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Поддержка студентов
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {support.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="text-white" size={24} />
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Important Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 text-9xl opacity-10">🎓</div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Важная информация для студентов
            </h3>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-3">📚 Учебный процесс</h4>
                <p className="text-blue-100 leading-relaxed">
                  Занятия проводятся в соответствии с утвержденным расписанием. Обязательно посещение всех 
                  видов учебных занятий. Текущий контроль успеваемости осуществляется через рубежный контроль, 
                  промежуточные аттестации и итоговую аттестацию.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-3">⚠️ Академическая честность</h4>
                <p className="text-blue-100 leading-relaxed">
                  В колледже действуют строгие правила академической честности. Плагиат, списывание и другие 
                  формы академической нечестности строго запрещены и влекут за собой дисциплинарные взыскания.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-3">🎯 Возможности для развития</h4>
                <p className="text-blue-100 leading-relaxed">
                  Активно участвуйте в жизни колледжа: научных конференциях, олимпиадах, конкурсах 
                  профессионального мастерства, спортивных и культурных мероприятиях. Это отличная возможность 
                  проявить себя и получить дополнительные навыки.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl mb-4">Есть вопросы? Обращайтесь в учебный отдел!</p>
              <a
                href="#contacts"
                className="inline-block px-8 py-4 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg font-semibold"
              >
                Контакты
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
