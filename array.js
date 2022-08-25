//Array
const animals = ["anjing", "kucing", "domba"]; //array dipanggil dari nomor 0 yang berarti 1
// Cetak element array pertama
console.log(animals[0]);
// Cetak element array ketiga
console.log(animals[2]);
console.log(animals[2]);

//update array 
const animals1 = ["anjing", "kucing", "domba"];

// Ganti element ketiga dari array menjadi "kelinci"
animals1[2] = "kelinci";

// Cetak array ketiga dari constant animal ke console
console.log(animals1[2]);

//Iterasi menggunakan array 
const lastOfUs = ["Joel", "Elly", "Abby"];

// Gunakan loop for untuk mencetak nilai animals di console secara berurutan
for (let i = 0;  i<3; i++) {
  console.log(lastofus[i]);
}

//length

const theQuarry = ["Ryan", "Dylan", "Jacob", "Kaitlyn", "Abigail", "Emma", "Max", "Laura"];

// Gunakan property length untuk mencetak jumlah element di array
console.log(theQuarry.length); //Fungsi length untuk menjumlahkan total berapa array yang ada

// Gunakan property length untuk mengubah kondisi di bawah
for (let i = 0; i < theQuarry.length; i++) { //disini menggunakan length sebagai parameter untuk melakukan loop
  console.log(theQuarry[i]);
}

