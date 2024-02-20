// object
//object literal

// const user1 = {}

//object constructor
// const user2 = new Object() // new artinya class

// property and method ===================================================
// const user = {
//     name: "david",
//     //function yang ada di dalam object disebut method
//     greeting (){
//         console.log("Hello");
//     },
// };

// Add & delete property ==============================================

// const user = {
//     name: "megachan",
//     partai: "banteng"
// }

// console.log(user);

// user.age = 25 // menambahkan property

// delete user.partai // delete property
// console.log(user);

// Accessing value
// dot & []

// const user = {
//     name: "abahku",
//     partai: "partaiqu",
// };

// console.log(user.name); // DOT
// console.log(user["name"]);

// optional chaining ===============================================
// const user = {};

// console.log(user.adress);

// //console.log(user.address.street); //ini bakalan error

// console.log(user.address?.street); // menggunakan optional chaining sebagai pengaman

// const user = {
//     name:"bowokun",
//     partai:"partaiqu",
// };

// hanya menampilkan nama key yang ada di dalam object
// console.log(Object.keys(user));

// hanya menampilkan nama values yang ada di dalam object
// console.log(Object.values(user));


// FOR IN (looping dalam object) =================================
// nukar value jadi key, key jadi value
// const user = {
//     name: "budi", // name = key, budi = value
//     hobby: "futsal",
//     umur: 18,
// };

// for (let key in user){
//     console.log(key);
//     console.log((user[key]));
// }

// destructuring assignment =================================

// const user = {
//     name: "budi",
//     hobby: "futsal",
//     umur: 18,
// };

// const { name: names } = user // name diubah ke names pakai :

// console.log(user);

// console.log(user.name);
// console.log(names);


// spread operator ======================
// const dataOne = [1, 2, 3];
// const dataTwo = [3, 2, 1];
// const mergeArr = [...dataOne,...dataTwo]

// console.log(mergeArr);

// const obj1 = {name: "budi "};
// const obj2 = {email: "budi@mail.com", name:"joko"};
// const mergeObj = {...obj1, ...obj2};
// kalau ada nama property yang sama bakalan ke ganti sama yang baru

// console.log(mergeObj);

// const user = {
//     name: "budi",
//     hobby: "futsal",
//     umur: 18,
//  greeting() {
//     console.log(`Hello, ${this.name}`);
//  }   
// }

// user.greeting();

// object.assign build in method =============================

// const target = {a: 1, b: 2};
// const source = {b: 4, c: 5};

// const result = Object.assign(target, source);

// console.log(result);

// CLASS ===============================================================
//class declaration
// setelah class huruf besar (User)
// class User {
//     greeting(){
//         console.log("Hello");
//     }
// }

// class expression 
// const User1 = class{
//     greeting() {
//         console.log("Hello");
//     }
// };

// userName -> camelCase
// userName -> PascalCase (class)
// class User{
//     greeting(name){
//         console.log("Hello " + name);
//     }
// }
// const user1 = new User(); // create object berdasarkan template user
// const user2 = new User(); // create object berdasarkan template user
// user1.greeting("Budi");
// user1.greeting("Joko");

// constructor // tempat penampungan

class User{
    constructor(name, email)
    this.name = name;
    this.email = email;    
}

greeting{

}

// acces modifier -> public & private

// public bisa diakses diluar class
// private bisa diakses di dalam class tsb

// class user{
//     #email; // private
//     constructor(name, email) {
//         this.name = name;
//         this.#email = email;
//     }
//     greeting(){
//         console.log("Hello " + this.name + " " this.#email);
//     }
// }

// const user1 = new user("Budi", "budi@mail.com");
// console.log(user1.name);
// console.log(user1.email);
// user1.greeting();

// setter dan getter
// get -> baca data
// get -> set value di dalam object


const user14 = {
    firstName: "aaaa",
    lastName: "bbbbb",
    
    get  fullName(){
        return ${this.firstName} ${this.lastName};
    },

    set fullName(value){
        const splittedValue = value.split(" ");
        this.firstName = splittedValue[0]
        this.lastName = splittedValue[1]
    },

    fullName2(value){
        const splittedValue = value.split(" ")
        this.firstName = splittedValue[0]
        this.lastName = splittedValue[1]
    }  
}
user14.fullName = "Ariel Tatum";
console.log(user14)
user14.fullName2("Arial Tatum");
console.log(user14)

// ENCAPSULATION =====================================================
// konsep di oop untuk ngebundle data dalam 1 unit. ex object or class

// INHERITANCE
// Class Parent -> property1, property2, property3
// Class Child -> property 1,2,3 bisa di akses sama child class

class Product{
    //parent class
    constructor(productName,price){
        this.productName=productName;
        this.price=price;
    }
    show(){
        console.log("show");
    }
    
}

class Book extends Product {
    // child class
    constructor(productName, price, author){
        super(productName, price);
        this.author = author;
    }

    show(){}

}

const book1 = new Book("Buku 1", 10000, "Komeng");
console.log(book1);

// INSTANCE OF -> mengecek apakah ada sebuah object memiliki hubungan ke class tertentu/tidak

class Animal{}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);