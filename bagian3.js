// ==========================================
// BAGIAN 3 - NESTED DATA
// ==========================================

// Dataset produk dengan struktur nested
const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",

        tags: [
            "computer",
            "electronics",
            "office"
        ],

        dimensions: {
            width: 30,
            height: 2,
            depth: 20
        },

        reviews: [
            {
                user: "A",
                rating: 5,
                comment: "Good product"
            },
            {
                user: "B",
                rating: 4,
                comment: "Worth it"
            }
        ]
    },

    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",

        tags: [
            "mobile",
            "electronics"
        ],

        dimensions: {
            width: 7,
            height: 0.8,
            depth: 15
        },

        reviews: [
            {
                user: "C",
                rating: 4,
                comment: "Nice camera"
            },
            {
                user: "D",
                rating: 5,
                comment: "Fast"
            },
            {
                user: "E",
                rating: 3,
                comment: "Battery so-so"
            }
        ]
    }
];


// ==========================================
// Latihan 3.1 - Mengambil Semua Tag
// ==========================================

// Mengambil tags dari setiap produk.
// Pada bagian ini hasilnya masih berupa array di dalam array,
// sesuai dengan instruksi sebelum masuk ke materi flatMap().

const allTagsNested = products.map(product => product.tags);

console.log("Semua tag dalam bentuk nested array:");
console.log(allTagsNested);


// ==========================================
// Latihan 3.2 - Mencari Produk Berdasarkan Tag
// ==========================================

// Mencari semua produk yang mempunyai tag tertentu.
// includes() digunakan untuk mengecek apakah sebuah tag
// terdapat di dalam array tags milik produk.

function findProductsByTag(products, tag) {
    return products.filter(product =>
        product.tags.includes(tag)
    );
}

// Contoh penggunaan
const productsWithElectronicsTag =
    findProductsByTag(products, "electronics");

console.log("Produk dengan tag electronics:");
console.table(productsWithElectronicsTag);


// ==========================================
// Latihan 3.3 - Menghitung Jumlah Review
// ==========================================

// Menghasilkan data baru dengan format:
// { id, title, totalReviews }

const reviewCounts = products.map(product => ({
    id: product.id,
    title: product.title,
    totalReviews: product.reviews.length
}));

console.log("Jumlah review setiap produk:");
console.table(reviewCounts);


// ==========================================
// Latihan 3.4 - Mengumpulkan Review Rating 5
// ==========================================

// Mengambil review yang memiliki rating 5
// dari seluruh produk.

const fiveStarReviews = products.flatMap(product =>
    product.reviews.filter(review => review.rating === 5)
);

console.log("Seluruh review dengan rating 5:");
console.table(fiveStarReviews);


// ==========================================
// Latihan 3.5 - Rata-rata Rating Review
// ==========================================

// Rata-rata dihitung dari rating yang terdapat di dalam
// array reviews, bukan menggunakan field rating pada produk.

const averageReviewRatings = products.map(product => {
    const totalRating = product.reviews.reduce(
        (sum, review) => sum + review.rating,
        0
    );

    const averageRating =
        totalRating / product.reviews.length;

    return {
        id: product.id,
        title: product.title,
        averageRating: averageRating
    };
});

console.log("Rata-rata rating berdasarkan reviews:");
console.table(averageReviewRatings);


// ==========================================
// Latihan 3.6 - Produk dengan Review Terbanyak
// ==========================================

// reduce() digunakan untuk membandingkan jumlah review
// setiap produk dan mengambil produk dengan jumlah terbesar.

const productWithMostReviews = products.reduce(
    (mostReviewed, product) => {
        if (
            product.reviews.length >
            mostReviewed.reviews.length
        ) {
            return product;
        }

        return mostReviewed;
    }
);

console.log("Produk dengan jumlah review terbanyak:");
console.log(productWithMostReviews);


// ==========================================
// Latihan 3.7 - Mengambil Semua Nilai Rating
// ==========================================

// Mengambil rating dari semua review pada semua produk.
// flatMap() digunakan agar hasil akhirnya menjadi satu
// array datar.

const allReviewRatings = products.flatMap(product =>
    product.reviews.map(review => review.rating)
);

console.log("Semua nilai rating dari seluruh review:");
console.log(allReviewRatings);