function maskEmail(email){
   const E_index=email.indexOf("@")
   const E_slice= email.slice(0,E_index);
   const domain=email.slice(E_index);
  
   
   const E_repeat="*".repeat(E_slice.length-2);

   return email[0]+E_repeat+email[E_slice.length-1]+domain;
}
const email="apple.pie@example.com";
console.log(maskEmail(email));//a*******e@example.com
console.log(maskEmail("info@test.dev"));//i**o@test.dev
