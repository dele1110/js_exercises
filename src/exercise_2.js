/**
 * Counts the number of matchsticks used for the houses.
 * @param {Number} step
 * @returns {Number}
 * @example
 * countMatchsticksInHouses(1) => 6
 * countMatchsticksInHouses(2) => 11
 * countMatchsticksInHouses(4) => 21
 * countMatchsticksInHouses(0) => 0
 * See image here: https://edabit-challenges.s3.amazonaws.com/matchstick_houses.png
 * */
function countMatchsticksInHouses(step) {
  // Write your code here
  if (step === 0) {
    return 0;
  }

  return 5 * step + 1;
}
/* The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00. */
 /* Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. */
 /* In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. */
 /* The regexp should not match 123:456. */
// const TIME_REGEX = /[]/ /* Write your regex here */



const TIME_REGEX = /\d{2}:\d{2}/; 

const str1 = "Breakfast at 09:00 in the room 123:456.";
const str2 = "Meeting scheduled for 15:30.";
const str3 = "123:456";
// console.log(str1.match(TIME_REGEX)); // Output: ["09:00"]
// console.log(str2.match(TIME_REGEX)); // Output: ["15:30"]
// console.log(str3.match(TIME_REGEX)); // Output: null



/**
 * @param {String} text
 * @returns {String}
 * @example
 * A word is on the loose and now has tried to hide amongst a crowd of tall letters!
 * Help write a function to detect what the word is, knowing the following rules:
 * The wanted word is in lowercase.
 * The crowd of letters is all in uppercase.
 * Note that the word will be spread out amongst the random letters, but their letters remain in the same order.
 * findSecretWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
 * findSecretWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
 * findSecretWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
 * */
 function findSecretWord(text) {
  // Matn ichidagi kichik harflarni yig'ish
  let secretWord = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char >= 'a' && char <= 'z') {
      secretWord += char;
    }
  }
  return secretWord;
}

// Test cases
// console.log(findSecretWord("UcUNFYGaFYFYGTgNUH")); // Output: "cat"
// console.log(findSecretWord("bEEFGBuFBRrHgUHlnFYAYr")); // Output: "burglar"
// console.log(findSecretWord("YFEmHUFBbezFBYzFBYLleGBYEFGBMENTment")); // Output: "embezzlement"




/**
 * Create a method in the Person class which returns how another person's age compares.
 * Given the instances p1, p2 and p3, which will be initialised with the attributes name and age,
 * return a sentence in the following format:
 * {other person name} is {older than / younger than / the same age as} me.
 * */
 class Person {
  constructor(firstName, age) {
    this.firstName = firstName;
    this.age = age;
  }

  compareAge(other) {
    if (this.age < other.age) {
      return `${other.firstName} is older than me.`;
    } else if (this.age > other.age) {
      return `${other.firstName} is younger than me.`;
    } else {
      return `${other.firstName} is the same age as me.`;
    }
  }
}

// Test Case with Lily
const alice = new Person("Alice", 28);
const bob = new Person("Bob", 32);
const lily = new Person("Lily", 28);

console.log(alice.compareAge(bob)); // Output: "Bob is older than me."
console.log(bob.compareAge(alice)); // Output: "Alice is younger than me."
console.log(alice.compareAge(lily)); // Output: "Lily is the same age as me."




// console.log(alice.compareAge(bob)); // "Bob is older than me."
// console.log(bob.compareAge(alice)); // "Alice is younger than me."
// console.log(alice.compareAge(charlie)); // "Charlie is the same age as me."
// console.log(alice.compareAge(lily)); // "Lily is the same age as me."




/**
 * Write a function redundant that takes in a string `str` and returns a function that returns `str`.
 * @param {String} str
 * @returns {Function}
 * @example
 * const f1 = redundant("apple")
 * f1() ➞ "apple"
 *
 * const f2 = redundant("pear")
 * f2() ➞ "pear"
 *
 * const f3 = redundant("")
 * f3() ➞ ""
 * */
function redundant(str) {

  return () => str;

// const f1 = redundant("apple"); 
// console.log(f1()); // Output: "apple"

// const f2 = redundant("pear");
// console.log(f2()); // Output: "pear"

// const f3 = redundant("");
// console.log(f3()); // Output: ""

}

module.exports = {
  countMatchsticksInHouses,
  TIME_REGEX,
  findSecretWord,
  Person,
  redundant
}