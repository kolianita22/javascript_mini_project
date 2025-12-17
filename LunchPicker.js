let lunches=[];
function addLunchToEnd(arr,LunchItem)
{
  arr.push(LunchItem);
  console.log( `${LunchItem} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr,LunchItem)
{
  arr.unshift(LunchItem);
  console.log( `${LunchItem} added to the start of the lunch menu.`)
  return arr;
}
function removeLastLunch(arr)
{
  if(arr.length==0)
  {
    console.log("No lunches to remove.");
  }
   
   console.log(`${arr.pop()} removed from the end of the lunch menu.`)
   return arr;
}

function removeFirstLunch(arr)
{
  if(arr.length==0)
  {
    console.log("No lunches to remove.");
    return arr;
  }
 
  console.log(`${ arr.shift()} removed from the start of the lunch menu.`)
  return arr;
}
function getRandomLunch(arr)
{     
      if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * arr.length);
  console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
    return;
  }
  console.log(`Menu items: ${arr.join(", ")}`);
}
