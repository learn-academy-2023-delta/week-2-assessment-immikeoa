// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.
// describe("divisibleBy3", () => {
//     it("Takes in an object and returns if divisible by three.", () => {
//       const object1 = { number: 15 }
//       const object2 = { number: 0 }
//       const object3 = { number: -7 }
//       expect(divisibleBy3(object1.number)).toEqual("is divisible by three")
//       expect(divisibleBy3(object2.number)).toEqual("is divisible by three")
//       expect(divisibleBy3(object3.number)).toEqual("is not divisible by three")
//     })
//   }) //● divisibleBy3 › Takes in an object and returns if divisible by three.
  
// b) Create the function that makes the test pass.
const divisibleBy3 = (object) => {
      if (object % 3 === 0){
        return "is divisible by three"
      } else if (object % 3 !== 0){
        return "is not divisible by three"
      }
}  
// Pseudo code:
// Input: Object
// Output: "if the Number is divible by 3"
// Create a function named divisibleBy3
// takes in an obect key value which will be a number as an argument
// crate a conditional if/ else if statement 
// with the modulo % check if each argument is divisible by three. 
// return a string saying if it is or not

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.
// describe("capArray", () => {
//     it("takes in an array of words and returns an array with all the words capitalized.", () => {
//         const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//         const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//       expect(capArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//       expect(capArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })
//   }) //capArray › takes in an array of words and returns an array with all the words capitalized.
// b) Create the function that makes the test pass.
const capArray = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i].charAt(0).toUpperCase());
  }
  return newArray;
}; // i got lost trying to find the issue. later i added .charAt method make sure it was the first lleter capitalized. Array [
  // -   "Streetlamp",
  // -   "Potato",
  // -   "Teeth",
  // -   "Conclusion",
  // -   "Nephew",
  // +   "S",
  // +   "P",
  // +   "T",
  // +   "C",
  // +   "N",
  //   ]
// Pseudo code:
// create a function named capArray
// it takes an array as an arument
// use a for loop to iterate throught each index
// capitalized each index with the .toUpperCase method
// return the array
// Input: an array of words
// Output: an array with the strings capitalized

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// a) Create a test with expect statements for each of the variables provided.
// describe("finFirstVowelIndex", () => {
//     it("takes in a string and logs the index of the first vowel.", () => {
//         const vowelTester1 = "learn"
//         const vowelTester2 = "academy"
//         const vowelTester3 = "challenges"
//       expect(findFirstVowelIndex(vowelTester1)).toEqual(1)
//       expect(findFirstVowelIndex(vowelTester2)).toEqual(0)
//       expect(findFirstVowelIndex(vowelTester3)).toEqual(2)
//     })
//   }) // ● finFirstVowelIndex › takes in a string and logs the index of the first vowel.

  // b) Create the function that makes the test pass.
const findFirstVowelIndex = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const lowerCaseStr = str.toLowerCase();
  
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (vowels.includes(lowerCaseStr[i])) {
       return console.log(i);
    
    }

  }
} // I tried changing the return several ways but it stills gives me undefinned
// expect(received).toEqual(expected) // deep equality

// Expected: 1
// Received: undefined

// Pseudo code:
// create a function name findFirstVowelIndex takes in an string as argument
// create an array to hold vowels to compare to
// crate vaariable that is equal to the passed in string lowercased using the toLowercase method
// create a for loop to iterate throught each index the new string
// use the .includes() method to check the array of vowels
// return the index of the passed in string that matches the array
// Input : a string 
// Output : returns the index of the first vowel
