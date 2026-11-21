import React, { useEffect } from 'react'
import { RouterProvider, useRoute } from './router.jsx'
import { Header, Footer } from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Management from './pages/Management.jsx'
import Gallery from './pages/Gallery.jsx'
import Ammaveedu from './pages/Ammaveedu.jsx'
import Contact from './pages/Contact.jsx'
import Donations from './pages/Donations.jsx'

const routes = {
  '/': { component: Home, title: 'Home', description: 'Learn about Heera World Foundation and Motherhood Home (Ammaveedu), a senior care initiative in Kerala.' },
  '/about-us': { component: About, title: 'About us', description: 'Meet Heera World Foundation, our mission, and our approach to dignity and care for older people.' },
  '/management': { component: Management, title: 'Our people', description: 'Meet the team and leadership of Heera World Foundation.' },
  '/gallery': { component: Gallery, title: 'Gallery', description: 'Photos from the work and community activities of Heera World Foundation.' },
  '/ammaveedu': { component: Ammaveedu, title: 'Ammaveedu', description: 'Discover Motherhood Home, a Heera World Foundation initiative supporting older people.' },
  '/contact-us': { component: Contact, title: 'Contact', description: 'Contact Heera World Foundation about volunteering, partnerships and supporting Motherhood Home.' },
  '/donations': { component: Donations, title: 'Donations', description: 'Find bank transfer details and information about supporting Heera World Foundation.' },
}

function Pages() {
  const { path } = useRoute()
  const route = routes[path]
  const Page = route?.component

  useEffect(() => {
    document.title = (route?.title || 'Page not found') + ' | Heera World Foundation'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', route?.description || 'Heera World Foundation — care, dignity and community service.')
    window.scrollTo(0, 0)
  }, [path])

  if (!Page) return (
    <section className="section-pad container not-found">
      <span className="eyebrow">404 / Page not found</span>
      <h1>We couldn't find that page.</h1>
      <p>Please use the navigation to find what you're looking for.</p>
      <a className="btn btn-green" href="/">Return home</a>
    </section>
  )

  return <Page />
}

export default function App() {
  return (
    <RouterProvider>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex="-1"><Pages /></main>
      <Footer />
    </RouterProvider>
  )
}
