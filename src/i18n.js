import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from 'i18next-http-backend';
import Cookies from "js-cookie";

i18n.use(initReactI18next).use(LanguageDetector).use(Backend)
  .init({
    fallbackLng: "en",
    detection:{
      order: ['cookie','htmlTag','path', 'subdomain'],
      caches: ['cookie'],
    },
    // backend:{
    //   loadPath: '/assets/Locales/ar/translation.json',
    // },
    // debug:true,
    // interpolation:{
    //     escapeValue:false,
    //     formatSeparator:","
    // },
    // react: {
    //   wait: true,
    // }
    resources: {
      ar: {
        translation: {
          "Happening now":"يحدث الان",
          "Join Twitter today.":"انضم للتويتر الان",
          "Sign up with Google":"تسجيل دخول بواسطه جوجل",
          "title":"نسخه للتويتر",
          "Home":"الرئيسية",
          "Explore":"استكشف",
          "Notifications":"التنبيهات",
          "Messages":"الرسائل",
          "Bookmarks":"العلامات المرجعيه",
          "Lists":"القوائم",
          "Profile":"الملف الشخصى",
          "More":"المزيد",
          "Tweet":"غرد",
          "what is happening?":"ماذا يحدث",
          "search Twitter":"البحث فى التويتر",
          "hour":"ساعه",
          "minute":"دقيقه",
          "what's happening?":"ماذا يحدث؟",
          "likes":"الاعجابات",
          "Replies":"التعليقات"
        }
      },
      en: {
        translation:{
          "Happening now":"Happening now",
          "Join Twitter today.":"Join Twitter today.",
          "Sign up with Google":"Sign up with Google",
          "title":"Twitter Clone",
          "Home":"Home",
          "Explore":"Explore",
          "Notifications":"Notifications",
          "Messages":"Messages",
          "Profile":"Profile",
          "Lists":"Lists",
          "Bookmarks":"Bookmarks",
          "More":"More",
          "Tweet":"Tweet",
          "what is happening?":"What is happening?",
          "search Twitter":"Search Twitter",
          "hour":"hour",
          "minute":"minute",
          "what's happening?":"what's happening?",
          "likes":"Likes",
          "Replies":"Replies"
        }
      }
    },
    lng: Cookies.get("i18next"), // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });