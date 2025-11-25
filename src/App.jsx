/* try 12394953 */
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

  const homeButtons = [
    { screen: "schedule", label: t("Mass Schedule", "Horario de Misa"), icon: "schedule.png" },
    { screen: "aac", label: t("I Need…", "Necesito…"), icon: "aac.png" },
    { screen: "calm", label: t("Calm Down", "Calmarse"), icon: "dragon.png" },
    { screen: "story", label: t("Our Mass Story", "Nuestra Historia de Misa"), icon: "story.png" },
  ];

  const aacWords = [
    { en: "bathroom" }, { en: "water" }, { en: "break" }, { en: "quiet" },
    { en: "hug" }, { en: "fidget" }, { en: "headphones" }, { en: "sit" },
    { en: "stand" }, { en: "help" }, { en: "all done" }, { en: "more" },
    { en: "snack" }, { en: "thank you" }, { en: "please" }, { en: "stop" },
    { en: "i love you" }, { en: "too loud" }, { en: "yes" }, { en: "no" }
  ];

  const filename = w => w === "all done" ? "alldone" : w === "thank you" ? "thankyou" : w === "i love you" ? "iloveyou" : w === "too loud" ? "tooloud" : w;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 p-6">
      <style>{`.big img { min-width:220px; width:100%; height:auto; object-fit:contain; }
        @media(min-width:640px){.big img{min-width:280px}}
        @media(min-width:1024px){.big img{min-width:340px}}`}</style>

      <h1 className="text-5xl font-bold text-white text-center my-8 drop-shadow-lg">Lumi's Mass Helper</h1>

      {/* HOME */}
      {screen === "home" && (
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {homeButtons.map(b => (
            <button key={b.screen} onClick={() => setScreen(b.screen)}
              className="bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition flex flex-col items-center">
              <img src={`/icons/${b.icon}`} className="big mb-6" alt="" />
              <p className="text-2xl font-bold text-black">{b.label}</p>
            </button>
          ))}
        </div>
      )}

      {/* AAC */}
      {screen === "aac" && (
        <div className="max-w-5xl mx-auto">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold underline">← Home</button>
          <div className="grid grid-cols-4 gap-6">
            {aacWords.map((w, i) => (
              <button key={i} className="bg-white rounded-3xl p-6 shadow-xl hover:scale-105 transition flex flex-col items-center min-h-48">
                <img src={`/icons/${filename(w.en)}.png`} className="big mb-4" alt={w.en} />
                <span className="text-xl font-bold text-black">{w.en}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
