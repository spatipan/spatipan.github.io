/**
 * VCF (vCard) Generator
 * Generates vCard 3.0 format contact files (iOS compatible)
 */

function generateVCF(config) {
    const lines = [];

    // vCard version 3.0 (iOS compatible)
    lines.push('BEGIN:VCARD');
    lines.push('VERSION:3.0');

    // Name (formatted and full)
    const name = config.personal.name;
    const nameParts = name.split(' ');
    const lastName = nameParts.pop();
    const firstName = nameParts.join(' ');

    lines.push(`N:${lastName};${firstName};;;`);
    lines.push(`FN:${name}`);

    // Title and Organization
    if (config.personal.title) {
        lines.push(`TITLE:${config.personal.title}`);
    }
    if (config.personal.organization) {
        lines.push(`ORG:${config.personal.organization}`);
    }
    if (config.personal.department) {
        lines.push(`ROLE:${config.personal.department}`);
    }

    // Contact Information
    if (config.contact.phone) {
        // Mobile phone
        lines.push(`TEL;TYPE=CELL:${config.contact.phone}`);
    }

    if (config.contact.email) {
        lines.push(`EMAIL;TYPE=INTERNET:${config.contact.email}`);
    }

    if (config.contact.website) {
        lines.push(`URL:${config.contact.website}`);
    }

    // Address
    if (config.contact.location) {
        // Format: ;;street;city;state;postal;country
        lines.push(`ADR;TYPE=WORK:;;${config.contact.location};;;;`);
    }

    // Social Media URLs
    if (config.social) {
        if (config.social.github) {
            lines.push(`URL;TYPE=GitHub:https://github.com/${config.social.github}`);
        }
        if (config.social.linkedin) {
            lines.push(`URL;TYPE=LinkedIn:https://linkedin.com/in/${config.social.linkedin}`);
        }
        if (config.social.twitter) {
            lines.push(`URL;TYPE=Twitter:https://twitter.com/${config.social.twitter}`);
        }
        if (config.social.orcid) {
            lines.push(`URL;TYPE=ORCID:https://orcid.org/${config.social.orcid}`);
        }
    }

    // Note with bio and tagline
    const notes = [];
    if (config.personal.tagline) {
        notes.push(config.personal.tagline);
    }
    if (config.personal.bio) {
        notes.push(config.personal.bio);
    }
    if (notes.length > 0) {
        lines.push(`NOTE:${notes.join('\\n\\n')}`);
    }

    // Categories (skills)
    if (config.skills && config.skills.length > 0) {
        lines.push(`CATEGORIES:${config.skills.slice(0, 5).join(',')}`);
    }

    // Revision timestamp
    const now = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    lines.push(`REV:${now}`);

    lines.push('END:VCARD');

    return lines.join('\r\n');
}

function downloadVCF(vcfContent, filename) {
    const blob = new Blob([vcfContent], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    setTimeout(() => URL.revokeObjectURL(url), 100);
}

function getVCardData(config) {
    // Returns vCard data suitable for QR code embedding
    return generateVCF(config);
}

/**
 * Generate a vCard with photo (base64 encoded)
 * Note: This increases QR code size significantly
 */
async function generateVCFWithPhoto(config, photoUrl) {
    let vcf = generateVCF(config);

    try {
        const response = await fetch(photoUrl);
        const blob = await response.blob();
        const reader = new FileReader();

        return new Promise((resolve, reject) => {
            reader.onloadend = () => {
                const base64 = reader.result.split(',')[1];
                const photoType = blob.type.split('/')[1].toUpperCase();

                // Insert photo before END:VCARD
                const lines = vcf.split('\r\n');
                const endIndex = lines.findIndex(line => line === 'END:VCARD');

                lines.splice(endIndex, 0, `PHOTO;ENCODING=b;TYPE=${photoType}:${base64}`);
                resolve(lines.join('\r\n'));
            };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        console.warn('Failed to add photo to vCard:', error);
        return vcf;
    }
}
