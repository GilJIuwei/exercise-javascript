// /*
// PROBLEM 01:_____________________________________________________________________________________
// Create a function to check if two object are equal
// Example
//     Input: { a: 2} & { a: 1}
//     Output: false
// Example
//     Input: { a: "Hello"} & { a: 1}
//     Output: false
// Example
//     Input: { a: 1} & { a: 1}
//     Output: true
// */

// function compare(input1, input2) {
//     if (input1.a === input2.a) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   const input1 = { a: 2 };
//   const input2 = { a: 2 };
  
//   console.log(compare(input1, input2));
  
//   /*
//   PROBLEM 02:_____________________________________________________________________________________
//   Create a function to get the intersection of two object
//   Example
//       Input: { a: 1, b: 2} & { a: 1, c: 3}
//       Output: { a: 1}
//   */
  
//   // CARA I
  
//   function intersection(data1,data2) {
//       const data1keys = Object.keys(data1);
//       console.log(data1keys);
//       const data2keys = Object.keys(data2);
//       console.log(data2keys);
//       const interkeys = data1keys.filter(value => data2keys.includes(value));
//       console.log(interkeys);
  
//       const output =  new Object()
  
//       for(i=0;i<interkeys.length;i++){
//           if(data1[interkeys[i]]===data2[interkeys[i]]){
  
//               output[interkeys[i]] = data1[interkeys[i]]
  
//           }
//       }
//       return output
//   }
  
//   const data1 = { a: 1, b: 2, d: 4};
//   const data2 = { b: 2, a:1, c: 3};
  
//   console.log(intersection(data1,data2));
  
//   // CARA II
  
//   // function intersection(data1, data2) {
//   //   const output = {};
  
//   //   for (const key in data1) {
//   //     console.log(${key});
//   //     if (data2.hasOwnProperty(key) && data1[key] === data2[key]) {
//   //       x = data2.hasOwnProperty(key) && data1[key];
//   //       console.log(x);
//   //       output[key] = data1[key];
//   //     }
//   //   }
  
//   //   return output;
//   // }
  
//   // const data1 = {a:1,b:2,c:3};
//   // const data2 = { b: 2};
  
//   // console.log(intersection(data1, data2));


//   // nomor 4
//   function switchObject(data) {
//     const map = {};
//     data.forEach((obj) => {
//       Object.keys(obj).forEach((key) => {
//         console.log(key);
//         const value = obj[key];
//         console.log(value);
//         map[value] = key;
//       });
//     });
//     return map;
//   }
//   const data = [{ name: "Enzo", age: 23 }];
//   console.log(switchObject(data));

//   // nomor 5

// //   Input : N = 5 
// // Output : The factorial of given number is : 120
// // Explanation: 5 * 4 * 3 * 2 * 1 = 120
// // Hence factorial of 5 is : 120
//   function factorial(n) { 
// 	if (n === 0 || n === 1) { 
// 		return 1; 
// 	} else { 
// 		return n * factorial(n - 1); 
// 	} 
// } 
// let num1 = 5; 
// let result = factorial(num1); 
// console.log("The factorial of given number is :" + result);


// kak daniel

// nomor 1

// function areObjectEqual(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     console.log(keys1);
//     const keys2 = Object.keys(obj2);
//     console.log(keys2);

//     if (keys1.length !== keys2.length) {
//         return false;
//     }
// }

// for (const key of keys1) {
//     console.log(key);
//     if (obj1[keys] !== obj2 [key]) {
//         return false;
//     }
// }

// return true;


// const arg1 = {a:2}
// const arg2 = {a:1}
// console.log(areObjectEqual(arg1, arg2));

// console.log(key1);
// console.log(key2);

// nomor 2 => intersection

// const intersection = (obj1, obj2) => {
//     const duplicate = {};

//     console.log(obj1);
//     console.log(obj2);
    
//     for (let key in obj1) {             // looping dalam object ( for in)
//         console.log(key);
//         if (obj1[key] == obj2[key]) {
//             duplicate[key] = obj1[key];
//         }
//     }
//     return duplicate
// };

// const arg1 = {a: 1, b: 2 };
// const arg2 = {a: 3, b: 1 };

// intersection (arg1, arg2);

// console.log(intersection(arg1, arg2));


// nomor 3

// const removeDuplicate = (arr1, arr2) => {
//     const combineArray = [...arr1, ... arr2];
//     console.log(combineArray);

// const temp = [];

// for (let i = 0; i < combineArray.length; i++) {
//     const duplicateValues = temp.filter((val) => {
//         return val.email === combineArray[i].email;
//     });
//     console.log(duplicateValues);

//     console.log(combineArray[i]);
//     if(!duplicateValues.length) {
//         temp.push(combineArray[i]);
//     }
// }
//         return temp;
// };
// const arg1 = [ 
//     {name: "Student 1", email: "student1@mail.com"},
//     {name: "Student 2", email: "student2@mail.com"},
// ]

// const arg2 = [
//     {name: "Student 1", email: "student1@mail.com"},
//     {name: "Student 3", email: "student3@mail.com"},
// ]

// removeDuplicate (arg1, arg2);
// console.log();

// nomor 4
// const obj1 = {};
// obj1["name"] = "budi"

// const switchValueToKey = (arr) => {
//     console.log(arr);
//     const result = [];
    
//     arr.forEach((item) => { 
    // item looping 1 -> {name: "David", age: 20}
    // let temp = {};

    // for (let key in item) {

        // console.log(key);
        // console.log((item[key]));
        // temp[item[key]] = key;
        
        // item [key] sama aja dengan item.name
//     }   

//     result.push(temp)
//     });
    
//     return result; 
// };
// const arg = [{name: "David", age: 20}];


// console.log(switchValueToKey([{ name: "David", age: 20}]));

// nomor 5

// const factorial = (n) => {
// if (n === 0) {
//     return 1;
//     } else {
//      return n = factorial(n - 1);   
//     }
// };

//     const n = 5;
    
//     console.log(`factorial ${n}! = ` + factorial(n));

// cara 2

// const factorial = (n) => {
//     if (n===1) {
//         return {
//             steps: ["1"],
//             total: 1,
//         }
//     } else {
//     const next = factorial2(n-1);

//     return {
//         steps: [n, ... next.steps],
//         total: n * next.total,
//     };
// }
// };

// const number = 5
// const { steps, total } factorial2(number);

// console.log(steps.join("x") + "=" + total);