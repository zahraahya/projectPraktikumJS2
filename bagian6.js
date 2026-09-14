// ==========================================
// BAGIAN 6 - SEARCHING (LINEAR SEARCH)
// ==========================================


// ==========================================
// Latihan 6.1 - Linear Search
// ==========================================

// Function linearSearch digunakan untuk mencari
// posisi/index dari target di dalam sebuah array.
//
// Jika target ditemukan, function mengembalikan index-nya.
// Jika target tidak ditemukan, function mengembalikan -1.
//
// Sesuai jobsheet, pencarian dibuat manual menggunakan loop
// dan tidak menggunakan indexOf() atau find().

function linearSearch(array, target) {

    // Periksa setiap elemen array satu per satu
    for (let i = 0; i < array.length; i++) {

        // Jika elemen pada index saat ini sama dengan target
        if (array[i] === target) {
            return i;
        }
    }

    // Jika seluruh elemen sudah diperiksa
    // tetapi target tidak ditemukan
    return -1;
}


// Contoh penggunaan Latihan 6.1

const numbers = [10, 25, 30, 45, 50];

const searchResult = linearSearch(numbers, 30);

console.log("Array:", numbers);
console.log("Target: 30");
console.log("Index target:", searchResult);


// Mencoba target yang tidak terdapat dalam array
const notFoundResult = linearSearch(numbers, 100);

console.log("Target: 100");
console.log("Index target:", notFoundResult);


// ==========================================
// Latihan 6.2 - Linear Search Berdasarkan ID Produk
// ==========================================

// Pada latihan ini pola linear search diterapkan
// pada array yang berisi object produk.
//
// Target yang dicari adalah id produk,
// bukan keseluruhan object.

const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        stock: 10
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        stock: 15
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        stock: 5
    },
    {
        id: 4,
        title: "Tablet",
        price: 500,
        stock: 8
    }
];


// Function untuk mencari produk berdasarkan id
function linearSearchProductById(products, targetId) {

    // Memeriksa produk satu per satu
    for (let i = 0; i < products.length; i++) {

        // Membandingkan id produk dengan targetId
        if (products[i].id === targetId) {
            return products[i];
        }
    }

    // Jika produk tidak ditemukan
    return null;
}


// Contoh penggunaan Latihan 6.2

const foundProduct = linearSearchProductById(products, 3);

console.log("Produk dengan ID 3:");
console.log(foundProduct);


// Mencoba mencari ID yang tidak ada
const notFoundProduct = linearSearchProductById(products, 10);

console.log("Produk dengan ID 10:");
console.log(notFoundProduct);