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
    
    let sequence = 2;
    while(n > 1)
    {
        if(n % sequence == 0){
            document.write(sequence + " ");
            n /= sequence;
        }
        else sequence++;
    }

    return sequence;

    let div = document.createElement('div');  //creating element
    div.textContent = sequence;         //adding text on the element
    document.body.appendChild(div);  

}

// Aqui profe solo tenia duda en si tenia que imprimir el resultado 
// en el html, o simplemente mientras imprimiera en consola.

console.log(getPrimeFactors(30030));
