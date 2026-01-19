import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Youtube,
  Send,
  Video,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../i18n/LanguageContext";

export function Contacts() {
  const { t, get } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contacts.cards.addressTitle"),
      details: [
        t("contacts.cards.addressLine1"),
        t("contacts.cards.addressLine2"),
      ],
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Phone,
      title: t("contacts.cards.phonesTitle"),
      details: ["+7 (727) 300-07-07", "+7 (775) 007-50-55"],
      color: "from-red-600 to-red-700",
    },
    {
      icon: Mail,
      title: t("contacts.cards.emailTitle"),
      details: ["college@metu.kz"],
      color: "from-purple-600 to-purple-700",
    },
    {
      icon: Clock,
      title: t("contacts.cards.hoursTitle"),
      details: [
        t("contacts.cards.hoursLine1"),
        t("contacts.cards.hoursLine2"),
        t("contacts.cards.hoursLine3"),
      ],
      color: "from-green-600 to-green-700",
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@metu.college",
      link: "https://www.instagram.com/metu.college",
      color: "bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600",
    },
    {
      icon: Video,
      name: "TikTok",
      handle: "@metu.college",
      link: "https://www.tiktok.com/@metu.college",
      color: "bg-gradient-to-br from-black via-gray-800 to-gray-900",
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: t("contacts.youtubeHandle"),
      link: "https://youtube.com/@metu.univer",
      color: "bg-red-600",
    },
  ];

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    emailjs
      .sendForm(
        "service_g5gcjbc",
        "template_5v3f1ib",
        formRef.current,
        "_a5fyAf13-YJNcUG_"
      )
      .then(
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
    <section
      id="contacts"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t("contacts.sectionTitle")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-red-600 mx-auto mb-6" />
          <p className="text-xl text-gray-700">
            {t("contacts.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div
                className={`bg-gradient-to-r ${info.color} p-6 text-white`}
              >
                <info.icon size={28} />
                <h3 className="text-xl font-bold mt-2">{info.title}</h3>
              </div>
              <div className="p-6">
                {info.details.map((d, j) => (
                  <p key={j} className="text-gray-600">
                    {d}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-blue-700 text-white p-6 font-bold text-xl">
              {t("contacts.mapTitle")}
            </div>
            <div className="p-6 text-center">
              <MapPin size={48} className="mx-auto text-blue-600 mb-4" />
              <p>{t("contacts.mapCity")}</p>
              <p>{t("contacts.mapAddress")}</p>
              <a
                href="https://maps.app.goo.gl/C68aMy6cs7oxP9xa7"
                target="_blank"
                className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
              >
                {t("contacts.openMap")}
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-lg p-6 space-y-4"
          >
            <label>
              {t("contacts.form.nameLabel")}
              <input
                name="user_name"
                className="w-full border p-3 rounded"
                placeholder={t("contacts.form.namePlaceholder")}
                required
              />
            </label>

            <label>
              {t("contacts.form.emailLabel")}
              <input
                name="user_email"
                type="email"
                className="w-full border p-3 rounded"
                placeholder={t("contacts.form.emailPlaceholder")}
                required
              />
            </label>

            <label>
              {t("contacts.form.msgLabel")}
              <textarea
                name="message"
                rows={4}
                className="w-full border p-3 rounded"
                placeholder={t("contacts.form.msgPlaceholder")}
                required
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded"
            >
              {loading
                ? t("contacts.form.sendLoading")
                : t("contacts.form.send")}
            </button>

            {success && (
              <p className="text-green-600">
                {t("contacts.form.success")}
              </p>
            )}
            {error && (
              <p className="text-red-600">
                {t("contacts.form.error")}
              </p>
            )}
          </form>
        </div>

        {/* Social */}
        <h3 className="text-3xl font-bold text-center mb-8">
          {t("contacts.socialTitle")}
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {socialMedia.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              className={`${s.color} text-white p-8 rounded-2xl text-center`}
            >
              <s.icon size={32} className="mx-auto mb-2" />
              <div className="font-bold">{s.name}</div>
              <div>{s.handle}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
