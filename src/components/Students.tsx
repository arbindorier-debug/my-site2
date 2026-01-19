import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import {
  BookOpen,
  Calendar,
  Monitor,
  Library,
  Briefcase,
  Trophy,
  Users,
  Dumbbell,
  Palette,
} from "lucide-react";

export function Students() {
  const { t, get } = useLanguage();

  // ✅ Ровно те 6 карточек, как на скрине (цветные шапки)
  const resources = [
    {
      icon: BookOpen,
      title: t("students.resources.r1Title"),
      description: t("students.resources.r1Desc"),
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Calendar,
      title: t("students.resources.r2Title"),
      description: t("students.resources.r2Desc"),
      color: "from-red-600 to-red-700",
    },
    {
      icon: Monitor,
      title: t("students.resources.r3Title"),
      description: t("students.resources.r3Desc"),
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: Library,
      title: t("students.resources.r4Title"),
      description: t("students.resources.r4Desc"),
      color: "from-green-600 to-green-700",
    },
    {
      icon: Briefcase,
      title: t("students.resources.r5Title"),
      description: t("students.resources.r5Desc"),
      color: "from-orange-600 to-orange-700",
    },
    {
      icon: Trophy,
      title: t("students.resources.r6Title"),
      description: t("students.resources.r6Desc"),
      color: "from-yellow-600 to-yellow-700",
    },
  ];

  const activities = [
    {
      icon: Users,
      title: t("students.activities.a1Title"),
      description: t("students.activities.a1Desc"),
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Dumbbell,
      title: t("students.activities.a2Title"),
      description: t("students.activities.a2Desc"),
      color: "from-red-600 to-red-800",
    },
    {
      icon: Palette,
      title: t("students.activities.a3Title"),
      description: t("students.activities.a3Desc"),
      color: "from-purple-600 to-purple-800",
    },
  ];

  const supportList = Object.values(get("students.supportList") || {}) as string[];

  return (
    <section id="students" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* decorations */}
      <div className="absolute top-10 left-10 text-6xl opacity-10 animate-pulse">🎓</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10 animate-pulse">📚</div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t("students.sectionTitle")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t("students.subtitle")}
          </p>
        </motion.div>

        {/* ✅ Учебные ресурсы и возможности (как на скрине) */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            {t("students.resourcesTitle")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group border border-gray-100"
              >
                {/* colored header */}
                <div className={`bg-gradient-to-r ${item.color} p-6 text-white relative overflow-hidden`}>
                  {/* big icon shadow */}
                  <div className="absolute top-0 right-0 text-7xl opacity-15">
                    <item.icon size={90} />
                  </div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                      <item.icon size={28} />
                    </div>
                    <h4 className="text-xl font-bold leading-tight">{item.title}</h4>
                  </div>
                </div>

                {/* body */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Студенческая жизнь */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-900 mb-10 text-center">
            {t("students.lifeTitle")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`bg-gradient-to-br ${activity.color} rounded-2xl p-6 text-white shadow-lg`}
              >
                <activity.icon size={40} className="mb-4" />
                <h4 className="text-xl font-bold mb-2">{activity.title}</h4>
                <p className="text-white/90 leading-relaxed">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Поддержка студентов */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-20 border-t-4 border-red-600"
        >
          <h3 className="text-3xl font-bold text-blue-900 mb-8">
            {t("students.supportTitle")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supportList.map((s, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Важная информация */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl p-12 text-white shadow-2xl text-center"
        >
          <h3 className="text-3xl font-bold mb-8">
            {t("students.importantTitle")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="font-bold mb-3">{t("students.block1Title")}</h4>
              <p className="text-white/90 leading-relaxed">{t("students.block1Text")}</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="font-bold mb-3">{t("students.block2Title")}</h4>
              <p className="text-white/90 leading-relaxed">{t("students.block2Text")}</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="font-bold mb-3">{t("students.block3Title")}</h4>
              <p className="text-white/90 leading-relaxed">{t("students.block3Text")}</p>
            </div>
          </div>

          <p className="mt-8 text-white/90 text-lg">
            {t("students.questions")}
          </p>

          <a
            href="#contacts"
            className="inline-block mt-6 px-8 py-4 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg font-semibold"
          >
            {t("students.contactsBtn")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
