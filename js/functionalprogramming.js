/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    console.assert(expected === found, "TEST FAILED.  Expected " + expected + " found " + found);
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* runs test to see if expected array is equal to value returned by function2test argument */
function myFunctionArrayTest(expected, found) {
    console.assert(JSON.stringify(expected) === JSON.stringify(found), "TEST FAILED.  Expected " + expected + " found " + found);
    if (JSON.stringify(expected) === JSON.stringify(found)) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* sum() all the numbers in an array of numbers */
function sum(arr) {
    return arr.reduce((accumulator,item)=> {return accumulator+item});
}

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, sum([1, 2, 3, 4])));

console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(15, sum([1, 2, 3, 4])));

/* multiply() all the numbers in an array of numbers */
function multiply(arr) {
    return arr.reduce(
        (accumulator,item)=>{ return accumulator*item}
    );
}

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, multiply([1, 2, 3, 4])));

console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(26, multiply([1, 2, 3, 4])));

/* reverse() that computes the reversal of a string */
function reverse(str){
    return str.split('').map((char,index)=>{
        return str[(str.length-1)-index];
    }).join("");
}

console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest('ratset gaj', reverse('jag testar')));

console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest('ratset jag', reverse('jag testar')));

/* filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i */
function filterLongWords(words, i) {    
    return words.filter(word=>word.length>i);
}

console.log("Expected output of filterLongWords(['abc', 'a', 'abcde', 'abcd'], 3) is ['abcde', 'abcd']  " + myFunctionArrayTest(['abcde', 'abcd'], filterLongWords(['abc', 'a', 'abcde', 'abcd'], 3)));

console.log("Expected output of filterLongWords(['abc', 'a', 'abcde', 'abcd'], 3) is ['abcde', 'abcd']  " + myFunctionArrayTest(['a', 'abcde', 'abcd'], filterLongWords(['abc', 'a', 'abcde', 'abcd'], 3)));
