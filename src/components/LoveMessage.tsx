import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const LoveMessage: React.FC = () => {
  const [currentLine, setCurrentLine] = useState<number>(0)
  const [isTyping, setIsTyping] = useState<boolean>(true)

  const letterContent = [
    "My Dearest barbie,",
    "As I sit here writing this letter on three days before your special day, my heart is overflowing with emotions that words can barely capture. Today marks another year of your incredible journey.",
    "This birthday is still special for me, even though you are miles away. I just want to let you know that you will always be in my dreams, even after thousands of arguments. You are the reason I believe in magic, the reason I go to sleep smiling and wake up with a smile.",
    "Every day with you feels like a celebration(where rollercoaster is silent). ",
    "I am pretty sure that this birthday will bring you a sexy job. Even though I get mad at you multiple times regarding studies, that is purely because I care for you & I love you, and I can not see you struggling.",
    "May your dreams soar higher than ever, and may you always know how incredibly special you are.",
    "I promise to love you through every season and support you in every dream. You are my greatest adventure, my favorite story, and my forever home.",
    "Happy Birthday, my love. Today and always, you are the most gaandfaad thing ever happened to me.",
    "With all my heart & money & soul,",
    "At your service!💕"
  ]

  useEffect(() => {
    if (isTyping && currentLine < letterContent.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
      }, 2000)
      return () => clearTimeout(timer)
    } else if (currentLine >= letterContent.length) {
      setIsTyping(false)
    }
  }, [currentLine, isTyping, letterContent.length])

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.section 
      className="love-message"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Floating Hearts Background */}
      <div className="floating-hearts-bg">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-heart-bg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
            animate={{
              y: [-20, -40, -20],
              rotate: [0, 5, -5, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {['💕', '💖', '💗', '💝', '💘'][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

      <div className="container">
        <motion.div 
          className="letter-container"
          variants={letterVariants}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Letter Header */}
          <div className="letter-header">
            <motion.div 
              className="letter-date"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </motion.div>
            <motion.div 
              className="letter-location"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              From the depths of my heart 💖
            </motion.div>
          </div>

          {/* Letter Content */}
          <div className="letter-content">
            {letterContent.slice(0, currentLine + 1).map((line, index) => (
              <motion.div
                key={index}
                className={`letter-line ${line === '' ? 'paragraph-break' : ''}`}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
              >
                {line === '' ? (
                  <div className="paragraph-spacer"></div>
                ) : (
                  <span className="letter-text">
                    {line}
                    {isTyping && index === currentLine && (
                      <motion.span
                        className="typing-cursor"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                      >
                        |
                      </motion.span>
                    )}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Letter Footer */}
        </motion.div>

      </div>
    </motion.section>
  )
}

export default LoveMessage
