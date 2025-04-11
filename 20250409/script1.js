let age = Number( prompt( "Enter Your age" ) )

console.log( typeof age )

if (  age < 18 ) {
 document.body.innerHTML = 
  "You are not eligible to caste vote."
} else if (  age >= 18 ){
 document.body.innerHTML = 
  "You are eligible to caste vote."
} else{
 document.body.innerHTML = 
  "Tu mera Putarr Chuttii Kar!"
}