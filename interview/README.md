# Interview Preparation

## Must Do Coding Questions Company-wise
- https://www.geeksforgeeks.org/must-coding-questions-company-wise/

### Google
#### 1.1 Subarray with given sum (Easy)
- https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1
- Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.
- Naive approach: Two loops
- Best approach: Sliding window

#### 1.2 Maximum Index (Medium)
- https://practice.geeksforgeeks.org/problems/maximum-index-1587115620/1
- Given an array A[] of N positive integers. The task is to find the maximum of j - i subjected to the constraint of A[i] < A[j] and i < j.
- Naive approach: Two loops and ```if(A[i] < A[j] && maxDiff < (j - i)) {maxDiff = j - i;}```
- Best approach: 
