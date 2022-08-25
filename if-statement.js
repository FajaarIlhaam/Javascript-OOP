//if statement (Pernyataan if Bersyarat)
const level = 12;

if(level > 10) {

    console.log("Level Anda lebih tinggi dari 10");
}

//Boolean(Ekspresi statement/ ekspresi pernyataan)

//hasilnya akan mengeluarkan nilai yang bersifat true(Pernyataan Bener)
const number = 10;
console.log(number > 5);
//hasilnya true

//Hasilnya akan mengeluarkan nilai yang bersifat else(Pernyataan Salah)
const number1 =  5;
console.log( number > 20);
//hasilanya else

if (number >= 5) {
    console.log("Saya berusia Lebih dari 5 tahun");
  }


//boolean V.2

// (===) = untuk membandingkan kesamaan dalam nilai kalau sama maka haslnya true
//(!==) =  untuk membandingkan jika tidak sama dalam nilai

const password = "ninjaken";

// Ketika nilai password adalah "ninjaken", cetak "Berhasil log in"
if (password === "ninjaken") {
  console.log("Berhasil log in");
}

// Ketika nilai password bukan "ninjaken", cetak "Password salah"
if (password !== "ninjaken") {
  console.log ("Password salah");
  //hasilnya false karna variable password mengandung kesamaan dengan nilai ninjaken
}

//else
const nomor = 17;
if(nomor >= 18) {
    console.log("Saya berusia diatas 18 tahun");
}else {
    console.log("Saya berusia dibawah 18 tahun"); //hasilnya adalah dibawah usia 18 tahun karna 17 lebih kecil dari 18 dan tidak sama.
}

//else if
const nomor1 = 10;
if(nomor1 >= 20) {
    console.log("Saya berusia diatas 10 tahun");

}else if(nomor >= 5) {
    console.log("Saya berusia dibawah 10 tahun lebih 5 tahun")
}else {
    console.log("Saya berusia di bawah 10 tahun");
}

//persyaratan atau dan atau (&&)
const nomor2 = 17;
if(nomor2  >= 16 && nomor2 < 20) {
    console.log("Umur saya antara 20 sama 16 an");
}
