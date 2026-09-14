// ==========================================
// BAGIAN 9 - GROUPING DAN AGGREGATION
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
        title: "Gaming Laptop",
        price: 1500,
        category: "laptops"
    },
    {
        id: 3,
        title: "Smartphone",
        price: 800,
        category: "phones"
    },
    {
        id: 4,
        title: "iPhone",
        price: 1100,
        category: "phones"
    },
    {
        id: 5,
        title: "Headphones",
        price: 100,
        category: "audio"
    },
    {
        id: 6,
        title: "Wireless Earbuds",
        price: 80,
        category: "audio"
    },
    {
        id: 7,
        title: "Keyboard",
        price: 75,
        category: "accessories"
    },
    {
        id: 8,
        title: "Mouse",
        price: 40,
        category: "accessories"
    },
    {
        id: 9,
        title: "Monitor",
        price: 300,
        category: "monitors"
    },
    {
        id: 10,
        title: "4K Monitor",
        price: 600,
        category: "monitors"
    }
];


// ==========================================
// Latihan 9.1 - Grouping Berdasarkan Category
// ==========================================

// reduce() digunakan untuk mengubah array products
// menjadi sebuah object yang berisi kelompok produk.
//
// Setiap category akan menjadi key pada object.
// Produk dengan category yang sama akan dimasukkan
// ke dalam array yang sama.

function groupByCategory(products) {

    return products.reduce((groups, product) => {

        const key = product.category;

        // Jika category belum tersedia,
        // buat array kosong terlebih dahulu.
        if (!groups[key]) {
            groups[key] = [];
        }

        // Masukkan produk ke category yang sesuai.
        groups[key].push(product);

        return groups;

    }, {});
}


// Menjalankan fungsi grouping
const groupedProducts = groupByCategory(products);

console.log("Produk yang telah dikelompokkan berdasarkan category:");
console.log(groupedProducts);


// ==========================================
// Latihan 9.2 - Ringkasan Jumlah Produk
// ==========================================

// Dari object hasil grouping,
// kita menghitung jumlah produk pada setiap category.

const categorySummary = Object.entries(groupedProducts)
    .map(([category, products]) => {

        return {
            category: category,
            totalProducts: products.length
        };

    });


// Menampilkan hasil dalam bentuk tabel sederhana
console.log("Ringkasan jumlah produk per category:");

console.table(categorySummary);