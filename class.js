//class
class Hi {
}

const hoke = new Hi(); //object didalam class itu disebut dengan instance
console.log(hoke);

//constructor
//Construktor adalah sebuah Method khusus untuk mendefinisikan dari nilai instance baru
class Siswa {
    constructor(nis, nama, kelas) { //fungsi construktor adalah untuk mencegah membuat objek berulang di instance
        this.nis = nis;  //disini digunakan argument(parameter) untuk pemanggilan nya ketika di instance  
        this.nama = nama; //lalu argument yang mau dipanggil di construktor tdi di definisikan di dalam object contruktor
        this.kelas = kelas;
    }
}
const perkenalan = new Siswa(123, "Fajar Ilham", 17); //ketika mau membuat instance baru cukup berikan nilai 
console.log(`Nis saya: ${perkenalan.nis}`);           //didalam parameter instance sesuai urutan property di dalam constuctor
console.log(`Nama saya: ${perkenalan.nama}`);         //Mencetak instance dengan property nama
console.log(`Umur saya: ${perkenalan.age}`);          //Mencetak instance dengan property age(umur)