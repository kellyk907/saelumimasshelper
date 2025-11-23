/* add saelumi art here */

// src/App.jsx
import React, { useState, useEffect } from "react";

export default function App() {
  const [lang, setLang] = useState("en");
  const [screen, setScreen] = useState("home");
  const [currentStep, setCurrentStep] = useState(0);
  const [slide, setSlide] = useState(0);
  const [breathing, setBreathing] = useState(false);

  const t = (en, es = en, fr = en, pt = en, zh = en, yue = en) => {
    const map = { en, es, fr, pt, zh, yue };
    return map[lang] || en;
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "pt", name: "Português" },
    { code: "zh", name: "简体中文" },
    { code: "yue", name: "廣東話" },
  ];

  const aacWords = [
    { en: "bathroom", es: "baño", fr: "toilettes", pt: "banheiro", zh: "厕所", yue: "廁所" },
    { en: "water", es: "agua", fr: "eau", pt: "água", zh: "水", yue: "水" },
    { en: "break", es: "descanso", fr: "pause", pt: "pausa", zh: "休息", yue: "休息" },
    { en: "quiet", es: "silencio", fr: "calme", pt: "silêncio", zh: "安静", yue: "安靜" },
    { en: "hug", es: "abrazo", fr: "câlin", pt: "abraço", zh: "抱抱", yue: "錫錫" },
    { en: "fidget", es: "juguete", fr: "jouet", pt: "brinquedo", zh: "小玩具", yue: "小玩具" },
    { en: "headphones", es: "auriculares", fr: "casque", pt: "fones", zh: "耳機", yue: "耳機" },
    { en: "sit", es: "sentarse", fr: "s’asseoir", pt: "sentar", zh: "坐下", yue: "坐低" },
    { en: "stand", es: "pararse", fr: "se lever", pt: "levantar", zh: "站起來", yue: "企起身" },
    { en: "help", es: "ayuda", fr: "aide", pt: "ajuda", zh: "幫忙", yue: "幫手" },
    { en: "all done", es: "terminé", fr: "fini", pt: "pronto", zh: "完成了", yue: "完成咗" },
    { en: "more", es: "más", fr: "encore", pt: "mais", zh: "更多", yue: "多啲" },
    { en: "snack", es: "merienda", fr: "goûter", pt: "lanche", zh: "零食", yue: "小食" },
    { en: "thank you", es: "gracias", fr: "merci", pt: "obrigado", zh: "謝謝", yue: "多謝" },
    { en: "please", es: "por favor", fr: "s’il te plaît", pt: "por favor", zh: "請", yue: "唔該" },
    { en: "stop", es: "para", fr: "stop", pt: "para", zh: "停", yue: "停" },
    { en: "i love you", es: "te quiero", fr: "je t’aime", pt: "te amo", zh: "我愛你", yue: "我愛你" },
    { en: "too loud", es: "muy fuerte", fr: "trop fort", pt: "muito alto", zh: "太吵", yue: "太吵" },
    { en: "yes", es: "sí", fr: "oui", pt: "sim", zh: "是", yue: "係" },
    { en: "no", es: "no", fr: "non", pt: "não", zh: "不", yue: "唔係" },
  ];

  const massSteps = [ /* same as before – unchanged */ ];
  const homeButtons = [ /* same as before – unchanged */ ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 p-6 pb-24">
      {/* Header – unchanged */}
      {/* Home screen – unchanged */}
      {/* Mass Schedule – unchanged */}

      {/* AAC – NOW TRANSLATES */}
      {screen === "aac" && (
        <div className="max-w-5xl mx-auto mt-12">
          {/* ← Home button now correctly at the top */}
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl text-black font-bold underline">
            ← {t("Home", "Inicio", "Accueil", "Início", "主页", "主頁")}
          </button>

          <div className="grid grid-cols-4 gap-6">
            {aacWords.map((w, i) => (
              <button
                key={i}
                className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition aspect-square flex flex-col items-center justify-center"
              >
                <img src={`/icons/${w.en}.png`} className="w-24 mb-4" alt={w.en} />
                <span className="text-xl font-bold text-black">
                  {w[lang] || w.en}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Calm Down – REAL BREATHING DRAGON */}
      {screen === "calm" && (
        <div className="text-center mt-20">
           <button onClick={() => setScreen("home")} className="mt-20 text-2xl text-black underline">
            ← {t("Home", "Inicio", "Accueil", "Início", "主页", "主頁")}
          </button>
          <img src="/icons/dragon.png" className={`w-64 mx-auto ${breathing ? "animate-pulse" : ""}`} alt="dragon" />
          <p className="text-5xl text-black mt-10 font-bold">
            {breathing ? t("Breathe in… 4", "Inhala… 4", "Inspire… 4", "Inspire… 4", "吸氣…4", "吸氣…4") : t("Tap to breathe", "Toca para respirar", "Touche pour respirer", "Toque para respirar", "點擊呼吸", "點擊呼吸")}
          </p>
          <button
            onClick={() => setBreathing(true)}
            className="mt-12 bg-white text-purple-600 px-16 py-8 rounded-full text-4xl shadow-2xl"
          >
            {t("Start Breathing", "Empezar", "Commencer", "Começar", "開始呼吸", "開始呼吸")}
          </button>
         
        </div>
      )}

      {/* Mass Story – 6-slide social story */}
      {screen === "story" && (
        <div className="max-w-2xl mx-auto text-center mt-12">
           <button onClick={() => setScreen("home")} className="mt-12 text-2xl text-black underline">
            ← {t("Home", "Inicio", "Accueil", "Início", "主页", "主頁")}
          </button>
          <img src={`/icons/slide${slide + 1}.png`} className="w-full rounded-3xl shadow-2xl" alt="story slide" />
          <div className="flex justify-center gap-4 mt-8">
            {[...Array(6)].map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} className={`w-4 h-4 rounded-full ${i === slide ? "bg-white" : "bg-white/50"}`} />
            ))}
          </div>
         
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-black mt-20 text-lg opacity-80">
        Made with love by Kelly Kroeper · UX Researcher
      </footer>
    </div>
  );
}
