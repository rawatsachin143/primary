// binary search

// function binarysearch(arr, tar) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === tar) {
//       return mid;
//     }
//     else if (arr[mid] < tar) {
//       left = mid + 1;
//     }
//     else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// }
// console.log(binarysearch([5,7,2,4,9],5));


// function multiple(a,b){
//   return a*b;
// }
// console.log(multiple(19,1));
// console.log(multiple(19,2));
// console.log(multiple(19,3));
// console.log(multiple(19,4));
// console.log(multiple(19,5));
// console.log(multiple(19,6));


// function anagrams(str1,str2){
//   if(str1.length!==str2.length){
//     return false;
//   }
//   let sortstr1=str1.split('').sort().join('');
//   let sortstr2=str2.split('').sort().join('');

//   return sortstr1 === sortstr2;
// }

// const str1 = "abcdef";
// const str2 = "dfeabh";
// console.log(anagrams(str1,str2));

// function removeduplicate(arr){
//   let newarr=[...new Set(arr)]
//   return newarr;
// }
// console.log(removeduplicate([4,5,6,7,7,7,7,7,7,8,3]));

// function reverses(str){
//  let newstr=[str.split('').reverse().join('')]
//  return newstr;
// }
// let str="sachin"
// console.log(reverses(str));

// function factorial(n){
//   if(n===0){
//     return 1;
//   }
//   return n*factorial(n-1);
// }
// console.log(factorial(5));

// function sumArray(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
  
//   return arr[0] + sumArray(arr.slice(1));
// }
// console.log(sumArray([1, 2, 3, 4, 5]));
// // Output: 15


// function table(num){
//   for(let i=1;i<=10;i++){
//   return ;
//   }
// }
// console.log(table(19))


// let num=19;
// for(let i=1;i<=10;i++){
//   console.log(num*i)
//  }

// https://discuss.almabetter.com/

// function selectionSort(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     let min = i;
//     for (let j = i + 1; j < len; j++) {
//       if (arr[min] > arr[j]) {
//         min = j;
//       }
//     }
//     if (min !== i) {
//       let tmp = arr[i];
//       arr[i] = arr[min];
//       arr[min] = tmp;
//     }
//   }
//   return arr;
// }

// // Example usage
// var arr = [3, 7, 5, 4, 2, 1, 6];
// console.log(selectionSort(arr));

// var sortPeople = function(names, heights) {
//   let length = heights.length;
//   let map = new Map();
//   for(let i=0; i<length; i++){
//       map.set(heights[i], names[i]);
//   }
//   heights.sort((a,b) => a-b);
//   let res = [];
//   for(let height of heights){
//       res.push(map.get(height));
//   }
//   return res;
// };
// var  names = ["Alice","Bob","Bob"];
//  heights = [155,185,150];
// console.log(sortPeople(names, heights))

// var callPoints = function(operations) {
//   for (let i = 0; i < operations.length; i++) {
//       if (operations[i] === "+") {
//           sum = operations[i - 2] + operations[i - 1];
//           operations[i] = sum;
//       } else if (operations[i] === "D") {
//           newD = operations[i - 1] * 2;
//           operations[i] = newD;
//       } else if (operations[i] === "C") {
//           operations.splice(i - 1, 2);
//           i = i - 2;
//       } else {
//           var integer = +operations[i];
//           operations[i] = integer;
//       }
//   }

//   // to calculate the totalSum only
//   let totalSum = 0;
//   for (let i = 0; i < operations.length; i++) {
//       totalSum += operations[i];
//   }

//   return totalSum;
// };
// // let operations =  ["5","2","C","D","+"];

// // console.log(callPoints(operations));

// function isPalindrome(str) {
//     // Write your code here
//     const cleanedStr = str.replace(/[^a-z0-9]/g, "");
//     const reversedStr = cleanedStr.split("").reverse().join("");
//     return cleanedStr === reversedStr;
// }
// console.log(isPalindrome("racecar"));

function Findcommonelment(arr1,arr2){
    let commonelment=[];
    
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                commonelment.push[arr1[i]];
            break;
            }
        }
    }
    return commonelment;
}
const arr1=[4,2,7,5,6,9];
const arr2=[7,2,4,5,8,6]
console.log(Findcommonelment(arr1,arr2));


