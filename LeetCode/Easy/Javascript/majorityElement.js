/** 
https://leetcode.com/problems/majority-element/description/?envType=study-plan&id=data-structure-ii

169. Majority Element
Easy
13.8K
430
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    //sort
    // find n/2
    // know how many times each element occur
    nums.sort()
    shallowArray = [... new Set(nums)]
    
    let hashMap = {}
    arrLen = nums.length /2

    let majority;
    for(let i = 0; i < shallowArray.length; i ++){
        hashMap[shallowArray[i]] = nums.filter(element => element === shallowArray[i]).length
    }
    
    for(let key in hashMap){      
        if(hashMap[key] > arrLen){
            majority = key
        }
    }
    return majority;
};
