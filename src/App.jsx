/* add saelumi art here */

// src/App.jsx
import React, { useState, useEffect } from "react";

export default function App() {
  const [lang, setLang] = useState("en");
  const [screen, setScreen] = useState("home");
  const [currentStep, setCurrentStep] = useState(0);

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
    { name: t("We arrive at church", "Llegamos a la iglesia", "Nous arrivons à l’église", "Chegamos à igreja", "我们到达教堂", "我們到達教堂"), icon: "church.png" },
    { name: t("Sign of the Cross", "Señal de la cruz", "Signe de croix", "Sinal da cruz", "画十字圣号", "畫十字聖號"), icon: "cross.png" },
    { name: t("Readings", "Lecturas", "Lectures", "Leituras", "读经", "讀經"), icon: "book.png" },
    { name: t("Homily", "Homilía", "Homélie", "Homilia", "讲道", "講道"), icon: "priest.png" },
    { name: t("Offertory", "Ofertorio", "Offertoire", "Ofertório", "奉献礼", "奉獻禮"), icon: "bread.png" },
    { name: t("Consecration", "Consagración", "Consécration", "Consagração", "成圣体", "成聖體"), icon: "chalice.png" },
    { name: t("Communion", "Comunión", "Communion", "Comunhão", "圣体圣事", "聖體聖事"), icon: "host.png" },
    { name: t("Go in peace!", "¡Vayan en paz!", "Allez en paix !", "Ide em paz!", "平安去吧！", "平安去吧！"), icon: "peace.png" },
  ];

  const homeButtons = [
    { screen: "schedule", label: t("Mass Schedule", "Horario de Misa", "Horaire de la messe", "Horário da Missa", "弥撒时间表", "彌撒時間表"), icon: "schedule.png" },
    { screen: "aac",      label: t("I Need…",      "Necesito…",        "J’ai besoin…",      "Eu preciso…",      "我需要…",      "我需要…"),      icon: "aac.png" },
    { screen: "firstThen",label: t("First → Then", "Primero → Después","D’abord → Ensuite","Primeiro → Depois","先 → 然后",    "先 → 然後"),    icon: "firstthen.png" },
    { screen: "calm",     label: t("Calm Down",    "Calmarse",         "Me calmer",         "Acalmar",          "冷静一下",     "冷靜一下"),     icon: "dragon.png" },
    { screen: "story",    label: t("Our Mass Story","Nuestra Historia de Misa","Notre histoire de messe","Nossa história da Missa","我们的弥撒故事","我們嘅彌撒故事"), icon: "story.png" },
  ];

  const aacWords = ["bathroom","water","break","quiet","hug","fidget","headphones","sit","stand","help","all done","more","snack","thank you","please","stop","i love you","too loud","yes","no"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 p-6 pb-24">
      {/* Header + Language Buttons */}
      <header className="text-center py-6">
        <h1 className="text-5xl font-bold text-white drop-shadow-2xl mb-6">
          Lumi’s Mass Helper
        </h1>
        <div className="flex flex-wrap justify-center gap-3">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-5 py-2 rounded-full text-lg font-medium transition ${
                lang === l.code ? "bg-white text-purple-700 shadow-lg" : "bg-white/40 text-white"
              }`}
            >
              {l.name}
            </button>
          ))}
        </div>
      </header>

      {/* Home Screen */}
      {screen === "home" && (
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {homeButtons.map((b) => (
            <button
              key={b.screen}
              onClick={() => { setScreen(b.screen); setCurrentStep(0); }}
              className="bg-white rounded-3xl p-10 shadow-2xl hover:scale-105 transition"
            >
              <img src={`/icons/${b.icon}`} className="w-32 mx-auto mb-6" alt="" />
              <p className="text-2xl font-bold text-gray-800">{b.label}</p>
            </button>
          ))}
        </div>
      )}

      {/* Mass Schedule Screen */}
      {screen === "schedule" && (
        <div className="max-w-3xl mx-auto text-center mt-12">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <img
              src={`/icons/${massSteps[currentStep].icon}`}
              className="w-48 mx-auto mb-8"
              alt=""
            />
            <h2 className="text-4xl font-bold mb-12">{massSteps[currentStep].name}</h2>
            {currentStep < massSteps.length - 1 ? (
              <button
                onClick={() => setCurrentStep((s) => s + 1)}
                className="bg-green-500 text-white px-16 py-8 rounded-full text-4xl shadow-lg"
              >
                {t("Next →", "Siguiente →", "Suivant →", "Próximo →", "下一个 →", "下一個 →")}
              </button>
            ) : (
              <button
                onClick={() => setScreen("home")}
                className="bg-purple-600 text-white px-16 py-8 rounded-full text-4xl shadow-lg"
              >
                {t("All Done!", "¡Terminamos!", "C’est fini !", "Tudo pronto!", "完成了！", "完成咗！")}
              </button>
            )}
          </div>
          <button
            onClick={() => setScreen("home")}
            className="mt-10 text-2xl text-white underline"
          >
            ← {t("Home", "Inicio", "Accueil", "Início", "主页", "主頁")}
          </button>
        </div>
      )}

      {/* AAC Board */}
      {screen === "aac" && (
        <div className="max-w-5xl mx-auto mt-12">
          <div className="grid grid-cols-4 gap-6">
            {aacWords.map((word) => (
              <button
                key={word}
                className="bg-white rounded-3xl p-8 shadow-xl hover:scale-105 transition aspect-square flex flex-col items-center justify-center"
              >
                <img src={`/icons/${word}.png`} className="w-24 mb-4" alt={word} />
                <span className="text-xl font-bold text-gray-800">
                  {t(word, word, word, word, word, word)}
                </span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setScreen("home")}
            className="mt-12 block mx-auto text-2xl text-white underline"
          >
            ← {t("Home", "Inicio", "Accueil", "Início", "主页", "主頁")}
          </button>
        </div>
      )}

      {/* Placeholder for First-Then / Calm / Story */}
      {["firstThen", "calm", "story"].includes(screen) && (
        <div className="text-center mt-32">
          <p className="text-4xl text-white mb-12">
            {t(
              "Draw your art and drop it in /icons — it appears automatically!",
              "¡Dibuja tu arte y aparecerá!",
              "Dessinez et ça apparaît !",
              "Desenhe e aparece!",
              "画图放进 /icons 就行！",
              "畫圖放 /icons 就得！"
            )}
          </p>
          <button
            onClick={() => setScreen("home")}
            className="text-3xl text-white underline"
          >
            ← {t("Home", "Inicio", "Accueil", "Início", "主页", "主頁")}
          </button>
        </div>
      )}

      <footer className="text-center text-white mt-20 text-lg opacity-80">
        Made with love by Kelly Kroeper · UX Researcher
      </footer>
    </div>
  );
}
