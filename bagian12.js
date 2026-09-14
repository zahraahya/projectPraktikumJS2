// ==========================================
// BAGIAN 12 - MAP (STRUKTUR DATA)
// ==========================================


// Data produk
const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones"
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio"
    },
    {
        id: 4,
        title: "Tablet",
        price: 500,
        category: "tablets"
    },
    {
        id: 5,
        title: "Keyboard",
        price: 75,
        category: "accessories"
    }
];


// ==========================================
// Latihan 12.1 - Build Product Lookup
// ==========================================

function buildProductLookup(products) {

    // Membuat Map kosong untuk menyimpan
    // pasangan id -> product
    const productMap = new Map();

    // Memasukkan setiap produk ke dalam Map
    for (const product of products) {

        // key   = product.id
        // value = seluruh object product
        productMap.set(product.id, product);
    }

    // Mengembalikan Map yang sudah berisi
    // seluruh produk
    return productMap;
}


// Membuat product lookup
const productLookup = buildProductLookup(products);


// ==========================================
// Menggunakan Map untuk mencari produk
// ==========================================

// get() digunakan untuk mengambil produk
// berdasarkan key/id.
const product1 = productLookup.get(1);
const product3 = productLookup.get(3);

console.log("Produk dengan ID 1:");
console.log(product1);

console.log("Produk dengan ID 3:");
console.log(product3);


// Jika ID tidak ditemukan, get()
// akan menghasilkan undefined.
const product10 = productLookup.get(10);

console.log("Produk dengan ID 10:");
console.log(product10);


// Menampilkan seluruh isi Map
console.log("Product Lookup:");
console.log(productLookup);


// Menampilkan jumlah data di dalam Map
console.log("Jumlah produk dalam Map:");
console.log(productLookup.size);