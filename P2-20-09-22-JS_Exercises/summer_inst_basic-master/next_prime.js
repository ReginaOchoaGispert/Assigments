function checkPrime() {
    var id = document.getElementById("num");
    var number = parseInt (document.getElementById("num").value);
    var maxNum = parseInt(1299827);
    if(number < maxNum && !isNaN(number)) {
        for(var i = number+1; i< maxNum; i++) {
            //TODO: check if the current number is a prime or not
            // If it is, then return it
            if(isPrime(i)){
               //window.alert(i + " is the next prime");
               /*
               var span = document.getElementById("result");
               span.innerHTML = i + " is the next prime";
               span.style = "font-weight: bold;"
               */
               var item = document.createElement("li");
               item.innerHTML = "The next prime number after " + number + " is " + i;
               document.getElementById("result").appendChild(item);
               break;
            }
        }
    } else {
        window.alert("Please Enter Number Below 1299827 or Enter A Valid Integer");
        id.value = "";
    }
}
function isPrime(num) {
    for(var i = 2; i < num; i++ ) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}