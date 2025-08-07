import { motion } from 'framer-motion'

const timelineData = [
  {
    year: '2024 - Present',
    title: '大学',
    company: '中国石油大学',
    description: 'xxx'
  },
  {
    year: '2021 - 2023',
    title: 'xxx',
    company: '互联网创业公司',
    description: '从0到1搭建产品设计系统，优化移动端体验'
  },
  {
    year: '2020 - 2021',
    title: 'xxx',
    company: '跨境电商',
    description: '参与B2B平台建设，设计用户体验流程'
  }
]

export default function ResumeTimeline() {
  return (
    <section className="resume-timeline py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">
        个人履历
      </h2>
      
      <ul className="timeline space-y-8 relative before:absolute before:top-0 before:left-4 md:before:left-1/2 before:h-full before:w-px before:bg-gray-200">
        {timelineData.map((item, index) => (
          <motion.li 
            key={index}
            className="timeline-item relative flex items-start gap-6"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`w-full ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
              <div className={`absolute w-3 h-3 bg-gray-300 rounded-full top-4 ${index % 2 === 0 ? 'left-3 md:right-0 md:translate-x-1/2' : 'left-3 md:left-0 md:-translate-x-1/2'}`} />
              <p className="text-sm text-gray-500 mb-2">{item.year}</p>
              <h3 className="text-xl font-light text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-700 mb-2">{item.company}</p>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
