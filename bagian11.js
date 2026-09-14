// ==========================================
// BAGIAN 11 - SET
// ==========================================

// Set digunakan untuk menyimpan nilai yang unik.
// Jika nilai yang sama dimasukkan lebih dari sekali,
// Set hanya akan menyimpannya satu kali.


// ==========================================
// Latihan 11.1 - Unique Category,
// Unique Brand, dan Unique Tags
// ==========================================

async function getUniqueProductData() {

    try {

        // Mengambil data produk dari DummyJSON
        const response = await fetch(
            "https://dummyjson.com/products?limit=30"
        );

        // Memastikan request berhasil
        if (!response.ok) {
            throw new Error(
                `HTTP error: ${response.status}`
            );
        }

        const data = await response.json();

        // Mengambil array products dari response
        const products = data.products;


        // ==========================================
        // Unique Category
        // ==========================================

        // map() mengambil category dari setiap produk.
        // new Set() membuang category yang duplikat.
        // [... ] mengubah Set kembali menjadi Array.

        const uniqueCategories = [
            ...new Set(
                products.map(product => product.category)
            )
        ];


        // ==========================================
        // Unique Brand
        // ==========================================

        // Tidak semua produk harus memiliki brand.
        // Oleh karena itu, produk tanpa brand
        // dikeluarkan terlebih dahulu.

        const brands = products
            .filter(
                product =>
                    product.brand !== undefined &&
                    product.brand !== null &&
                    product.brand !== ""
            )
            .map(product => product.brand);

        const uniqueBrands = [
            ...new Set(brands)
        ];


        // ==========================================
        // Unique Tags
        // ==========================================

        // tags merupakan array di setiap produk.
        // flatMap() digunakan untuk menggabungkan
        // seluruh tags menjadi satu array.

        const allTags = products.flatMap(
            product => product.tags || []
        );

        // Setelah semua tags menjadi satu array,
        // Set digunakan untuk menghapus duplikat.

        const uniqueTags = [
            ...new Set(allTags)
        ];


        // ==========================================
        // Menampilkan Hasil
        // ==========================================

        console.log(
            "=========================================="
        );

        console.log(
            "UNIQUE DATA PRODUK"
        );

        console.log(
            "=========================================="
        );


        console.log("\nUnique Category:");
        console.log(uniqueCategories);


        console.log("\nUnique Brand:");
        console.log(uniqueBrands);


        console.log("\nUnique Tags:");
        console.log(uniqueTags);


        // Menampilkan jumlah masing-masing
        console.log("\nJumlah unique category:");
        console.log(uniqueCategories.length);

        console.log("\nJumlah unique brand:");
        console.log(uniqueBrands.length);

        console.log("\nJumlah unique tags:");
        console.log(uniqueTags.length);
    }

    catch (error) {

        console.error(
            "Gagal mengambil data produk:",
            error
        );
    }
}


// Menjalankan function
getUniqueProductData();