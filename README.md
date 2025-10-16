# Software Portfolio Website

A professional, investment-grade portfolio showcasing 7 AI-powered software opportunities with comprehensive market analysis and financial projections.

## Overview

This portfolio website presents $150B+ in combined TAM across seven market-validated software products, designed for potential investors and stakeholders.

### Portfolio Contents

1. **Multi-Agent Compliance Platform** - Regulatory analysis & risk assessment ($36B → $66B market)
2. **AI Model Evaluation Platform (Eduba)** - Model comparison for education & enterprise ($43B → $87B market)
3. **Generative UI Browser** - Real-time interface generation ($20B → $50B market)
4. **AI-Enhanced Planning Assistant** - Optimized scheduling with AI ($98B → $183B market)
5. **ChatGPT App Marketplace Tools** - First-mover marketplace advantage (New market)
6. **LLM Ethics Engine** - AI bias detection & ethical profiling ($0.34B → $1.2B market)
7. **Supervisor Assistant Platform** - Construction crew management ($11B → $17B market)

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Interactive Data Visualizations**: Chart.js powered charts showing market data
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Earthy Professional Design**: Carefully curated color palette for credibility
- **SEO Optimized**: Meta tags and semantic HTML throughout
- **Accessibility**: WCAG 2.1 AA compliant with ARIA labels and keyboard navigation
- **Print-Friendly**: CSS optimized for clean printing

## Project Structure

```
/
├── index.html                 # Landing page with hero and portfolio overview
├── comparison.html            # Market comparison and investment matrix
├── software/                  # Individual software detail pages
│   ├── compliance.html
│   ├── eduba.html
│   ├── ui-browser.html
│   ├── planning.html
│   ├── chatgpt-apps.html
│   ├── ethics-engine.html
│   └── supervisor.html
├── assets/
│   ├── css/
│   │   ├── main.css          # Global styles and variables
│   │   ├── software-page.css # Software detail page styles
│   │   └── comparison.css    # Comparison page styles
│   ├── js/
│   │   ├── animations.js     # Scroll animations and interactions
│   │   ├── charts.js         # Index page charts
│   │   └── comparison-charts.js # Comparison page charts
│   └── images/               # Image assets (logos, charts)
└── data/
    └── market-data.json      # Structured market data (optional)
```

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **JavaScript (Vanilla)**: No framework dependencies
- **Chart.js 4.4.0**: Data visualization library
- **Google Fonts**: Inter, Source Sans Pro, JetBrains Mono

## Color Palette

The design uses an earthy, professional color scheme:

- **Primary**: `#4A5D4F` (Forest Green)
- **Secondary**: `#D4A574` (Warm Sand)
- **Accent**: `#B85C38` (Terracotta)
- **Background**: `#F7F5F2` (Warm White)
- **Text**: `#2C2C2C` (Charcoal)
- **Success**: `#6B8E6F` (Sage)

## Deployment to GitHub Pages

### Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Software portfolio website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `software-portfolio`
3. Don't initialize with README (we already have one)

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select branch: `main` and folder: `/ (root)`
4. Click **Save**
5. Your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## Local Development

To run locally, simply open `index.html` in a modern web browser. For best results, use a local server:

### Using Python

```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Using Node.js

```bash
npx http-server -p 8000

# Then visit: http://localhost:8000
```

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading for images
- Minified external libraries (Chart.js via CDN)
- Optimized CSS with custom properties
- Intersection Observer for scroll animations
- Responsive images with proper sizing

## Customization

### Update Market Data

Edit the data in each HTML file, or create a centralized `data/market-data.json` file and fetch it with JavaScript.

### Change Colors

Update CSS custom properties in `assets/css/main.css`:

```css
:root {
    --color-primary: #YourColor;
    --color-secondary: #YourColor;
    /* ... */
}
```

### Add New Software

1. Copy any file from `software/` folder
2. Update content with new software details
3. Add card to `index.html` in the software grid section
4. Update comparison charts in `assets/js/comparison-charts.js`

## License

© 2025 Software Portfolio. All rights reserved.

## Contact

For inquiries about the portfolio or investment opportunities:
- Email: contact@portfolio.com

---

**Built with**: HTML5, CSS3, JavaScript, Chart.js
**Designed for**: GitHub Pages deployment
**Status**: Ready for production
