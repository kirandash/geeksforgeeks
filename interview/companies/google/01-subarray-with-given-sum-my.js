// Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} s
 * @returns {number[]}
 */

/* 
Simple approach 
Algorithm:
1. Traverse the array from start to end.
2. From every index start another loop from i to the end of array to get all subarray starting from i, keep a variable sum to calculate the sum.
3. For every index in inner loop update sum = sum + array[j]
4. If the sum is equal to the given sum then print the subarray.
*/

class Solution {
  //Function to find a continuous sub-array which adds up to a given number.
  subarraySum(arr, n, s) {
    //your code here
    let result = [];
    for (let i = 0; i < n; i++) {
      let acc = 0;
      for (let j = i; j < n; j++) {
        acc += arr[j];
        if (acc === s) {
          result.push(i + 1, j + 1);
          break;
        }
      }
      if (acc === s) break;
    }
    return result;
  }
}

let sol = new Solution();
console.log(sol.subarraySum([1, 2, 3, 7, 5], 5, 12));

console.log(sol.subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 15));

/**
 * Complexity Analysis:  
 * 
 * Time Complexity: O(n^2) in worst case. 
 * Nested loop is used to traverse the array so the time complexity is O(n^2)
 * 
 * Space Complexity: O(1). 
 * As constant extra space is required.
 */
