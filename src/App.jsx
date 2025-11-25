import React, { useState } from "react";

export default function App() {
  const [lang, setLang] = useState("en");
  const [screen, setScreen] = useState("home");
  const [currentStep, setCurrentStep] = useState(0);
  const [slide, setSlide] = useState(0);

  const steps = [
    "We arrive at church", "Sign of the Cross", "Readings", "Homily",
    "Offertory", "Consecration", "Communion", "Go in peace!"
  ];

  const icons = [
    "church.png", "cross.png", "book.png", "priest.png",
    "bread.png", "chalice.png", "host.png", "peace.png"
  ];

  const aacWords = ["bathroom","water","break","quiet","hug","fidget","headphones","sit","stand","help","all done","more","snack","thank you","please","stop","i love you","too loud","yes","no"];
  const filename = w => w==="all done"?"alldone":w==="thank you"?"thankyou":w==="i love you"?"iloveyou":w==="too loud"?"tooloud":w;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 p-6 pb-24">
      <style>{`.big img {min-width:220px;width:100%;height:auto;object-fit:contain}
        @media(min-width:640px){.big img{min-width:280px}}
        @media(min-width:1024px){.big img{min-width:340px}}`}</style>

      <h1 className="text-5xl font-bold text-white text-center my-8 drop-shadow-lg">Lumi's Mass Helper</h1>

      {/* HOME */}
      {screen === "home" && (
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
          {["schedule.png","aac.png","dragon.png","story.png"].map((icon, i) => (
            <button key={i} onClick={() => {setScreen(["schedule","aac","calm","story"][i]); setCurrentStep(0); setSlide(0);}}
              className="bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition flex flex-col items-center min-h-64">
              <img src={`/icons/${icon}`} className="big mb-6" alt="" />
              <p className="text-2xl font-bold text-black">{"Mass Schedule,I Need…,Calm Down,Our Mass Story".split(",")[i]}</p>
            </button>
          ))}
        </div>
      )}

      {/* MASS SCHEDULE */}
      {screen === "schedule" && (
        <div className="max-w-3xl mx-auto text-center">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold underline text-black">← Home</button>
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <img src={`/icons/${icons[currentStep]}`} className="big mx-auto mb-8" alt="" />
            <h2 className="text-4xl font-bold text-black mb-12">{steps[currentStep]}</h2>
            {currentStep < 7 ? (
              <button onClick={() => setCurrentStep(s => s + 1)}
                className="bg-green-500 text-white px-16 py-8 rounded-full text-4xl shadow-lg">Next →</button>
            ) : (
              <button onClick={() => setScreen("home")}
                className="bg-purple-600 text-white px-16 py-8 rounded-full text-4xl shadow-lg">All Done!</button>
            )}
          </div>
        </div>
      )}

        {/* AAC — HUGE PICS ON EVERY DEVICE */}
      {screen === "aac" && (
        <div className="max-w-5xl mx-auto px-4">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold underline text-black">
            ← Home
          </button>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
            {aacWords.map((w, i) => (
              <button
                key={i}
                className="bg-white rounded-3xl p-6 shadow-xl hover:scale-105 transition flex flex-col items-center justify-center aspect-square"
              >
                {/* THIS IS THE MAGIC LINE — forces images to be huge */}
                <img
                  src={`/icons/${filename(w)}.png`}
                  className="w-full max-w-none h-full object-contain px-4"
                  alt={w}
                />
                <span className="absolute bottom-4 text-lg font-bold text-black text-center px-2">
                  {w.replace("i love", "I love").replace("too loud", "too loud")}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* CALM DOWN */}
      {screen === "calm" && (
        <div className="text-center mt-20 min-h-screen flex flex-col items-center justify-center">
          <button onClick={() => setScreen("home")} className="absolute top-8 left-6 text-3xl font-bold underline text-black">← Home</button>
          <img src="/icons/dragon.gif" className="big mt-8" alt="Breathing dragon" />
          <p className="text-4xl font-bold text-white mt-12 drop-shadow-lg">Breathe in… hold… breathe out</p>
        </div>
      )}

      {/* STORY */}
      {screen === "story" && (
        <div className="max-w-2xl mx-auto text-center">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold underline text-black">← Home</button>
          <img src={`/icons/slide${slide + 1}.png`} className="big rounded-3xl shadow-2xl" alt="Story" />
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
