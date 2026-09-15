// ==========================================
// BAGIAN 19 - EVENT HANDLING
// ==========================================


// ==========================================
// DATA PRODUK
// ==========================================

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
        category: "phones",
        rating: 4.2
    },
    {
        id: 3,
        title: "Headphones",
        price: 100,
        category: "audio",
        rating: 4.7
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
        rating: 4.6
    },
    {
        id: 6,
        title: "Gaming Laptop",
        price: 1500,
        category: "laptops",
        rating: 4.8
    },
    {
        id: 7,
        title: "Wireless Mouse",
        price: 40,
        category: "accessories",
        rating: 4.4
    },
    {
        id: 8,
        title: "Bluetooth Speaker",
        price: 130,
        category: "audio",
        rating: 4.5
    }
];


// ==========================================
// STATE APLIKASI
// ==========================================

const state = {
    products: products,
    search: "",
    category: "all",
    sortBy: "default",
    favorites: [],
    status: "idle"
};


// ==========================================
// FUNGSI RENDER
// ==========================================

function render() {

    // Salin data dari state
    let result = [...state.products];


    // ------------------------------------------
    // FILTER SEARCH
    // ------------------------------------------

    if (state.search.trim() !== "") {

        const keyword = state.search
            .toLowerCase()
            .trim();

        result = result.filter((product) =>
            product.title
                .toLowerCase()
                .includes(keyword)
        );
    }


    // ------------------------------------------
    // FILTER CATEGORY
    // ------------------------------------------

    if (state.category !== "all") {

        result = result.filter(
            (product) =>
                product.category === state.category
        );
    }


    // ------------------------------------------
    // SORTING
    // ------------------------------------------

    switch (state.sortBy) {

        case "price-asc":
            result.sort(
                (a, b) => a.price - b.price
            );
            break;

        case "price-desc":
            result.sort(
                (a, b) => b.price - a.price
            );
            break;

        case "rating-desc":
            result.sort(
                (a, b) => b.rating - a.rating
            );
            break;

        case "title-asc":
            result.sort(
                (a, b) =>
                    a.title.localeCompare(b.title)
            );
            break;

        default:
            break;
    }


    // ------------------------------------------
    // UPDATE STATUS
    // ------------------------------------------

    if (result.length === 0) {
        state.status = "empty";
    } else {
        state.status = "success";
    }


    // ------------------------------------------
    // RENDER STATUS
    // ------------------------------------------

    const statusElement =
        document.querySelector("#status");

    if (state.status === "empty") {
        statusElement.textContent =
            "Produk tidak ditemukan.";
    } else {
        statusElement.textContent =
            `Menampilkan ${result.length} produk`;
    }


    // ------------------------------------------
    // RENDER PRODUK KE DOM
    // ------------------------------------------

    renderProducts(result);
}


// ==========================================
// FUNGSI RENDER PRODUCTS
// ==========================================

function renderProducts(products) {

    const container =
        document.querySelector("#product-list");

    // Kosongkan tampilan sebelumnya
    container.innerHTML = "";


    // Tampilkan setiap produk
    for (const product of products) {

        const card =
            document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <h3>${product.title}</h3>

            <p>
                Kategori: ${product.category}
            </p>

            <p>
                Harga: $${product.price}
            </p>

            <p>
                Rating: ${product.rating}
            </p>
        `;

        container.append(card);
    }
}


// ==========================================
// Latihan 19.1
// Menghubungkan Search Input dengan State
// ==========================================

const searchInput =
    document.querySelector("#search-input");

searchInput.addEventListener(
    "input",
    (event) => {

        // Ambil nilai yang diketik user
        state.search = event.target.value;

        // Render ulang setelah state berubah
        render();
    }
);


// ==========================================
// Latihan 19.1
// Menghubungkan Category Dropdown dengan State
// ==========================================

const categorySelect =
    document.querySelector("#category-select");

categorySelect.addEventListener(
    "change",
    (event) => {

        // Simpan kategori pilihan user ke state
        state.category = event.target.value;

        // Render ulang
        render();
    }
);


// ==========================================
// Latihan 19.1
// Menghubungkan Sort Dropdown dengan State
// ==========================================

const sortSelect =
    document.querySelector("#sort-select");

sortSelect.addEventListener(
    "change",
    (event) => {

        // Simpan pilihan sorting ke state
        state.sortBy = event.target.value;

        // Render ulang
        render();
    }
);


// ==========================================
// RENDER PERTAMA KALI
// ==========================================

render();