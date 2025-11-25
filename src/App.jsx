import React, { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("en");
  const [screen, setScreen] = useState("home");
  const [currentStep, setCurrentStep] = useState(0);
  const [slide, setSlide] = useState(0);

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

  const massSteps = [
    { en: "We arrive at church", icon: "church.png" },
    { en: "Sign of the Cross", icon: "cross.png" },
    { en: "Readings", icon: "book.png" },
    { en: "Homily", icon: "priest.png" },
    { en: "Offertory", icon: "bread.png" },
    { en: "Consecration", icon: "chalice.png" },
    { en: "Communion", icon: "host.png" },
    { en: "Go in peace!", icon: "peace.png" },
  ];

  const homeButtons = [
    { screen: "schedule", label: t("Mass Schedule", "Horario de Misa", "Horaire de la messe", "Horário da Missa", "弥撒时间表", "彌撒時間表"), icon: "schedule.png" },
    { screen: "aac", label: t("I Need…", "Necesito…", "J'ai besoin…", "Eu preciso…", "我需要…", "我需要…"), icon: "aac.png" },
    { screen: "calm", label: t("Calm Down", "Calmarse", "Me calmer", "Acalmar", "冷静一下", "冷靜一下"), icon: "dragon.png" },
    { screen: "story", label: t("Our Mass Story", "Nuestra Historia de Misa", "Notre histoire de messe", "Nossa história da Missa", "我们的弥撒故事", "我們嘅彌撒故事"), icon: "story.png" },
  ];

  const aacWords = [
    { en: "bathroom", es: "baño", fr: "toilettes", pt: "banheiro", zh: "厕所", yue: "廁所" },
    { en: "water", es: "agua", fr: "eau", pt: "água", zh: "水", yue: "水" },
    { en: "break", es: "descanso", fr: "pause", pt: "pausa", zh: "休息", yue: "休息" },
    { en: "quiet", es: "silencio", fr: "calme", pt: "silêncio", zh: "安静", yue: "安靜" },
    { en: "hug", es: "abrazo", fr: "câlin", pt: "abraço", zh: "抱抱", yue: "錫錫" },
    { en: "fidget", es: "juguete", fr: "jouet", pt: "brinquedo", zh: "小玩具", yue: "小玩具" },
    { en: "headphones", es: "auriculares", fr: "casque", pt: "fones", zh: "耳機", yue: "耳機" },
    { en: "sit", es: "sentarse", fr: "s'asseoir", pt: "sentar", zh: "坐下", yue: "坐低" },
    { en: "stand", es: "pararse", fr: "se lever", pt: "levantar", zh: "站起來", yue: "企起身" },
    { en: "help", es: "ayuda", fr: "aide", pt: "ajuda", zh: "幫忙", yue: "幫手" },
    { en: "all done", es: "terminé", fr: "fini", pt: "pronto", zh: "完成了", yue: "完成咗" },
    { en: "more", es: "más", fr: "encore", pt: "mais", zh: "更多", yue: "多啲" },
    { en: "snack", es: "merienda", fr: "goûter", pt: "lanche", zh: "零食", yue: "小食" },
    { en: "thank you", es: "gracias", fr: "merci", pt: "obrigado", zh: "謝謝", yue: "多謝" },
    { en: "please", es: "por favor", fr: "s'il te plaît", pt: "por favor", zh: "請", yue: "唔該" },
    { en: "stop", es: "para", fr: "stop", pt: "para", zh: "停", yue: "停" },
    { en: "i love you", es: "te quiero", fr: "je t'aime", pt: "te amo", zh: "我愛你", yue: "我愛你" },
    { en: "too loud", es: "muy fuerte", fr: "trop fort", pt: "muito alto", zh: "太吵", yue: "太吵" },
    { en: "yes", es: "sí", fr: "oui", pt: "sim", zh: "是", yue: "係" },
    { en: "no", es: "no", fr: "non", pt: "não", zh: "不", yue: "唔係" },
  ];

  const filename = (word) =>
    word === "all done" ? "alldone" :
    word === "thank you" ? "thankyou" :
    word === "i love you" ? "iloveyou" :
    word === "too loud" ? "tooloud" : word;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 p-6 pb-24">
      <style>{`
        .big img { min-width: 220px; width: 100%; height: auto; object-fit: contain; }
        @media (min-width: 640px) { .big img { min-width: 280px; } }
        @media (min-width: 1024px) { .big img { min-width: 340px; } }
        .home-btn { min-height: 240px; }
        @media (max-width: 640px) { .home-btn { min-height: 200px; } }
      `}</style>

      {/* Header + Language Buttons */}
      <header className="text-center py-6">
        <h1 className="text-5xl font-bold text-white drop-shadow-2xl mb-6">Lumi's Mass Helper</h1>
        <div className="flex flex-wrap justify-center gap-3">
          {languages.map(l => (
            <button key={l.code} onClick={() => setLang(l.code)}
              className={`px-5 py-2 rounded-full text-lg font-medium transition ${lang === l.code ? "bg-white text-purple-700 shadow-lg" : "bg-white/40 text-white"}`}>
              {l.name}
            </button>
          ))}
        </div>
      </header>

      {/* Home */}
      {screen === "home" && (
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              {/* Home Screen */}
      {screen === "home" && (
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {homeButtons.map(b => (
            <button key={b.screen} onClick={() => { setScreen(b.screen); setCurrentStep(0); setSlide(0); }}
              className="bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition home-btn flex flex-col items-center justify-center">
              <img src={`/icons/${b.icon}`} className="big mb-6" alt="" />
              <p className="text-2xl font-bold text-black text-center">{b.label}</p>
            </button>
          ))}
        </div>
      )}

      {/* Mass Schedule */}
      {screen === "schedule" && (
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold text-black underline">
            ← {t("Home")}
          </button>
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <img src={`/icons/${massSteps[currentStep].icon}`} className="big mx-auto mb-8" alt="" />
            <h2 className="text-4xl font-bold text-black mb-12">{t(massSteps[currentStep].en)}</h2>
            {currentStep < massSteps.length - 1 ? (
              <button onClick={() => setCurrentStep(s => s + 1)}
                className="bg-green-500 text-white px-16 py-8 rounded-full text-4xl shadow-lg">
                {t("Next →")}
              </button>
            ) : (
              <button onClick={() => setScreen("home")}
                className="bg-purple-600 text-white px-16 py-8 rounded-full text-4xl shadow-lg">
                {t("All Done!")}
              </button>
            )}
          </div>
        </div>
      )}

      {/* AAC */}
      {screen === "aac" && (
        <div className="max-w-5xl mx-auto mt-12">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold text-black underline">
            ← {t("Home")}
          </button>
          <div className="grid grid-cols-4 gap-6">
            {aacWords.map((w, i) => (
              <button key={i}
                className="bg-white rounded-3xl p-6 shadow-xl hover:scale-105 transition flex flex-col items-center justify-between min-h-48">
                <img src={`/icons/${filename(w.en)}.png`} className="big mb-4" alt={w.en} />
                <span className="text-xl font-bold text-black text-center px-2">
                  {w[lang] || w.en}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Calm Down */}
      {screen === "calm" && (
        <div className="text-center mt-20 min-h-screen flex flex-col items-center justify-center">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold text-black underline absolute top-8 left-4">
            ← {t("Home")}
          </button>
          <img src="/icons/dragon.gif" className="big mt-8" alt="Breathing dragon" />
          <p className="text-4xl font-bold text-white mt-12">
            {t("Breathe in… hold… breathe out", "Inhala… retén… exhala", "Inspire… retiens… expire", "Inspire… segure… expire", "吸气…屏住…呼气", "吸氣…屏住…呼氣")}
          </p>
        </div>
      )}

      {/* Story */}
      {screen === "story" && (
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold text-black underline">
            ← {t("Home")}
          </button>
          <img src={`/icons/slide${slide + 1}.png`} className="big rounded-3xl shadow-2xl mx-auto" alt="Story" />
          <div className="flex justify-center gap-4 mt-8">
            {[0,1,2,3,4,5].map(i => (
              <button key={i} onClick={() => setSlide(i)}
                className={`w-4 h-4 rounded-full transition ${i === slide ? "bg-white" : "bg-white/50"}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
