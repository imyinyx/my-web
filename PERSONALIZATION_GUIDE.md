# 🎯 个人信息修改指南

## 📁 主要配置文件位置

**重要提示：所有个人信息都在 `src/config/constants.js` 文件中修改**

## 1. 👤 基本信息修改

**文件路径：** `src/config/constants.js`

### 修改以下内容：

```javascript
// 第2-9行 - 基本信息
export const PERSONAL_INFO = {
  name: '您的姓名',          // 修改为：您的真实姓名
  tagline: '您的个人标语',   // 修改为：您的座右铭或个人简介
  email: '您的邮箱',       // 修改为：您的邮箱地址
  avatar: '/avator.jpg',   // 头像文件：需将您的头像重命名为 avator.jpg 并放入 public 文件夹
  copyright: '版权名称',   // 修改为：您的版权信息
  icp: '京ICP备xxxxxxxx号'  // 修改为：您的ICP备案号（不需要可以删除）
}
```

## 2. 🔗 社交媒体链接

**文件路径：** `src/config/constants.js` (第12-18行)

```javascript
export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: 'GithubLogo', url: 'https://github.com/您的GitHub用户名' },
  { name: 'Twitter', icon: 'TwitterLogo', url: 'https://x.com/您的推特用户名' },
  { name: 'Email', icon: 'Envelope', url: `mailto:您的邮箱@example.com` }
  // 可以添加更多社交平台：
  // { name: 'LinkedIn', icon: 'LinkedInLogo', url: 'https://linkedin.com/in/您的领英用户名' },
]
```

## 3. 🎓 教育背景和工作经历

**文件路径：** `src/config/constants.js` (第21-34行)

### 修改时间线数据：

```javascript
export const TIMELINE_DATA = [
  {
    year: '开始年份 - 结束年份',
    title: '职位/学历',
    company: '公司/学校名称',
    description: '详细描述您的工作内容或学习经历'
  },
  // 添加更多条目（复制粘贴格式）
]
```

**格式示例：**
- 工作经历：2022 - Present / 2021 - 2022
- 教育背景：2020 - 2024 / 2017 - 2020

## 4. 🎨 作品集项目

**文件路径：** `src/config/constants.js` (第37-77行)

### 修改项目内容：

```javascript
export const PORTFOLIO_ITEMS = [
  {
    id: 自增数字,
    title: '项目标题',
    category: '项目类型', // 如：前端工程、数据分析、移动应用等
    description: '项目详细描述，使用什么技术栈，解决了什么问题，取得了什么成果'
  }
]
```

**项目类型建议：**
- 前端工程
- 产品设计  
- 数据分析
- 移动应用
- 后端开发
- 人工智能
- UI/UX设计

## 🖼️ 头像更换教程

### 步骤1：准备头像
- 选择一张清晰的个人照片
- 建议尺寸：300x300像素 或 500x500像素
- 支持格式：jpg, png
- 文件大小：建议不超过1MB

### 步骤2：重命名文件
将头像文件重命名为：**`avator.jpg`**（注意拼写）

### 步骤3：替换文件
将重命名后的头像文件放入 `public` 文件夹，替换现有的 `avator.jpg`

## 🎨 个性化主题颜色（可选）

如需修改网站配色，可以编辑 `src/index.css` 或创建自定义主题文件。

## 📝 修改 checklist

修改完成后，请检查以下项目：

- [ ] 姓名已更新
- [ ] tagline已更新
- [ ] 邮箱地址已更新
- [ ] 社交媒体链接已更新
- [ ] 工作经历时间轴已更新
- [ ] 作品集项目已更新
- [ ] 头像文件已替换
- [ ] ICP备案信息已更新（如需要）

## 🚀 查看效果

修改完成后：
1. 保存文件
2. 访问 `http://localhost:5137`（开发服务器）
3. 查看修改效果

## 💡 专业建议

1. **内容质量**：每个项目描述建议50-100字，突出技术和成果
2. **时间格式**：使用 YYYY - YYYY 格式，或 Present 表示当前
3. **项目顺序**：将最重要或最新项目放在前面
4. **社交链接**：只保留活跃的社交媒体，删除不使用的
5. **邮箱地址**：建议使用专业邮箱（如 gmail、outlook、企业邮箱）

## ❓ 常见问题

**Q1：修改后页面没有更新？**
A1：尝试刷新浏览器缓存（Ctrl+F5 或 Cmd+Shift+R）

**Q2：可以添加更多项目吗？**
A2：可以，按照同样的格式继续添加数组元素

**Q3：如何删除项目？**
A3：直接删除对应的数组元素即可，确保ID保持唯一性

**Q4：需要重新启动项目吗？**
A4：不需要，文件保存后会自动热重载更新
