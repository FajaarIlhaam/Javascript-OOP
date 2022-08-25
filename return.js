//return
//Anda dapat mengembalikan nilai dengan menempatkan statement return di dalam function
//dengan menulis nilai return. Hal ini akan memungkinkan function menghasilkan output sebagai nilai return.

const half = (number) => {
    // Return nilai dari variable number dibagi 2
   return number / 2;  //disini return akan menjalankan nilai dari argument number
  };
  
  // Defenisikan constant result
  const result = half(130); //disini akan didefinisikan dari parameter half lalu dibagi dengan hasil return tadi
  
  // Cetak pesan "Separuh dari 130 adalah ____"
  console.log(`Separuh dari 130 adalah ${result}`);
  
//Menentukan Tipe Boolean di Nilai return
//nilai boolean (true atau false)
//akan dikembalikan (return) jika anda menggunakan pernyataan bersyarat. 
//Ini sama seperti kondisi di pernyataan if

const check = (number) => {
    // periksa apakah number adalah kelipatan dari 3 dan return hasilnya
    return number % 3 === 0; //disini nilai return akan menentukan apakah argument dari constant check kelipatan 3
  }; 
  // Panggil function check dalam kondisi statement if
  if ( check(123) ) {
    console.log("Multiple of 3");
  } else {
    console.log("Not a multiple of 3");
  }
  


  //Menentukan nilai mana yang lebih tinggi 

  const nomor1 = 250
  const nomor2 = 100
  const nomor3 = 400 

  const getNomor = (ya, yo ,ye) => {
    let tinggi = ya;
     if(yo > tinggi) {
        tinggi = yo;
     }else if (ye > tinggi) {
        tinggi = ye;
     }
     return tinggi;
  }

const highestNumber = getNomor(nomor1, nomor2, nomor3);
console.log (`Best and Highest Number is ${highestNumber}`);
//hasilnya adalah constanst nomor3 dengan menghasilkan nilai 400 yang lebih tinggi dari 2 nilai sebelumnnya