import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Stack from './components/Stack'
import Work from './components/Work'
import Services from './components/Services'
import Process from './components/Process'
import Reviews from './components/Reviews'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <Nav theme={theme} setTheme={setTheme} />
      <Hero />
      <Stack />
      <Work />
      <Services />
      <Process />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}
