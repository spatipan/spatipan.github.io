# Project Structure

## Overview

Digital Business Namecard - A modern, config-driven contact card with VCF export, QR code, and Apple Wallet integration.

## File Tree

```
/
├── .git/                       # Git repository
├── .gitignore                  # Git ignore rules
├── README.md                   # Full documentation
├── QUICKSTART.md              # Quick deployment guide
├── STRUCTURE.md               # This file
├── config.yaml                # Main configuration (EDIT THIS!)
├── index.html                 # Digital namecard (main page)
├── cv.html                    # Full CV page
│
└── assets/
    ├── css/
    │   └── namecard.css       # Namecard styles
    │
    ├── js/
    │   ├── config-loader.js   # YAML config parser
    │   ├── vcf-generator.js   # vCard generator
    │   ├── qr-generator.js    # QR code generator
    │   └── wallet-integration.js  # Apple/Google Wallet
    │
    └── images/
        └── portrait.PNG       # Profile photo
```

## Key Files

### Configuration
- **config.yaml** - All personal data, projects, skills, theme settings

### Pages
- **index.html** - Modern digital namecard (landing page)
- **cv.html** - Full curriculum vitae

### Assets
- **CSS**: Responsive, mobile-first design with dark mode support
- **JavaScript**: Modular components for all features
- **Images**: Profile photo and assets

## Technologies Used

### Frontend
- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)

### Libraries (CDN)
- js-yaml (4.1.0) - YAML parsing
- qrcodejs (1.0.0) - QR code generation

### Hosting
- GitHub Pages (static hosting)
- HTTPS enabled by default

## Features by File

### index.html
- Responsive namecard layout
- Contact action buttons
- Social media links
- Featured projects
- Skills display
- QR code section
- VCF download
- Apple Wallet integration
- Share functionality

### config.yaml
- Personal information
- Contact details
- Social links
- Featured projects
- Skills list
- Theme customization
- Display settings

### CSS (namecard.css)
- Mobile-first responsive design
- Dark mode support
- Print styles
- Animations
- Gradient backgrounds

### JavaScript Modules

**config-loader.js**
- Loads YAML configuration
- Validates required fields
- Applies theme settings

**vcf-generator.js**
- Generates vCard 3.0 format
- iOS/Android compatible
- Includes all contact info

**qr-generator.js**
- Creates QR codes with vCard data
- Customizable size/colors
- PNG export capability

**wallet-integration.js**
- Apple Wallet instructions
- Google Wallet support
- Third-party service links

## Data Flow

```
config.yaml
    ↓
config-loader.js (parse & validate)
    ↓
index.html (populate UI)
    ↓
├─→ vcf-generator.js → Download .vcf file
├─→ qr-generator.js → Display QR code
└─→ wallet-integration.js → Wallet options
```

## Deployment

### GitHub Pages
1. Push to `main` branch
2. Enable Pages in Settings
3. Site live at `https://username.github.io`

### Update Process
1. Edit `config.yaml`
2. Commit changes
3. Push to GitHub
4. Auto-deploy (2-3 minutes)

## Browser Support

✅ Chrome/Edge (latest)
✅ Safari (latest)
✅ Firefox (latest)
✅ iOS Safari
✅ Chrome Mobile

## Dependencies

All dependencies loaded via CDN:
- No npm/node_modules required
- No build step needed
- Zero configuration

## Security & Privacy

✅ Client-side only (no backend)
✅ No tracking or analytics
✅ No cookies
✅ No external API calls
✅ HTTPS via GitHub Pages

## Customization Points

### Easy (config.yaml)
- Personal info
- Contact details
- Projects
- Skills
- Colors
- Display settings

### Medium (CSS)
- Layout adjustments
- Color schemes
- Typography
- Animations

### Advanced (JavaScript)
- New features
- Custom integrations
- API connections
- Analytics

## Future Enhancements

Potential additions:
- [ ] Google Analytics (optional)
- [ ] Custom domain support
- [ ] Multiple language support
- [ ] Dark/light mode toggle
- [ ] Backend for PKPass generation
- [ ] Contact form
- [ ] Blog integration

## File Sizes

Approximate sizes:
- index.html: ~15KB
- namecard.css: ~8KB
- JavaScript (total): ~12KB
- config.yaml: ~2KB
- Total (excluding images): ~37KB

Very lightweight and fast-loading!

---

Last updated: 2025
