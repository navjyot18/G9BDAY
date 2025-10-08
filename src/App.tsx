import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

// Import components
import { 
  Hero, 
  LoveMessage, 
  Memories, 
  PhotoGallery, 
  Countdown, 
  Footer,
  ScrollTriggered,
  PinkGlassBackground
} from './components'

const App: React.FC = () => {
  const [showMusicSection, setShowMusicSection] = useState<boolean>(false)

  useEffect(() => {
    console.log('🎂 App component mounted!')
    debugger; // Breakpoint here to see app initialization
    
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    })
    
    console.log('✨ AOS initialized successfully')
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const handleHeartClick = () => {
    // This function can be used to trigger additional effects
    console.log('Hearts clicked! 💕')
  }

  const handleMusicButtonClick = (): void => {
    console.log('🎵 Music button clicked!')
    debugger; // Breakpoint here to see button click
    
    setShowMusicSection(true)
    console.log('🎶 showMusicSection set to true')
    
    // Scroll to the music section after a short delay
    setTimeout(() => {
      const musicSection = document.querySelector('.scroll-triggered-section')
      if (musicSection) {
        console.log('📍 Scrolling to music section')
        musicSection.scrollIntoView({ behavior: 'smooth' })
      } else {
        console.warn('⚠️ Music section not found!')
      }
    }, 100)
  }

  return (
    <motion.div 
      className="app"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Hero onHeartClick={handleHeartClick} />
      <LoveMessage />
      
      {/* Birthday Music Button */}
      {!showMusicSection && (
        <motion.div 
          className="birthday-music-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <div className="birthday-music-container">
            <h2 className="birthday-music-title">🎵 Special Surprise 🎵</h2>
            
            <motion.button 
              className="birthday-music-button"
              onClick={handleMusicButtonClick}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 8px 25px rgba(255, 107, 107, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Click Here! 🎶
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Music Section - Only shows when button is clicked */}
      {showMusicSection && <PinkGlassBackground ><ScrollTriggered /></PinkGlassBackground>}
      
      
      <Footer />
    </motion.div>
  )
}

export default App