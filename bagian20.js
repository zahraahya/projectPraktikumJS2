// ==========================================
// BAGIAN 20 - MODERN JAVASCRIPT (ES6+)
// ==========================================


// ==========================================
// Data Produk
// ==========================================

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",
        brand: "TechBrand"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",
        brand: "PhoneBrand"
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        rating: 4.0,
        stock: 8,
        category: "audio",
        brand: "AudioBrand"
    },
    {
        id: 4,
        title: "Tablet",
        price: 500,
        rating: 4.3,
        stock: 12,
        category: "tablets"
    },
    {
        id: 5,
        title: "Keyboard",
        price: 75,
        rating: 4.1,
        stock: 20,
        category: "accessories",
        brand: "TechBrand"
    }
];


// ==========================================
// Contoh ES6+
// ==========================================


// ------------------------------------------
// 1. Template Literal
// ------------------------------------------

const product = products[0];

console.log(
    `Produk: ${product.title}, Harga: $${product.price}`
);


// ------------------------------------------
// 2. Arrow Function
// ------------------------------------------

const productTitles = products.map(
    product => product.title
);

console.log("\nDaftar Produk:");
console.log(productTitles);


// ------------------------------------------
// 3. Destructuring
// ------------------------------------------

// Mengambil beberapa property object secara langsung
const {
    title,
    price,
    category
} = product;

console.log("\nHasil Destructuring:");
console.log("Title:", title);
console.log("Price:", price);
console.log("Category:", category);


// ------------------------------------------
// 4. Spread Operator
// ------------------------------------------

// Membuat object baru tanpa mengubah object asli
const updatedProduct = {
    ...product,
    price: 1100
};

console.log("\nProduk setelah menggunakan Spread:");
console.log(updatedProduct);


// ------------------------------------------
// 5. Rest Parameter
// ------------------------------------------

function calculateTotal(...prices) {
    return prices.reduce(
        (total, price) => total + price,
        0
    );
}

const totalPrice = calculateTotal(
    100,
    200,
    300
);

console.log("\nTotal Harga:");
console.log(totalPrice);


// ------------------------------------------
// 6. Optional Chaining
// ------------------------------------------

// Tidak semua produk memiliki property brand.
// Optional chaining mencegah error ketika property
// yang diakses tidak tersedia.

const brand = products[3]?.brand;

console.log("\nBrand Produk Tablet:");
console.log(brand);


// ------------------------------------------
// 7. Nullish Coalescing
// ------------------------------------------

// Jika brand bernilai null atau undefined,
// gunakan nilai "Unknown Brand".

const displayedBrand =
    products[3]?.brand ?? "Unknown Brand";

console.log("\nBrand yang Ditampilkan:");
console.log(displayedBrand);


// ------------------------------------------
// 8. Default Parameter
// ------------------------------------------

function showProduct(product, currency = "USD") {
    return `${product.title} - ${currency} ${product.price}`;
}

console.log("\nDefault Parameter:");
console.log(showProduct(product));

console.log(
    showProduct(product, "IDR")
);


// ==========================================
// Latihan 20.1
// Refactor getStatistics() dari Bagian 5
// menggunakan Destructuring dan Optional Chaining
// ==========================================

function getStatistics(products = []) {

    // Menghindari proses jika array kosong
    if (products.length === 0) {
        return {
            totalProducts: 0,
            averagePrice: 0,
            highestPrice: 0,
            lowestPrice: 0,
            totalStock: 0,
            averageRating: 0
        };
    }


    // --------------------------------------
    // Menggunakan Destructuring
    // --------------------------------------

    const prices = products.map(
        ({ price = 0 }) => price
    );

    const stocks = products.map(
        ({ stock = 0 }) => stock
    );

    const ratings = products.map(
        ({ rating = 0 }) => rating
    );


    // --------------------------------------
    // Perhitungan Statistik
    // --------------------------------------

    const totalProducts = products.length;

    const averagePrice =
        prices.reduce(
            (total, price) => total + price,
            0
        ) / totalProducts;

    const highestPrice = Math.max(...prices);

    const lowestPrice = Math.min(...prices);

    const totalStock =
        stocks.reduce(
            (total, stock) => total + stock,
            0
        );

    const averageRating =
        ratings.reduce(
            (total, rating) => total + rating,
            0
        ) / totalProducts;


    // --------------------------------------
    // Mengembalikan hasil
    // --------------------------------------

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}


// ==========================================
// Optional Chaining pada Data Statistik
// ==========================================

const statistics = getStatistics(products);

console.log("\n===== HASIL STATISTIK =====");

console.log(
    `Jumlah Produk: ${statistics?.totalProducts ?? 0}`
);

console.log(
    `Rata-rata Harga: $${statistics?.averagePrice?.toFixed(2) ?? "0.00"}`
);

console.log(
    `Harga Tertinggi: $${statistics?.highestPrice ?? 0}`
);

console.log(
    `Harga Terendah: $${statistics?.lowestPrice ?? 0}`
);

console.log(
    `Total Stok: ${statistics?.totalStock ?? 0}`
);

console.log(
    `Rata-rata Rating: ${statistics?.averageRating?.toFixed(2) ?? "0.00"}`
);


// ==========================================
// Contoh Destructuring pada Hasil Statistik
// ==========================================

const {
    totalProducts,
    averagePrice,
    highestPrice,
    lowestPrice,
    totalStock,
    averageRating
} = statistics;

console.log("\n===== DESTRUCTURING HASIL STATISTIK =====");

console.log("Total Products:", totalProducts);
console.log("Average Price:", averagePrice);
console.log("Highest Price:", highestPrice);
console.log("Lowest Price:", lowestPrice);
console.log("Total Stock:", totalStock);
console.log("Average Rating:", averageRating);