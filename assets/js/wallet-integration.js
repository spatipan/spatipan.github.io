/**
 * Apple Wallet & Google Wallet Integration
 * Provides methods to add digital business card to mobile wallets
 */

/**
 * Add to Apple Wallet
 * Since PKPass generation requires server-side signing with Apple Developer certificates,
 * we provide three options:
 * 1. Link to a third-party service (PassKit, QRCodeChimp, etc.)
 * 2. Downloadable vCard that can be added to contacts, then added to wallet manually
 * 3. Server-side PKPass generation (requires backend)
 */
function addToAppleWallet(config) {
    // Option 1: Use a third-party service (recommended for GitHub Pages)
    // Popular services: PassKit.com, QRCodeChimp.com, etc.

    // Check if we have a pre-generated pass URL in config
    if (config.wallet && config.wallet.applePassUrl) {
        window.open(config.wallet.applePassUrl, '_blank');
        return;
    }

    // Option 2: Show instructions modal for manual addition
    showWalletInstructions('apple');
}

/**
 * Add to Google Wallet
 * Google Wallet uses a similar approach with JWT tokens
 */
function addToGoogleWallet(config) {
    if (config.wallet && config.wallet.googlePassUrl) {
        window.open(config.wallet.googlePassUrl, '_blank');
        return;
    }

    showWalletInstructions('google');
}

/**
 * Show instructions modal for adding to wallet
 */
function showWalletInstructions(walletType) {
    const instructions = {
        apple: {
            title: 'Add to Apple Wallet',
            steps: [
                '1. Download the contact card (VCF) using the button above',
                '2. Open the downloaded file on your iPhone',
                '3. Tap "Add to Contacts"',
                '4. Optional: Use a service like PassKit.com to create a wallet pass'
            ],
            alternativeText: 'For a one-tap solution, you can use services like:',
            alternatives: [
                { name: 'PassKit.com', url: 'https://passkit.com' },
                { name: 'QRCodeChimp', url: 'https://www.qrcodechimp.com/digital-business-card/apple-wallet/' }
            ]
        },
        google: {
            title: 'Add to Google Wallet',
            steps: [
                '1. Download the contact card (VCF) using the button above',
                '2. Open the downloaded file on your Android phone',
                '3. Tap to add to Contacts',
                '4. Optional: Use a service like PassKit.com to create a wallet pass'
            ],
            alternativeText: 'For a one-tap solution, you can use services like:',
            alternatives: [
                { name: 'PassKit.com', url: 'https://passkit.com' },
                { name: 'QRCodeChimp', url: 'https://www.qrcodechimp.com/digital-business-cards' }
            ]
        }
    };

    const info = instructions[walletType];

    const modal = document.createElement('div');
    modal.className = 'wallet-modal';
    modal.innerHTML = `
        <div class="wallet-modal-content">
            <div class="wallet-modal-header">
                <h3>${info.title}</h3>
                <button class="wallet-modal-close">&times;</button>
            </div>
            <div class="wallet-modal-body">
                <div class="wallet-steps">
                    ${info.steps.map(step => `<p>${step}</p>`).join('')}
                </div>
                <div class="wallet-alternatives">
                    <p><strong>${info.alternativeText}</strong></p>
                    ${info.alternatives.map(alt =>
                        `<a href="${alt.url}" target="_blank" class="wallet-service-link">${alt.name}</a>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;

    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .wallet-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 20px;
        }
        .wallet-modal-content {
            background: white;
            border-radius: 16px;
            max-width: 500px;
            width: 100%;
            max-height: 80vh;
            overflow: auto;
        }
        .wallet-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px;
            border-bottom: 1px solid #e2e8f0;
        }
        .wallet-modal-header h3 {
            margin: 0;
            font-size: 20px;
            color: #1e293b;
        }
        .wallet-modal-close {
            background: none;
            border: none;
            font-size: 28px;
            color: #64748b;
            cursor: pointer;
            padding: 0;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .wallet-modal-close:hover {
            color: #1e293b;
        }
        .wallet-modal-body {
            padding: 24px;
        }
        .wallet-steps p {
            margin: 12px 0;
            color: #475569;
            line-height: 1.6;
        }
        .wallet-alternatives {
            margin-top: 24px;
            padding-top: 24px;
            border-top: 1px solid #e2e8f0;
        }
        .wallet-alternatives p {
            margin-bottom: 12px;
            color: #1e293b;
        }
        .wallet-service-link {
            display: inline-block;
            margin: 6px 8px 6px 0;
            padding: 8px 16px;
            background: #3b82f6;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
        }
        .wallet-service-link:hover {
            background: #2563eb;
        }
        @media (prefers-color-scheme: dark) {
            .wallet-modal-content {
                background: #1e293b;
            }
            .wallet-modal-header {
                border-color: #334155;
            }
            .wallet-modal-header h3 {
                color: #f1f5f9;
            }
            .wallet-steps p {
                color: #cbd5e1;
            }
            .wallet-alternatives {
                border-color: #334155;
            }
            .wallet-alternatives p {
                color: #f1f5f9;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(modal);

    // Close modal handlers
    const closeBtn = modal.querySelector('.wallet-modal-close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        }
    });
}

/**
 * Generate Apple Wallet Pass URL using a service
 * This is a helper function if you want to integrate with a specific service
 */
function generatePassKitUrl(config) {
    // Example integration with PassKit.com API
    // You would need to sign up for their service and get an API key

    const passData = {
        name: config.personal.name,
        title: config.personal.title,
        email: config.contact.email,
        phone: config.contact.phone,
        website: config.contact.website,
        // ... additional fields
    };

    // This would typically involve a server-side API call
    console.log('Pass data prepared:', passData);

    return null; // Return the generated URL from the service
}

/**
 * Check if device supports Apple Wallet
 */
function supportsAppleWallet() {
    // Check if iOS device
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    return isIOS || isSafari;
}

/**
 * Check if device supports Google Wallet
 */
function supportsGoogleWallet() {
    const isAndroid = /Android/.test(navigator.userAgent);
    const isChrome = /Chrome/.test(navigator.userAgent);

    return isAndroid || isChrome;
}

/**
 * Smart wallet button visibility
 * Show only relevant wallet button based on device
 */
function updateWalletButtonVisibility() {
    const appleBtn = document.getElementById('addToWallet');
    const googleBtn = document.getElementById('addToGoogleWallet');

    if (!googleBtn) return; // Google Wallet button not implemented in HTML

    if (supportsAppleWallet()) {
        appleBtn.style.display = 'flex';
        if (googleBtn) googleBtn.style.display = 'none';
    } else if (supportsGoogleWallet()) {
        appleBtn.style.display = 'none';
        if (googleBtn) googleBtn.style.display = 'flex';
    } else {
        // Desktop - show both or hide both
        appleBtn.style.display = 'flex';
        if (googleBtn) googleBtn.style.display = 'flex';
    }
}

// Initialize wallet button visibility on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateWalletButtonVisibility);
} else {
    updateWalletButtonVisibility();
}
