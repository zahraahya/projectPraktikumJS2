// ==========================================
// BAGIAN 8 - SORTING
// ==========================================


// ==========================================
// Contoh Sorting dengan Built-in Method
// ==========================================

const numbers = [5, 3, 8, 1];

const ascendingNumbers = [...numbers].sort((a, b) => a - b);
const descendingNumbers = [...numbers].sort((a, b) => b - a);

console.log("Ascending:", ascendingNumbers);
console.log("Descending:", descendingNumbers);


// ==========================================
// Latihan 8.1 - Bubble Sort
// ==========================================

// Bubble Sort mengurutkan data dengan cara
// membandingkan dua elemen yang bersebelahan.
// Jika urutannya salah, kedua elemen ditukar.
//
// Kita menggunakan [...numbers] agar array asli
// tidak berubah (tidak mengalami mutasi).

function bubbleSort(numbers) {
    const arr = [...numbers];

    for (let i = 0; i < arr.length - 1; i++) {

        let swapped = false;

        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (arr[j] > arr[j + 1]) {

                // Tukar posisi dua elemen
                [arr[j], arr[j + 1]] = [
                    arr[j + 1],
                    arr[j]
                ];

                swapped = true;
            }
        }

        // Jika tidak ada pertukaran,
        // berarti array sudah terurut.
        if (!swapped) {
            break;
        }
    }

    return arr;
}


// Contoh penggunaan Latihan 8.1

const numbersForBubbleSort = [5, 3, 8, 1, 4, 2];

const sortedNumbers = bubbleSort(
    numbersForBubbleSort
);

console.log("Array sebelum Bubble Sort:");
console.log(numbersForBubbleSort);

console.log("Array setelah Bubble Sort:");
console.log(sortedNumbers);


// ==========================================
// Latihan 8.2 - Sorting Produk
// ==========================================

// Data produk
const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        rating: 4.7
    },
    {
        id: 4,
        title: "Tablet",
        price: 500,
        rating: 4.0
    },
    {
        id: 5,
        title: "Keyboard",
        price: 75,
        rating: 4.8
    }
];


// Function sortProducts()
// sortBy memiliki empat pilihan:
// - price-asc
// - price-desc
// - rating
// - title

function sortProducts(products, sortBy) {

    // Buat salinan array agar array products asli
    // tidak berubah.
    const sortedProducts = [...products];

    switch (sortBy) {

        // Harga dari rendah ke tinggi
        case "price-asc":
            return sortedProducts.sort(
                (a, b) => a.price - b.price
            );


        // Harga dari tinggi ke rendah
        case "price-desc":
            return sortedProducts.sort(
                (a, b) => b.price - a.price
            );


        // Rating dari tinggi ke rendah
        case "rating":
            return sortedProducts.sort(
                (a, b) => b.rating - a.rating
            );


        // Judul berdasarkan alfabet
        case "title":
            return sortedProducts.sort(
                (a, b) => a.title.localeCompare(b.title)
            );


        // Jika pilihan sortBy tidak tersedia
        default:
            throw new Error(
                "Pilihan sorting tidak valid."
            );
    }
}


// ==========================================
// Contoh penggunaan Latihan 8.2
// ==========================================

console.log("Produk berdasarkan price ascending:");
console.table(
    sortProducts(products, "price-asc")
);


console.log("Produk berdasarkan price descending:");
console.table(
    sortProducts(products, "price-desc")
);


console.log("Produk berdasarkan rating:");
console.table(
    sortProducts(products, "rating")
);


console.log("Produk berdasarkan title:");
console.table(
    sortProducts(products, "title")
);