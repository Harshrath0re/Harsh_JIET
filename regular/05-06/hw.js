var arr = [2, 4, 5, 6, 7]
var arr2 = arr.reduce ((result, el) =>{
    return result * el;
});

console.log(arr2);