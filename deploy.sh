#!/bin/bash

# Deploy to GitHub Pages
# Make sure to run this script from the wenxia.github.io directory

echo "🚀 Starting deployment to GitHub Pages..."

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the wenxia.github.io directory."
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📝 Initializing git repository..."
    git init
    git checkout -b main
fi

# Add all files
echo "📦 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Update personal academic website"

# Check if remote origin is set
if git remote get-url origin > /dev/null 2>&1; then
    echo "🔄 Pushing to GitHub..."
    git push -u origin main
else
    echo "⚠️  Remote origin not set. Please set it up manually:"
    echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git"
    echo "   git push -u origin main"
fi

echo "✅ Deployment complete!"
echo "🌐 Your website should be available at: https://YOUR_USERNAME.github.io"
echo ""
echo "📝 Note: It may take a few minutes for GitHub Pages to update."
