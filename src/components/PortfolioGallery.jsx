import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { PORTFOLIO_ITEMS, ANIMATION_CONFIG } from '../config/constants'

export default function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedItem, setSelectedItem] = useState(null)

  // 键盘事件处理
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null)
        setSelectedItem(null)
      }
    }

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyPress)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage])

  // 点击图片打开灯箱
  const openLightbox = (item) => {
    setSelectedItem(item)
    setSelectedImage(item.fullImage)
  }

  // 关闭灯箱
  const closeLightbox = () => {
    setSelectedImage(null)
    setSelectedItem(null)
  }

  return (
    <section className="portfolio-gallery py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
        作品集
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            className="portfolio-card group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div 
              className="bg-white border border-gray-100 rounded-lg p-8 shadow-sm hover:shadow-lg 
                         hover:border-gray-200 transition-all duration-300 transform 
                         group-hover:-translate-y-1 group-hover:bg-gray-50"
              onClick={() => openLightbox(item)}
            >
              {/* 分类标签 */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium text-gray-600 
                                bg-gray-100 rounded-full group-hover:bg-gray-200 
                                transition-colors duration-300">
                  {item.category}
                </span>
              </div>
              
              {/* 标题 */}
              <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-gray-700 
                             transition-colors duration-300 leading-tight">
                {item.title}
              </h3>
              
              {/* 描述 */}
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {item.description}
              </p>
              
              {/* 查看详情提示 */}
              <div className="flex items-center text-sm text-gray-400 group-hover:text-gray-600 
                             transition-colors duration-300">
                <span>点击查看照片</span>
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 
                               transition-transform duration-300" fill="none" stroke="currentColor" 
                     viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 灯箱模态框 */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* 背景遮罩 */}
            <motion.div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* 图片容器 */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 
                         transition-colors duration-200"
                aria-label="关闭图片"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* 图片 */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={selectedImage}
                  alt={selectedItem?.title}
                  className="max-w-full max-h-[85vh] object-contain"
                  loading="lazy"
                />
                
                {/* 图片标题 */}
                {selectedItem && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t 
                                 from-black/70 via-black/50 to-transparent p-6">
                    <h3 className="text-white text-lg font-light mb-1">{selectedItem.title}</h3>
                    <p className="text-gray-200 text-sm mb-2">{selectedItem.category}</p>
                    <p className="text-gray-300 text-xs">{selectedItem.description}</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
