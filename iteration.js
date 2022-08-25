//LOOPING(PERULANGAN)
let number = 1;
while (number <=100) { //lakukan perulangan jika nilai dari number lebih kecil atau sama dengan 100
    console.log(number);
    number =+1; //Fungsi ini untuk menambahkan angka dari 1 sampai 100 dan mencegah terjadinya infinity loop
}

//loop for



// Gunakan loop for untuk mencetak angka dari 1 hingga 100

for( let number = 1; number<=100; number++) { // dalam loop for pendefinisian variable pembaruan,    
        console.log(number);                  // perbandingan variable itu dilakukan dalam satu kurung for
    }

//Menerapkan iterasi
for (let number = 1;  number <=100; number++) {
    // Gunakan statement if untuk mencetak string "Kelipatan 3" ketika nilai angka adalah kelipatan 3
    if(number % 3 === 0) {
      console.log("Kelipatan 3");
    
    }else{
      console.log(number);
    }
  }
    