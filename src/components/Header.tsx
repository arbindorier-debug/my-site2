import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "../assets/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Главная", href: "#home" },
    { name: "О нас", href: "#about" },
    { name: "Специальности", href: "#programs" },
    { name: "Руководство", href: "#leadership" },
    { name: "Абитуриентам", href: "#applicants" },
    { name: "Студентам", href: "#students" },
    { name: "Новости", href: "#news" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="w-40 h-40 flex items-center">
              <ImageWithFallback
                src={logo}
                alt="МИТУ Логотип"
                className="h-full w-auto object-contain"
              />
            </div>

            <div>
              <h1 className="font-bold text-blue-900 leading-tight">
                
              </h1>
              <p className="text-xs text-gray-600">
                Международный инженерно-технологический колледж
              </p>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex gap-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
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
