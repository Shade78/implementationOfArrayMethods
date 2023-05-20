let array = [4, 5, 3];

Array.prototype.map2 = function(callback, thisArg){

    if (typeof callback !== 'function') throw new Error('Callback is not a function');

    let context = this;

    if (arguments.length > 1){
        context = thisArg;
    }


    let newArray = []

    for (let i = 0; i < this.length; i++) {
        newArray[i] = callback.call(thisArg, this[i], i, this);             
    }
    return newArray;
}

console.log(array.map2((item) => item*2))
console.log(array)
