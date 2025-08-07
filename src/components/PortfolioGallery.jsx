import { motion } from 'framer-motion'

const portfolioItems = [
  {
    id: 1,
    title: '企业级设计系统',
    category: '设计体系',
    description: '从0到1构建完整的Design System'
  },
  {
    id: 2,
    title: '数据可视化平台',
    category: '前端工程',
    description: '复杂图表与大屏交互设计'
  },
  {
    id: 3,
    title: '移动电商平台',
    category: '产品设计',
    description: '百万级用户移动端体验升级'
  },
  {
    id: 4,
    title: '内部工具套件',
    category: '工具开发',
    description: '提升团队效率的自动化工具'
  },
  {
    id: 5,
    title: '用户体验优化',
    category: 'UX改进',
    description: '多维度提升用户满意度'
  },
  {
    id: 6,
    title: '无障碍设计实践',
    category: '可访问性',
    description: '让产品服务更多人群'
  }
]

export default function PortfolioGallery() {
  return (
    <section className="portfolio-gallery py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
        作品集
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="portfolio-card bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-full h-48 bg-gray-200 rounded mb-4" />
            <h3 className="text-xl font-light text-gray-900 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{item.category}</p>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
