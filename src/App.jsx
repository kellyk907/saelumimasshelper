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
    { screen: "schedule", label: t("Mass Schedule"), icon: "schedule.png" },
    { screen: "aac", label: t("I Need…"), icon: "aac.png" },
    { screen: "calm", label: t("Calm Down"), icon: "dragon.png" },
    { screen: "story", label: t("Our Mass Story"), icon: "story.png" },
  ];

  const massSteps = [
    "church.png", "cross.png", "book.png", "priest.png",
    "bread.png", "chalice.png", "host.png", "peace.png"
  ];

  const aacWords = [
    "bathroom","water","break","quiet","hug","fidget","headphones","sit",
    "stand","help","all done","more","snack","thank you","please","stop",
    "i love you","too loud","yes","no"
  ];

  const filename = w => w==="all done"?"alldone":w==="thank you"?"thankyou":w==="i love you"?"iloveyou":w==="too loud"?"tooloud":w;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 p-6 pb-24">
      <style>{`.big img {min-width:220px;width:100%;height:auto;object-fit:contain}
        @media(min-width:640px){.big img{min-width:280px}}
        @media(min-width:1024px){.big img{min-width:340px}}`}</style>

      <h1 className="text-5xl font-bold text-black text-center my-8 drop-shadow-lg">
        Lumi's Mass Helper
      </h1>

      {/* HOME */}
      {screen === "home" && (
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {homeButtons.map(b => (
            <button key={b.screen} onClick={() => {setScreen(b.screen); setCurrentStep(0); setSlide(0);}}
              className="bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition flex flex-col items-center min-h-64">
              <img src={`/icons/${b.icon}`} className="big mb-6" alt="" />
              <p className="text-2xl font-bold text-black">{b.label}</p>
            </button>
          ))}
        </div>
      )}

      {/* MASS SCHEDULE */}
      {screen === "schedule" && (
        <div className="max-w-3xl mx-auto text-center">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold underline">
            ← Home
          </button>
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <img src={`/icons/${massSteps[currentStep]}`} className="big mx-auto mb-8" alt="" />
            {currentStep < massSteps.length - 1 ? (
              <button onClick={() => setCurrentStep(s => s + 1)}
                className="bg-green-500 text-black px-16 py-8 rounded-full text-4xl shadow-lg">
                Next →
              </button>
            ) : (
              <button onClick={() => setScreen("home")}
                className="bg-purple-600 text-black px-16 py-8 rounded-full text-4xl shadow-lg">
                All Done!
              </button>
            )}
          </div>
        </div>
      )}

      {/* AAC */}
      {screen === "aac" && (
        <div className="max-w-5xl mx-auto">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold underline">
            ← Home
          </button>
          <div className="grid grid-cols-4 gap-6">
            {aacWords.map((w, i) => (
              <button key={i} className="bg-white rounded-3xl p-6 shadow-xl hover:scale-105 transition flex flex-col items-center min-h-48">
                <img src={`/icons/${filename(w)}.png`} className="big mb-4" alt={w} />
                <span className="text-xl font-bold text-black">{w}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* CALM DOWN */}
      {screen === "calm" && (
        <div className="text-center mt-20">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold underline">
            ← Home
          </button>
          <img src="/icons/dragon.gif" className="big mx-auto" alt="Breathe" />
          <p className="text-4xl font-bold text-black mt-8">Breathe in… hold… breathe out</p>
        </div>
      )}

      {/* STORY */}
      {screen === "story" && (
        <div className="max-w-2xl mx-auto text-center">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold underline">
            ← Home
          </button>
          <img src={`/icons/slide${slide + 1}.png`} className="big rounded-3xl shadow-2xl mx-auto" alt="Story" />
          <div className="flex justify-center gap-4 mt-8">
            {[0,1,2,3,4,5].map(i => (
              <button key={i} onClick={() => setSlide(i)}
                className={`w-4 h-4 rounded-full ${i === slide ? "bg-white" : "bg-white/50"}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
