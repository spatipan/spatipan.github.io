# Digital Business Namecard

A modern, config-driven digital business card with VCF export, QR code generation, and project showcase. Perfect for quick introductions, networking, and professional presence.

## Features

✨ **Config-Driven**: All personal data managed via `config.yaml` - no code editing required
📱 **Mobile-First**: Responsive design optimized for all devices
📇 **VCF Export**: One-tap download of contact card (vCard 3.0, iOS compatible)
📲 **Triple QR Codes**: Website, LINE, and vCard QR codes
💬 **LINE Integration**: LINE button and QR code for Asian markets
🎯 **Project Showcase**: Highlight projects with publication links and live demos
📂 **Collapsible Sections**: Clean UI with expandable/collapsible sections
🎨 **Customizable**: Theme colors, fonts, and layout options
🚀 **Zero Build**: Pure HTML/CSS/JS - deploy instantly to GitHub Pages
📄 **Full CV Page**: Separate detailed CV page (mobile responsive)
🔗 **Social Integration**: GitHub, LinkedIn, ORCID, ResearchGate links

## Quick Start

### 1. Update Your Information

1. Copy `config.template.yaml` to `config.yaml` (if starting fresh)
2. Edit `config.yaml` with your details
3. See [CONFIG.md](CONFIG.md) for detailed configuration guide

```yaml
personal:
  name: "Your Name"
  title: "Your Title"
  email: "your@email.com"
  # ... more fields
```

### 2. Deploy to GitHub Pages

1. Push your changes to the `main` branch
2. Go to repository Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io`

### 3. Add Profile Photo (Optional)

1. Add your photo to `assets/images/profile.jpg`
2. Recommended: 400x400px or larger (square)
3. Photo will auto-display; falls back to initials if missing

## File Structure

```
/
├── config.yaml                 # Your configuration (edit this!)
├── config.template.yaml        # Configuration template
├── CONFIG.md                   # Detailed configuration guide
├── index.html                  # Digital namecard page
├── cv.html                     # Full CV page
├── cv.md                       # CV content (source of truth)
├── README.md                   # This file
├── assets/
│   ├── css/
│   │   └── namecard.css       # Styles
│   ├── js/
│   │   ├── config-loader.js   # YAML config loader
│   │   ├── vcf-generator.js   # Contact card generator
│   │   ├── qr-generator.js    # QR code generator (website + vCard)
│   │   └── wallet-integration.js # Wallet features
│   └── images/
│       └── profile.jpg        # Your photo (add this)
```

## Configuration Guide

📖 **See [CONFIG.md](CONFIG.md) for complete configuration documentation**

Quick reference:

### Personal Information

```yaml
personal:
  name: "Your Full Name"
  title: "Your Professional Title"
  subtitle: "Additional Title/Role"
  organization: "Company/University"
  department: "Department Name"
  tagline: "A catchy one-liner about you"
  bio: "A longer bio describing your expertise"
  photo: "assets/images/profile.jpg"
```

### Contact Information

```yaml
contact:
  phone: "+1 234 567 8900"
  email: "your@email.com"
  location: "City, Country"
  website: "https://yourwebsite.com"
  line: "https://line.me/ti/p/YOUR_LINE_ID"  # Optional - for LINE messenger
```

### Social Links

```yaml
social:
  github: "yourusername"
  linkedin: "your-linkedin-username"
  twitter: "yourusername"
  orcid: "0000-0000-0000-0000"
```

### Projects

Showcase up to 4 featured projects with optional demo links:

```yaml
projects:
  - name: "Project Name"
    description: "Brief description"
    tags: ["Tag1", "Tag2"]
    url: "https://project-url.com"      # Publication, GitHub, etc.
    demo: "https://demo-url.com"        # Optional: Live demo link
```

### Skills

List your expertise areas:

```yaml
skills:
  - "Skill 1"
  - "Skill 2"
  - "Skill 3"
```

### Theme Customization

```yaml
theme:
  primaryColor: "#1e293b"     # Header background
  accentColor: "#3b82f6"      # Buttons and highlights
  backgroundColor: "#ffffff"   # Card background
  textColor: "#1a1a1a"        # Main text color
  font: "Inter, sans-serif"   # Font family
```

### Card Settings

Control what's displayed:

```yaml
card:
  showPhoto: true
  showQRCode: true
  showProjects: true
  maxProjects: 3      # How many projects to show
  showSkills: true
  maxSkills: 6        # How many skills to show
  # Collapsible sections - start collapsed or expanded
  collapsible:
    projects: false      # false = starts expanded
    skills: false        # false = starts expanded
    qrCodes: true        # true = starts collapsed
    socialLinks: false   # false = starts expanded
```

**Collapsible Sections:**
- Click the chevron icon on any section to expand/collapse it
- Configure initial state (collapsed or expanded) for each section
- Great for long namecards or when you want QR codes hidden by default

## Features In-Depth

### VCF (vCard) Export

- Click "Download Contact Card" to download a `.vcf` file
- Compatible with iOS, Android, and desktop contacts apps
- Includes all contact info, social links, and bio
- vCard 3.0 format for maximum compatibility

### QR Codes

Up to three QR codes are generated automatically (grouped in collapsible section):

1. **Website QR Code**
   - Links to your personal website
   - Quick access for presentations/networking
   - Scans to: `https://yourwebsite.com`

2. **LINE QR Code** (if configured)
   - Quick add on LINE messenger
   - Popular in Asia (Japan, Thailand, Taiwan, etc.)
   - Scans to: Your LINE add friend URL
   - Uses LINE brand color (#00B900)

3. **vCard QR Code**
   - Contains full contact information
   - Scan to save contact instantly
   - Works with all phone cameras
   - Customizable size and colors in config

All QR codes are in one collapsible section to keep your namecard clean.

### Sharing

- Native share functionality on mobile devices
- Fallback to clipboard copy on desktop
- Share your namecard URL instantly

## Customization Tips

### Change Color Scheme

Edit `config.yaml`:

```yaml
theme:
  primaryColor: "#2d3748"     # Darker header
  accentColor: "#f56565"      # Red accent
```

### Hide Sections

```yaml
card:
  showProjects: false   # Hide projects section
  showSkills: false     # Hide skills section
```

### Add Custom CSS

Create `assets/css/custom.css` and link it in `index.html`:

```html
<link rel="stylesheet" href="assets/css/custom.css">
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Safari (latest)
- ✅ Firefox (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Dependencies

All loaded via CDN (no installation needed):

- [js-yaml](https://github.com/nodeca/js-yaml) - YAML parsing
- [qrcode.js](https://davidshimjs.github.io/qrcodejs/) - QR code generation
- [Google Fonts](https://fonts.google.com) - Inter font family

## Troubleshooting

### QR Code not showing
- Check browser console for errors
- Verify `config.yaml` syntax is valid
- Ensure `showQRCode: true` in card settings

### VCF download not working
- Check that contact info is filled in `config.yaml`
- Try different browser
- Check browser's download settings

### Config not loading
- Validate YAML syntax at [yamllint.com](http://www.yamllint.com/)
- Check browser console for parsing errors
- Ensure `config.yaml` is in root directory

### Photo not showing
- Verify image path is correct
- Check image file exists
- Try absolute URL: `https://yourdomain.com/assets/images/photo.jpg`

## Local Development

1. Clone the repository
2. Edit `config.yaml` with your information
3. Open `index.html` in a browser

**Note**: Due to CORS restrictions, you may need a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Deployment

### GitHub Pages (Recommended)

1. Push code to GitHub
2. Settings → Pages → Source: `main` branch
3. Done! Site live at `https://username.github.io/repo-name`

### Custom Domain

1. Add `CNAME` file with your domain
2. Configure DNS with your domain provider
3. Update GitHub Pages settings

### Other Hosts

Upload all files to any static hosting:
- Netlify
- Vercel
- CloudFlare Pages
- AWS S3
- Any web server

## Privacy & Security

- ✅ No tracking or analytics by default
- ✅ All processing happens client-side
- ✅ No data sent to external servers
- ✅ No cookies or local storage used
- ✅ HTTPS enabled via GitHub Pages

## License

This project is free to use and modify for personal and commercial purposes.

## Credits

Created with ❤️ for modern networking

---

## Documentation

- [CONFIG.md](CONFIG.md) - Complete configuration reference
- [config.template.yaml](config.template.yaml) - Configuration template
- [cv.md](cv.md) - CV content structure

## Support

For issues or questions:
- Check [CONFIG.md](CONFIG.md) for configuration help
- Read troubleshooting section above
- Review `config.yaml` for working examples
- Open an issue for bugs or feature requests

**Last Updated**: January 2025

---

Made with [GitHub Pages](https://pages.github.com/)