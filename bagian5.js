// ==========================================
// BAGIAN 5 - MAP, FILTER, REDUCE
// DALAM KONTEKS NYATA
// ==========================================

// Data produk
const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops"
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones"
    }
];


// ==========================================
// Contoh Dasar map()
// ==========================================

// map() digunakan untuk melakukan transformasi
// setiap elemen array menjadi bentuk baru.

// Mengambil nama/title dari setiap produk
const titles = products.map(product => product.title);

console.log("Daftar nama produk:");
console.log(titles);


// ==========================================
// Contoh Dasar filter()
// ==========================================

// filter() digunakan untuk menyeleksi data
// berdasarkan kondisi tertentu.

// Mengambil produk dengan harga lebih dari 500
const expensiveProducts = products.filter(
    product => product.price > 500
);

console.log("Produk dengan harga > 500:");
console.log(expensiveProducts);


// ==========================================
// Contoh Dasar reduce()
// ==========================================

// reduce() digunakan untuk melakukan agregasi,
// yaitu menggabungkan banyak nilai menjadi satu nilai.

// Menghitung total seluruh stock produk
const totalStock = products.reduce(
    (sum, product) => sum + product.stock,
    0
);

console.log("Total stock:", totalStock);


// ==========================================
// Latihan 5.1
// ==========================================

// Mengambil produk yang kategorinya "laptops"
// kemudian mengambil harganya menggunakan map()
// dan menjumlahkannya menggunakan reduce().

// Tahap 1: filter()
// Hanya mengambil produk dengan category "laptops".
const laptopPrices = products
    .filter(product => product.category === "laptops")

    // Tahap 2: map()
    // Mengambil nilai price dari produk yang sudah difilter.
    .map(product => product.price);

// Tahap 3: reduce()
// Menjumlahkan seluruh harga produk laptop.
const totalLaptopPrice = laptopPrices.reduce(
    (total, price) => total + price,
    0
);

// Menghitung rata-rata harga laptop.
// Jika tidak ada produk laptop, hasilnya 0
// agar tidak terjadi pembagian dengan 0.
const averageLaptopPrice = laptopPrices.length > 0
    ? totalLaptopPrice / laptopPrices.length
    : 0;

console.log("Harga produk laptop:", laptopPrices);
console.log("Rata-rata harga laptop:", averageLaptopPrice);


// ==========================================
// Latihan 5.2
// ==========================================

// Function ini digunakan untuk menghasilkan
// statistik keseluruhan dari data produk.
//
// Output yang diminta:
// - totalProducts
// - averagePrice
// - highestPrice
// - lowestPrice
// - totalStock
// - averageRating

function getStatistics(products) {

    // Jika array kosong, tidak ada statistik
    // yang dapat dihitung.
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

    // ------------------------------------------
    // Total Produk
    // ------------------------------------------

    const totalProducts = products.length;


    // ------------------------------------------
    // Total Harga
    // ------------------------------------------

    const totalPrice = products.reduce(
        (total, product) => total + product.price,
        0
    );


    // ------------------------------------------
    // Rata-rata Harga
    // ------------------------------------------

    const averagePrice = totalPrice / totalProducts;


    // ------------------------------------------
    // Harga Tertinggi
    // ------------------------------------------

    const highestPrice = products.reduce(
        (highest, product) =>
            product.price > highest ? product.price : highest,
        products[0].price
    );


    // ------------------------------------------
    // Harga Terendah
    // ------------------------------------------

    const lowestPrice = products.reduce(
        (lowest, product) =>
            product.price < lowest ? product.price : lowest,
        products[0].price
    );


    // ------------------------------------------
    // Total Stock
    // ------------------------------------------

    const totalStock = products.reduce(
        (total, product) => total + product.stock,
        0
    );


    // ------------------------------------------
    // Rata-rata Rating
    // ------------------------------------------

    const totalRating = products.reduce(
        (total, product) => total + product.rating,
        0
    );

    const averageRating = totalRating / totalProducts;


    // Mengembalikan seluruh hasil statistik
    // dalam bentuk object.
    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}


// Menjalankan function getStatistics()
const statistics = getStatistics(products);

console.log("Statistik produk:");
console.log(statistics);