function solution(nums){
  //parameters: array of numbers, or empty array
  //returns: if array of numbers, sorted in ascending order. If empty array, return empty array
  //examples: arrayEmpty = [''] returns arrayEmpty
  //psuedocode: take in array, check if it's an actually an array, or a null value. If array, sort by ascending order
  if(!Array.isArray(nums)){
    return []
  }
  console.log(nums)
//   if nums.includes(''){
//     return nums
//   }
  nums.sort((a, b) => a - b)
  console.log(nums)
  return nums
}