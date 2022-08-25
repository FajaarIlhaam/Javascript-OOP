const rank = 2;

switch (rank) {
  case 1:
    console.log("Anda meraih medali emas!");
    break;

  // Tambahkan case ketika rank adalah 2
  case 2:
    console.log("Anda meraih medali perak!");
  break;
  // Tambahkan case ketika rank adalah 3
  case 3:
    console.log("Anda meraih medali perunggu!");
  break;
}

//Switch default  
//jika nilai kondisi switch cocok dengan nilai untuk kasus tertentu, bagian code itu akan berjalan. 
//Namun, jika nilai tidak cocok dengan kondisi apa pun, case default akan dipanggil. 
//Default mirip dengan else yang digunakan untuk statement if

const kendaraan = "Mobil";
switch(kendaraan) {
    case motor:
        console.log("Ini adalah motor");
        break;
    case pesawat:
        console.log("Ini adalah pesawat");
        break;
    case sepeda:
        console.log("Ini adalah sepeda");
        break;
    default:
        console.log("Itu adalah mobil BGSD"); 
    break;
}

