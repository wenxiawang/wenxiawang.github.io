# Pre-Deployment Checklist

Use this checklist to ensure everything is ready before deploying your academic homepage.

## 📋 Before Deployment

### Essential Tasks (Must Complete)

- [ ] **Replace Profile Photo**
  - Location: `images/profile.png`
  - Current: Default placeholder image
  - Action: Replace with your actual photo (512x512px recommended)
  - Format: PNG or JPG

- [ ] **Update Repository Name in Config**
  - File: `_config.yml` (line 12)
  - Current: `repository: "wenxia.github.io"`
  - Action: Change to `"YOUR_USERNAME/YOUR_USERNAME.github.io"`
  - Replace `YOUR_USERNAME` with your actual GitHub username

- [ ] **Verify Contact Information**
  - Email: 2311110242@bjmu.edu.cn ✅
  - Phone: +86 18811636963 ✅
  - ORCID: 0000-0003-0007-3333 ✅
  - Address: Beijing, China ✅

### Optional but Recommended

- [ ] **Add Google Scholar ID**
  - File: `_config.yml` (line 31)
  - Current: Placeholder URL
  - Action: Update with your actual Google Scholar profile URL
  - Format: `https://scholar.google.com/citations?user=YOUR_ID`

- [ ] **Add Social Media Links** (if desired)
  - GitHub username (line 40 in `_config.yml`)
  - LinkedIn username (line 46)
  - ResearchGate profile (line 32)
  - Twitter handle (line 54)

- [ ] **Review Content**
  - Read through `_pages/about.md`
  - Verify all publications are correct
  - Check dates and affiliations
  - Ensure all links work

- [ ] **Test Locally**
  ```bash
  bundle install
  bash run_server.sh
  ```
  - Visit http://localhost:4000
  - Check all sections display correctly
  - Test on mobile view (resize browser)
  - Verify navigation menu works

## 🚀 Deployment Steps

- [ ] **Create GitHub Repository**
  - Name: `YOUR_USERNAME.github.io`
  - Visibility: Public
  - No README, .gitignore, or license (already included)

- [ ] **Initialize Git and Push**
  ```bash
  cd /Users/wangwenxia/code/wenxia.github.io
  git init
  git add .
  git commit -m "Initial commit: Academic homepage"
  git branch -M main
  git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
  git push -u origin main
  ```

- [ ] **Enable GitHub Pages**
  - Go to repository Settings → Pages
  - Source: main branch, / (root)
  - Click Save
  - Wait 5-10 minutes

- [ ] **Verify Deployment**
  - Visit `https://YOUR_USERNAME.github.io`
  - Check all pages load correctly
  - Test on mobile device
  - Share with a friend for feedback

## 🎓 Google Scholar Integration (Optional)

- [ ] **Get Your Google Scholar ID**
  - Visit your Google Scholar profile
  - Copy ID from URL: `citations?user=XXXXX`

- [ ] **Add as GitHub Secret**
  - Go to repository Settings
  - Secrets and variables → Actions
  - New repository secret
  - Name: `GOOGLE_SCHOLAR_ID`
  - Value: Your Scholar ID

- [ ] **Enable GitHub Actions**
  - Go to Actions tab
  - Click "I understand my workflows, go ahead and enable them"

## 📝 Post-Deployment

- [ ] **Update Your Profiles**
  - Add homepage URL to email signature
  - Update Google Scholar profile
  - Update ORCID profile
  - Update LinkedIn
  - Update ResearchGate
  - Update institutional directory

- [ ] **Share Your Homepage**
  - Email to colleagues
  - Share on social media
  - Add to conference presentations
  - Include in grant applications

- [ ] **Set Up Analytics** (Optional)
  - Create Google Analytics account
  - Get tracking ID
  - Add to `_config.yml`

- [ ] **Regular Maintenance**
  - Update publications as they're published
  - Add news items for major achievements
  - Update research interests as they evolve
  - Keep contact information current

## 🔍 Quality Checks

### Content Quality
- [ ] No typos or grammatical errors
- [ ] All DOI links work correctly
- [ ] Publication years are accurate
- [ ] Impact factors are current
- [ ] All co-authors are listed correctly

### Technical Quality
- [ ] Site loads in < 3 seconds
- [ ] No broken links
- [ ] Images load correctly
- [ ] Mobile responsive
- [ ] Works in Chrome, Firefox, Safari, Edge

### SEO & Accessibility
- [ ] Page title is descriptive
- [ ] Meta description is compelling
- [ ] Alt text for images
- [ ] Proper heading hierarchy
- [ ] Readable font sizes

## 📊 Success Metrics

After 1 week, check:
- [ ] Site is indexed by Google (search: site:YOUR_USERNAME.github.io)
- [ ] Analytics shows visitors (if enabled)
- [ ] No errors in GitHub Actions
- [ ] Received positive feedback

After 1 month:
- [ ] Update with any new publications
- [ ] Review and update news section
- [ ] Check for outdated information
- [ ] Consider adding new sections (blog, teaching, etc.)

## 🆘 Troubleshooting

If something doesn't work:

1. **Site not loading**
   - Check GitHub Actions for errors
   - Verify GitHub Pages is enabled
   - Wait 10-15 minutes after first push

2. **Styles not showing**
   - Verify `repository` in `_config.yml` is correct
   - Clear browser cache
   - Check browser console for errors

3. **Images not loading**
   - Verify file paths are correct
   - Check file names match exactly (case-sensitive)
   - Ensure images are in `images/` directory

4. **Local server won't start**
   - Run `bundle install` again
   - Check Ruby version (need 2.5+)
   - Try `bundle exec jekyll serve` directly

## 📚 Resources

- Quick Start: `QUICK_START.md`
- Detailed Setup: `SETUP_GUIDE.md`
- Deployment Guide (EN): `DEPLOYMENT.md`
- Deployment Guide (CN): `DEPLOYMENT_CN.md`
- Project Summary: `PROJECT_SUMMARY.md` or `项目总结.md`

## ✅ Final Check

Before you click "Deploy":

- [ ] Profile photo is YOUR photo (not placeholder)
- [ ] Repository name is updated in `_config.yml`
- [ ] All personal information is correct
- [ ] Content has been reviewed
- [ ] Local testing completed (if possible)
- [ ] GitHub repository created
- [ ] Ready to push!

---

**When all essential tasks are complete, you're ready to deploy! 🚀**

**Estimated time to complete checklist: 15-30 minutes**

**Questions?** Check the documentation files or the template repository issues.

Good luck with your academic homepage! 🎉
