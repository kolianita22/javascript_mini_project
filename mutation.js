function mutation(arr)
{
  const first=arr[0].toUpperCase();
   const second=arr[1].toUpperCase();

   for(let i=0;i<second.length;i++)
   {
     if(!first.includes(second[i]))
     {
       return false;
     }
   }
   return true;

   

   
}
mutation(["hello", "Hello"]);
console.log(mutation(["hello", "hey"]));
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])
