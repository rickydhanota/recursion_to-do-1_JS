function rSigma(num) {
    if(num > 0) {
        return rSigma(num-1) + num; //
    }
    return 0
}

console.log(rSigma(5))