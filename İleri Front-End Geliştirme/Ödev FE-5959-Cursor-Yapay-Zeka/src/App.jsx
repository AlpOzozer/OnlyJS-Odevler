import SiteNavbar from './components/SiteNavbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import SiteFooter from './components/SiteFooter.jsx'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <SiteNavbar />

      <main className="flex-grow-1">
        <Hero />
        <Features />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
