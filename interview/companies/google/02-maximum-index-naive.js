//  Given an array A[] of N positive integers. The task is to find the maximum of j - i subjected to the constraint of A[i] < A[j] and i < j.

/**
 * @param {number[]} A
 * @param {number} N
 * @returns {number}
 */

/**
 * PsuedoCode
 * Loop Through array (i)
 * Create Second loop (j)
 * Create variable to store the maximum difference
 * Compare A[i] < A[j] and if maxDiff is < current j - i, if it satisfies then update maxDiff
 * return maxDiff
 */

class Solution {
  // Function to find the maximum index difference.
  maxIndexDiff(A, N) {
    //your code here
    if(N < 2) return false;
    let maxDiff = -1;
    for (let i = 0; i < N; i++) {
        for(let j = 1; j < N; j++) {
            // IMPORTANT
            if(A[i] < A[j] && maxDiff < (j - i)) {
                maxDiff = j - i;
            }
        }
    }
    return maxDiff
  }
}

let sol = new Solution();
console.log(sol.maxIndexDiff([1, 10], 2)); // 1

console.log(sol.maxIndexDiff([34, 8, 10, 3, 2, 80, 30, 33, 1], 9)); // 6

/**
 * Time Complexity: O(n^2)
 */
