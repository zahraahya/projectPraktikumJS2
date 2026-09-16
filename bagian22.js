// ==========================================
// BAGIAN 22 - PROMISE
// ==========================================


// ==========================================
// Contoh Dasar Promise
// ==========================================

const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {
        resolve("Data berhasil diambil");
    } else {
        reject("Terjadi error");
    }
});

promise
    .then(result => {
        console.log("Hasil Promise:");
        console.log(result);
    })
    .catch(error => {
        console.error("Error:");
        console.error(error);
    })
    .finally(() => {
        console.log(
            "Proses Promise selesai."
        );
    });


// ==========================================
// Promise dengan Simulasi Pengambilan Data
// ==========================================

function getProducts() {

    return new Promise((resolve, reject) => {

        const products = [
            {
                id: 1,
                title: "Laptop",
                price: 1200,
                category: "laptops",
                rating: 4.5
            },
            {
                id: 2,
                title: "Smartphone",
                price: 800,
                category: "smartphones",
                rating: 4.2
            },
            {
                id: 3,
                title: "Headphones",
                price: 100,
                category: "audio",
                rating: 4.0
            },
            {
                id: 4,
                title: "Tablet",
                price: 500,
                category: "tablets",
                rating: 4.3
            },
            {
                id: 5,
                title: "Keyboard",
                price: 75,
                category: "accessories",
                rating: 4.1
            }
        ];

        const success = true;

        if (success) {
            resolve(products);
        } else {
            reject(
                new Error(
                    "Gagal mengambil data produk."
                )
            );
        }
    });
}


// ==========================================
// Menggunakan getProducts()
// ==========================================

console.log("\n===== GET PRODUCTS =====");

getProducts()
    .then(products => {

        console.log(
            "Data produk berhasil diperoleh."
        );

        console.table(products);

        return products;
    })
    .then(products => {

        const totalProducts =
            products.length;

        console.log(
            "Jumlah produk:",
            totalProducts
        );
    })
    .catch(error => {

        console.error(
            "Terjadi kesalahan:",
            error.message
        );
    })
    .finally(() => {

        console.log(
            "Proses pengambilan produk selesai."
        );
    });


// ==========================================
// Simulasi Promise Pending
// ==========================================

function delayedMessage() {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(
                "Data selesai diproses setelah 2 detik."
            );

        }, 2000);
    });
}


console.log(
    "\nMenunggu Promise..."
);

delayedMessage()
    .then(message => {

        console.log(message);

    });