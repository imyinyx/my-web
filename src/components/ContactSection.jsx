import { motion } from 'framer-motion'
import { ArrowUpRight } from 'phosphor-react'

export default function ContactSection() {
  return (
    <section className="contact-section py-16 px-4 max-w-2xl mx-auto">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-light text-gray-900 mb-6">
          让我们聊聊
        </h2>
        <p className="text-gray-600 mb-8">
          欢迎随时联系我
        </p>
        
        <motion.a
          href="mailto:3034003373@qq.com"
          className="contact-form inline-flex items-center gap-2 text-gray-900 border border-gray-300 px-6 py-3 rounded hover:bg-gray-50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          发送邮件
          <ArrowUpRight size={16} />
        </motion.a>
      </motion.div>
    </section>
  )
}
