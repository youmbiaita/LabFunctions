console.log("Functions")

//Part1: Thinking Functionally
console.log("===========================================================================");
console.log("Part1: Thinking Functionality");
console.log("===========================================================================");
const numOfArray = [1, 2, 4, 5, 8, 10];

// a) for Sum
function sumNumber(number) {
    let sumArray = 0;
    for (let n = 0; n < number.length; n++) {
        sumArray += number[n];
    }
    return sumArray;
}
console.log("The sum of the array is :");
console.log(sumNumber(numOfArray));

// b) for average
console.log("=====================================");
console.log("                           ");
function averageNumber(num) {
    let sumArray = 0;
    for (let n = 0; n < num.length; n++) {
        sumArray += num[n]
    }
    return sumArray / num.length;
}
console.log("The average of numbers is:");
console.log(averageNumber(numOfArray));

// c) Array of String
const arrays = ["I", "am", "a", "software", "developer"];

function getLongestString(stringArray) {
    let longestString = stringArray[0];
    for (let i = 1; i < stringArray.length; i++) {
        if (stringArray[i].length > longestString.length) {
            longestString = stringArray[i];
        }

    }
    return longestString;
}
console.log(getLongestString(arrays));

console.log("=====================================");
console.log("                           ");

function stringsLongerThan(stringNumber, num1) {
    let longestStringNumber = [];
    for (let i = 0; i < stringNumber.length; i++) {
        if (stringNumber[i].length > num1) {
            longestStringNumber.push(stringNumber[i]);
        }

    }
    return longestStringNumber;
}
console.log(stringsLongerThan(arrays, 5));


console.log("=====================================");
console.log("                           ");

function printNumber(n) {
    console.log(n);
    if (n > 1) {
     printNumber(n-1);
    }
}
console.log("The numbers between 1 and n are :");
printNumber(10);

data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

function getAges (objects) {
    let arrayAge = [];
    for(let i = 0; i < objects.length; i++) {
        arrayAge.push(parseInt(Object.values(objects[i])[3]));
    }
   return arrayAge;
   }
console.log(getAges(data));

// Callback Function
function sortAge (objects, callbackFunction) {
    return callbackFunction(objects).sort((a, b) => a - b);
    
}
console.log(sortAge(data, getAges));

//Callback Function: remove
function removeAge (objects, callback) {
    let myArray = [];
    for (let x of callback(objects)){
        if(x > 50) {
            myArray.push(x);
        }
    }
    return myArray;
    
}
console.log(removeAge(data, getAges));



