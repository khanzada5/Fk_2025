let number = prompt ("Enter your number");

if ( number > 0 ) {
    document.body.innerHTML = "The number is Positive";
} 
else if (number < 0) {
    document.body.innerHTML = "The number is Negative";
}
else{
    document.body.innerHTML = "The num is zero";
}