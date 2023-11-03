//1 function findLongestWord(sentence) {
// 	// Write your code here
//     const words = sentence.split(' ');
//     let maxLength = 0;

//     for (const word of words) {
//         const length = word.length;
//         if (length > maxLength) {
//             maxLength = length;
//         }
//     }

//     return maxLength;
// }

// // Do not modify the below lines
// // module.exports = { findLongestWord };
// console.log(findLongestWord("sachin rawat is a greatesttee legendery"))





// 2 function titleCase(sentence) {
//     // write your code here
// const words = sentence.toLowerCase().split(' ');

// const titleCaseWords = words.map(word => {
//     return word[0].toUpperCase() + word.substring(1);
// });

// return titleCaseWords.join(' ')
// }

// // Do not modify the below lines
// // module.exports = { titleCase };
// console.log(titleCase("WHAT IS YOUR NAME "))









//   function countOccurrences(str, char) {
//     let count=0;
//     const charCount = str.split(char).length - 1;
//     return charCount;
// }

// // Do not modify the below lines
// // module.exports = { countOccurrences };
// console.log(countOccurrences("helllllllllo guyllllls ", "l"))









// function calculateTotal(cart) {
//     // Write your code here
//     let total = 0;
//    const totalsum=cart.reduce((accumulator,item)=>{
//   return  accumulator + (item.price * item.quantity)},0);
//   return totalsum;
// }

// // Do not modify the below lines
// //module.exports = { calculateTotal };
// const cart = [
//     { name: "Laptop", price: 1000, quantity: 1 },
//     { name: "Phone", price: 500, quantity: 2 },
//     { name: "Headphones", price: 50, quantity: 4 },
//   ];
// console.log(calculateTotal(cart))







// function fizzBuzz(n) {
//     const result = [];
//     for (let i = 1; i <= n; i++){
//         switch(true) {
//         case i % 3 === 0 && i % 4 === 0:
//          result.push("FizzBuzz");
//             break;
//         case (i % 3 === 0):
//             result.push("Fizz");
//             break;
//         case (i % 4 === 0):
//             result.push("Buzz");
//             break;
//         default:
//             result.push(i.toString());  
//     }
// }

//     return result;
// }

// // Do not modify the below lines
// //module.exports = { fizzBuzz };
// console.log(fizzBuzz(24))






// function findPrimes(n){
//     let result=[]
//     for(let i=1;i<=n;i++){
//         if(i%1===0){
//             result.prime[]
//         }
//         else{
//             result.push[0] ;
//         }
//     }
//     return result;
// }
// console.log(findPrimes(10))





// function reverseString(str){
//     const string=str.split('').reverse().join('')
//     return string
// }
// console.log(reverseString("AlmaBetter University"))









// function signOfProduct(arr){
//     let product=1;
//     for( let i=0;i<arr.length;i++){
//         product*=arr[i]
//     }
//         if(product>0){
//             return 1;
//         }
//         else if(product<0){
//             return -1;
//         }
//         else{
//             return 0;
//         }
// }
// console.log(signOfProduct([2,5,6,0]))






// function slugGenerator(title){
//    const newtitle=title.toLowerCase().replace(/ /g,'-')+'.com'
//    return newtitle;
// }
// console.log(slugGenerator( "sachin rawat ji ji ji"));

  




// function shortestdistance(wordsDict,word1,word2){
//    let index1=-1;
//    let index2=-1;
//    let minDistance=wordsDict.length;

//    for(let i=0;i<wordsDict.length;i++){
//       if(wordsDict[i]===word1){
//          index1=i;
//       }else if(wordsDict[i]===word2){
//          index2=i;
//       }
//       if (index1 !== -1 && index2 !== -1) {
//          minDistance =Math.min(minDistance,Math.abs(index1 - index2))
//      }
//  }

//  return minDistance;
// }
// const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];
// const word1 = "makes";
// const word2 = "makes";
// console.log(shortestdistance(wordsDict,word1,word2));
   





// function findMove(input) {
//    const states = [];
 
//    for (let i = 0; i < input.length - 1; i++) {
//      if (input[i] === "+" && input[i + 1] === "+") {
//        const newState = input.slice(0, i) + "--" + input.slice(i + 2);
//        states.push(newState);
//      }
//    }
 
//    return states;
//  }
 
//  // Example usage:
//  const input = "++-++";
//  const possibleStates = findMove(input);
//  console.log(possibleStates);
 




// function swapConsecutiveCharacters(str){
//   const string=str.split("");
//   for(let i=0;i<str.length-1;i+=2){
//    const temp=string[i]
//    string[i]=string[i+1]
//    string[i+1]=temp;
//   }
//   const swapstring=string.join("");
//   return swapstring;
// }
// console.log(swapConsecutiveCharacters("badcfe"))






// function arrayintersection(arr1,arr2){
//     let newarray=[];
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]===arr2[j]){
//                 newarray.push(arr1[i])
//             }
//             }
//         }
//            if (newarray.length === 0){
//         return 0;
//     }
//     return newarray
// }
// let arr1=[4,6,2,7]
// let arr2=[6,3,4,2,5]
// console.log(arrayintersection(arr1,arr2))

