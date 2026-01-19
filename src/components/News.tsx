import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const RSS_URL =
  "https://rss.app/feeds/v1.1/SmYr9x7qLAlo0xiv.json";

/* =========================
   Типы RSS
   ========================= */
interface RssAuthor {
  name?: string;
  avatar?: string;
}

interface RssItem {
  id?: string;
  title?: string;
  link?: string;
  url?: string;
  image?: string;
  thumbnail?: string;
  date?: string;
  pubDate?: string;
  author?: RssAuthor;
  avatar?: string;
  categories?: string[];
}

/* =========================
   Тип поста для UI
   ========================= */
type InstaPost = {
  id: string;
  title: string;
  link: string;
  thumbnail: string;
  avatar: string;
  date: string;
  type: "post" | "video";
};

export function News() {
  const { t } = useLanguage();

  const [posts, setPosts] = useState<InstaPost[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  /* =========================
     Загрузка постов
     ========================= */
  const loadPosts = async () => {
    try {
      const res = await fetch(RSS_URL);
      const data = await res.json();

      const items: RssItem[] = data.items ?? [];

      const parsed: InstaPost[] = items.map((item, index) => {
        const imageSrc = item.image || item.thumbnail || "";
        const avatarSrc = item.author?.avatar || item.avatar || "";

        return {
          id: item.id || String(index),
          title: item.title || "",
          link: item.link || item.url || "#",
          thumbnail: imageSrc
            ? `https://images.weserv.nl/?url=${encodeURIComponent(
                imageSrc
              )}&w=800`
            : "",
          avatar: avatarSrc
            ? `https://images.weserv.nl/?url=${encodeURIComponent(
                avatarSrc
              )}&w=200`
            : "",
          date: new Date(
            item.date || item.pubDate || Date.now()
          ).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          type: item.categories?.some((c) =>
            c.toLowerCase().includes("video")
          )
            ? "video"
            : "post",
        };
      });

      setPosts(parsed);
    } catch (e) {
      console.error("RSS load error", e);
    }
  };

  /* =========================
     Автообновление
     ========================= */
  useEffect(() => {
    loadPosts();
    const interval = setInterval(loadPosts, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  /* =========================
     Скролл
     ========================= */
  const scroll = (dir: "left" | "right") => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: dir === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="news"
      className="py-20 bg-gradient-to-b from-blue-50 to-white relative"
    >
      <div className="container mx-auto px-4">

        {/* Заголовок */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t("news.sectionTitle")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-700">
            {t("news.subtitle")}
          </p>
        </div>

        {/* Управление */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100"
            aria-label="Prev"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100"
            aria-label="Next"
          >
            <ChevronRight />
          </button>

          {/* Лента */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-4"
          >
            {posts.map((post) => (
              <motion.a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="min-w-[320px] max-w-[320px] bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0"
              >
                {/* Header */}
                <div className="flex items-center gap-3 p-4">
                  {post.avatar && (
                    <img
                      src={post.avatar}
                      alt={t("news.avatarAlt")}
                      className="w-10 h-10 rounded-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-sm text-gray-900">
                      metu.college
                    </div>
                    <div className="text-xs text-gray-500">
                      {post.date}
                    </div>
                  </div>
                </div>

                {/* Media */}
                <div className="relative">
                  {post.thumbnail && (
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full aspect-square object-cover"
                      loading="lazy"
                    />
                  )}
                  {post.type === "video" && (
                    <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      {t("news.reelsLabel")}
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-4 text-sm text-gray-700 line-clamp-2">
                  {post.title}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
