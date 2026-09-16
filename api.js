// ==========================================
// BAGIAN 21 - ES MODULES
// api.js
// Komunikasi dengan DummyJSON
// ==========================================

const API_URL = "https://dummyjson.com/products";


// ==========================================
// Fetch Products
// ==========================================

export async function fetchProducts() {

    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(
            `HTTP Error: ${response.status}`
        );
    }

    const data = await response.json();

    return data.products;
}