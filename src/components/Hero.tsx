import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

interface HeroProps {
  onHeartClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onHeartClick }) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const [showHearts, setShowHearts] = useState<boolean>(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // const formatTime = (date: Date): string => {
  //   return date.toLocaleTimeString('en-US', {
  //     hour12: true,
  //     hour: '2-digit',
  //     minute: '2-digit',
  //     second: '2-digit'
  //   })
  // }

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const romanticQuotes = [
    "You are the sunshine that brightens my darkest days",
    "In your eyes, I found my home",
    "Every moment with you is a gift I treasure",
    "You make ordinary moments feel magical",
    "My heart beats for you, today and always"
  ]

  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % romanticQuotes.length)
    }, 5000)
    return () => clearInterval(quoteTimer)
  }, [])

  // Birthday confetti burst on component mount
  useEffect(() => {
    const birthdayConfetti = () => {
      // Initial burst
      confetti({
        particleCount: 150,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#ff8e8e', '#ffa8a8', '#ffb3ba', '#ffc0cb', '#ffd1dc', '#ff69b4', '#ff1493']
      })
      
      // Side bursts
      setTimeout(() => {
        confetti({
          particleCount: 75,
          angle: 45,
          spread: 50,
          origin: { x: 0.1, y: 0.7 },
          colors: ['#ff6b6b', '#ff8e8e', '#ffa8a8', '#ffb3ba', '#ffc0cb', '#ffd1dc']
        })
      }, 300)
      
      setTimeout(() => {
        confetti({
          particleCount: 75,
          angle: 135,
          spread: 50,
          origin: { x: 0.9, y: 0.7 },
          colors: ['#ff6b6b', '#ff8e8e', '#ffa8a8', '#ffb3ba', '#ffc0cb', '#ffd1dc']
        })
      }, 600)
    }

    // Trigger confetti after a short delay when component mounts
    const timer = setTimeout(birthdayConfetti, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Confetti functions
  const triggerConfetti = () => {
    // Burst confetti from center
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6b6b', '#ff8e8e', '#ffa8a8', '#ffb3ba', '#ffc0cb', '#ffd1dc']
    })
    
    // Additional burst after delay
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0.2, y: 0.6 },
        colors: ['#ff6b6b', '#ff8e8e', '#ffa8a8', '#ffb3ba', '#ffc0cb', '#ffd1dc']
      })
    }, 250)
    
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 0.8, y: 0.6 },
        colors: ['#ff6b6b', '#ff8e8e', '#ffa8a8', '#ffb3ba', '#ffc0cb', '#ffd1dc']
      })
    }, 400)
  }

  const createHeart = (): void => {
    console.log('💕 Heart button clicked!')
    debugger; // Breakpoint here to see heart click
    triggerConfetti() // Add confetti to heart click
  }

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  const heartVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    exit: {
      scale: 0,
      rotate: 180,
      y: -100,
      opacity: 0,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  }

  const floatingHeartVariants = {
    animate: {
      y: [-20, -40, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.section 
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Video */}
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/uhd_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="hero-title"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={triggerConfetti}
          style={{ cursor: 'pointer' }}
        >
          Happy Birthday, My Love! 💖
        </motion.h1>
        <motion.div
          className="hero-subtitle"
          variants={itemVariants}
          key={currentTime.getTime()}
          onClick={triggerConfetti}
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          9th oct 2025
        </motion.div>
        <motion.div 
          className="quote-container"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.p 
            className="romantic-quote"
            key={currentQuote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            "{romanticQuotes[currentQuote]}"
          </motion.p>
        </motion.div>
        <motion.button 
          className="love-button" 
          onClick={createHeart}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 8px 25px rgba(255, 107, 107, 0.8)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Send Love 💕
        </motion.button>
      </motion.div>
      
      {/* Floating Hearts Animation */}
      <AnimatePresence>
        {showHearts && (
          <motion.div 
            className="hearts-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(25)].map((_, i) => (
              <motion.div 
                key={i} 
                className="floating-heart" 
                style={{
                  left: `${Math.random() * 100}%`,
                }}
                variants={heartVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  delay: Math.random() * 0.5,
                  duration: 2 + Math.random() * 2
                }}
              >
                {['💕', '💖', '💗', '💝', '💘'][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="hero-decoration">
        <motion.div 
          className="floating-heart-large"
          variants={floatingHeartVariants}
          animate="animate"
        >
          💖
        </motion.div>
        <motion.div 
          className="floating-heart-medium"
          variants={floatingHeartVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          💕
        </motion.div>
        <motion.div 
          className="floating-heart-small"
          variants={floatingHeartVariants}
          animate="animate"
          transition={{ delay: 4 }}
        >
          💗
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero