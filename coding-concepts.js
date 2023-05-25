// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Delta 2023"
//console.log(cohort.split(""))

// a) Your answer: [D,e,l,t,a, ,2,0,2,3]
// b) Verify and explain: [D', 'e', 'l', 't','a', ' ', '2', '0','2', '3'] Due to not having a space inside the .split method this select each character including the space.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
//console.log(greeter("LEARN Student"))

// a) Your answer: undeffined
// b) Verify and explain: undefined due to the function no using the keyword return.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
//console.log(multipliedByTwo)

// a) Your answer: [8,10,12,14,16]
// b) Verify and explain:[ 8, 10, 12, 14, 16 ] the .map HOF will iterate through the array and then multiply its numbers by two

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
//console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain:[ 11, 13, 15 ] it is using the .filter HOF to filter out any number in the array not divisible by 2 using modulo % for the conditional statement

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
//console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain:JavaScript it is consologing this vallue by following this order obeject => key => 0 index the array.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Delta"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: { student = "George", cohort = "Delta", year = 2023 }
// b) Verify and explain: Learn { student: 'George', cohort: 'Delta', year: 2023 } forgot to add the learn part at the beginning but the concept is thatt is going log the new object including the "George" for the key student.
