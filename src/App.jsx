/* add saelumi art here */

// src/App.jsx
import React, { useState, useEffect } from 'react'

export default function App() {
  const [lang, setLang] = useState('en')
  const [screen, setScreen] = useState('home')
  const [currentStep, setCurrentStep] = useState(0)
  const [stats, setStats] = useState({})

  useEffect(() => {
    const saved = localStorage.getItem('lumiStats')
    if (saved) setStats(JSON.parse(saved))
  }, [])

  const track = (action) => {
    const newStats = { ...stats, [action]: (stats[action] || 0) + 1 }
    setStats(newStats)
    localStorage.setItem('lumiStats', JSON.stringify(newStats))
  }

  const t = (en, es = en, fr = en, pt = en, zh = en, yue = en) => {
    const map = { en, es, fr, pt, zh, yue }
    return map[lang] || en
  }

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'pt', name: 'Português' },
    { code: 'zh', name: '简体中文' },
    { code: 'yue', name: '廣東話' },
  ]
  
