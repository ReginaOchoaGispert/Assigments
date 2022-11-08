const pi = 3.1415962;

function doublePi() {
    return pi * 2;
}

function triplePi() {
    return pi * 3;
}

function addition(n1, n2) {
    return n1 +n2;
}

export default doublePi; //solo puedes tener un export default
export { pi, triplePi, addition};
//we are exportifn 2 definitions in this file