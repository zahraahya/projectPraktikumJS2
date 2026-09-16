// ==========================================
// BAGIAN 21 - ES MODULES
// algorithms.js
// Searching, sorting, grouping
// ==========================================


// ==========================================
// Linear Search
// ==========================================

export function linearSearch(array, target) {

    for (let i = 0; i < array.length; i++) {

        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}


// ==========================================
// Binary Search
// ==========================================

export function binarySearch(array, target) {

    let left = 0;
    let right = array.length - 1;

    while (left <= right) {

        const middle = Math.floor(
            (left + right) / 2
        );

        if (array[middle] === target) {
            return middle;
        }

        if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}


// ==========================================
// Group By Category
// ==========================================

export function groupByCategory(products) {

    const grouped = new Map();

    for (const product of products) {

        if (!grouped.has(product.category)) {
            grouped.set(product.category, []);
        }

        grouped
            .get(product.category)
            .push(product);
    }

    return grouped;
}


// ==========================================
// Sort Products
// ==========================================

export function sortProducts(products, sortBy) {

    const result = [...products];

    switch (sortBy) {

        case "price-asc":
            return result.sort(
                (a, b) => a.price - b.price
            );

        case "price-desc":
            return result.sort(
                (a, b) => b.price - a.price
            );

        case "rating":
            return result.sort(
                (a, b) => b.rating - a.rating
            );

        case "title":
            return result.sort(
                (a, b) =>
                    a.title.localeCompare(b.title)
            );

        default:
            return result;
    }
}