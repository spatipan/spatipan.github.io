# Digital Business Namecard

A modern, config-driven digital business card with VCF export, QR code, and Apple Wallet integration. Perfect for quick introductions, networking, and project showcasing.

## Features

✨ **Config-Driven**: All personal data managed via `config.yaml` - no code editing required
📱 **Mobile-First**: Responsive design optimized for all devices
📇 **VCF Export**: One-tap download of contact card (vCard 3.0, iOS compatible)
📲 **QR Code**: Embedded vCard data for instant scanning and contact saving
🍎 **Apple Wallet**: Integration support for wallet passes
🎨 **Customizable**: Theme colors, fonts, and layout options
🚀 **Zero Build**: Pure HTML/CSS/JS - deploy instantly to GitHub Pages
🌐 **Offline Ready**: Works without internet after first load
🎯 **Project Showcase**: Highlight your key projects and skills

## Quick Start

### 1. Update Your Information

Edit `config.yaml` with your details:

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
2. Update `config.yaml`:
   ```yaml
   personal:
     photo: "assets/images/profile.jpg"
   ```

## File Structure

```
/
├── config.yaml                 # Your configuration (edit this!)
├── index.html                  # Digital namecard
├── cv.html                     # Full CV page
├── README.md                   # This file
├── assets/
│   ├── css/
│   │   └── namecard.css       # Styles
│   ├── js/
│   │   ├── config-loader.js   # YAML config loader
│   │   ├── vcf-generator.js   # Contact card generator
│   │   ├── qr-generator.js    # QR code generator
│   │   └── wallet-integration.js # Wallet features
│   └── images/
│       └── profile.jpg        # Your photo (add this)
```

## Configuration Guide

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

Showcase up to 4 featured projects:

```yaml
projects:
  - name: "Project Name"
    description: "Brief description"
    tags: ["Tag1", "Tag2"]
    url: "https://project-url.com"
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
```

## Features In-Depth

### VCF (vCard) Export

- Click "Download Contact Card" to download a `.vcf` file
- Compatible with iOS, Android, and desktop contacts apps
- Includes all contact info, social links, and bio
- vCard 3.0 format for maximum compatibility

### QR Code

- Automatically generated with embedded vCard data
- Scan with any phone camera to instantly save contact
- Customizable size and colors in config
- Uses medium error correction for reliability

### Apple Wallet Integration

The "Add to Apple Wallet" button provides:
- Instructions for manual addition
- Links to third-party services (PassKit, QRCodeChimp)
- Option to add custom wallet pass URL in config

To add a pre-generated wallet pass:

```yaml
wallet:
  applePassUrl: "https://your-pass-service.com/pass/123"
  googlePassUrl: "https://your-pass-service.com/google/123"
```

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

## Advanced: Apple Wallet Pass Generation

To generate actual `.pkpass` files for Apple Wallet, you need:

1. Apple Developer account ($99/year)
2. Pass Type ID certificate
3. Server-side signing (Node.js/Python/PHP)

**Recommended Services** (no coding required):
- [PassKit.com](https://passkit.com) - Professional pass management
- [QRCodeChimp](https://www.qrcodechimp.com/digital-business-card/apple-wallet/) - Digital business cards

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

## Support

For issues or questions:
- Check [Issues](../../issues)
- Read troubleshooting section above
- Review `config.yaml` examples

**Last Updated**: 2025

---

Made with [GitHub Pages](https://pages.github.com/)