# Deployment Instructions

## 🚀 Deploy to GitHub Pages

Follow these steps to deploy your academic homepage to GitHub Pages:

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Repository name: `YOUR_USERNAME.github.io` (replace YOUR_USERNAME with your actual GitHub username)
4. Description: "My Academic Homepage"
5. Make it **Public**
6. **DO NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

### Step 2: Initialize and Push Your Code

Open Terminal and run these commands:

```bash
# Navigate to your project directory
cd /Users/wangwenxia/code/wenxia.github.io

# Initialize git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Academic homepage based on AcadHomepage template"

# Rename branch to main
git branch -M main

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait a few minutes for GitHub to build your site

### Step 4: Configure Google Scholar Auto-Update (Optional)

To enable automatic Google Scholar citation updates:

1. Find your Google Scholar ID:
   - Go to your Google Scholar profile
   - Look at the URL: `https://scholar.google.com/citations?user=XXXXX`
   - Copy the `XXXXX` part (your Scholar ID)

2. Add it as a repository secret:
   - In your GitHub repository, go to "Settings"
   - Click "Secrets and variables" → "Actions"
   - Click "New repository secret"
   - Name: `GOOGLE_SCHOLAR_ID`
   - Value: Your Google Scholar ID (the XXXXX from step 1)
   - Click "Add secret"

3. Enable GitHub Actions:
   - Go to the "Actions" tab in your repository
   - Click "I understand my workflows, go ahead and enable them"

### Step 5: Update Your Configuration

Before deploying, make sure you've updated:

1. **_config.yml**:
   ```yaml
   repository: "YOUR_USERNAME/YOUR_USERNAME.github.io"
   author:
     googlescholar: "https://scholar.google.com/citations?user=YOUR_ACTUAL_SCHOLAR_ID"
   ```

2. **Profile Image**: Replace `images/profile.png` with your actual photo

3. **_pages/about.md**: Update all content with your information

### Step 6: Verify Deployment

1. Your site should be available at: `https://YOUR_USERNAME.github.io`
2. It may take 5-10 minutes for the first deployment
3. Check the "Actions" tab to see the build status

## 🔄 Updating Your Site

After the initial deployment, to update your site:

```bash
# Make your changes to files
# Then commit and push:

git add .
git commit -m "Update: describe your changes"
git push
```

GitHub will automatically rebuild and deploy your site.

## 🎨 Customization Tips

### Adding a Custom Domain (Optional)

1. Buy a domain name (e.g., from Namecheap, GoDaddy)
2. In your repository, go to Settings → Pages
3. Enter your custom domain
4. Follow GitHub's instructions to configure DNS

### Adding Google Analytics (Optional)

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for your site
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Add it to `_config.yml`:
   ```yaml
   google_analytics_id: "G-XXXXXXXXXX"
   ```

## 📱 Testing Locally Before Deployment

Always test your changes locally before pushing:

```bash
# Install dependencies (first time only)
bundle install

# Run local server
bash run_server.sh

# Or manually:
bundle exec jekyll serve

# Open http://localhost:4000 in your browser
```

## ⚠️ Common Issues

### Issue: Site not updating after push

**Solution**: 
- Check the "Actions" tab for build errors
- Clear your browser cache
- Wait 5-10 minutes for changes to propagate

### Issue: 404 error on GitHub Pages

**Solution**:
- Verify repository name is exactly `YOUR_USERNAME.github.io`
- Check that GitHub Pages is enabled in Settings
- Ensure the main branch is selected as the source

### Issue: Styles not loading

**Solution**:
- Check that `_config.yml` has the correct `repository` value
- Clear browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [AcadHomepage Template](https://github.com/RayeRen/acad-homepage.github.io)

## 🎉 Success!

Once deployed, your academic homepage will be live at:
**https://YOUR_USERNAME.github.io**

Share this link on:
- Your email signature
- Your CV/Resume
- Your Google Scholar profile
- Your ORCID profile
- Social media profiles
- Academic networking sites

Good luck! 🚀
