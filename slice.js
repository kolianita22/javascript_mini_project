function frankenSplice(arr1,arr2,index)
{
 
  let newArr = arr2.slice();

  // Insert all elements of arr1 starting at index
  newArr.splice(index, 0, ...arr1);

  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2))
