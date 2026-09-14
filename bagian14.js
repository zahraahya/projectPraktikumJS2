// ==========================================
// BAGIAN 14 - QUEUE (FIFO)
// ==========================================

// Queue menggunakan prinsip:
// First In, First Out (FIFO)
//
// Artinya, data yang pertama masuk
// akan menjadi data yang pertama keluar.


// ==========================================
// Latihan 14.1 - Implementasi Queue
// ==========================================

class Queue {

    constructor() {

        // Array digunakan untuk menyimpan
        // seluruh item di dalam Queue.
        this.items = [];
    }

    // Menambahkan item ke bagian belakang Queue
    enqueue(item) {
        this.items.push(item);
    }

    // Mengambil dan menghapus item paling depan
    // dari Queue
    dequeue() {
        return this.items.shift();
    }

    // Melihat item paling depan
    // tanpa menghapusnya
    peek() {
        return this.items[0];
    }
}


// ==========================================
// Studi Kasus - Request Queue
// ==========================================

// Membuat Queue untuk menyimpan
// request yang akan diproses.
const requestQueue = new Queue();


// Menambahkan request ke dalam antrean
requestQueue.enqueue("Request 1 - Login");
requestQueue.enqueue("Request 2 - Load Products");
requestQueue.enqueue("Request 3 - Load Categories");
requestQueue.enqueue("Request 4 - Update Profile");

console.log("Isi Request Queue:");
console.log(requestQueue.items);


// Melihat request paling depan
console.log("\nRequest paling depan:");
console.log(requestQueue.peek());


// ==========================================
// Memproses Request
// ==========================================

// Request diproses satu per satu
// sesuai urutan kedatangannya.

console.log("\nMemproses request:");

while (requestQueue.items.length > 0) {

    const request = requestQueue.dequeue();

    console.log(
        `Memproses: ${request}`
    );
}


// Mengecek kondisi Queue setelah
// seluruh request diproses
console.log("\nIsi Queue setelah diproses:");
console.log(requestQueue.items);