import { motion } from 'framer-motion'
import { GithubLogo, TwitterLogo, Envelope } from 'phosphor-react'

const socialLinks = [
  { name: 'GitHub', icon: GithubLogo, url: 'https://github.com/imyinyx' },
  { name: 'Twitter', icon: TwitterLogo, url: 'https://x.com/imyinyx' },
  { name: 'Email', icon: Envelope, url: 'mailto:3034003373@qq.com' }
]

export default function SocialStrip() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.section 
      className="social-strip py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <ul className="social-icons flex justify-center items-center gap-6">
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
            <motion.li key={link.name} variants={itemVariants}>
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
