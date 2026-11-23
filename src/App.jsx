import React from 'react'
import { RouterProvider, useRoute } from './router.jsx'
import { Header, Footer } from './components/Layout.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Management from './pages/Management.jsx'
import Gallery from './pages/Gallery.jsx'
import Ammaveedu from './pages/Ammaveedu.jsx'
import Contact from './pages/Contact.jsx'
import Donations from './pages/Donations.jsx'

const ROUTES = {
  '/': Home,
  '/about-us': About,
  '/management': Management,
  '/gallery': Gallery,
  '/ammaveedu': Ammaveedu,
  '/contact-us': Contact,
  '/donations': Donations,
}

function Pages() {
  const { path } = useRoute()
  const Page = ROUTES[path] || Home
  return <Page />
}

export default function App() {
  return (
    <RouterProvider>
      <Header />
      <main><Pages /></main>
      <Footer />
      <WhatsAppButton />
    </RouterProvider>
  )
}
