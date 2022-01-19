// Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.

/**
 * @param {number[]} arr
 * @param {number} n length of array
 * @param {number} s sum
 * @returns {number[]}
 */

/**
 * Efficient Approach: There is an idea if all the elements of the array are positive. 
 * If a subarray has sum greater than the given sum then there is no possibility that adding elements to the current subarray the sum will be x (given sum). 
 * Idea is to use a similar approach to a sliding window. Start with an empty subarray, add elements to the subarray until the sum is less than x. 
 * If the sum is greater than x, remove elements from the start of the current subarray.

Algorithm: Sliding Window

Create three variables, l=0 (left pointer), sum = 0
Traverse the array from start to end.
Update the variable sum by adding current element, sum = sum + array[i], Push entry into sub array
If the sum is greater than the given sum, update the variable sum as sum = sum - array[l], and update l as, l++. And remove first entry of sub array
If the sum is equal to given sum, print the subarray and break the loop.
 */

class Solution {
  //Function to find a continuous sub-array which adds up to a given number.
  subarraySum(arr, n, s) {
    //your code here
    let result = [];
    let leftPointer = 0;
    let currSum = 0;
    for (let i = 0; i < n; i++) {
      if(currSum === s){
        break;
      } else if(currSum > s) {
        currSum -= arr[leftPointer];
        result.shift(); // remove first element from array
        leftPointer++;
      } else {
        currSum += arr[i];
        result.push(arr[i]);
      }
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
 * Time Complexity: O(n)
 * 
 * Space Complexity: O(1). 
 * As constant extra space is required.
 */
