# Publications页面右侧年份和会议列表不显示问题分析

## 问题描述
Publications页面（/publications/）右侧的年份列表和会议/出版物列表没有显示出来。

## 问题分析

### 1. 相关文件清单
- **主页面**: `_pages/publications.html`
- **JavaScript逻辑**: `assets/js/publication-filter.js`
- **样式文件**: `_sass/layout/_pub-filters.scss`
- **脚本引入**: `_includes/scripts.html`

### 2. 工作机制分析
该侧边栏是通过**客户端JavaScript动态生成**的，而不是服务端渲染：
- `publication-filter.js` 会在页面加载后：
  1. 查找所有 `.pub-item` 元素（包含 data-date 和 data-venue 属性）
  2. 统计年份和会议分布
  3. 动态生成侧边栏HTML
  4. 绑定点击事件实现过滤功能

### 3. 潜在问题点
1. **JavaScript加载/执行问题**
   - 脚本是否正确引入
   - 脚本执行时机是否正确

2. **CSS样式问题**
   - 侧边栏可能存在但被隐藏
   - flex布局可能有问题（`flex-direction: row-reverse`）

3. **DOM结构问题**
   - `#pub-sidebar` 元素是否存在
   - JavaScript选择器是否匹配

4. **依赖项问题**
   - jQuery依赖（如果有）
   - 其他前置脚本

## 解决方案

### 方案1: 检查并修复JavaScript执行时机
1. 在浏览器中检查页面加载后的控制台错误
2. 确认 `publication-filter.js` 是否正确加载
3. 验证DOM元素选择器是否匹配

### 方案2: 简化CSS布局
- 暂时移除 `flex-direction: row-reverse` 看是否影响显示
- 检查侧边栏的可见性

### 方案3: 改用服务端渲染（推荐）
- 直接在 `publications.html` 中使用Liquid模板生成侧边栏
- 不依赖JavaScript，SEO友好，加载更快

### 方案4: 增强调试信息
- 在JavaScript中添加console.log
- 检查每个函数的执行结果

## 具体实施步骤

### 步骤1: 诊断问题
- 在浏览器中打开Publications页面
- 按F12打开开发者工具
- 检查Console标签页是否有错误
- 检查Elements标签页中 `#pub-sidebar` 的内容

### 步骤2: 验证JavaScript加载
- 在Console中执行:
  ```javascript
  document.getElementById('pub-sidebar')
  document.querySelectorAll('.pub-item')
  ```

### 步骤3: 根据诊断结果选择修复方案
- 如果JS未加载 → 检查scripts.html引入
- 如果选择器不匹配 → 修复HTML结构
- 如果样式问题 → 修复CSS
- 如果JS执行失败 → 添加错误处理

## 预期结果
修复后，Publications页面右侧应显示：
- "refine by year" 标题
- 年份列表（2024, 2023, 2022, 2021, 2019, 2018, 2017）
- "refine by venue" 标题
- 会议列表（ASIACRYPT, EUROCRYPT等）
