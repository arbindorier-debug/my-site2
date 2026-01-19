import { motion } from "framer-motion";
import {
  Code,
  Plane,
  Building2,
  Radio,
  Beer,
  Utensils,
  FileCheck,
  Cake,
  Scale,
  Calculator,
  Briefcase,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export function Programs() {
  const { t, get } = useLanguage();

  const programsMeta: Record<string, { icon: any; color: string }> = {
    software: { icon: Code, color: "from-blue-600 to-blue-700" },
    tourism: { icon: Plane, color: "from-red-600 to-red-700" },
    banking: { icon: Building2, color: "from-blue-700 to-blue-800" },
    radio: { icon: Radio, color: "from-purple-600 to-purple-700" },
    beer: { icon: Beer, color: "from-amber-600 to-amber-700" },
    food: { icon: Utensils, color: "from-green-600 to-green-700" },
    standards: { icon: FileCheck, color: "from-indigo-600 to-indigo-700" },
    bakery: { icon: Cake, color: "from-pink-600 to-pink-700" },
    law: { icon: Scale, color: "from-gray-700 to-gray-800" },
    accounting: { icon: Calculator, color: "from-teal-600 to-teal-700" },
    management: { icon: Briefcase, color: "from-orange-600 to-orange-700" },
  };

  const programs = get("programs.list") as Record<
    string,
    {
      title: string;
      description: string;
      duration: string;
      qualification: string;
    }
  >;

  return (
    <section
      id="programs"
      className="py-20 bg-gradient-to-b from-blue-50 to-white relative"
    >
      {/* Christmas decoration */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">
        🎁
      </div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20 animate-pulse">
        🎅
      </div>

      <div className="container mx-auto px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t("programs.sectionTitle")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t("programs.subtitle")}
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(programs).map(([key, program], index) => {
            const meta = programsMeta[key];
            if (!meta) return null;
            const Icon = meta.icon;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group border border-gray-100"
              >
                <div
                  className={`bg-gradient-to-r ${meta.color} p-6 text-white relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 text-6xl opacity-20">
                    <Icon size={80} />
                  </div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold leading-tight">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed min-h-[120px]">
                    {program.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {t("programs.labels.duration")}
                      </span>
                      <span className="text-sm font-semibold text-blue-900">
                        {program.duration}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {t("programs.labels.qualification")}
                      </span>
                      <span className="text-sm font-semibold text-blue-900">
                        {program.qualification}
                      </span>
                    </div>
                  </div>

                  <button
                    className={`mt-4 w-full py-3 bg-gradient-to-r ${meta.color} text-white rounded-lg hover:shadow-lg transition-all transform group-hover:scale-105`}
                  >
                    {t("programs.moreBtn")}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-blue-50 rounded-3xl p-8"
        >
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            {t("programs.bottomTitle")}
          </h3>
          <p className="text-gray-700 mb-6">
            {t("programs.bottomText")}
          </p>
          <a
            href="#contacts"
            className="inline-block px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
          >
            {t("programs.bottomBtn")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
