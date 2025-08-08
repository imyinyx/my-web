// 个人信息配置
export const BACKGROUND_INFO = {
  hero: "/portfolio/background.jpeg"
}

export const PERSONAL_INFO = {
  name: 'Yuxing Yin',
  tagline: '答案都在路上，自由都在风中',
  email: '3034003373@qq.com',
  avatar: './avator.jpg',
  copyright: 'Yuxing Yin',
  icp: '鄂ICP备2025096609号'
}

// 社交媒体链接
export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: 'GithubLogo', url: 'https://github.com/imyinyx' },
  { name: 'Twitter', icon: 'TwitterLogo', url: 'https://x.com/imyinyx' },
  { name: 'Email', icon: 'Envelope', url: `mailto:${PERSONAL_INFO.email}` }
]

// 时间线数据
export const TIMELINE_DATA = [
  {
    year: '2024 - Present',
    title: '大学生',
    company: '中国石油大学',
    description: '在读'
  },
  {
    year: '2021 - 2023',
    title: '高中生',
    company: '武汉第十一中学',
    description: '无用且忙碌'
  },
  {
    year: 'before - 2021',
    title: '青葱少年',
    company: '少年',
    description: '无知且快乐'
  }
]

// 作品集数据
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: '小区里的猫咪',
    category: '猫咪',
    description: ' 取快递结果一只猫趴在我身上睡着了',
    fullImage: './portfolio/1.jpeg'
  },
  {
    id: 2,
    title: '自行车',
    category: '第一辆自行车',
    description: '曾经安上挂包想骑着环游世界',
    fullImage: './portfolio/2.jpeg'
  },
  {
    id: 3,
    title: '粉色胖子',
    category: '粉色胖子',
    description: '看到一只粉色胖子准备越狱',
    fullImage: './portfolio/3.jpeg'
  },
  {
    id: 4,
    title: '古田桥上的夕阳',
    category: '夕阳',
    description: '我也曾对未来抱有不切实际的幻想',
    fullImage: './portfolio/4.jpeg'
  },
  {
    id: 5,
    title: '一桥飞架南北',
    category: '长江大桥',
    description: '冬日的大桥',
    fullImage: './portfolio/5.jpeg'
  },
  {
    id: 6,
    title: '新春码头',
    category: '新春',
    description: '在路上找人，而不是找人上路',
    fullImage: './portfolio/6.jpeg'
  }
]

// 动画配置
export const ANIMATION_CONFIG = {
  // 页面加载动画
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 }
  },
  
  // 元素弹出动画
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  
  // 头像缩放动画
  scaleIn: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { duration: 0.5, delay: 0.2 }
  },
  
  // 悬停缩放
  hover: {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.95 }
  },
  
  // 列表动画variants
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
}
