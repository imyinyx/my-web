import { motion } from 'framer-motion'
import { GithubLogo, TwitterLogo, Envelope } from 'phosphor-react'
import { SOCIAL_LINKS, ANIMATION_CONFIG } from '../config/constants'

// 图标映射
const iconMap = {
  GithubLogo,
  TwitterLogo,
  Envelope
}

export default function SocialStrip() {
  return (
    <motion.section 
      className="social-strip py-8"
      initial="hidden"
      animate="visible"
      variants={ANIMATION_CONFIG.staggerContainer}
    >
      <ul className="social-icons flex justify-center items-center gap-6">
        {SOCIAL_LINKS.map((link) => {
          const Icon = iconMap[link.icon]
          return (
            <motion.li key={link.name} variants={ANIMATION_CONFIG.staggerItem}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-700 transition-colors duration-300"
                aria-label={link.name}
              >
                <Icon weight="light" size={24} />
              </a>
            </motion.li>
          )
        })}
      </ul>
    </motion.section>
  )
}
