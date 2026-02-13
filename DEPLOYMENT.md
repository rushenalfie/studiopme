# GitHub Pages Deployment Guide

## Quick Start

Your site is now ready to deploy to GitHub Pages! Follow these simple steps:

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., "studio-pme" or "portfolio")
4. Choose "Public" (required for free GitHub Pages)
5. DO NOT initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 2: Upload Your Files

#### Option A: Using Git (Command Line)

```bash
# Navigate to your project folder
cd /path/to/your/project

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - STUDIO PME website"

# Connect to GitHub (replace with your repository URL)
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

#### Option B: Using GitHub Web Interface

1. On your new repository page, click "uploading an existing file"
2. Drag and drop ALL your files (including folders)
3. Scroll down and click "Commit changes"

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Scroll down and click "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Live Site

Your site will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

Main pages:
- Overview: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`
- Studio page: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/desktop.html`

---

## What's Included

✅ **index.html** - Project overview page
✅ **desktop.html** - Main studio landing page  
✅ **css/** - All stylesheets (reset, fonts, global, desktop)
✅ **fonts/** - BDO Grotesk font files
✅ **assets/** - SVG graphics
✅ **README.md** - Project documentation
✅ **.gitignore** - Git ignore rules

## Troubleshooting

**Site not loading?**
- Wait 2-3 minutes after enabling Pages
- Check that "Source" is set to `main` branch and `/ (root)` folder
- Ensure repository is Public
- Try accessing the full URL with `/desktop.html`

**Fonts not loading?**
- All font files are included, they should work automatically
- Font paths use relative URLs (../fonts/)

**CSS not loading?**
- Check that you uploaded the entire `css` folder
- File paths are relative and should work on any domain

**Need help?**
- Check GitHub Pages documentation: https://pages.github.com/
- Verify all files uploaded correctly in your repository

---

## Customization Tips

**Update Content:**
- Edit `desktop.html` for main page content
- Modify email: change `studiopme@outlook.com`

**Change Styles:**
- `css/desktop.css` - Page-specific styles
- `css/global.css` - Site-wide styles
- `css/fonts.css` - Font configurations

**Replace Graphics:**
- Swap `assets/asset.svg` with your own SVG
- Ensure same filename or update HTML reference

---

## Custom Domain (Optional)

To use your own domain:

1. In repository settings → Pages
2. Add your custom domain under "Custom domain"
3. Update your domain's DNS records (see GitHub docs)
4. Wait for DNS propagation (can take 24-48 hours)

---

Ready to launch! 🚀
