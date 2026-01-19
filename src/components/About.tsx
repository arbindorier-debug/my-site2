import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* SECTION TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10"
        >
          {t("about.sectionTitle")}
        </motion.h2>

        {/* INTRO */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-gray-700 leading-relaxed mb-10"
        >
          {t("about.intro")}
        </motion.p>

        {/* MISSION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-gray-50 rounded-xl p-8"
        >
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            {t("about.missionTitle")}
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            {t("about.missionP1")}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {t("about.missionP2")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
