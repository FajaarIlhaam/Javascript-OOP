//find
/* 
method find disini digunakan untuk mengembalikan nilai pertama
tetapi dengan syarat tertentu.
*/

const theQuarry = [
    {no: 1, name: "Kaitlyn"},  //DISINI KITA AKAN MENGEMBALIKAN NILAI ARRAY OBJECT YANG BERNAMA RYAN
    {no: 2, name: "Ryan"}
];

const findQuarry = theQuarry.find((quarry) => {  //disini kita melakukan callback function untuk memanggil find
    return quarry.name === "Ryan"; //mencari nilai array yang sama dengan ryan
});

console.log(findQuarry); //memunculkan nilai array yang udh dipanggil tadi