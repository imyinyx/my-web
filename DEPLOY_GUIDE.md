# 🚀 GitHub Pages 部署指南

你的网站已经配置完成！请按照以下步骤部署：

## 第一步：启用GitHub Pages

1. 访问 https://github.com/imyinyx/my-web/settings/pages
2. 在 "Build and deployment" 部分
3. 选择 **GitHub Actions** 作为来源
4. 保存设置

## 第二步：推送更新到GitHub

在终端运行以下命令：

```bash
git add .
git commit -m "配置GitHub Pages部署"
git push origin main
```

## 第三步：查看部署状态

1. 访问 https://github.com/imyinyx/my-web/actions
2. 等待 "Deploy to GitHub Pages" 工作流完成 ✅
3. 成功后，你的网站将在这里查看：
   - **https://imyinyx.github.io/my-web**

## 🔧 常见问题排查

### 如果页面空白或404：
1. 确保GitHub仓库已公开（私有仓库的Pages有限制）
2. 等待10-30分钟让Pages完全部署
3. 清除浏览器缓存

### 如果资源加载失败：
需要确保vite.config.js中的base路径正确：
```javascript
base: '/my-web/' // 必须与你的GitHub仓库名一致
```

## 📍 更新你的网站

每次向main分支推送代码都会自动触发重新部署：
```bash
git add .
git commit -m "你的更新"
git push
```

## ✅ 成功部署的标志

- GitHub Actions工作流状态为绿色✅
- 访问 https://imyinyx.github.io/my-web/ 可以看到你的网站
