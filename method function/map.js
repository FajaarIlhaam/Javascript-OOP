//map

/*
sama dengan filter..method map digunakan untuk mengembalikan nilai semua yang berada di dalam array
dengan persyaran tertentu contoh kasus ketika ada array 1 sampai 5 lalu melakukan map dengan * 2
maka ouput ketika ditampilkan akan mengembalikan nilai array 1 sampai 5 yang sudah dikalikan dengan 2
kurang lebih begitu agak ribet but...bismillah
*/
const numbers = [1, 2, 3, 4];

// Buatlah array baru di constant numbers dengan menggunakan method map,
// dan tetapkan hasilnya ke constant doubledNumbers 
const doubledNumbers = numbers.map((number) => {
  return number * 2;
  
});

// Cetak constant doubledNumbers
console.log(doubledNumbers);


const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Dennis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

// Buatlah array baru di dalam constant names dengan menggunakan method map,
// dan tetapkan sebagai constant fullNames
const fullNames = names.map((name) => {
  
  return name.firstName+ "" +name.lastName; //disini saya akan mengembalikan nilai semua nya dengan persayaran nilai
                                            //nilai first name ditmabahkan dengan lastname
});


// Cetak constant fullNames
console.log(fullNames);
