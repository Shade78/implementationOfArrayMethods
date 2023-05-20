// arr.forEach(callback(currentValue[, index[, array]])){
    // execute smth
//}, [thisArg]


const arr = [10, 11, 34, 65, 6213, 87, 46];

Array.prototype.forEach2 = function (callback, thisArg) {

    if (typeof callback !== 'function') throw new Error('Callback is not a function');

    let context = thisArg ?? this; // возвращает первый аргумент, если он не null/undefined, иначе второй

    for (let i = 0; i < this.length; i++) { 
        if (this[i] === undefined) continue;
        callback.call(context, this[i], i, this);     
    }

    // let arr = this;
    // for (let i = 0; i < arr.length; i++) {
    //     callback(arr[i], i, arr);
        
    // }
}


arr.forEach2((item, index, array) => {
    console.log({item, index})
})