// ==========================================
// BAGIAN 16 - ALGORITHM COMPLEXITY (BIG-O)
// ==========================================

// Jobsheet membahas Big-O secara intuitif:
// O(1)    -> waktu tetap
// O(n)    -> waktu bertambah secara linear
// O(log n)-> data dibagi dua setiap langkah
// O(n²)   -> pertumbuhan kuadratis, misalnya nested loop


// ==========================================
// Latihan 16.1
// Membandingkan Linear Search dan Binary Search
// pada 10.000 elemen
// ==========================================

// ------------------------------------------
// Linear Search dengan penghitung langkah
// ------------------------------------------

function linearSearchWithSteps(array, target) {
    let steps = 0;

    for (let i = 0; i < array.length; i++) {
        steps++;

        if (array[i] === target) {
            return {
                index: i,
                steps: steps
            };
        }
    }

    return {
        index: -1,
        steps: steps
    };
}


// ------------------------------------------
// Binary Search dengan penghitung langkah
// ------------------------------------------

function binarySearchWithSteps(array, target) {
    let left = 0;
    let right = array.length - 1;
    let steps = 0;

    while (left <= right) {
        steps++;

        const middle = Math.floor((left + right) / 2);

        if (array[middle] === target) {
            return {
                index: middle,
                steps: steps
            };
        }

        if (array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return {
        index: -1,
        steps: steps
    };
}


// Membuat array terurut berisi 10.000 elemen
const sortedArray = Array.from(
    { length: 10000 },
    (_, index) => index + 1
);

// Target diletakkan di bagian paling akhir
// agar linear search menunjukkan kondisi terburuk
const target = 10000;

const linearResult = linearSearchWithSteps(
    sortedArray,
    target
);

const binaryResult = binarySearchWithSteps(
    sortedArray,
    target
);

console.log("===== LATIHAN 16.1 =====");

console.log("Jumlah data:", sortedArray.length);
console.log("Target:", target);

console.log("\nHasil Linear Search:");
console.log("Index:", linearResult.index);
console.log("Jumlah pemeriksaan:", linearResult.steps);

console.log("\nHasil Binary Search:");
console.log("Index:", binaryResult.index);
console.log("Jumlah pemeriksaan:", binaryResult.steps);

console.log("\nPerbandingan:");
console.log(
    "Linear Search:",
    linearResult.steps,
    "pemeriksaan"
);

console.log(
    "Binary Search:",
    binaryResult.steps,
    "pemeriksaan"
);


// ==========================================
// Latihan 16.2
// Membandingkan Nested Loop dengan Grouping
// untuk mencari pasangan produk dengan kategori sama
// ==========================================

// Membuat 1.000 produk.
// Produk dibagi ke beberapa kategori.
const products = Array.from(
    { length: 1000 },
    (_, index) => ({
        id: index + 1,
        title: `Product ${index + 1}`,
        category: `category-${(index % 5) + 1}`
    })
);


// ------------------------------------------
// Pendekatan 1 - Nested Loop
// Kompleksitas: O(n²)
// ------------------------------------------

function findPairsUsingNestedLoop(products) {
    const pairs = [];
    let comparisons = 0;

    for (let i = 0; i < products.length; i++) {

        for (let j = i + 1; j < products.length; j++) {

            comparisons++;

            if (products[i].category === products[j].category) {
                pairs.push([
                    products[i],
                    products[j]
                ]);
            }
        }
    }

    return {
        pairs: pairs,
        comparisons: comparisons
    };
}


const nestedLoopResult = findPairsUsingNestedLoop(products);

console.log("\n===== NESTED LOOP =====");

console.log(
    "Jumlah pasangan kategori sama:",
    nestedLoopResult.pairs.length
);

console.log(
    "Jumlah perbandingan:",
    nestedLoopResult.comparisons
);


// ------------------------------------------
// Pendekatan 2 - Grouping dengan Map
// Kompleksitas grouping: O(n)
// ------------------------------------------

function groupProductsByCategory(products) {
    const groupedProducts = new Map();
    let operations = 0;

    for (const product of products) {
        operations++;

        if (!groupedProducts.has(product.category)) {
            groupedProducts.set(product.category, []);
        }

        groupedProducts.get(product.category).push(product);
    }

    return {
        groupedProducts: groupedProducts,
        operations: operations
    };
}


const groupedResult = groupProductsByCategory(products);

console.log("\n===== GROUPING DENGAN MAP =====");

console.log(
    "Jumlah kategori:",
    groupedResult.groupedProducts.size
);

console.log(
    "Jumlah operasi grouping:",
    groupedResult.operations
);

console.log(
    "Hasil grouping:",
    groupedResult.groupedProducts
);


// ------------------------------------------
// Membentuk pasangan dari hasil grouping
// ------------------------------------------

function createPairsFromGroups(groupedProducts) {
    const pairs = [];

    for (const productsInCategory of groupedProducts.values()) {

        for (let i = 0; i < productsInCategory.length; i++) {

            for (
                let j = i + 1;
                j < productsInCategory.length;
                j++
            ) {
                pairs.push([
                    productsInCategory[i],
                    productsInCategory[j]
                ]);
            }
        }
    }

    return pairs;
}


const groupedPairs = createPairsFromGroups(
    groupedResult.groupedProducts
);

console.log("\nJumlah pasangan dari hasil grouping:");
console.log(groupedPairs.length);


// ==========================================
// Kesimpulan Latihan 16.2
// ==========================================

console.log("\n===== KESIMPULAN LATIHAN 16.2 =====");

console.log(
    "Nested loop melakukan:",
    nestedLoopResult.comparisons,
    "perbandingan."
);

console.log(
    "Grouping dengan Map hanya membutuhkan:",
    groupedResult.operations,
    "operasi untuk proses grouping."
);

console.log(
    "Grouping lebih efisien untuk mengelompokkan produk berdasarkan kategori."
);