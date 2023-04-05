function hasTargetSum(array, target) {
  //I will need to create a function hasTargetSum which checks whether any two values within an input array add up to the target value entered
  //first iterate over the array and identify what number needs to be added to yield target
  for (let i = 0; i < array.length; i++) {
    let addOn = target - array[i];
    //Having got this value, we need to use the if statement to determine whether the array contains it. We need to begin with the next number (i+1)
    for (let x = i + 1; x < array.length; x++) {
      if (array[x] === addOn) return true;
}
  }
  return false;
}
 

/* 
  First loop = n steps in the loop => O(n)
  second loop = n*n steps in the loop => O(n*n)
*/

/* 
           pseudocode
  Accept array and target number as input.
  Iterate ove the values within the array
  for each number, determine the value that will add up to the target value.
  Iterate once again over the entire array and check whether this add up value exist, if it does return true 
  else
  return false
*/

/*
  Add written explanation of your solution here
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
