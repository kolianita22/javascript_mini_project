function generatePassword(len)
{
   let char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
   let result="";

   for(let i=0;i<len;i++)
   {
     const randompass=Math.floor(Math.random()*char.length)
     result+=char[randompass]
   }
   return result
}
let password=generatePassword(5)
console.log(`Generated password:${password}`)
