// // no 1
// // celcius to fahrenheit
// // const celcius = 60
// // const result = (celcius * 9 ) / 5 + 32

// // console.log ("celcius to fahrenheit = ", result)

// // fah to celcius
// const fah = 140;
// const result = (( fah - 32)) * 5 / 9;

// console.log(fah + "f to cel = ", result + "c");

// // no 2

// // const angka = 25

// // if (angka % 2 === 0){
// // console.log("genap");
// // } else {
// //     console.log("ganjil");
// //     }

// //     // ternery biar console.log nya ga dua kali 
// //     console.log(angka % 2 === 0 ? "genap" : "ganjil");

// // no 3

// // Kalau true atau false, boolean (pakai is)

// const num = 3;
// let isPrime = true;
// for(let i = 2; i < num; i++){
//     if(num % i == 0){
//         isPrime = false;
//         break;
//         }
//     }

//     console.log(isPrime);

//     // no  4 
//     // cara 1 
    // const num = 5
    // const result = (num * (num + 1)) / 2

    // console.log(result);

//     // cara 2 

//     // message(variabel pertambahan yang di tampung)


//     // no 5
// // dikremen i start dari angka tinggi (5)

const num = 5;
let result = 1;
let message = "";

for(let i = 5; i >= 1; i--){
    result *= i;

    message += i + (i=== 1 ? "" : "+");
}

console.log(result);
console.log(message);

// no 6 fibonachi

const n =  15;

let a = 0;
let b = 1

for (let i = 0; i < n; i++){
    let next = a + b;
    a = b;
    b = next;
}
console.log(a);
