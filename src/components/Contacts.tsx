import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Send, Video } from 'lucide-react';
import emailjs from "@emailjs/browser";

export function Contacts() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адрес',
      details: ['г. Алматы', 'проспект Аль-Фараби 93А'],
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Phone,
      title: 'Телефоны',
      details: ['+7 (727) 300-07-07', '+7 (775) 007-50-55'],
      color: 'from-red-600 to-red-700',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['college@metu.kz'],
      color: 'from-purple-600 to-purple-700',
    },
    {
      icon: Clock,
      title: 'Режим работы',
      details: ['Пн-Пт: 9:00 - 18:00', 'Сб: 9:00 - 14:00', 'Вс: Выходной'],
      color: 'from-green-600 to-green-700',
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@metu.college',
      link: 'https://www.instagram.com/metu.college?igsh=MW40NW91NXd2bW5ibA==',
      color: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600',
    },
    {
      icon: Video,
      name: 'TikTok',
      handle: '@metu.college',
      link: 'https://www.tiktok.com/@metu.college',
      color: 'bg-gradient-to-br from-black via-gray-800 to-gray-900',
    },
    {
      icon: Youtube,
      name: 'YouTube',
      handle: 'МИТУ',
      link: 'https://youtube.com/@metu.univer?si=M2g8H9J5akjm4rqQ',
      color: 'bg-red-600',
    },
  ];

  // EmailJS
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    emailjs.sendForm(
      "service_g5gcjbc",
      "template_5v3f1ib",
      formRef.current,
      "_a5fyAf13-YJNcUG_"
    ).then(
      () => {
        setSuccess(true);
        setError(false);
        setLoading(false);
        formRef.current?.reset();
      },
      () => {
        setError(true);
        setSuccess(false);
        setLoading(false);
      }
    );
  };

  return (
    <section id="contacts" className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Christmas decoration */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <div className="flex justify-around">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="text-5xl opacity-20"
              style={{
                animation: `swing ${2 + i * 0.3}s ease-in-out infinite`,
                transformOrigin: 'top center',
              }}
            >
              🎄
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Контакты
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Свяжитесь с нами удобным для вас способом
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${info.color} p-6 text-white`}>
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                  <info.icon size={28} />
                </div>
                <h3 className="text-xl font-bold">{info.title}</h3>
              </div>
              <div className="p-6">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-2 leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map and Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
              <h3 className="text-2xl font-bold">Как нас найти</h3>
            </div>
            <div className="p-6">
              <div className="bg-blue-100 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-blue-600 mx-auto mb-4" size={64} />
                  <p className="text-gray-700 font-semibold mb-2">г. Алматы</p>
                  <p className="text-gray-600">проспект Аль-Фараби, 93А</p>
                  <a
                    href="https://maps.app.goo.gl/C68aMy6cs7oxP9xa7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Открыть на карте
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 space-y-4"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">Ваше имя</label>
              <input
                type="text"
                name="user_name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Введите ваше имя"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Введите email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Сообщение</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                placeholder="Введите ваше сообщение"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {loading ? "Отправка..." : "Отправить сообщение"}
            </button>
            {success && <p className="text-green-600 mt-2">Сообщение отправлено!</p>}
            {error && <p className="text-red-600 mt-2">Ошибка при отправке, попробуйте снова.</p>}
          </motion.form>
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
            Мы в социальных сетях
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialMedia.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={`${social.color} rounded-2xl p-8 text-white text-center shadow-lg hover:shadow-2xl transition-all`}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <social.icon size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">{social.name}</h4>
                <p className="text-white/90">{social.handle}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes swing {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
      `}</style>
    </section>
  );
}
