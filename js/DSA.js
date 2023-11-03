// function FindMaxElement(arr){
//     if(arr.length === 0){
//         console.log("Empty array");
//     }
//     let max=arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > max){
//             max = arr[i] 
//         }
//     }
//     console.log(max) ; 
     
//  }
//  FindMaxElement([7,5,3,8,5]);

 function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements using destructuring assignment
      start++;
      end--;
    }
    return arr;
  }
  
  console.log(reverseArray([3, 6, 8, 4, 9, 5,6,2]));

