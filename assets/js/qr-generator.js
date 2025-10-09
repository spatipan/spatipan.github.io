/**
 * QR Code Generator
 * Generates QR codes containing vCard data and website URLs
 */

function initializeWebsiteQRCode(config) {
    const qrContainer = document.getElementById('websiteQrcode');

    // Clear existing QR code if any
    qrContainer.innerHTML = '';

    try {
        // Get website URL
        const websiteURL = config.contact.website || 'https://spatipan.github.io';

        // QR code settings
        const qrSize = config.qr?.size || 200;
        const fgColor = config.qr?.foregroundColor || '#1e293b';
        const bgColor = config.qr?.backgroundColor || '#ffffff';

        // Generate QR code
        const qrcode = new QRCode(qrContainer, {
            text: websiteURL,
            width: qrSize,
            height: qrSize,
            colorDark: fgColor,
            colorLight: bgColor,
            correctLevel: QRCode.CorrectLevel.M // Medium error correction (15%)
        });

        console.log('Website QR code generated successfully');
    } catch (error) {
        console.error('Failed to generate website QR code:', error);
        qrContainer.innerHTML = '<p style="color: #64748b;">QR code generation failed</p>';
    }
}

function initializeQRCode(config) {
    const qrContainer = document.getElementById('qrcode');

    // Clear existing QR code if any
    qrContainer.innerHTML = '';

    if (!config.card.showQRCode && config.card.showQRCode !== undefined) {
        document.getElementById('qrSection').style.display = 'none';
        return;
    }

    try {
        // Generate vCard data
        const vCardData = getVCardData(config);

        // QR code settings
        const qrSize = config.qr?.size || 200;
        const fgColor = config.qr?.foregroundColor || '#1e293b';
        const bgColor = config.qr?.backgroundColor || '#ffffff';

        // Generate QR code
        const qrcode = new QRCode(qrContainer, {
            text: vCardData,
            width: qrSize,
            height: qrSize,
            colorDark: fgColor,
            colorLight: bgColor,
            correctLevel: QRCode.CorrectLevel.M // Medium error correction (15%)
        });

        console.log('QR code generated successfully');
    } catch (error) {
        console.error('Failed to generate QR code:', error);
        qrContainer.innerHTML = '<p style="color: #64748b;">QR code generation failed</p>';
    }
}

/**
 * Generate QR code as Data URL for embedding
 */
function generateQRCodeDataURL(data, size = 200) {
    return new Promise((resolve, reject) => {
        const container = document.createElement('div');
        container.style.display = 'none';
        document.body.appendChild(container);

        try {
            const qrcode = new QRCode(container, {
                text: data,
                width: size,
                height: size,
                correctLevel: QRCode.CorrectLevel.M
            });

            // Wait for QR code to render
            setTimeout(() => {
                const canvas = container.querySelector('canvas');
                if (canvas) {
                    const dataURL = canvas.toDataURL('image/png');
                    resolve(dataURL);
                } else {
                    reject(new Error('QR code canvas not found'));
                }
                document.body.removeChild(container);
            }, 100);
        } catch (error) {
            document.body.removeChild(container);
            reject(error);
        }
    });
}

/**
 * Download QR code as image
 */
async function downloadQRCode(config, filename = 'qrcode.png') {
    try {
        const vCardData = getVCardData(config);
        const dataURL = await generateQRCodeDataURL(vCardData, 512);

        const link = document.createElement('a');
        link.href = dataURL;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('Failed to download QR code:', error);
        alert('Failed to download QR code');
    }
}
