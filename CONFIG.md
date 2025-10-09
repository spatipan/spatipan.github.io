# Configuration Guide

This guide explains how to customize your digital namecard by editing the `config.yaml` file.

## Quick Start

1. Copy `config.template.yaml` to `config.yaml` (if not already present)
2. Edit `config.yaml` with your personal information
3. Add your profile photo to `assets/images/profile.jpg`
4. Commit and push changes to deploy

## Configuration Sections

### Personal Information

```yaml
personal:
  name: "Your Full Name"                    # Your full name as you want it displayed
  title: "Your Professional Title"          # Main professional title
  subtitle: "Secondary Role/Specialization" # Additional descriptor (optional)
  organization: "Your Organization"         # Company, university, or institution
  department: "Your Department"             # Department or division (optional)
  tagline: "Professional tagline"           # Brief professional summary
  bio: "Longer description..."              # Extended biography (used in full CV)
  photo: "assets/images/profile.jpg"        # Path to profile photo
```

**Tips:**
- Keep name and title concise for mobile display
- Use subtitle to highlight a secondary expertise area
- Tagline should be 1 sentence, bio can be 2-3 sentences

### Contact Information

```yaml
contact:
  phone: "+1 234 567 8900"                  # Phone with country code
  email: "your.email@example.com"           # Professional email
  location: "City, Country"                 # City and country
  website: "https://yourwebsite.com"        # Personal or professional website
  line: "https://line.me/ti/p/YOUR_LINE_ID" # Optional - LINE contact URL
```

**Tips:**
- Always include country code for phone numbers
- Location format: "City, Country" for consistency
- Website should start with https://
- LINE: Popular messaging app in Asia - include your LINE contact URL if applicable
- Get your LINE URL from: LINE app → Settings → Profile → Share → Copy URL

### Social Profiles

```yaml
social:
  github: "username"                        # GitHub username
  linkedin: "your-profile-id"               # LinkedIn profile ID (part after /in/)
  twitter: "username"                       # Twitter/X username (optional)
  orcid: "0000-0000-0000-0000"             # ORCID ID for academics (optional)
  researchgate: "Your-Name"                 # ResearchGate profile (optional)
```

**Tips:**
- LinkedIn: Use only the ID part, e.g., from `linkedin.com/in/john-doe-123` use `john-doe-123`
- Leave empty string `""` for social profiles you don't want to display
- Academic profiles (ORCID, ResearchGate) are automatically shown with research icons

### Featured Projects

```yaml
projects:
  - name: "Project Title"                   # Project name
    description: "Brief description"        # 1-2 sentence description
    tags: ["Tag1", "Tag2"]                 # Category tags
    url: "https://link.com"                # Link to publication/GitHub/etc.
    demo: "https://demo.com"               # Optional: Link to live demo
```

**Tips:**
- Limit to 3-4 most important projects for namecard display
- Use `url` for publications, GitHub repos, or project pages
- Use `demo` for live demos, apps, or interactive content
- Use `"#"` for URL if no link available
- Tags help categorize projects (e.g., "AI", "Web", "Mobile")
- Demo links appear as green "Try Demo →" buttons

### Skills & Expertise

```yaml
skills:
  - "Primary Skill"
  - "Another Skill (with details)"
  - "Technology Stack"
```

**Tips:**
- List 6-8 key skills for namecard display
- Order by importance or relevance
- Can include tools/frameworks in parentheses
- Be specific (e.g., "Machine Learning (TensorFlow, PyTorch)" vs just "AI")

### Certifications

```yaml
certifications:
  - "Certification Name (Provider)"
  - "Another Certification"
```

**Tips:**
- Include professional certifications and credentials
- Add provider/organization in parentheses if helpful
- Order by relevance or date (newest first)

### Theme Customization

```yaml
theme:
  primaryColor: "#1e293b"      # Headers, primary elements
  accentColor: "#3b82f6"       # Links, buttons, highlights
  backgroundColor: "#ffffff"    # Page background
  textColor: "#1a1a1a"         # Main text color
  font: "Inter, sans-serif"    # Font family
```

**Color Schemes:**

Professional Blue (default):
- Primary: `#1e293b` (dark slate)
- Accent: `#3b82f6` (blue)

Medical/Healthcare:
- Primary: `#064e3b` (dark green)
- Accent: `#10b981` (emerald)

Tech/Developer:
- Primary: `#1e1b4b` (dark indigo)
- Accent: `#8b5cf6` (purple)

Academic:
- Primary: `#7c2d12` (dark brown)
- Accent: `#f59e0b` (amber)

### Card Display Settings

```yaml
card:
  showPhoto: true              # Display profile photo
  showQRCode: true            # Show vCard QR code
  showProjects: true          # Show projects section
  maxProjects: 3              # Number of projects to display
  showSkills: true            # Show skills section
  maxSkills: 6                # Number of skills to display
  # Collapsible sections - control which sections start collapsed
  collapsible:
    projects: false           # Projects section (false = starts expanded)
    skills: false             # Skills section (false = starts expanded)
    qrCodes: true             # QR codes section (true = starts collapsed)
    socialLinks: false        # Social links section (false = starts expanded)
```

**Tips:**
- Set to `false` to hide entire sections
- Adjust `max` values to control content density
- Mobile displays work best with maxProjects: 3 and maxSkills: 6

**Collapsible Sections:**
- Set `collapsible.<section>: true` to start that section collapsed
- Users can click the chevron icon to expand/collapse any section
- Useful for long namecards or when QR codes should be hidden by default
- Sections with collapsible: `socialLinks`, `projects`, `skills`, `qrCodes`

### Links

```yaml
links:
  fullCV: "cv.html"                          # Path to full CV page
  publications: "https://scholar.google.com" # Publications page
```

**Tips:**
- `fullCV` is relative path to your CV page
- `publications` can link to Google Scholar, ResearchGate, or custom page

### QR Code Settings

```yaml
qr:
  size: 200                    # QR code dimensions (pixels)
  includeVCard: true          # Embed vCard in QR code
  foregroundColor: "#1e293b"  # QR code foreground color
  backgroundColor: "#ffffff"   # QR code background color
```

**Tips:**
- Size 200-250 works well for most displays
- Colors should have high contrast for scanning
- Two QR codes are generated:
  1. Website QR (for quick access to your site)
  2. vCard QR (for saving contact info)

## Profile Photo

1. Add your photo to `assets/images/profile.jpg`
2. Recommended dimensions: 400x400 pixels or larger (square)
3. Supported formats: JPG, PNG
4. Keep file size under 500KB for faster loading

If no photo is provided, initials will be displayed instead.

## Full CV (cv.html)

The namecard links to a full CV page at `cv.html`. To customize:

1. Edit `cv.md` with your complete CV information
2. The system uses cv.md as the source of truth
3. Keep cv.html in sync with cv.md content

## Deployment

### GitHub Pages (Automatic)

1. Push changes to your repository
2. GitHub Pages will automatically deploy
3. Visit `https://yourusername.github.io`

### Manual Deployment

1. Copy all files to your web server
2. Ensure `config.yaml` is accessible
3. Set proper CORS headers if needed

## Troubleshooting

**QR code not showing:**
- Check that `showQRCode: true` in config
- Verify QR library is loading (check browser console)

**Profile photo not displaying:**
- Verify photo path in config matches file location
- Check file size (should be under 1MB)
- Ensure proper file permissions

**Projects not showing:**
- Verify `showProjects: true` in config
- Check YAML syntax (proper indentation)
- Ensure `maxProjects` value is not 0

**Theme colors not applying:**
- Use hex color format: `#RRGGBB`
- Clear browser cache
- Check for YAML syntax errors

## Advanced Customization

### Custom Sections

To add custom sections, edit the HTML templates:
- `index.html` - Main namecard page
- `cv.html` - Full CV page

### Custom Styling

Override styles in `assets/css/namecard.css`

### Custom Scripts

Add functionality in:
- `assets/js/config-loader.js` - Configuration loading
- `assets/js/vcf-generator.js` - vCard generation
- `assets/js/qr-generator.js` - QR code generation

## Examples

See `config.yaml` for a complete working example with:
- Academic/medical professional profile
- Multiple projects with demos
- Research publications integration
- Custom color scheme

## Support

For issues or questions:
- Check the README.md
- Review example config.yaml
- Open an issue on GitHub
