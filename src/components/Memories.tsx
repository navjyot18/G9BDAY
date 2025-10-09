import { motion } from 'framer-motion'

const Memories: React.FC = () => {
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

  const memories = [
    {
      id: 1,
      icon: "🌟",
      title: "First Date",
      description: "The moment I knew you were special"
    },
    {
      id: 2,
      icon: "🎂",
      title: "Last Birthday",
      description: "Celebrating another year of your amazingness"
    },
    {
      id: 3,
      icon: "🌅",
      title: "Sunset Walks",
      description: "Hand in hand, heart to heart"
    },
    {
      id: 4,
      icon: "🎵",
      title: "Dancing Together",
      description: "Lost in music, found in each other"
    }
  ]

  return (
    <motion.section 
      className="memories"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h2
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Our Beautiful Memories
        </motion.h2>
        <motion.div 
          className="memory-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {memories.map((memory) => (
            <motion.div 
              key={memory.id}
              className="memory-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                rotateY: memory.id % 2 === 0 ? -5 : 5,
                boxShadow: "0 15px 35px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="memory-icon"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {memory.icon}
              </motion.div>
              <h3>{memory.title}</h3>
              <p>{memory.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Memories
