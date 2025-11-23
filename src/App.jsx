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
    { name: t("We arrive at church", "Llegamos a la iglesia", "Nous arrivons à l'église", "Chegamos à igreja", "我们到达教堂", "我們到達教堂"), icon: "church.png" },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 p-6 pb-24">
     <style>{`
      .force-big img { 
        min-width: 280px !important; 
        min-height: 280px !important; 
        width: auto !important; 
        height: auto !important; 
        object-fit: contain !important; 
      }
      @media (min-width: 640px) { 
        .force-big img { 
          min-width: 340px !important; 
          min-height: 340px !important; 
        } 
      }
    `}</style>
      {/* Header */}
      <header className="text-center py-6">
        <h1 className="text-5xl font-bold text-black drop-shadow-2xl mb-6">Lumi's Mass Helper</h1>
        <div className="flex flex-wrap justify-center gap-3">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`px-5 py-2 rounded-full text-lg font-medium transition ${
                lang === l.code ? "bg-white text-purple-700 shadow-lg" : "bg-white/40 text-black"
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
              onClick={() => {
                setScreen(b.screen);
                setCurrentStep(0);
                setSlide(0);
              }}
              className="bg-white rounded-3xl p-10 shadow-2xl hover:scale-105 transition"
            >
         <img src={`/icons/${b.icon}`} className="w-64 h-64 max-w-full object-contain mx-auto mb-6" alt="" />
              <p className="text-2xl font-bold text-black">{b.label}</p>
            </button>
          ))}
        </div>
      )}

      {/* Mass Schedule Screen */}
      {screen === "schedule" && (
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold text-black underline">
            ← {t("Home", "Inicio", "Accueil", "Início", "主页", "主頁")}
          </button>
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
     <img src={`/icons/${massSteps[currentStep].icon}`} className="w-80 h-80 max-w-lg object-contain mx-auto mb-8" alt="" />
            <h2 className="text-4xl font-bold text-black mb-12">{massSteps[currentStep].name}</h2>
            {currentStep < massSteps.length - 1 ? (
              <button
                onClick={() => setCurrentStep((s) => s + 1)}
                className="bg-green-500 text-black px-16 py-8 rounded-full text-4xl shadow-lg"
              >
                {t("Next →", "Siguiente →", "Suivant →", "Próximo →", "下一个 →", "下一個 →")}
              </button>
            ) : (
              <button
                onClick={() => setScreen("home")}
                className="bg-purple-600 text-black px-16 py-8 rounded-full text-4xl shadow-lg"
              >
                {t("All Done!", "¡Terminamos!", "C'est fini !", "Tudo pronto!", "完成了！", "完成咗！")}
              </button>
            )}
          </div>
        </div>
      )}

      {/* AAC Screen */}
{/* AAC Screen */}
{screen === "aac" && (
  <div className="max-w-5xl mx-auto mt-12">
    <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold text-black underline">
      ← {t("Home", "Inicio", "Accueil", "Início", "主页", "主頁")}
    </button>

    <div className="grid grid-cols-4 gap-6">
      {aacWords.map((w, i) => {
        const filename = 
          w.en === "all done" ? "alldone" :
          w.en === "thank you" ? "thankyou" :
          w.en === "i love you" ? "iloveyou" :
          w.en === "too loud" ? "tooloud" :
          w.en;

        return (
          <button
            key={i}
            className="bg-white rounded-3xl p-6 shadow-xl hover:scale-105 transition flex flex-col items-center justify-between min-h-48"
          >
            <img
              src={`/icons/${filename}.png`}
              className="force-big w-64 h-64 object-contain mb-3"
              alt={w.en}
            />
            <span className="text-xl font-bold text-black mt-auto">
              {w[lang] || w.en}
            </span>
          </button>
        );
      })}
    </div>
  </div>
)}

      {/* Calm Down Screen */}
      {screen === "calm" && (
        <div className="text-center mt-20">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold text-black underline">
            ← {t("Home", "Inicio", "Accueil", "Início", "主页", "主頁")}
          </button>
         <img src="/icons/dragon.gif" className="w-72 h-72 max-w-md object-contain mx-auto mt-8" alt="Breathing dragon" />
          <p className="text-5xl font-bold text-black mt-10">
            {t("Breathe in… hold… breathe out", "Inhala… retén… exhala", "Inspire… retiens… expire", "Inspire… segure… expire", "吸气…屏住…呼气", "吸氣…屏住…呼氣")}
          </p>
        </div>
      )}

      {/* Mass Story Screen need to make and add images for this from saelumi  */}
      {screen === "story" && (
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <button onClick={() => setScreen("home")} className="mb-8 text-3xl font-bold text-black underline">
            ← {t("Home", "Inicio", "Accueil", "Início", "主页", "主頁")}
          </button>
          <img src={`/icons/${b.icon}`} className="huge-icon" alt="" />
         <img 
  src={`/icons/${massSteps[currentStep].icon}`} 
  className="w-96 h-96 object-contain mx-auto mb-8" 
  alt="" 
/>
          <div className="flex justify-center gap-4 mt-8">
            {[0,1,2,3,4,5].map((i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`w-4 h-4 rounded-full ${i === slide ? "bg-white" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      )}

      <footer className="text-center text-black mt-20 text-lg opacity-80">
        Made with love by Kelly Kroeper · UX Researcher
      </footer>
    </div>
  );
}
