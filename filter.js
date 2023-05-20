let array = [4, 8, 3, -17, 12, 2, 3, 83, -1, 35, -22, 11, 19]

function isPrime(num){
    if (num <= 1)
        return false;
    else if (num == 2)
        return true;
    else{
        for (let i = 2; i < num; i++) {
            if (num % i === 0)
                return false;           
        }
        return true;
    }
}

Array.prototype.filter2 = function (callback, thisArg){

    if (typeof callback !== 'function') throw new Error('Callback is not a function');

    let context = this;

    let Ob = Object(this);

    if (arguments.length > 1){
        context = thisArg;
    }

    let res = [];

    for (let i = 0; i < this.length; i++) { 
        if (this[i] === undefined) continue;
        if (i in Ob){
            let current = this[i]
            if (callback.call(context, current, i, this)){
                res.push(current);
            }    
        }
    }
    
    return res;
}


let prime = array.filter2(isPrime)

console.log(prime)

