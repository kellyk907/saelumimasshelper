/* ADD SAELUMI ART HERE!! */

import React, { useState } from 'react'

function App() {
  const [lang, setLang] = useState('en')  // Toggle English/Spanish

  const schedule = [
    { icon: 'church.png', label: lang === 'en' ? 'Mass' : 'Misa' },
    { icon: 'snack.png', label: lang === 'en' ? 'Snack' : 'Merienda' },
    { icon: 'play.png', label: lang === 'en' ? 'Play' : 'Jugar' },
    { icon: 'home.png', label: lang === 'en' ? 'Home' : 'Casa' }
  ]

  const sensoryTools = [
    { icon: 'fidget.png', label: lang === 'en' ? 'Fidget' : 'Juguete Sensorial' },
    { icon: 'headphones.png', label: lang === 'en' ? 'Quiet' : 'Silencio' },
    { icon: 'tent.png', label: lang === 'en' ? 'Calm Corner' : 'Esquina Calma' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-lumi-pink to-lumi-blue p-4 font-sans">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white">Lumi’s Mass Helper</h1>
        <button 
          onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
          className="mt-2 px-4 py-2 bg-white rounded-full text-lumi-blue font-medium"
        >
          {lang === 'en' ? 'Español' : 'English'}
        </button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Visual Schedule */}
        <section className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">{lang === 'en' ? 'Visual Schedule' : 'Horario Visual'}</h2>
          <div className="grid grid-cols-2 gap-4">
            {schedule.map((item, i) => (
              <button key={i} className="p-4 bg-lumi-blue rounded-lg text-white flex flex-col items-center">
                <img src={`/icons/${item.icon}`} alt={item.label} className="w-12 h-12 mb-2" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Sensory Tools */}
        <section className="bg-white rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">{lang === 'en' ? 'Sensory Tools' : 'Herramientas Sensoriales'}</h2>
          <div className="space-y-4">
            {sensoryTools.map((tool, i) => (
              <button key={i} className="w-full p-4 bg-lumi-pink rounded-lg text-white flex items-center">
                <img src={`/icons/${tool.icon}`} alt={tool.label} className="w-8 h-8 mr-3" />
                {tool.label}
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-8 text-center text-white text-sm">
        Built with ❤️ by Kelly Kroeper – UX Researcher
      </footer>
    </div>
  )
}

export default App
