/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    const middle = Math.floor(nums.length/2)

    console.log(nums[middle])
};

const nums = [-2,1,-3,4,-1,2,1,-5,4]
maxSubArray(nums)