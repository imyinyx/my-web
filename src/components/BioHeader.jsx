import { motion } from 'framer-motion'

export default function BioHeader() {
  return (
    <motion.header 
      className="bio-header text-center py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h1 className="display-name text-4xl md:text-6xl font-light text-gray-900 mb-4">
        Yuxing Yin
      </h1>
      <p className="tagline text-lg md:text-xl text-gray-600 font-light">
        答案都在路上  ， 自由都在风中
      </p>
    </motion.header>
  )
}
