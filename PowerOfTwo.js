//Write a program that takes a command-line argument n and prints a table of the powers 
//of 2 that are less than or equal to 2^n.

function powerOfTwo(number){
    let value=1;
    for (var i = 0; i <= number; i++) {
        console.log("2^" + i + " = " + value);
        value = value*2;
    }    
}
powerOfTwo(8);