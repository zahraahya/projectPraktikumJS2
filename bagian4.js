// ==========================================
// BAGIAN 4 - FLATTENING DATA
// ==========================================

// Data produk dengan nested array
const products = [
    {
        id: 1,
        title: "Laptop",
        tags: [
            "computer",
            "electronics",
            "office"
        ],
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
        tags: [
            "mobile",
            "electronics"
        ],
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
// Latihan 4.1 - Mengambil Seluruh Tags
// ==========================================

// flatMap() digunakan karena kita ingin mengambil
// tags dari setiap produk sekaligus meratakan hasilnya
// menjadi satu array.

const allTags = products.flatMap(product => product.tags);

console.log("Seluruh tags:");
console.log(allTags);


// ==========================================
// Latihan 4.2 - Mengambil Seluruh Comment
// ==========================================

// Setiap produk mempunyai array reviews.
// Dari setiap review kita mengambil comment,
// kemudian flatMap() menggabungkan seluruh comment
// menjadi satu array of strings.

const allComments = products.flatMap(product =>
    product.reviews.map(review => review.comment)
);

console.log("Seluruh comment:");
console.log(allComments);