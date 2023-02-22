/** 
https://leetcode.com/problems/single-number/description/?envType=study-plan&id=data-structure-ii

136. Single Number
Easy
13K
501
Companies
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    // start from the first number in the whole array
    //if you find a number twice, remove it from the array and go again
    //else, we have found the number
    nums.sort()
     let numsToFind;
    for (let i =0; i <= nums.length; i++){
      numsToFind = nums[i];
      nums.splice(i, 1)
      number = nums.find(element => element == numsToFind) 
      if(number === undefined){
          return numsToFind
    }
    }

  return numsToFind
   
    
};
