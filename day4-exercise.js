// // No.1

// const angka = 9;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${angka} * ${i} = ${angka * i}`);
// }

// // No.2
//// build in Method
// const word = "jogja";
// const isPalindrome = word === word.split("").reverse().join("");

// console.log(isPalindrome);

// //mengecek satu-satu
// console.log(word.split(""));
// console.log(word.split("").reverse());
// console.log(word.split("").reverse().join(""));

// //// tanpa build in method
// const word = "madam";
// let reverse = "";
// for (let i = word.length - 1; i >= 0; i--) {
//   reverse += word[i];
//   console.log(word[i]);
// }
// console.log(reverse);

// // no.3
// const cm = 100000;
// const km = cm / 10 ** 5;
// console.log(`${cm} cm = ${km} km`);

// no.4 (cara mengubah angka menjadi mata uang)
// const harga = 1000;
// const rupiah = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
//   maximumFractionDigits: 0, // untuk menghilangkan ,00
// });

// console.log(rupiah.format(harga));

// contoh 2

// const harga = 5000
// const rupiah = new Intl.NumberFormat("id-ID",{
//     style: "currency",
//     currency: "IDR",
//     maximumFractionDigits: 0
// })
// console.log(rupiah.format(harga));

// // no. 5 (search string)
// const words = "Hello World";
// const search = "ell";
// const replaceWith = "";
// // rumus remove kata = words.replace itu kata yang mau dihilangkan, 
// // search huruf yang mau dihilangkan, repleaceWith itu diganti dengan "".
// const remove = words.replace(search, replaceWith);
// console.log(remove);



//no. 6
// const input = "hello world";
// let kata = input.split(" ");

// console.log(kata);

// for (let i = 0; i < kata.length; i++) {
//   kata[i] = kata[i][0].toUpperCase() + kata[i].slice(1);

//   console.log(kata[i].slice(1));
// }
// console.log(kata);
// console.log(kata.join(" "));

// //no.7
// //// cara build in method
// const word1 = "hello";
// const tryReverse = word1.split("").reverse().join("");

// console.log(tryReverse);

// ////tanpa build in method

// let message = "";

// for (let i = word1.length - 1; i >= 0; i--) {
//   message = message + word1[i];
// }

// console.log(message);

// // no. 8
// const sentence = "The QuiCk BrOwN Fox";
// let swapString = "";

// for (let i = 0; i < sentence.length; i++) {
//   const char = sentence[i];

//   console.log(sentence[i].toUpperCase());
//   console.log(char);

//   if (char === sentence[i].toUpperCase()) {
//     swapString = swapString + char.toLowerCase();
//   } else {
//     swapString = swapString + char.toUpperCase();
//   }
// }

// console.log(swapString);

// // no. 9

// // no .10
// const num1 = 42;
// const num2 = 27;
// const num3 = 18;

// const smallest = Math.min(num1, num2, num3);
// const largest = Math.max(num1, num2, num3);
// const middle = num1 + num2 + num3 - smallest - largest;

// console.log(smallest);
// console.log(largest);
// console.log(middle);

// console.log(${smallest}, ${middle}, ${largest});

// // no. 11

// let input1 = "hello";
// let type;

// if (typeof input1 === "string") {
//   type = 1;
// } else if (typeof input1 === "number") {
//   type = 2;
// } else {
//   type = 3;
// }

// console.log(type);

// // no.12

// const inputString = "An apple a day keeps the doctor away".toLowerCase();
// console.log(inputString);
// let replaceWord = "a";
// let modifiedString = "";

// for (let i = 0; i < inputString.length; i++) {
//   if (inputString[i] === replaceWord) {
//     modifiedString = modifiedString + "*";
//   } else{
//     modifiedString = modifiedString+ inputString[i];
//   }
// }

// console.log(modifiedString);

