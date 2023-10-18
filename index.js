function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i<array.length; i++){
  for(let j = i+1; j<array.length; i++){

    if(array[i]+array[j] === target) return true;
  }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

function hasTargetSum(array, target)
for let i = o, array.length-1 i++
for let j = i+1, array.length-1, j++

if array[i] + array[j] = target return true
end for loop 
return false

/*
  Add written explanation of your solution here
  loop through the array using for loop 
  create a second loop to access the second values of the array
  compare the sum if its evaluates to target and return true
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
