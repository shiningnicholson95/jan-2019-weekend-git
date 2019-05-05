// TODO
// Write a JavaScript program to check whether a number is prime of not

function chkNumber(num){
    if(num%2===0){
        return ('It prime number' +num)
    }
    else{
        console.log('its not prime number')
    }
}

console.log(chkNumber(13))
