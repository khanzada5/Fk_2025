let Password = Number( prompt( "Enter Your Password: " ) )

console.log( typeof Password )

if (  Password == 12345 ) {
 document.body.innerHTML = 
  "Correct Password"
  
}
else if (  Password != 12345 ) {
    document.body.innerHTML = 
     "wrong Password"
     
   }
  