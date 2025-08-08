import { motion } from 'framer-motion'
import { PERSONAL_INFO, ANIMATION_CONFIG } from '../config/constants'

export default function BioHeader() {
  return (
    <motion.header 
      className="bio-header text-center py-12 px-4"
      {...ANIMATION_CONFIG.slideUp}
      transition={{ ...ANIMATION_CONFIG.slideUp.transition, delay: 0.4 }}
    >
      <h1 className="display-name text-4xl md:text-6xl font-light text-gray-900 mb-4">
        {PERSONAL_INFO.name}
      </h1>
      <p className="tagline text-lg md:text-xl text-gray-600 font-light">
        {PERSONAL_INFO.tagline}
      </p>
    </motion.header>
  )
}
