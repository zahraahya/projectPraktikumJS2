// ==========================================
// BAGIAN 17 - DOM MANIPULATION
// ==========================================


// ==========================================
// Data 5 Produk Dummy
// ==========================================

const products = [
    {
        id: 1,
        title: "Laptop",
        thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        category: "laptops",
        price: 1200,
        rating: 4.5
    },
    {
        id: 2,
        title: "Smartphone",
        thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        category: "smartphones",
        price: 800,
        rating: 4.2
    },
    {
        id: 3,
        title: "Mens Shoes",
        thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg",
        category: "mens-shoes",
        price: 45,
        rating: 4.1
    },
    {
        id: 4,
        title: "Red Lipstick",
        thumbnail: "https://cdn.dummyjson.com/product-images/66/thumbnail.jpg",
        category: "beauty",
        price: 12,
        rating: 4.3
    },
    {
        id: 5,
        title: "Perfume",
        thumbnail: "https://cdn.dummyjson.com/product-images/74/thumbnail.jpg",
        category: "fragrances",
        price: 30,
        rating: 4.0
    }
];


// ==========================================
// Latihan 17.1
// Render 5 Produk ke DOM
// ==========================================

function renderProducts(products) {

    // Mengambil elemen dengan id product-list
    const container = document.querySelector("#product-list");

    // Mengosongkan container sebelum melakukan render
    container.innerHTML = "";

    // Melakukan perulangan untuk setiap produk
    for (const product of products) {

        // Membuat elemen div baru
        const card = document.createElement("div");

        // Memberikan class product-card
        card.classList.add("product-card");

        // Mengisi isi product card
        card.innerHTML = `
            <img
                src="${product.thumbnail}"
                alt="${product.title}"
            >

            <h3>${product.title}</h3>

            <p>${product.category}</p>

            <p>Harga: $${product.price}</p>

            <p>Rating: ${product.rating}</p>
        `;

        // Menambahkan card ke dalam product-list
        container.append(card);
    }
}


// ==========================================
// Menjalankan Function
// ==========================================

renderProducts(products);