const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

function palindrome(word: string): void {
    const re: RegExp = /[^A-Za-z0–9]/g;
    word = word.toLowerCase().replace(re, '');
    const wordLength: number = word.length
    let result: boolean = true
    
    for(let i = 0; i < wordLength/2; i++) {
        if(word[i] !== word[wordLength - 1 - i]) result = false
    }
    
    if(result) {
        console.log('It is a palindrome');
    } else {
        console.log('It is not a palindrome');
    }

    readline.close()
}

readline.question("Input word: ", palindrome)