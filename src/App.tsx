import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Course from './components/Course/Course'
import Admission from './components/Admission/Admission'
import Director from './components/Director/Director'
import ClosingCta from './components/ClosingCta/ClosingCta'
import VideoSection from './components/VideoSection/VideoSection'
import ConsultCta from './components/ConsultCta/ConsultCta'
import Channels from './components/Channels/Channels'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <About />
      <Course />
      <Admission />
      <Director />
      <ClosingCta />
      <VideoSection />
      <ConsultCta />
      <Channels />
      <Footer />
    </div>
  )
}

export default App
