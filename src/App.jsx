import HeroAvatar from './components/HeroAvatar'
import BioHeader from './components/BioHeader'
import SocialStrip from './components/SocialStrip'
import ResumeTimeline from './components/ResumeTimeline'
import PortfolioGallery from './components/PortfolioGallery'
import ContactSection from './components/ContactSection'
import GlobalFooter from './components/GlobalFooter'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroAvatar />
      <BioHeader />
      <SocialStrip />
      <ResumeTimeline />
      <PortfolioGallery />
      <ContactSection />
      <GlobalFooter />
    </div>
  )
}
