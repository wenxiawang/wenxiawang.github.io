# 部署说明（中文版）

## 🚀 部署到 GitHub Pages

按照以下步骤将您的学术主页部署到 GitHub Pages：

### 步骤 1: 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com) 并登录
2. 点击右上角的 "+" 图标，选择 "New repository"
3. 仓库名称：`YOUR_USERNAME.github.io`（将 YOUR_USERNAME 替换为您的 GitHub 用户名）
4. 描述：填写 "My Academic Homepage"
5. 设置为 **Public**（公开）
6. **不要**勾选初始化 README、.gitignore 或 license
7. 点击 "Create repository"

### 步骤 2: 初始化并推送代码

打开终端并运行以下命令：

```bash
# 进入项目目录
cd /Users/wangwenxia/code/wenxia.github.io

# 初始化 git 仓库
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: Academic homepage based on AcadHomepage template"

# 重命名分支为 main
git branch -M main

# 添加远程仓库（将 YOUR_USERNAME 替换为您的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

# 推送到 GitHub
git push -u origin main
```

### 步骤 3: 启用 GitHub Pages

1. 在 GitHub 上访问您的仓库
2. 点击 "Settings"（设置）标签
3. 在左侧边栏找到 "Pages"
4. 在 "Source"（源）下选择：
   - Branch（分支）: `main`
   - Folder（文件夹）: `/ (root)`
5. 点击 "Save"（保存）
6. 等待几分钟让 GitHub 构建您的网站

### 步骤 4: 配置 Google Scholar 自动更新（可选）

要启用 Google Scholar 引用自动更新：

1. 找到您的 Google Scholar ID：
   - 访问您的 Google Scholar 个人主页
   - 查看 URL：`https://scholar.google.com/citations?user=XXXXX`
   - 复制 `XXXXX` 部分（您的 Scholar ID）

2. 将其添加为仓库密钥：
   - 在 GitHub 仓库中，进入 "Settings"（设置）
   - 点击 "Secrets and variables" → "Actions"
   - 点击 "New repository secret"
   - Name（名称）: `GOOGLE_SCHOLAR_ID`
   - Value（值）: 您的 Google Scholar ID（步骤1中的 XXXXX）
   - 点击 "Add secret"

3. 启用 GitHub Actions：
   - 进入仓库的 "Actions" 标签
   - 点击 "I understand my workflows, go ahead and enable them"

### 步骤 5: 更新配置

部署前，确保您已更新：

1. **_config.yml**:
   ```yaml
   repository: "YOUR_USERNAME/YOUR_USERNAME.github.io"
   author:
     googlescholar: "https://scholar.google.com/citations?user=YOUR_ACTUAL_SCHOLAR_ID"
   ```

2. **头像图片**: 用您的实际照片替换 `images/profile.png`

3. **_pages/about.md**: 用您的信息更新所有内容

### 步骤 6: 验证部署

1. 您的网站应该可以在以下地址访问：`https://YOUR_USERNAME.github.io`
2. 首次部署可能需要 5-10 分钟
3. 检查 "Actions" 标签查看构建状态

## 🔄 更新网站

初次部署后，要更新您的网站：

```bash
# 修改文件后
# 提交并推送：

git add .
git commit -m "Update: 描述您的更改"
git push
```

GitHub 将自动重新构建和部署您的网站。

## 🎨 自定义提示

### 添加自定义域名（可选）

1. 购买域名（例如从 Namecheap、GoDaddy）
2. 在仓库中，进入 Settings → Pages
3. 输入您的自定义域名
4. 按照 GitHub 的说明配置 DNS

### 添加 Google Analytics（可选）

1. 访问 [Google Analytics](https://analytics.google.com/)
2. 为您的网站创建新属性
3. 获取您的 Measurement ID（G-XXXXXXXXXX）
4. 添加到 `_config.yml`：
   ```yaml
   google_analytics_id: "G-XXXXXXXXXX"
   ```

## 📱 部署前本地测试

推送前始终在本地测试您的更改：

```bash
# 安装依赖（仅首次）
bundle install

# 运行本地服务器
bash run_server.sh

# 或手动运行：
bundle exec jekyll serve

# 在浏览器中打开 http://localhost:4000
```

## ⚠️ 常见问题

### 问题：推送后网站未更新

**解决方案**：
- 检查 "Actions" 标签是否有构建错误
- 清除浏览器缓存
- 等待 5-10 分钟让更改生效

### 问题：GitHub Pages 显示 404 错误

**解决方案**：
- 验证仓库名称是否完全是 `YOUR_USERNAME.github.io`
- 检查 Settings 中是否启用了 GitHub Pages
- 确保选择了 main 分支作为源

### 问题：样式未加载

**解决方案**：
- 检查 `_config.yml` 中的 `repository` 值是否正确
- 清除浏览器缓存并强制刷新（Ctrl+Shift+R 或 Cmd+Shift+R）

## 📚 资源

- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Jekyll 文档](https://jekyllrb.com/docs/)
- [AcadHomepage 模板](https://github.com/RayeRen/acad-homepage.github.io)

## 🎉 成功！

部署后，您的学术主页将在以下地址上线：
**https://YOUR_USERNAME.github.io**

在以下地方分享此链接：
- 您的电子邮件签名
- 您的简历
- 您的 Google Scholar 个人资料
- 您的 ORCID 个人资料
- 社交媒体资料
- 学术网络网站

祝您好运！🚀
