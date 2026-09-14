// ==========================================
// BAGIAN 10 - FREQUENCY COUNTING
// ==========================================


// ==========================================
// Latihan 10.1 - countFrequency()
// ==========================================

// Function ini menghitung berapa kali setiap nilai
// muncul di dalam sebuah array.
//
// Contoh:
// ["laptop", "phone", "laptop"]
//
// Hasil:
// {
//     laptop: 2,
//     phone: 1
// }

function countFrequency(array) {

    return array.reduce((counts, item) => {

        // Jika item belum ada di object,
        // nilainya dianggap 0.
        // Kemudian ditambah 1.
        counts[item] = (counts[item] || 0) + 1;

        return counts;

    }, {});
}


// Contoh dari jobsheet

const words = [
    "laptop",
    "phone",
    "laptop",
    "tablet",
    "phone",
    "laptop"
];

const wordFrequency = countFrequency(words);

console.log("Frequency kata:");
console.log(wordFrequency);


// ==========================================
// Latihan 10.2 - Frequency Data Produk
// ==========================================

// Data produk diambil dari DummyJSON.
// Endpoint ini mengembalikan data produk
// dalam bentuk object:
// {
//     products: [...],
//     total: ...,
//     skip: ...,
//     limit: ...
// }

async function processProductFrequency() {

    try {

        const response = await fetch(
            "https://dummyjson.com/products?limit=30"
        );

        // Memastikan request berhasil.
        if (!response.ok) {
            throw new Error(
                `HTTP error: ${response.status}`
            );
        }

        const data = await response.json();

        // Data produk berada di dalam property products.
        const products = data.products;


        // ==========================================
        // Frequency Category
        // ==========================================

        const categoryFrequency = countFrequency(
            products.map(product => product.category)
        );


        // ==========================================
        // Frequency Seluruh Tags
        // ==========================================

        // Setiap produk memiliki array tags.
        // flatMap() digunakan untuk menggabungkan
        // seluruh tags menjadi satu array.
        //
        // Contoh:
        // [
        //     ["beauty", "mascara"],
        //     ["beauty", "skin-care"]
        // ]
        //
        // menjadi:
        // [
        //     "beauty",
        //     "mascara",
        //     "beauty",
        //     "skin-care"
        // ]

        const allTags = products.flatMap(
            product => product.tags || []
        );

        const tagFrequency = countFrequency(
            allTags
        );


        // ==========================================
        // Frequency Rating
        // ==========================================

        // Rating pada data produk dapat berupa angka
        // desimal, misalnya 4.5 atau 4.2.
        //
        // Sesuai instruksi jobsheet, rating dibulatkan
        // ke bilangan bulat terdekat terlebih dahulu.

        const roundedRatings = products.map(
            product => Math.round(product.rating)
        );

        const ratingFrequency = countFrequency(
            roundedRatings
        );


        // ==========================================
        // Frequency Brand
        // ==========================================

        // Tidak semua produk harus memiliki brand.
        // Karena itu hanya produk yang mempunyai
        // nilai brand yang dihitung.

        const brands = products
            .filter(
                product =>
                    product.brand !== undefined &&
                    product.brand !== null &&
                    product.brand !== ""
            )
            .map(product => product.brand);

        const brandFrequency = countFrequency(
            brands
        );


        // ==========================================
        // Menampilkan Hasil
        // ==========================================

        console.log(
            "=========================================="
        );
        console.log(
            "FREQUENCY DATA PRODUK DUMMYJSON"
        );
        console.log(
            "=========================================="
        );


        console.log("\nFrequency Category:");
        console.table(categoryFrequency);


        console.log("\nFrequency Tags:");
        console.table(tagFrequency);


        console.log("\nFrequency Rating:");
        console.table(ratingFrequency);


        console.log("\nFrequency Brand:");
        console.table(brandFrequency);
    }

    catch (error) {

        console.error(
            "Gagal memproses data produk:",
            error
        );
    }
}


// Menjalankan proses
processProductFrequency();