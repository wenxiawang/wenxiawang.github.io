# Setup Guide for Your Academic Homepage

This guide will help you set up and customize your academic homepage.

## 📋 Prerequisites

Before you begin, make sure you have:
- Git installed on your computer
- Ruby (version 2.5.0 or higher)
- RubyGems
- GCC and Make

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd /Users/wangwenxia/code/wenxia.github.io
bundle install
```

### 2. Run Local Server

```bash
bash run_server.sh
```

Then open http://127.0.0.1:4000 in your browser to preview your site.

## 🎨 Customization

### Update Profile Image

Replace the default profile image with your own photo:

1. Prepare a square photo (recommended: 512x512 pixels)
2. Save it as `images/profile.png`
3. Or update the path in `_config.yml`:

```yaml
author:
  avatar: "images/your-photo.png"
```

### Update Google Scholar ID

To enable automatic citation updates:

1. Go to your Google Scholar profile
2. Copy your Scholar ID from the URL (e.g., `https://scholar.google.com/citations?user=YOUR_ID`)
3. Update in `_config.yml`:

```yaml
googlescholar: "https://scholar.google.com/citations?user=YOUR_ACTUAL_ID"
```

4. Add the ID as a GitHub repository secret:
   - Go to your repository on GitHub
   - Navigate to `Settings -> Secrets and variables -> Actions`
   - Click `New repository secret`
   - Name: `GOOGLE_SCHOLAR_ID`
   - Value: Your actual Google Scholar ID
   - Click `Add secret`

### Update Content

Edit `_pages/about.md` to update:
- About Me section
- Research interests
- Publications
- Education
- Awards and honors
- Contact information

### Update Site Configuration

Edit `_config.yml` to update:
- Site title and description
- Repository name (should be `YOUR_USERNAME.github.io`)
- Author information
- Social media links
- Analytics IDs (optional)

## 📝 Adding New Publications

To add a new publication, edit `_pages/about.md` and add entries under the `# 📝 Publications` section:

```markdown
- **Your Name**, Co-author. (Year). Paper title. *Journal Name*, Volume(Issue), Pages. [DOI Link](https://doi.org/xxx) **(IF=X.X; Q1)**
```

## 🎯 GitHub Pages Deployment

### Option 1: Push to GitHub (Recommended)

1. Create a new repository on GitHub named `YOUR_USERNAME.github.io`
2. Initialize git and push your code:

```bash
cd /Users/wangwenxia/code/wenxia.github.io
git init
git add .
git commit -m "Initial commit: Academic homepage"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository `Settings -> Pages`
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Click `Save`

4. Your site will be available at `https://YOUR_USERNAME.github.io`

### Option 2: Manual Deployment

If you prefer not to use GitHub Actions for Google Scholar updates, you can:
1. Disable the workflow in `.github/workflows/`
2. Manually update citation counts in your publications

## 🔧 Troubleshooting

### Jekyll Installation Issues

If you encounter issues installing Jekyll:

**macOS:**
```bash
brew install ruby
gem install bundler jekyll
```

**Ubuntu/Debian:**
```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
gem install bundler jekyll
```

### Port Already in Use

If port 4000 is already in use:
```bash
bundle exec jekyll serve --port 4001
```

### Permission Errors

If you get permission errors when installing gems:
```bash
gem install bundler --user-install
bundle install --path vendor/bundle
```

## 📚 Additional Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [AcadHomepage Template](https://github.com/RayeRen/acad-homepage.github.io)
- [Markdown Guide](https://www.markdownguide.org/)

## 🆘 Getting Help

If you encounter any issues:
1. Check the [Jekyll documentation](https://jekyllrb.com/docs/)
2. Review the [AcadHomepage issues](https://github.com/RayeRen/acad-homepage.github.io/issues)
3. Search for similar issues on Stack Overflow

## 📋 Checklist

Before deploying your site, make sure you have:

- [ ] Updated `_config.yml` with your information
- [ ] Replaced profile image with your photo
- [ ] Updated `_pages/about.md` with your content
- [ ] Added your Google Scholar ID (if applicable)
- [ ] Tested the site locally
- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages
- [ ] Verified the site is live

## 🎉 Next Steps

After your site is live:
1. Share your homepage URL on your CV and email signature
2. Update your Google Scholar profile with your homepage link
3. Regularly update your publications and research activities
4. Consider adding Google Analytics to track visitors
5. Keep your content fresh with news and updates

Good luck with your academic homepage! 🚀
