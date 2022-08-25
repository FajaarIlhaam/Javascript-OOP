/* 
So sudah sampai sekarang documentasi yang saya catat tentang materi js dan inilah saatnya
materi yang ditunggu tunggu yaitu Callback  Function

callback function.call = memanggil yang artinya memanggil sebuah function

callback function yakni memanggil sebuah function ke dalam function baru dengan (MENGGUNAKAN ARGUMENT);

*/
const printKen = () => {
    console.log("Ninja Ken");
  };
  
  // Tambahkan parameter callback ke function call
  const call = (callback) => {
    console.log("Memanggil function callback.");
    // Panggil callback function
    callback();
  };
  
  // Teruskan printKen sebagai argument dan jalankan function call
  call(printKen );



  //callback synchronous
  const siswa = (callback) => {
    callback("Fajar Ilham",12);
}
siswa((nama,kelas) => {
console.log(`Hai nama saya adalah ${nama} dan saya kelas ${kelas}` );
});

  