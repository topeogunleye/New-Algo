
// key - letter character
// value - num of times letter is contained in the given string 
function buildCharObj (str) {
    const objDataStructure = {}

    str.replace(/[^\w]/g).toLowerCase()
    // populate the objDataStructure
    for (let i = 0; i < str.length; i++) {
        objDataStructure[str[i]] = objDataStructure[str[i]] + 1 || 1;
    }
    return objDataStructure
}


// main function
const anagram = (strA, strB) => {
    // build the object that holds strA data
    const aCharObj = buildCharObj(strA);
    // build the object that holds strB data
    const bCharObj = buildCharObj(strB);
    console.log(aCharObj, bCharObj)

    // compare number of keys in two objects
    // (anagrams must have the same number of letters)

    if (Objects.keys(aCharObj).length !== Object.keys(bCharObj).length) {
        return false
    }

    // if both objects have the same number of keys
    // we can be sure that at least both strings
    // have the same number of characters
    // Now we can compare the two objects to see if both
    // have the same letters in the same amount
    for (let char in aCharObj) {
        if(aCharObj[char] !== bCharObj[char]) {
            return false
        }
    }

    // if both the above checks succeed,
    // you have an anagram: return true
    return true;
}

anagram('finder', 'friend')

// Understanding the challenge

// You can state this challenge in the following terms: write a function that checks if two provided 
// strings are anagrams of each other; letter casing shouldn’t matter. Also, consider only characters, 
// not spaces or punctuation. For example:

// anagram('finder', 'Friend')  --> true
// anagram('hello', 'bye') --> false
// Reasoning about the challenge
// The first thing to notice is that you’ll need to compare each letter in the two input strings, 
// not only in terms of which letters they are but also how many of each letter there are in both strings.
// A way of mapping this information would look something like this:

// finder --> f: 1        friend --> f: 1
//            i: 1                   r: 1
//            n: 1                   i: 1
//            d: 1                   e: 1
//            e: 1                   n: 1
//            r: 1                   d: 1

// A suitable data structure to hold the anagram data would be a JavaScript object literal: the key is the letter character and the value is the number of times that letter is contained in the given string.

// Next, pay attention to these edge cases:

// make sure letter casing isn’t factored into the comparison; just transform both strings into either lower case or upper case
// leave everything that isn’t a character out of the comparison; a good option would be to use a regular expression.