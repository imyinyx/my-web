import { motion } from 'framer-motion'
import { TIMELINE_DATA } from '../config/constants'

export default function ResumeTimeline() {
  return (
    <section className="resume-timeline py-24 px-4 max-w-6xl mx-auto">
      <motion.h2 
        className="text-4xl font-extralight text-gray-800 mb-20 text-center tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        时间流水
      </motion.h2>
      
      <div className="relative">
        {/* 中央垂直线 - 调整z-index使圆点在上方 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 z-0"></div>
        
        {/* 时间线顶部装饰点 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-4 h-4 bg-gray-400 rounded-full border-2 border-white shadow-md z-10"></div>
        
        {/* 时间线底部装饰点 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-4 h-4 bg-gray-400 rounded-full border-2 border-white shadow-md z-10"></div>

        <div className="space-y-32">
          {TIMELINE_DATA.map((item, index) => (
            <motion.div 
              key={index}
              className="relative flex items-center min-h-[160px]"
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              {/* 中心节点圆点 - 提升z-index确保在最上层 */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative w-8 h-8 bg-white border-4 border-gray-600 rounded-full shadow-xl">
                  <div className="absolute w-3 h-3 bg-gray-600 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>

              {/* 水平连接线 - 从卡片边缘精确连接到中心节点 */}
              <div className={`absolute top-1/2 transform -translate-y-1/2 z-15 h-1 ${
                index % 2 === 0 
                  ? 'right-1/2 w-20 bg-gradient-to-r from-gray-600 to-gray-300' 
                  : 'left-1/2 w-20 bg-gradient-to-l from-gray-600 to-gray-300'
              }`}></div>

              {/* 内容区域 - 重新调整间距和对齐 */}
              <div className={`absolute top-1/2 transform -translate-y-1/2 w-[28rem] ${
                index % 2 === 0 
                  ? 'right-1/2 mr-24 text-right' 
                  : 'left-1/2 ml-24 text-left'
              }`}>
                <motion.div 
                  className="timeline-content bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-white relative"
                  whileHover={{ y: -3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* 卡片连接点指示器 */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-600 rounded-full border-3 border-white z-10 ${
                    index % 2 === 0 
                      ? '-right-2' 
                      : '-left-2'
                  }`}></div>
                  
                  {/* 时间标签 */}
                  <div className={`mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="inline-block px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-full tracking-wider uppercase">
                      {item.year}
                    </span>
                  </div>
                  
                  {/* 身份标题 */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  
                  {/* 地点信息 */}
                  <h4 className="text-lg font-medium text-gray-700 mb-4">
                    {item.company}
                  </h4>
                  
                  {/* 描述文字 */}
                  <p className="text-gray-600 text-base leading-relaxed font-light">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* 底部装饰性渐变 */}
      <div className="mt-20 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  )
}
