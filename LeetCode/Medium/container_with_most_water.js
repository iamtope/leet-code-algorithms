// My Approach (Brute Force Approach)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const length = height.length;
  let curr_max = 0;
  let area = [];

  let j = 0;
  while (j < length) {
    for (let i = length - 1; i > 0; i--) {
        let hi = height[i];
        let hj = height[j];

        let l = Math.min(hi, hj);
        let b = Math.abs(j - i);

        let theArea = l * b;
        if (theArea > curr_max) {
          curr_max = theArea;
        }
    }
    j += 1;
  }
  return  curr_max
};

const height =  [2,1]
maxArea(height);


// Two pointer Approach (Python)
// How this approach works?

// class Solution:
//     def maxArea(self, height: List[int]) -> int:
//         maxarea = 0
//         left = 0
//         right = len(height) - 1
        
//         while left < right:
//             width = right - left
//             maxarea = max(maxarea, min(height[left], height[right]) * width)
//             if height[left] <= height[right]:
//                 left += 1
//             else:
//                 right -= 1
                
//         return maxarea

// Initially we consider the area constituting the exterior most lines. Now, to maximize the area, we need to consider the area between the lines of larger lengths. If we try to move the pointer at the longer line inwards, we won't gain any increase in area, since it is limited by the shorter line. But moving the shorter line's pointer could turn out to be beneficial, as per the same argument, despite the reduction in the width. This is done since a relatively longer line obtained by moving the shorter line's pointer might overcome the reduction in area caused by the width reduction.

// For further clarification click here and for the proof click here.


// Complexity Analysis

// Time complexity: O(n)O(n). Single pass.

// Space complexity: O(1)O(1). Constant space is used.
