// ==========================================
// BAGIAN 2 - DATA REPRESENTATION DAN ARRAY OF OBJECTS
// ==========================================

// Dataset Produk
// Dilengkapi hingga 30 produk sesuai instruksi jobsheet

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        category: "laptops",
        stock: 5
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        category: "phones",
        stock: 15
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        stock: 3
    },
    {
        id: 4,
        title: "Tablet",
        price: 500,
        category: "tablets",
        stock: 8
    },
    {
        id: 5,
        title: "Keyboard",
        price: 75,
        category: "accessories",
        stock: 20
    },
    {
        id: 6,
        title: "Mouse",
        price: 40,
        category: "accessories",
        stock: 25
    },
    {
        id: 7,
        title: "Monitor",
        price: 300,
        category: "monitors",
        stock: 7
    },
    {
        id: 8,
        title: "Smartwatch",
        price: 250,
        category: "wearables",
        stock: 12
    },
    {
        id: 9,
        title: "Gaming Laptop",
        price: 1500,
        category: "laptops",
        stock: 6
    },
    {
        id: 10,
        title: "Wireless Earbuds",
        price: 80,
        category: "audio",
        stock: 18
    },
    {
        id: 11,
        title: "Power Bank",
        price: 60,
        category: "accessories",
        stock: 30
    },
    {
        id: 12,
        title: "Webcam",
        price: 90,
        category: "accessories",
        stock: 9
    },
    {
        id: 13,
        title: "Mechanical Keyboard",
        price: 120,
        category: "accessories",
        stock: 14
    },
    {
        id: 14,
        title: "Gaming Mouse",
        price: 70,
        category: "accessories",
        stock: 22
    },
    {
        id: 15,
        title: "4K Monitor",
        price: 600,
        category: "monitors",
        stock: 4
    },
    {
        id: 16,
        title: "Android Phone",
        price: 650,
        category: "phones",
        stock: 11
    },
    {
        id: 17,
        title: "iPhone",
        price: 1100,
        category: "phones",
        stock: 5
    },
    {
        id: 18,
        title: "Bluetooth Speaker",
        price: 130,
        category: "audio",
        stock: 16
    },
    {
        id: 19,
        title: "USB Flash Drive",
        price: 25,
        category: "storage",
        stock: 40
    },
    {
        id: 20,
        title: "External SSD",
        price: 180,
        category: "storage",
        stock: 8
    },
    {
        id: 21,
        title: "External Hard Drive",
        price: 100,
        category: "storage",
        stock: 13
    },
    {
        id: 22,
        title: "Smart TV",
        price: 900,
        category: "electronics",
        stock: 6
    },
    {
        id: 23,
        title: "Digital Camera",
        price: 750,
        category: "cameras",
        stock: 5
    },
    {
        id: 24,
        title: "Action Camera",
        price: 400,
        category: "cameras",
        stock: 10
    },
    {
        id: 25,
        title: "Printer",
        price: 200,
        category: "office",
        stock: 7
    },
    {
        id: 26,
        title: "Projector",
        price: 550,
        category: "office",
        stock: 4
    },
    {
        id: 27,
        title: "Graphics Tablet",
        price: 350,
        category: "accessories",
        stock: 9
    },
    {
        id: 28,
        title: "VR Headset",
        price: 700,
        category: "electronics",
        stock: 3
    },
    {
        id: 29,
        title: "Smart Speaker",
        price: 150,
        category: "electronics",
        stock: 17
    },
    {
        id: 30,
        title: "USB Hub",
        price: 35,
        category: "accessories",
        stock: 28
    }
];


// ==========================================
// Latihan 2.1 - Mencari Produk
// ==========================================

// Mencari produk berdasarkan id menggunakan find()
// Jika produk tidak ditemukan, hasilnya adalah undefined.

function findProductById(products, id) {
    return products.find(product => product.id === id);
}

// Contoh penggunaan
const foundProduct = findProductById(products, 10);

console.log("Hasil pencarian produk:");
console.log(foundProduct);


// ==========================================
// Latihan 2.2 - Stok Menipis
// ==========================================

// Menampilkan produk yang memiliki stok kurang dari 10
// menggunakan filter().

const lowStockProducts = products.filter(
    product => product.stock < 10
);

console.log("Produk dengan stok kurang dari 10:");
console.table(lowStockProducts);


// ==========================================
// Latihan 2.3 - Mengubah Data Tanpa Mutasi
// ==========================================

// Membuat array baru dengan stok produk tertentu yang diperbarui.
// Array products asli tidak diubah.

function updateStock(products, id, newStock) {
    return products.map(product =>
        product.id === id
            ? { ...product, stock: newStock }
            : product
    );
}

// Contoh penggunaan
const updatedProducts = updateStock(products, 10, 25);

console.log("Data produk setelah stok diperbarui:");
console.table(updatedProducts);

// Membuktikan bahwa array asli tidak berubah
console.log("Data produk asli:");
console.table(products);