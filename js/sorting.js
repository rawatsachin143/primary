// function bubbleSort(arr){
//     let length=arr.length;
//     for(let i = 0;i < arr.length; i++){
//         for(let j = 0; j < arr.length-i-1; j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr [j] = arr[j+1]
//                 arr [j+1] = temp;
//             }
//         }
//     }
//     return arr;

// }
// console.log(bubbleSort([9,5,8,2,6,7]));


// function mergeSort(arr) {
//   // Base case: If the array has only one element, it is already sorted
//   if (arr.length <= 1) {
//     return arr;
//   }

//   // Split the array into two halves
//   const mid = Math.floor(arr.length / 2);
//   const leftHalf = arr.slice(0, mid);
//   const rightHalf = arr.slice(mid);

//   // Recursively sort the left and right halves
//   const sortedLeft = mergeSort(leftHalf);
//   const sortedRight = mergeSort(rightHalf);

//   // Merge the sorted halves
//   return merge(sortedLeft, sortedRight);
// }

// function merge(leftArr, rightArr) {
//   const mergedArr = [];
//   let leftIndex = 0;
//   let rightIndex = 0;

//   // Compare elements from the left and right arrays and merge them in sorted order
//   while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
//     if (leftArr[leftIndex] < rightArr[rightIndex]) {
//       mergedArr.push(leftArr[leftIndex]);
//       leftIndex++;
//     } else {
//       mergedArr.push(rightArr[rightIndex]);
//       rightIndex++;
//     }
//   }

//   // Add the remaining elements from the left or right array (if any)
//   mergedArr.push(...leftArr.slice(leftIndex));
//   mergedArr.push(...rightArr.slice(rightIndex));

//   return mergedArr;
// }

// Example usage
// const arr = [6, 5, 3, 1, 8, 7, 2, 4];
// const sortedArr = mergeSort(arr);
// console.log(sortedArr);

// // Output
// [1, 2, 3, 4, 5, 6, 7, 8]

// function quicksort(arr){
//   let pivot = arr[0];
//   let left= [ ];
//   let right= [ ];

//   for(let i=1;i<=arr.length;i++){
//    if(arr[i]<pivot){
//      leftarr.push(arr[i])
//    }
//    else{
//       rightarr.push()
//    }
//   }
//   return (quicksort(left) , pivot , quicksort(right));
// }
// console.log(quicksort[6,3,9,4,2,9,1,7,5])



// function quickSort(arr){
//    if (arr.length <= 1) {
//      return arr;
//    }
 
//    let pivot = arr[0];
//    let leftArr = [];
//    let rightArr = [];
 
//    for (let i = 1; i < arr.length; i++) {
//      if (arr[i] < pivot) {
//        leftArr.push(arr[i]);
//      } else {
//        rightArr.push(arr[i]);
//      }
//    }
 
//    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
//  }
 
//  console.log(quickSort([5, 3, 6, 2, 10,45,76,1]));



 const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});

console.log(points);
 
