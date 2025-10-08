import { motion } from 'framer-motion'

const Countdown: React.FC = () => {
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

  const timeUnits = [
    {
      id: 1,
      number: "∞",
      label: "Days of Love"
    },
    {
      id: 2,
      number: "∞",
      label: "Hours of Joy"
    },
    {
      id: 3,
      number: "∞",
      label: "Minutes of Bliss"
    }
  ]

  return (
    <motion.section 
      className="countdown"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h2
          variants={itemVariants as any}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Time Since We Started This Journey
        </motion.h2>
        <motion.div 
          className="countdown-timer"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timeUnits.map((unit) => (
            <motion.div 
              key={unit.id}
              className="time-unit"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                rotateY: unit.id % 2 === 0 ? -10 : 10,
                boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span 
                className="time-number"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: unit.id % 2 === 0 ? -360 : 360 
                }}
                transition={{ duration: 0.8 }}
              >
                {unit.number}
              </motion.span>
              <span className="time-label">{unit.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Countdown
