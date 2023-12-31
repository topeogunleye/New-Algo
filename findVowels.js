const findVowels = (str) => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'] 

    for (let char of str.toLowerCase()) {
        if(vowels.include(char)) {
            count++
        }
    }
    return count
}


findVowels('hello') // --> 2
findVowels('why') // --> 0
