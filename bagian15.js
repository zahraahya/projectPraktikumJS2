// ==========================================
// BAGIAN 15 - RECURSION
// ==========================================

// Recursion adalah teknik ketika sebuah function
// memanggil dirinya sendiri.

// ==========================================
// Contoh - Countdown dengan Recursion
// ==========================================

function countdown(n) {
    // Base case / kondisi berhenti
    if (n <= 0) {
        console.log("Selesai");
        return;
    }

    console.log(n);

    // Recursive call
    countdown(n - 1);
}

countdown(5);


// ==========================================
// Data Kategori Bertingkat
// ==========================================

const categories = [
    {
        name: "Electronics",
        children: [
            {
                name: "Laptop",
                children: []
            },
            {
                name: "Phone",
                children: []
            }
        ]
    }
];


// ==========================================
// Latihan 15.1
// Menampilkan Semua Kategori dan Subkategori
// ==========================================

function printCategories(categories, depth = 0) {
    for (const category of categories) {

        // Memberikan indentasi berdasarkan depth
        console.log(" ".repeat(depth) + category.name);

        // Jika kategori memiliki children,
        // function memanggil dirinya sendiri
        if (category.children.length > 0) {
            printCategories(category.children, depth + 1);
        }
    }
}


// Menjalankan function
console.log("\nDaftar Kategori:");

printCategories(categories);