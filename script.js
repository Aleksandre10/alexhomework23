//1.

// let numbers = [1, 2, 3, 4, 5];

// function sumArray(nums) {
//     return nums.reduce(function(acc, curr) {
//         return acc + curr;
//     }, 0);
// }

// console.log(sumArray(numbers));


//2.

// let numbers = [10, 5, 22, 80, 3, 44];

// function findMax(nums) {
//     return nums.reduce(function(acc, curr) {
//         if (curr > acc) {
//             return curr;
//         } else {
//             return acc;
//         }
//     });
// }

// console.log(findMax(numbers));

//4.

// let strings = ["are", "you", "okay"];

// function combineStrings(text) {
//     return text.reduce(function(acc, curr) {
//         return acc + curr;
//     }, "");
// }

// console.log(combineStrings(strings));


//5.

// let numbers = [2, 3, 4];

// function multiplyArray(num) {
//     return num.reduce(function(acc, curr) {
//         return acc * curr;
//     }, 1);
// }

// console.log(multiplyArray(numbers));

//7.

// let numbers = [10, 2, 1];

// function subtractArray(num) {
//     return num.reduce(function(acc, curr) {
//         return acc - curr;
//     });
// }

// console.log(subtractArray(numbers));

//8.

// let numbers = [1, 2, 3, 4, 5];

// function doubleValues(num) {
//     return num.map(function(element) {
//         return element * 2;
//     });
// }

// console.log(doubleValues(numbers));

//9.

// let strings = ["CSS", "HTML", "ALEX", "JAVA"];

// function lowerAll(text) {
//     return text.map(function(element) {
//         return element.toLowerCase();
//     });
// }

// console.log(lowerCaseAll(strings));

//11.

// let elements = document.getElementsByClassName("text");

// let result = Array.from(elements).map(function(element) {
//     element.textContent += " sityva";
//     return element.textContent;
// });

// console.log(result);

//12.

// let numbers = [2, 3, 4, 5];

// function squareNumbers(num) {
//     return num.map(function(element) {
//         return element * element;   
//     });
// }

// console.log(squareNumbers(numbers));

//13.

// let elements = document.getElementsByClassName("text");

// Array.from(elements).forEach(function(element) {
//     element.textContent += " damateba";
// });

//14.

// let students = [
//     { name: "ALEX", score: 80 },
//     { name: "SALOME", score: 90 },
//     { name: "NINI", score: 70 }
// ];

// students.forEach(function(student) {
//     student.score += 5;
// });

// console.log(students);

//16.

// ვერ შევძელი


//17.

// let items = ["First div", "Second div", "Third div"];

// let container = document.getElementById("container");

// for (let i = 0; i < items.length; i++) {
  
//   let div = document.createElement("div");
//   div.textContent = items[i];
//   container.appendChild(div);
// }

//18.

// let numbers = [2, 3, 4];

// for (let i = 0; i < numbers.length; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(numbers[i] + " x " + j + " = " + (numbers[i] * j));
//   }
// }


//19.

// let numbers = [5, 12, 8, 20, 3, 15];

// function filterAboveTen(nums) {
//     return nums.filter(function(element) {
//         return element > 10;
//     });
// }

// console.log(filterAboveTen(numbers));

//20.

// let elements = document.getElementsByClassName("word");

// let array = Array.from(elements);

// let filtered = array.filter(function(el) {
//     return el.classList.contains("one");
// });

// console.log(filtered);











