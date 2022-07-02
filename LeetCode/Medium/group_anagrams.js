// url to problem: https://leetcode.com/problems/group-anagrams/
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.
// Accepted
// 1,424,946
// Submissions
// 2,201,329

// SLOWER SOLUTION
var groupAnagrams = function(strs) {
    strs = strs.sort()
    
    const bigArray = [];
   let newArr = []
    let i = 0
    strs = mergeSort(strs)
    while (strs.length != 0){
      console.log(strs.length)
      for (let j =1; j < strs.length; j++){
        if (checkStrings(strs[i],strs[j]) == true){
          newArr.push(strs[j])
          
          strs.splice(strs.indexOf(strs[j]),1)
          j = j-1
          
        }
       
    }
      newArr.push(strs[i])
      bigArray.push(newArr);
        newArr = []    
         strs.splice(strs.indexOf(strs[i]),1)
      
    }
    return bigArray
    // console.log(bigArray)
  };


// FASSTER AND MORE EFFICIENT SOLUTION
var groupAnagrams = function(strs) {
    const hashmap = {};
      for(const i of strs){
        let j = i.split("").sort().join("");
        if(!hashmap[j]){
          hashmap[j] = [i]
        }
        else{
          hashmap[j].push(i)
        }
        
      }
      // console.log(Object.values(hashmap))
      return Object.values(hashmap)
    }