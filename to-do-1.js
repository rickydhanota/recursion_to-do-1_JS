// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

function rSigma(num) {
    if(num > 0) {
        return rSigma(num-1) + num; //(r_of_4, and +5), (r_of_3, and +4), (r_of_2, and +3), (r_of_1, and +2), (r_of_0, and +1), (r_of_-1, and +0, but this wont be true so it will return 0)
    }
    return 0
}

console.log(rSigma(5));

// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

function rFract(num){
    if(num>0){
        return rFract(num-1)*num; //
    }
}

console.log(rFract(5));