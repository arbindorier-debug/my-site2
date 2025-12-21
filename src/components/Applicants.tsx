import { motion } from 'framer-motion';
import { FileText, Calendar, CheckCircle, Users, Phone, Mail, Clock, MapPin } from 'lucide-react';

export function Applicants() {
  const steps = [
    {
      icon: FileText,
      title: 'Подача документов',
      description: 'Соберите необходимый пакет документов: аттестат об основном среднем или общем среднем образовании, удостоверение личности, медицинская справка формы 086-у, 6 фотографий 3x4 см.',
    },
    {
      icon: Users,
      title: 'Консультация',
      description: 'Получите консультацию приемной комиссии по выбору специальности, условиям обучения, стоимости и возможностям получения грантов и льгот.',
    },
    {
      icon: CheckCircle,
      title: 'Зачисление',
      description: 'После проверки документов и прохождения собеседования вы получите уведомление о зачислении и сможете приступить к оформлению договора на обучение.',
    },
    {
      icon: Calendar,
      title: 'Начало обучения',
      description: 'Приступайте к занятиям с 1 сентября. Участвуйте в торжественной линейке, знакомьтесь с преподавателями и однокурсниками, получайте учебные материалы.',
    },
  ];

  const requirements = [
    'Аттестат об основном среднем (9 классов) или общем среднем (11 классов) образовании',
    'Копия удостоверения личности (или свидетельства о рождении)',
    'Медицинская справка формы 086-у',
    '6 фотографий размером 3x4 см',
    'Сертификат ЕНТ (для поступающих на базе 11 классов)',
    'Заявление на имя директора колледжа',
  ];

  const benefits = [
    {
      title: 'Государственный грант',
      description: 'Возможность обучения на бесплатной основе для обладателей государственного образовательного гранта',
    },
    {
      title: 'Рассрочка платежа',
      description: 'Гибкая система оплаты обучения с возможностью рассрочки на весь учебный год',
    },
    {
      title: 'Льготы для сирот',
      description: 'Специальные условия поступления и обучения для детей-сирот и детей, оставшихся без попечения родителей',
    },
    {
      title: 'Общежитие',
      description: 'Предоставление мест в общежитии для иногородних студентов (при наличии мест)',
    },
  ];

  return (
    <section id="applicants" className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Christmas decoration */}
      <div className="absolute top-20 right-10 text-8xl opacity-10 rotate-12">🎄</div>
      <div className="absolute bottom-20 left-10 text-8xl opacity-10 -rotate-12">🎁</div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Абитуриентам
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Вся необходимая информация для поступления в МИТУ
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            Процесс поступления
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all h-full border-t-4 border-blue-600">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-6">
                    <step.icon className="text-blue-600" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3 text-center">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-t-4 border-red-600">
            <h3 className="text-3xl font-bold text-blue-900 mb-8">
              Необходимые документы
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{req}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            Льготы и преимущества
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-lg"
              >
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Приемная комиссия
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <Clock size={32} />
              </div>
              <p className="font-semibold mb-2">Время работы</p>
              <p className="text-white/90">Пн-Пт: 9:00 - 18:00</p>
              <p className="text-white/90">Сб: 9:00 - 14:00</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <Phone size={32} />
              </div>
              <p className="font-semibold mb-2">Телефон</p>
              <p className="text-white/90">+7 (775) 007-50-55</p>
              <p className="text-white/90">+7 (727) 300-07-07</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <Mail size={32} />
              </div>
              <p className="font-semibold mb-2">Email</p>
              <p className="text-white/90">college@metu.kz</p>
              <p className="text-white/90"></p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                <MapPin size={32} />
              </div>
              <p className="font-semibold mb-2">Адрес</p>
              <p className="text-white/90">г. Алматы</p>
              <p className="text-white/90">пр. Аль-Фараби 93A</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="#contacts"
              className="inline-block px-8 py-4 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg font-semibold"
            >
              Записаться на консультацию
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
