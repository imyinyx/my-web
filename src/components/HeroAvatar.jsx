import { motion } from 'framer-motion'
import { PERSONAL_INFO, ANIMATION_CONFIG, BACKGROUND_INFO } from '../config/constants'

export default function HeroAvatar() {
  return (
    <motion.section 
      className={`hero-avatar relative h-[60vh] flex items-center justify-center overflow-hidden bg-[url('${BACKGROUND_INFO.hero}')] bg-cover bg-center`}
      {...ANIMATION_CONFIG.fadeIn}
    >
      <motion.div 
        className="avatar-img w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg overflow-hidden"
        {...ANIMATION_CONFIG.scaleIn}
      >
        <img 
          src={PERSONAL_INFO.avatar} 
          alt={`${PERSONAL_INFO.name}的头像`} 
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.section>
  )
}
