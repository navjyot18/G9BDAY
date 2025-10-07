import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
        >
          Made with 💖 for my machine!
        </motion.p>
        <motion.p 
          className="footer-date"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, color: "#ffd700" }}
          viewport={{ once: true }}
        >
          {new Date().getFullYear() - 3} • Forever Yours
        </motion.p>
      </div>
    </motion.footer>
  )
}

export default Footer
