/**
 * Configuration Loader
 * Loads and parses the config.yaml file
 */

async function loadConfig() {
    try {
        const response = await fetch('config.yaml');
        if (!response.ok) {
            throw new Error(`Failed to load config.yaml: ${response.statusText}`);
        }

        const yamlText = await response.text();
        const config = jsyaml.load(yamlText);

        // Validate required fields
        validateConfig(config);

        // Apply theme if specified
        if (config.theme) {
            applyTheme(config.theme);
        }

        return config;
    } catch (error) {
        console.error('Error loading config:', error);
        throw error;
    }
}

function validateConfig(config) {
    const required = [
        'personal.name',
        'personal.title',
        'contact.email',
        'contact.phone'
    ];

    for (const field of required) {
        const value = getNestedValue(config, field);
        if (!value) {
            throw new Error(`Missing required field: ${field}`);
        }
    }
}

function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

function applyTheme(theme) {
    const root = document.documentElement;

    if (theme.primaryColor) {
        root.style.setProperty('--primary-color', theme.primaryColor);
    }
    if (theme.accentColor) {
        root.style.setProperty('--accent-color', theme.accentColor);
    }
    if (theme.backgroundColor) {
        root.style.setProperty('--background-color', theme.backgroundColor);
    }
    if (theme.textColor) {
        root.style.setProperty('--text-color', theme.textColor);
    }
    if (theme.font) {
        document.body.style.fontFamily = theme.font;
    }
}
