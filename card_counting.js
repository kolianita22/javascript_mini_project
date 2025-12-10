let count = 0;

function cc(card) {
 
  if ([2, 3, 4, 5, 6].includes(card)) {
    count += 1;
    return count + " Bet";
  }
  
  else if ([7, 8, 9].includes(card)) {
    count=0;
    return count+ " Hold"
  }
  
  else if ([10, "J", "Q", "K", "A"].includes(card)) {
    count -= 1;
    return count +" Hold"
  }

}
console.log(cc(6));
console.log(cc(9));
console.log(cc("A"));
console.log(cc(7));
console.log(cc(10));
console.log(cc("K"));
/*1 Bet
0 Hold
-1 Hold
0 Hold
-1 Hold
-2 Hold*/
