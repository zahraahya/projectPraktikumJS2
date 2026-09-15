// ==========================================
// BAGIAN 18 - STATE MANAGEMENT SEDERHANA
// Tanpa Library
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
    // status dapat berupa:
    // idle, loading, success, error, empty
};


// ==========================================
// FUNGSI RENDER
// ==========================================

function render() {

    // Mulai dari seluruh produk yang tersimpan di state
    let result = [...state.products];


    // ------------------------------------------
    // FILTER BERDASARKAN SEARCH
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
    // FILTER BERDASARKAN CATEGORY
    // ------------------------------------------

    if (state.category !== "all") {

        result = result.filter(
            (product) =>
                product.category === state.category
        );
    }


    // ------------------------------------------
    // SORTING BERDASARKAN STATE
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
            // Tidak melakukan sorting
            break;
    }


    // ------------------------------------------
    // MENENTUKAN STATUS DATA
    // ------------------------------------------

    if (result.length === 0) {
        state.status = "empty";
    } else {
        state.status = "success";
    }


    // ------------------------------------------
    // MENAMPILKAN HASIL
    // ------------------------------------------

    console.log("===== HASIL RENDER =====");
    console.log("Search:", state.search);
    console.log("Category:", state.category);
    console.log("Sort By:", state.sortBy);
    console.log("Status:", state.status);
    console.table(result);


    // Jika renderProducts() dari Bagian 17
    // sudah tersedia di file yang sama/project,
    // hasilnya dapat langsung dirender ke DOM.
    //
    // renderProducts(result);
}


// ==========================================
// MENJALANKAN RENDER PERTAMA KALI
// ==========================================

render();


// ==========================================
// CONTOH PERUBAHAN STATE
// ==========================================

// Mengubah search
state.search = "phone";
render();


// Mengubah category
state.search = "";
state.category = "accessories";
render();


// Mengubah sorting
state.category = "all";
state.sortBy = "price-asc";
render();


// Mengubah beberapa state sekaligus
state.search = "";
state.category = "all";
state.sortBy = "rating-desc";
render();