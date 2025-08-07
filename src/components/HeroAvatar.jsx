import { motion } from 'framer-motion'

export default function HeroAvatar() {
  return (
    <motion.section 
      className="hero-avatar relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div 
        className="avatar-img w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img 
          src="/avator.jpg" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.section>
  )
}
