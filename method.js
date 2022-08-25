//Method
//Untuk membuat method cukup tambahkan methodName () {} didalam sebuah class dan diluar object/construktor
class barang {
    constructor (namabarang, deskripsibarang, hargabarang) {
        this.namaBarang = namabarang;
        this.deskripsiBarang = deskripsibarang;
        this.hargaBarang = hargabarang;
    }
    // Buat Method
    nameIndustry() {
        console.log("Selamat datang di penjualan barang Zard"); //didalam method biasanya menampilkan ciri atau perilaku dari suatu class tersebut
    }
    getBarang() {
        console.log(`Nama barang : ${this.namaBarang}`); // hasil nilai yang ada di property ini akan dibuat di instance baru
        console.log(`Deskripsi Barang: ${this.deskripsiBarang}`); // hasil nilai yang ada di property ini akan dibuat di instance baru
        console.log(`Harga barang: ${this.hargaBarang}`);// hasil nilai yang ada di property ini akan dibuat di instance baru
    }
}
//setelah membuat const baru di dalam instance baru 
//untuk memanggil atau menampilkan class harus dengan const yang telah dibuat
//karna udh didefinsikan sebagai const atau class yang baru menggantikan class yang lama

const detailBarang = new barang("RTX 3060","Dibekali 3.584 CUDA cores beserta Vram GDDR16 Sebesar 12 GB", 2000000);
detailBarang.nameIndustry(); //mencetak menggunakan constance(class) yang baru dan udh didefenisikan di instance
detailBarang.getBarang(); //mencetak menggunakan constance(class) yang baru dan udh didefenisikan di instance

//Using method in method
//Didalam method juga bisa memanggil method menggunaka this.

class buku {


  constructor (judul, pengarang, penerbit, tahunterbit) {
    this.judul = judul;
    this.pengarang =  pengarang;
    this.penerbit = penerbit 
    this.tahunTerbit = tahunterbit
  }

 getBuku() {
    console.log(`Judul Buku: ${this.judul}`);
    console.log(`Penulis Buku: ${this.pengarang}`);
    console.log(`Penerbit Buku: ${this.penerbit}`);
    console.log(`Tahun Terbit Buku: ${this.tahunTerbit}`);
 }

sayWelcome() {
    console.log("Silahkan Pilih Buku yang Mau dipinjamkan");
    console.log("----------------------------------------");
    this.getBuku (); //disini method getbuku dipanggil di method sayWelcome Menggunakan this
}                   
}

const tampilBuku = new buku("Filosofi Teras", "Henry Manampiring", "Kompas", "26 November 2018");
tampilBuku.sayWelcome(); //Untuk ditampilkan cukup panggil method sayWelcome!




