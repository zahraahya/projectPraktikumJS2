// ==========================================
// BAGIAN 13 - STACK (LIFO)
// ==========================================

// Stack menggunakan prinsip:
// Last In, First Out (LIFO)
//
// Artinya, data yang terakhir masuk
// akan menjadi data yang pertama keluar.


// ==========================================
// Latihan 13.1 - Implementasi Stack
// ==========================================

class Stack {

    constructor() {

        // Array digunakan untuk menyimpan
        // seluruh item di dalam Stack.
        this.items = [];
    }

    // Menambahkan item ke bagian paling atas Stack
    push(item) {
        this.items.push(item);
    }

    // Mengambil dan menghapus item paling atas
    // dari Stack
    pop() {
        return this.items.pop();
    }

    // Melihat item paling atas tanpa menghapusnya
    peek() {
        return this.items[this.items.length - 1];
    }

    // Mengecek apakah Stack kosong
    isEmpty() {
        return this.items.length === 0;
    }
}


// Contoh penggunaan Stack

const stack = new Stack();

stack.push("Laptop");
stack.push("Smartphone");
stack.push("Tablet");

console.log("Isi Stack:");
console.log(stack.items);

console.log("Item paling atas:");
console.log(stack.peek());

console.log("Item yang dikeluarkan:");
console.log(stack.pop());

console.log("Isi Stack setelah pop:");
console.log(stack.items);

console.log("Apakah Stack kosong?");
console.log(stack.isEmpty());


// ==========================================
// Latihan 13.2 - Search History dan Undo Search
// ==========================================

// Stack digunakan untuk menyimpan
// riwayat pencarian user.

const searchHistory = new Stack();


// Function untuk menambahkan keyword
// ke dalam search history
function search(keyword) {

    searchHistory.push(keyword);

    console.log(
        `Pencarian: ${keyword}`
    );
}


// Function untuk melakukan undo search
function undoSearch() {

    // Menghapus pencarian terakhir
    const previousSearch = searchHistory.pop();

    if (previousSearch === undefined) {

        console.log(
            "Tidak ada riwayat pencarian."
        );

        return null;
    }

    // Setelah pencarian terakhir dihapus,
    // peek() mengambil pencarian sebelumnya.
    const currentSearch = searchHistory.peek();

    console.log(
        `Undo dari: ${previousSearch}`
    );

    if (currentSearch !== undefined) {

        console.log(
            `Kembali ke pencarian: ${currentSearch}`
        );

    } else {

        console.log(
            "Tidak ada pencarian sebelumnya."
        );
    }

    return currentSearch;
}


// Simulasi pencarian user

search("laptop");
search("phone");
search("tablet");

console.log("\nRiwayat pencarian:");
console.log(searchHistory.items);


// Undo pencarian "tablet"
console.log("\n--- Undo 1 ---");
undoSearch();


// Undo pencarian "phone"
console.log("\n--- Undo 2 ---");
undoSearch();


// Undo pencarian "laptop"
console.log("\n--- Undo 3 ---");
undoSearch();


// Mencoba undo ketika Stack sudah kosong
console.log("\n--- Undo 4 ---");
undoSearch();