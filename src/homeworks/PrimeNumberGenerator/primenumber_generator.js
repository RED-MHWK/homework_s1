
function * primeNumberGen() {
let a = 1;
while(a < 100044) {
    a++;
    if(isPrime(a)){
        if (a < 20 || (a > 100000 && a < 100044)){
            yield a;
        }
    }
}
}

function isPrime(b){

    if(b < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(b); i++){
        if (b % i === 0){
            return false;
        }
    }
    return true;
}

const primeNumbers = primeNumberGen();

export{primeNumbers}
