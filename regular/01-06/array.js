var fruits = ["mango", "apple", "banana", "pineapple"]
console.log(fruits.toString())

var numbers = [25,12,4,23,75,12,69];
console.log(numbers.sort())

var numbers2 = ["25", "12", "04", "23", "75", "12", "69"];
console.log(numbers2.sort())

numbers.sort(function(a,b){
    return a - b; 
});

var num = [1,5,3,6,9,7];
