// ==========================================
// BAGIAN 21 - ES MODULES
// main.js
// Orchestration
// ==========================================


// ==========================================
// Import Modules
// ==========================================

import {
    linearSearch,
    groupByCategory,
    sortProducts
} from "./algorithms.js";

import {
    fetchProducts
} from "./api.js";

import {
    renderProducts,
    renderCategories,
    renderStatus,
    renderStatistics
} from "./ui.js";

import {
    state
} from "./state.js";

import {
    normalizeText
} from "./utils.js";


// ==========================================
// Load Products
// ==========================================

async function loadProducts() {

    try {

        state.status = "loading";

        renderStatus(state.status);

        const products =
            await fetchProducts();

        state.products = products;

        state.status = "success";

        renderCategories(
            state.products
        );

        render();

    } catch (error) {

        console.error(
            "Gagal mengambil data:",
            error
        );

        state.status = "error";

        renderStatus(state.status);
    }
}


// ==========================================
// Filter Products
// ==========================================

function filterProducts(products) {

    let result = [...products];

    // --------------------------------------
    // Search
    // --------------------------------------

    if (state.search !== "") {

        const keyword =
            normalizeText(state.search);

        result = result.filter(product => {

            const title =
                normalizeText(product.title);

            return title.includes(keyword);
        });
    }


    // --------------------------------------
    // Category
    // --------------------------------------

    if (state.category !== "all") {

        result = result.filter(
            product =>
                product.category ===
                state.category
        );
    }


    // --------------------------------------
    // Sorting
    // --------------------------------------

    result =
        sortProducts(
            result,
            state.sortBy
        );

    return result;
}


// ==========================================
// Render
// ==========================================

function render() {

    const filteredProducts =
        filterProducts(
            state.products
        );

    if (filteredProducts.length === 0) {
        state.status = "empty";
    } else {
        state.status = "success";
    }

    renderStatus(
        state.status
    );

    renderProducts(
        filteredProducts
    );

    renderStatistics(
        filteredProducts
    );
}


// ==========================================
// Event Search
// ==========================================

const searchInput =
    document.querySelector("#search-input");

searchInput.addEventListener(
    "input",
    event => {

        state.search =
            event.target.value;

        render();
    }
);


// ==========================================
// Event Category
// ==========================================

const categorySelect =
    document.querySelector("#category-select");

categorySelect.addEventListener(
    "change",
    event => {

        state.category =
            event.target.value;

        render();
    }
);


// ==========================================
// Event Sorting
// ==========================================

const sortSelect =
    document.querySelector("#sort-select");

sortSelect.addEventListener(
    "change",
    event => {

        state.sortBy =
            event.target.value;

        render();
    }
);


// ==========================================
// Testing Algorithms
// ==========================================

console.log(
    "===== TEST LINEAR SEARCH ====="
);

console.log(
    linearSearch(
        [1, 2, 3, 4, 5],
        3
    )
);


console.log(
    "===== TEST GROUP BY CATEGORY ====="
);

console.log(
    groupByCategory([
        {
            id: 1,
            title: "Laptop",
            category: "electronics"
        },
        {
            id: 2,
            title: "Phone",
            category: "electronics"
        },
        {
            id: 3,
            title: "Chair",
            category: "furniture"
        }
    ])
);


// ==========================================
// Jalankan Aplikasi
// ==========================================

loadProducts();