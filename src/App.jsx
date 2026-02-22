import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import ECom from '@/pages/ECom'
import Home2Home from '@/pages/Home2Home'
import NaturaCorp from '@/pages/NaturaCorp'
import JeuVideo from '@/pages/JeuVideo'
import GentleMates from '@/pages/GentleMates'
import Merci from '@/pages/Merci'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/e-com" element={<ECom />} />
        <Route path="/projets/home2home" element={<Home2Home />} />
        <Route path="/projets/naturacorp" element={<NaturaCorp />} />
        <Route path="/passions/jeux-video" element={<JeuVideo />} />
        <Route path="/passions/gentle-mates" element={<GentleMates />} />
        <Route path="/merci" element={<Merci />} />
      </Routes>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
