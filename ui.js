// ==========================================
// BAGIAN 21 - ES MODULES
// ui.js
// Rendering DOM
// ==========================================


// ==========================================
// Render Products
// ==========================================

export function renderProducts(products) {

    const container =
        document.querySelector("#product-list");

    container.innerHTML = "";

    if (products.length === 0) {

        container.innerHTML = `
            <p>Tidak ada produk yang ditemukan.</p>
        `;

        return;
    }

    for (const product of products) {

        const card =
            document.createElement("div");

        card.classList.add("product-card");

        card.innerHTML = `
            <img
                src="${product.thumbnail}"
                alt="${product.title}"
            >

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

            <p>
                Stock: ${product.stock}
            </p>
        `;

        container.append(card);
    }
}


// ==========================================
// Render Categories
// ==========================================

export function renderCategories(products) {

    const categorySelect =
        document.querySelector("#category-select");

    const categories = [
        ...new Set(
            products.map(
                product => product.category
            )
        )
    ];

    categorySelect.innerHTML = `
        <option value="all">
            Semua Kategori
        </option>
    `;

    for (const category of categories) {

        const option =
            document.createElement("option");

        option.value = category;
        option.textContent = category;

        categorySelect.append(option);
    }
}


// ==========================================
// Render Status
// ==========================================

export function renderStatus(status) {

    const statusElement =
        document.querySelector("#status");

    switch (status) {

        case "loading":
            statusElement.textContent =
                "Sedang mengambil data...";

            break;

        case "success":
            statusElement.textContent =
                "Data berhasil dimuat.";

            break;

        case "error":
            statusElement.textContent =
                "Terjadi kesalahan saat mengambil data.";

            break;

        case "empty":
            statusElement.textContent =
                "Tidak ada produk yang sesuai.";

            break;

        default:
            statusElement.textContent =
                "Menunggu data...";
    }
}


// ==========================================
// Render Statistics
// ==========================================

export function renderStatistics(products) {

    const statisticsElement =
        document.querySelector("#statistics");

    if (products.length === 0) {

        statisticsElement.innerHTML = "";

        return;
    }

    const totalProducts =
        products.length;

    const averagePrice =
        products.reduce(
            (total, product) =>
                total + product.price,
            0
        ) / totalProducts;

    const totalStock =
        products.reduce(
            (total, product) =>
                total + product.stock,
            0
        );

    const averageRating =
        products.reduce(
            (total, product) =>
                total + product.rating,
            0
        ) / totalProducts;

    statisticsElement.innerHTML = `
        <h2>Statistics</h2>

        <p>
            Total Products:
            ${totalProducts}
        </p>

        <p>
            Average Price:
            $${averagePrice.toFixed(2)}
        </p>

        <p>
            Total Stock:
            ${totalStock}
        </p>

        <p>
            Average Rating:
            ${averageRating.toFixed(2)}
        </p>
    `;
}