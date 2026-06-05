const sentence: string = "Java programming is fun and challenging";

// Split sentence into words
const words: string[] = sentence.split(" ");

// 1. Count total number of words
console.log("Total words in the sentence are " + words.length);

// 2. Print words in reverse order
let reverseSentence: string = "";
for (let i: number = words.length - 1; i >= 0; i--) 
{
    reverseSentence = reverseSentence + words[i] + " ";
}
console.log("Reverse Sentence is : " + reverseSentence.trim());

// 3. Convert first character of each word to uppercase
let uppercaseSentence: string = "";
for (const word of words)
{
    uppercaseSentence = uppercaseSentence + word.substring(0, 1).toUpperCase() + word.substring(1) + " ";
}
console.log("Uppercase Sentence is : " + uppercaseSentence.trim());