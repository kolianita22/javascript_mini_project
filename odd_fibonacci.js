function sumFibs(num)
{
  let a=0;
  let b=1;
  let c=a+b;
  for(let i=0;i<=num;i++)
  {
 
    
    if(i%2!=0)
    {
      c+=i;
    }

  }
  return c
  
} 
console.log(sumFibs(4))
