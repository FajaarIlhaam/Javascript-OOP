//object
//cara membuat object yaitu

const madrid = {nama: "ronaldo", age: 37};
//nama disebut dengan property dan "ronaldo" Disebut dengan Value(nilai);
console.log(madrid);

//untuk menambahkan data atau menampilkan property tertentu cukup tambahkan titik
const barcelona = {nama: "messi", age: 35};
barcelona.nama = "Pique"; //untuk mengubah atau mengupdate value dari property
console.log(barcelona.nama); //Untuk mencetak property dari nama 

//Array dalam Object

const characters = [
    {name: "Ninja Ken", age: 14},
    {name: "Guru Domba", age: 1000}
  ];
  
  // Cetak element pertama milik array characters
  console.log(characters[0]); //untuk memanggil array di dalam object
  
  // Print nilai milik property name dari element array character kedua 
  console.log(characters[1].name); // untuk mengambil element array dari object

  

  //Array dan Iterasi
  const nextMadrids = [
    {name: "Valverde", age: 24},
    {name: "Tchouameni", age: 23},
    {name: "Camavinga", age: 5},
  ];
  
  // Selesaikan loop for di bawah
  for (let i = 0;  i<nextMadrids.length; i++) {
    console.log("--------------------");
    
    // Tentukan nilai constant character
    const nextMadrid = nextMadrids[i];
    
    // Cetak "Nama saya adalah ____"
    console.log(`Nama saya adalah ${nextMadrid.name}`); //Dicetak dalam template literal
    
    // Cetak "Saya berusia ____ tahun"
    console.log(`Saya berusia ${nextMadrid.age} tahun`); //Dicetak dalam template Literal

    //template literal digunakan untuk menggabungkan beberapa constants di dalam console menggunakan back tip
    //cth: console.log(`Hai saya ${nama} dan umur saya $[umur} tahun]`)
    
  }
  

  //Undefined
  //undefined adalah nilai khusus yang berarti nilai tidak bisa didefinisikan.
  //Atau bisa disebut juga property yang kosong
  const characters1 = [
    {name: "Ninja Ken", age: 14},
    {name: "Guru Domba", age: 100},
    {name: "Baby Ninja Ben", age: 5},
    // Tambahkan element di bawah
    {name: "Birdie"}
  ];
  
  for (let i = 0; i < characters.length; i++) {
    console.log("--------------------");
    
    const character = characters[i];
    
    console.log(`Nama saya adalah ${character.name}`);
    console.log(`Saya berumur ${character.age} tahun`); //hasilnya akan undefined karna tidak ditemukan valuenya dari property age
  }

  //Fix Undefined(Memperbaiki Undefined)
  //Untuk memperbaiki Undefined Kita Bisa menggunakan If else statement

  const characters2 = [
    {name: "Ninja Ken", age: 14}, // name disebut dengan property 
    {name: "Guru Domba", age: 100},//sedangkan untuk guu domba itu disebut dengan nilai
    {name: "Baby Ninja Ben", age: 5},
    {name: "Birdie"}
  ];
  
  for (let i = 0; i < characters.length; i++) {
    console.log("--------------------");
    
    const character = characters[i];
    
    console.log(`Nama saya adalah ${character.name}`);
    
    // Tambahkan statement if di bawah
    if(character.age === undefined) { //jadi jika di value age (ada) undefined maka tampilkan
      
      console.log("Umur saya rahasia!");
    }else {
      console.log(`Saya berumur ${character.age} tahun`); //jika tidak ada undefined maka tampilkan seperti biasa
    }
      
  }
  
  
//Memanggil Function Di dalam object

const introduced = {
  nama: "Fajar Ilham",
  age: 18,
  fav: "React Js",
  sayHi:() => { //Function Bisa dibuat didalam object dengan penulisan seperti ini
    console.log("Hi, Salam Kenal");
  }
};
console.log(introduced.nama); //Menampilkan nama dengan memanggil constant dari introduced lalu memasukkan parameter nama
introduced.sayHi();//Memanggil Function dengan menuliskan constant di depannya dan di akhir tidak lupa dengan ().
