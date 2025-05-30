# Minecraft启动器宣传网站

这是一个为Minecraft启动器设计的宣传网站，展示启动器的功能特点、下载选项和开发团队信息。

## 功能特点

- **响应式设计**：适配各种屏幕尺寸，从手机到桌面设备
- **动画效果**：平滑的滚动动画和交互效果
- **视频展示**：内置视频播放功能，展示启动器实际运行
- **统计数字**：动态数字计数动画，增强视觉效果
- **移动端优化**：汉堡菜单和触摸友好的交互元素

## 目录结构

```
├── img/                  # 图片资源
│   ├── back.png          # 背景图片
│   ├── kylemarvin884.png # 团队成员头像
│   ├── shu-shu-1.jpg     # 团队成员头像
│   └── 卡哇伊.jpg        # 团队成员头像
├── vid/                  # 视频资源
│   └── test.mp4          # 宣传视频
├── index.html            # 主页面
├── script.js             # JavaScript交互逻辑
├── styles.css            # 样式表
└── README.md             # 项目说明文档
```

## 安装与运行

1. 克隆或下载项目代码
2. 确保所有资源文件路径正确
3. 直接在浏览器中打开`index.html`即可运行

无需服务器或额外依赖，这是一个纯静态网站。

## 开发说明

### 核心文件

- **index.html**: 主页面结构
- **script.js**: 处理所有交互逻辑，包括：
  - 导航栏滚动效果
  - 移动端菜单切换
  - 平滑滚动和返回顶部
  - 视频播放控制
  - 滚动动画和数字计数效果
- **styles.css**: 包含所有样式定义，使用CSS变量实现主题一致性

### 自定义修改

1. **修改内容**:
   - 直接编辑`index.html`中的HTML内容
   - 更新`img/`和`vid/`目录中的资源文件

2. **样式调整**:
   - 修改`styles.css`中的CSS变量来改变主题颜色
   ```css
   :root {
     --primary-color: #3A8FE6;
     --secondary-color: #4CAF50;
     /* 其他变量... */
   }
   ```

3. **功能扩展**:
   - 在`script.js`中添加新的交互逻辑
   - 确保新功能在移动端和桌面端都能正常工作

## 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork本项目
2. 创建新分支 (`git checkout -b feature/your-feature`)
3. 提交更改 (`git commit -am 'Add some feature'`)
4. 推送到分支 (`git push origin feature/your-feature`)
5. 创建Pull Request

## 许可证

本项目采用 [MIT 许可证](LICENSE)。

---

© 2025 Minecraft启动器团队. 保留所有权利。