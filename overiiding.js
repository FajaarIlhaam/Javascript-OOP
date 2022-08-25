//Overiiiding(Timpa)
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Halo");
    }
    
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`);
      console.log(`Saya berusia ${this.age} tahun`);
    }
  }
  
  class Dog extends Animal {
    // Tambahkan constructor
   constructor(name, age, breed) { //Untuk menimpa construktor dari induk ke anak gunakan super(argument induk);
     super(name, age);
     this.breed = breed;
   }
    info() {
      this.greet();
      console.log(`Nama saya adalah ${this.name}`); //untuk menimpa method dari induk cukup timpa demikian dengan method anak
      // Cetak 「Saya adalah seekor ____」
      console.log(`Saya adalah seekor ${this.breed}`);
      console.log(`Saya berusia ${this.age} tahun`);
      const humanAge = this.getHumanAge();
      console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
    }
    
    getHumanAge() {
      return this.age * 7;
    }
  }
  
  // Tetapkan "Chihuahua" sebagai nilai argument
  const dog = new Dog("Leo", 4, "Chihuahua");
  dog.info();
  