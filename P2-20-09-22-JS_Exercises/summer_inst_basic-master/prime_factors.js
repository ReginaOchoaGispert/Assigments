

var getPrimeFactors = function (n) {
    "use strict";
    var n = document.getElementById("num").value;
    let contenedor = document.getElementById("pf").textContent;

    function isPrime(n) {
        var i;
        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    var i
    var sequence = [];
    var unsequence = [];
    for(i=2; i<n; i++){
        if(isPrime(i)){
            sequence.push(i);
        } else{
            unsequence.push(i);
        }
    }

    let div = document.createElement('div');  //creating element
    div.textContent = sequence.filter((e) => n%e ===0);         //adding text on the element
    document.body.appendChild(div);  
}

console.log(getPrimeFactors(30030));
// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]


