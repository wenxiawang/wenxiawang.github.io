# Quick Start Guide

## 🎯 What You Have

Your academic homepage is now ready! It includes:

✅ Professional academic template (based on AcadHomepage)  
✅ Your CV information pre-filled  
✅ Publications section with your papers  
✅ Education and research experience  
✅ Awards and honors  
✅ Responsive design (works on all devices)  
✅ Google Scholar integration ready  

## 🚀 Three Steps to Go Live

### 1️⃣ Test Locally (Optional but Recommended)

```bash
cd /Users/wangwenxia/code/wenxia.github.io
bundle install
bash run_server.sh
```

Open http://localhost:4000 in your browser to preview.

### 2️⃣ Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `YOUR_USERNAME.github.io` (use your actual GitHub username)
3. Make it Public
4. Click "Create repository"

### 3️⃣ Deploy

```bash
cd /Users/wangwenxia/code/wenxia.github.io
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

Then enable GitHub Pages:
- Go to repository Settings → Pages
- Source: main branch, / (root)
- Save

**Your site will be live at: https://YOUR_USERNAME.github.io** (in 5-10 minutes)

## 📝 Important: Update Before Deploying

### Must Update:

1. **Profile Image**: Replace `images/profile.png` with your photo (512x512px recommended)

2. **_config.yml**: Update line 12
   ```yaml
   repository: "YOUR_USERNAME/YOUR_USERNAME.github.io"
   ```

3. **Google Scholar Link** (if you have one): Update line 31 in `_config.yml`
   ```yaml
   googlescholar: "https://scholar.google.com/citations?user=YOUR_ACTUAL_ID"
   ```

### Optional Updates:

- Add more publications in `_pages/about.md`
- Update research interests
- Add your GitHub username, LinkedIn, etc. in `_config.yml`

## 🎨 Customization

### Change Colors/Styles
Edit files in `_sass/` directory

### Add New Sections
Edit `_pages/about.md` - it uses Markdown format

### Update Navigation Menu
Edit `_data/navigation.yml`

## 📚 File Structure

```
wenxia.github.io/
├── _config.yml          # Main configuration
├── _pages/
│   └── about.md         # Your homepage content
├── _data/
│   └── navigation.yml   # Navigation menu
├── images/
│   └── profile.png      # Your profile photo
├── assets/              # CSS, JS, fonts
└── _includes/           # Template components
```

## 🔄 Making Updates

After initial deployment, to update your site:

```bash
# Edit your files
# Then:
git add .
git commit -m "Update: describe what you changed"
git push
```

GitHub automatically rebuilds your site in ~2 minutes.

## 📖 Full Documentation

- **Setup Guide**: See `SETUP_GUIDE.md` for detailed setup instructions
- **Deployment**: See `DEPLOYMENT.md` (English) or `DEPLOYMENT_CN.md` (中文)
- **Template Docs**: https://github.com/RayeRen/acad-homepage.github.io

## ⚡ Quick Commands

```bash
# Test locally
bash run_server.sh

# Update and deploy
git add .
git commit -m "Update content"
git push

# Check build status
# Go to: https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io/actions
```

## 🆘 Need Help?

1. Check `SETUP_GUIDE.md` for detailed instructions
2. See `DEPLOYMENT.md` for deployment issues
3. Visit the template repo: https://github.com/RayeRen/acad-homepage.github.io/issues

## ✨ Next Steps

After your site is live:

1. ✅ Add your homepage URL to your email signature
2. ✅ Update your Google Scholar profile with the link
3. ✅ Add the link to your ORCID profile
4. ✅ Share on social media
5. ✅ Regularly update with new publications and achievements

---

**Your homepage is ready to go! 🎉**

Just follow the three steps above and you'll be live in minutes.
