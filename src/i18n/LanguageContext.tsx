import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { translations, Lang } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  get: (key: string) => any;
};

const LanguageContext = createContext<Ctx | null>(null);

const detectBrowserLang = (): Lang => {
  const l = (navigator.language || "ru").toLowerCase();
  if (l.startsWith("kk")) return "kz";
  if (l.startsWith("en")) return "en";
  return "ru";
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    setLangState(saved || detectBrowserLang());
  }, []);

  const setLang = (l: Lang) => {
    localStorage.setItem("lang", l);
    setLangState(l);
  };

  const getValue = (obj: any, key: string) =>
    key.split(".").reduce<any>((acc, k) => (acc ? acc[k] : undefined), obj);

  // 🔹 ТОЛЬКО строки
  const t = useMemo(() => {
    return (key: string) => {
      // 1) current language
      const v1 = getValue(translations[lang], key);
      if (typeof v1 === "string") return v1;

      // 2) fallback to RU (so missing keys don't show like "foo.bar")
      const v2 = getValue(translations.ru, key);
      if (typeof v2 === "string") return v2;

      return key;
    };
  }, [lang]);

  // 🔹 объекты / массивы
  const get = useMemo(() => {
    return (key: string) => {
      const v1 = getValue(translations[lang], key);
      return v1 !== undefined ? v1 : getValue(translations.ru, key);
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, get }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
