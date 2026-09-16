// ==========================================
// BAGIAN 21 - ES MODULES
// utils.js
// Helper umum
// ==========================================


// ==========================================
// Normalize Text
// ==========================================

export function normalizeText(text) {

    return String(text)
        .toLowerCase()
        .trim();
}


// ==========================================
// Delay
// ==========================================

export function delay(milliseconds) {

    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}