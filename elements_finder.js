function findElement(arr,func)
{
   for(let num=0;num<arr.length;num++)
   {
     if(func(arr[num]))
     {
       return arr[num];
     }
   }
   return undefined;
}
const result=findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; });
console.log(result)
