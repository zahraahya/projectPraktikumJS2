// ==========================================
// BAGIAN 7 - BINARY SEARCH
// ==========================================


// ==========================================
// Latihan 7.1 - Binary Search
// ==========================================

// Binary search digunakan untuk mencari target
// pada array yang SUDAH TERURUT.
//
// Berbeda dengan linear search yang memeriksa
// data satu per satu, binary search membagi
// area pencarian menjadi dua bagian.

function binarySearch(sortedArray, target) {

    // Menentukan batas kiri dan kanan
    // dari area pencarian.
    let left = 0;
    let right = sortedArray.length - 1;

    // Selama area pencarian masih valid
    while (left <= right) {

        // Menentukan posisi tengah.
        // Math.floor() digunakan agar hasilnya
        // berupa index bilangan bulat.
        const mid = Math.floor((left + right) / 2);

        // Jika elemen tengah sama dengan target,
        // berarti target ditemukan.
        if (sortedArray[mid] === target) {
            return mid;
        }

        // Jika nilai tengah lebih kecil dari target,
        // target hanya mungkin berada di bagian kanan.
        if (sortedArray[mid] < target) {
            left = mid + 1;
        }

        // Jika nilai tengah lebih besar dari target,
        // target hanya mungkin berada di bagian kiri.
        else {
            right = mid - 1;
        }
    }

    // Jika target tidak ditemukan.
    return -1;
}


// Contoh penggunaan Latihan 7.1

const sortedNumbers = [10, 20, 30, 40, 50, 60, 70];

const binaryResult = binarySearch(
    sortedNumbers,
    50
);

console.log("Array terurut:", sortedNumbers);
console.log("Target: 50");
console.log("Index target:", binaryResult);


// Mencari data yang tidak ada
const binaryNotFound = binarySearch(
    sortedNumbers,
    100
);

console.log("Target: 100");
console.log("Index target:", binaryNotFound);


// ==========================================
// Latihan 7.2 - Binary Search Berdasarkan Price
// ==========================================

// Data produk
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
    },
    {
        id: 5,
        title: "Keyboard",
        price: 75,
        stock: 20
    }
];


// ------------------------------------------
// Mengurutkan produk berdasarkan price
// ------------------------------------------

// Spread operator (...) digunakan agar kita
// membuat array baru sebelum melakukan sort(),
// sehingga array products asli tidak diubah.

const sortedProducts = [...products].sort(
    (a, b) => a.price - b.price
);

console.log("Produk setelah diurutkan berdasarkan price:");
console.table(sortedProducts);


// ------------------------------------------
// Function binarySearchByPrice()
// ------------------------------------------

// Function ini mencari produk berdasarkan
// nilai price menggunakan algoritma binary search.

function binarySearchByPrice(sortedProducts, targetPrice) {

    let left = 0;
    let right = sortedProducts.length - 1;

    while (left <= right) {

        const mid = Math.floor(
            (left + right) / 2
        );

        const currentPrice = sortedProducts[mid].price;

        // Jika harga produk pada posisi tengah
        // sama dengan harga yang dicari.
        if (currentPrice === targetPrice) {
            return sortedProducts[mid];
        }

        // Jika harga tengah lebih kecil,
        // cari ke bagian kanan.
        if (currentPrice < targetPrice) {
            left = mid + 1;
        }

        // Jika harga tengah lebih besar,
        // cari ke bagian kiri.
        else {
            right = mid - 1;
        }
    }

    // Produk tidak ditemukan
    return null;
}


// Contoh penggunaan binarySearchByPrice()

const foundProduct = binarySearchByPrice(
    sortedProducts,
    500
);

console.log("Produk dengan harga 500:");
console.log(foundProduct);


// Mencoba mencari harga yang tidak ada
const notFoundProduct = binarySearchByPrice(
    sortedProducts,
    1000
);

console.log("Produk dengan harga 1000:");
console.log(notFoundProduct);