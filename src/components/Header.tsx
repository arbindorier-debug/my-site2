import { Menu, X, Languages } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "../assets/logo.png";
import { useLanguage } from "../i18n/LanguageContext";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement | null>(null);

  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const menuItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "programs", href: "#programs" },
    { key: "leadership", href: "#leadership" },
    { key: "applicants", href: "#applicants" },
    { key: "students", href: "#students" },
    { key: "news", href: "#news" },
    { key: "contacts", href: "#contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/100 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-40 h-40 flex items-center">
              <ImageWithFallback
                src={logo}
                alt={t("header.logoAlt")}
                className="h-full w-auto object-contain"
              />
            </div>

            <div>
              <p className="text-xs text-gray-600">
                {t("header.subtitle")}
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex gap-6">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors relative group"
              >
                {t(`header.menu.${item.key}`)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2">
            {/* LANGUAGE SWITCH */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-200 transition"
                onClick={() => setIsLangOpen((v) => !v)}
                aria-label="Language"
              >
                <Languages size={18} />
                <span className="text-xs font-semibold">
                  {lang.toUpperCase()}
                </span>
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    className="absolute right-0 mt-2 w-28 rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden z-50"
                  >
                    {(["ru", "kz", "en"] as const).map((l) => (
                      <button
                        key={l}
                        type="button"
                        className={`w-full text-left px-3 py-2 text-sm hover:bg-blue-50 transition ${
                          lang === l
                            ? "font-bold text-blue-700"
                            : "text-gray-700"
                        }`}
                        onClick={() => {
                          setLang(l);
                          setIsLangOpen(false);
                        }}
                      >
                        {l.toUpperCase()}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {menuItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(`header.menu.${item.key}`)}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* DECORATION LINE */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-white to-blue-600" />
    </header>
  );
}
