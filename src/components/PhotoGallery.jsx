import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

const PhotoGallery = () => {
  // Sample images - replace with your actual images
  const favoriteImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=500&h=600&fit=crop&crop=face",
      alt: "Beautiful smile",
      caption: "Your radiant smile that lights up my world"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=600&fit=crop&crop=face",
      alt: "Laughing together",
      caption: "The sound of your laughter is my favorite melody"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=600&fit=crop&crop=face",
      alt: "Peaceful moment",
      caption: "In your eyes, I found my home"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop&crop=face",
      alt: "Adventure together",
      caption: "Every adventure is better with you by my side"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face",
      alt: "Candid moment",
      caption: "The little moments that mean everything"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=600&fit=crop&crop=face",
      alt: "Special occasion",
      caption: "Celebrating you, my most precious gift"
    }
  ]

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

  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
      scale: 0.9
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.6,
      },
    },
  }

  const imageVariants = {
    offscreen: {
      scale: 0.9,
      opacity: 0
    },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.5,
      },
    },
  }

  return (
    <motion.section 
      className="photo-gallery"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.h2
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          My Favorite Moments with You 💕
        </motion.h2>
        <motion.p 
          className="gallery-subtitle"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          A collection of precious memories that make my heart skip a beat
        </motion.p>
        
        <motion.div 
          className="swiper-container"
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            loop={true}
            className="romantic-swiper"
          >
            {favoriteImages.map((image, index) => (
              <SwiperSlide key={image.id}>
                <motion.div 
                  className="image-slide"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 0.6,
                      delay: index * 0.1
                    }
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="image-container">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="gallery-image"
                    />
                    <motion.div 
                      className="image-overlay"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.p 
                        className="image-caption"
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {image.caption}
                      </motion.p>
                    </motion.div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Buttons */}
          <motion.div 
            className="swiper-button-prev"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              ❮
            </motion.div>
          </motion.div>
          <motion.div 
            className="swiper-button-next"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              ❯
            </motion.div>
          </motion.div>
          
          {/* Custom Pagination */}
          <motion.div 
            className="swiper-pagination"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          ></motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default PhotoGallery
