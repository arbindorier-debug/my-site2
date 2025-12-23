import { motion } from 'framer-motion';

export function Leadership() {
  const leaders = [
    {
      name: 'ШАЛАБАЕВА МАЙРА ХУСАИНОВНА',
      position: 'Директор колледжа',
      degree: 'PhD педагогических наук',
      image: '👩‍💼',
    },
    {
      name: 'ТУЗЕЛБАЙ АЙГЕРИМ АНАРБЕКОВНА',
      position: 'Заместитель директора по учебно-производственной работе',
      additional: 'Председатель ПЦК ВТиПО',
      image: '👩‍🏫',
    },
    {
      name: 'ГИНАЯТОВА АНЖЕЛА АЙБАРОВНА',
      position: 'Заместитель директора по учебно-методической работе',
      degree: 'Магистр гуманитарных наук',
      image: '👩‍💼',
    },
    {
      name: 'ЕРНИС АКЕРКЕ САБИТОВНА',
      position: 'Руководитель учебного отдела',
      degree: 'Магистр технических наук',
      image: '👩‍🔬',
    },
    {
      name: 'СЕЙФУЛА ЛАУРА ЕРЖАНКЫЗЫ',
      position: 'Председатель ПЦК ТиС',
      additional: 'Преподаватель специальных предметов',
      image: '👩‍🏫',
    },
    {
      name: 'АБЕНОВА ШЫНАР ТАНИБЕРГЕНОВНА',
      position: 'Председатель ПЦК ЕНД',
      additional: 'Преподаватель общеобразовательных дисциплин (Химия)',
      image: '👩‍🔬',
    },
    {
      name: 'ОМАРХАН ГҮЛДАРИЯ ДАНИЯРҚЫЗЫ',
      position: 'Методист',
      additional: 'Преподаватель общеобразовательных дисциплин (Английский язык)',
      image: '👩‍🏫',
    },
    {
      name: 'ТАЛИПКЫЗЫ АЙЯ',
      position: 'Председатель ПЦК ЭиФ',
      additional: 'Преподаватель специальных дисциплин (География)',
      image: '👩‍🏫',
    },
    {
      name: 'МАРАТОВА АЛИЯ ТОРЕГАЛИКЫЗЫ',
      position: 'Председатель ПЦК СГД',
      additional: 'Преподаватель общеобразовательных дисциплин (История Казахстана)',
      image: '👩‍🏫',
    },
    {
      name: 'ТУРГАНБАЕВА НУРСЕЗИМ КУАНЫШКЫЗЫ',
      position: 'Педагог-психолог',
      image: '👩‍⚕️',
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Christmas decoration */}
      <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none">
        <div className="flex justify-around items-end h-full">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-4xl opacity-30 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
              ✨
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Руководство колледжа
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Опытная команда профессионалов с высшей квалификацией и учеными степенями
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 text-8xl opacity-10">🎓</div>
                <div className="text-7xl mb-4 relative z-10 transform group-hover:scale-110 transition-transform">
                  {leader.image}
                </div>
                <h3 className="text-xl font-bold text-white relative z-10 leading-tight">
                  {leader.name}
                </h3>
              </div>

              <div className="p-6 min-h-[160px] flex flex-col">
                <p className="font-semibold text-blue-900 mb-2 leading-snug">
                  {leader.position}
                </p>
                {leader.additional && (
                  <p className="text-sm text-gray-600 mb-2">
                    {leader.additional}
                  </p>
                )}
                {leader.degree && (
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {leader.degree}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 text-6xl">🌟</div>
            <div className="absolute top-4 right-4 text-6xl">🌟</div>
            <div className="absolute bottom-4 left-1/4 text-6xl">⭐</div>
            <div className="absolute bottom-4 right-1/4 text-6xl">⭐</div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Наша команда</h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Руководство МИТУ — это команда единомышленников, объединенных общей целью создания 
              современного учебного заведения, где каждый студент получает качественное образование 
              и возможность для профессионального роста. Наши руководители имеют богатый опыт работы 
              в сфере образования, ученые степени и активно внедряют инновационные методы обучения.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
