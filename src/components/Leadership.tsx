import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

export function Leadership() {
  const { t, get } = useLanguage();

  const leaders = [
    get("leadership.leaders.l1"),
    get("leadership.leaders.l2"),
    get("leadership.leaders.l3"),
    get("leadership.leaders.l4"),
    get("leadership.leaders.l5"),
    get("leadership.leaders.l6"),
    get("leadership.leaders.l7"),
    get("leadership.leaders.l8"),
    get("leadership.leaders.l9"),
    get("leadership.leaders.l10"),
  ];

  const images = ["👩‍💼","👩‍🏫","👩‍💼","👩‍🔬","👩‍🏫","👩‍🔬","👩‍🏫","👩‍🏫","👩‍🏫","👩‍⚕️"];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t("leadership.sectionTitle")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t("leadership.subtitle")}
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-center">
                <div className="text-7xl mb-4">{images[i]}</div>
                <h3 className="text-xl font-bold text-white">
                  {leader.name}
                </h3>
              </div>

              <div className="p-6 min-h-[160px] flex flex-col">
                <p className="font-semibold text-blue-900 mb-2">
                  {leader.position}
                </p>

                {leader.additional && (
                  <p className="text-sm text-gray-600 mb-2">
                    {leader.additional}
                  </p>
                )}

                {leader.degree && (
                  <div className="mt-auto pt-4 border-t">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {leader.degree}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-600 to-blue-600 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            {t("leadership.teamTitle")}
          </h3>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t("leadership.teamText")}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
