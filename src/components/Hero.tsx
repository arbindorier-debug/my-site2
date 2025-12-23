import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroBg from "../assets/hero-bg.jpeg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={heroBg}
          alt="Международный инженерно-технологический колледж"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-900/90" />
      </div>

      {/* CHRISTMAS TREES SVG */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        <svg viewBox="0 0 1200 200" className="w-full h-32 opacity-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <g key={i} transform={`translate(${i * 200 + 50}, 120)`}>
              <polygon points="0,-60 -20,0 20,0" fill="#059669" />
              <polygon points="0,-40 -25,20 25,20" fill="#10b981" />
              <polygon points="0,-20 -30,40 30,40" fill="#34d399" />
              <rect x="-5" y="40" width="10" height="20" fill="#78350f" />
            </g>
          ))}
        </svg>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 px-12">
            Международный<br />
            Инженерно-технологический<br />
            колледж
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto">
            Современное образование мирового уровня в сердце Алматы
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <a
              href="#applicants"
              className="px-8 py-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Поступить в колледж
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white text-blue-900 rounded-full hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Узнать больше
            </a>
          </div>

          <p className="text-white/80 mb-2">📍 Алматы, проспект Аль-Фараби</p>
          <p className="text-white/80">✨ С Новым годом! ✨</p>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={40} className="text-white/60" />
        </motion.div>
      </div>
    </section>
  );
}
