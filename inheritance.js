//Inherintace
//sebuah class yang diwariskan dari class sebelumnya
//cth
class kendaraan {
    
}
class mobil extends kendaraan { //definisi nya bisa dikatakan seperti class induk yang melahirkan class anak
                                //atau mewarisi kesamaan antara class induk dan anak yang mempunyai suatu keunikan
}
//gunanya make inheritance untuk membuat class yang memiliki keunikan dan tanpa menghilangkan sifat dari 
//class sebelumnya atau induk

class Hewan {
    constructor(nama, kaki, jenis) {
 this.nama = nama;
 this.kaki = kaki;
 this.jenis = jenis;
    }

    getHewan () {
        console.log(`halo ini adalah peliharaanku Perkenalkan`);
        console.log(`Namanya ${this.nama}`);
        console.log(`Dia Berkaki ${this.kaki}`);
        console.log(`Jenisnya ${this.jenis}`);
    }
}

class harimau extends Hewan {
}
//disini saya memanggil instance harimau yang dimana itu adalah warisan dari hewan
//jika class nya kosong ketika di instance baru dengan memanggil class warisan
//maka hasilnya akan sama aja dengan class induk atau yang diwariskan
const Harimau = new harimau("LittleZ", 4, "Karnivora");
Harimau.getHewan();

//Menambahkan method ke dalam class inheritance
class contoh {
    constructor(age) {
        this.age = age
    }
}

class contoh1 extends contoh {
    
    getAge() {
        return this.age * 7; // di class warisan ini saya membuat suatu method untuk menghitung nilai dari umur
    }                           //Yang berada di dalam class
                            //untuk membuatnya jangan lupa di return ya bukan console.log:)
}
const Contoh1 = new contoh1(7); 
const hitungUmur = Contoh1.getAge(); // disini saya membuat const dan memanggil instance yang berada di dalam class warisan
console.log(`umurku  7 tahun dikali jadi ${hitungUmur}`); //disini saya mencetak dengan memanggil const hitung umur


