//Array methods --  all are linear, go through each item only once
//only work on arrays, can be numbers, strings, etc.

const nums = [1, 2, 3, 4, 5, 6,];

//1. helper functions

function addOne(x) {
    return x + 1;
}

return printThing(thing) {
    print(thing)
}

function totalNums(accumulator, currentValIteminArray) {
    return accumulator + currentValIteminArray
}


//2. forEach
nums.forEach(//callback fn), not calling the function, just fn name
            //will call the function for each item in array
            //doesn't return anything, just calls fn for each item
nums.forEach(printThing)

nums.forEach(function(item, index, array) { //only item required
    console.log(item); //these show what forEach does in console
    console.log(index);
    console.log(array);
})

//.3 map
//like forEach but returns new array

let newNums = nums.map(addOne);  //goes through array, calls fn on each item in array
                    //what is returned gets put in that spot in array that was occupied by original item
                    //doesn't modify original array
                    //helper function must return something, otherwise get "undefined"
                   
let newArray = nums.map((item, index, array) => {    //can also accept item, index, and array 
    return [item: item, index: index, array: array]
});  

let firstNames = ["nancy", "apple", "dakota"]  //pair first and last names from 2 arrays, create new array w/full name
let lastNames = ["smith", "rose", "black"];
let addedStrings = arrOfStrings.map ((item, i) => item + " " + lastNames[i]);
console.log(addedStrings);

//4. filter

nums.filter() //if meets condition in (), adds item to new array
            //must return a truthy or falsy value
            //pass in helper function (callback) to create condition (defined in function)


            //=> is same as (function(){})

//5. reduce 
//used to find one thing, reduces array to single item

//nums.reduce(helper firstNames, item to start at-not required)  //know the total of every item in array

nums.reduce(totalNums, 0); //adds numbers of array one by one

nums.reduce(function(accumulator, currentVal) {  //adds even nums in array
    if (currentVal %2 === 0) {
        return accumulator + currentVal;
    }  else {
        return accumulator;
    }
}, 0)