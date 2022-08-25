const greet = function() {
    console.log("Halo!");
    console.log("Saya Fajar");
  };
  // Panggil function greet di bawah
  greet();

  //cara membuat function
  //tetapkan function di constant 
  const perkenalan = function() {
    console.log("Nama saya Fajar Ilham");
    console.log("Saya Menyukai Teknologi");
  }
  perkenalan();

  //Arrow Function
  //KARNA JS SUDAH UDH JADI ES6 
  //Maka untuk memanggil function tidak perlu menggunakan functiom()
  //cukup gunakan = () =>

  const introduced = () => {
    console.log("Hi Zard still here");
    console.log("Im Junior Backend Developer");
  }
  introduced();

  //Argument

  const contoh = (name) => { //memanggil argument sebagai parameter
console.log(`Nama saya adalah ${name}`);
  }
  contoh(Fajar);//masuk

//Scope
//scope adalah cakupan atau jangkauan dari sebuah constant

//lokal scope
const conn = () => {
  const ok = "nama";
  console.log(ok);    //code akan dijalankan jika didalam function 
} 
//console.log(ok);  kalau diluar function code tidak akan dijalankan

//Global Scope
//adlah variable luar yang kalau dipanggil dimana aja tetep bisa dijalankan
const ayo = "Hai";
const ok = () => {
 return ayo; //constant bisa dijalankan di dalam function karna bersifat global scope
}
return ayo; //Constant bisa dijalankan di luar karna bersifat global scope
