// Prompt 1

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
//creating the array

const first = ages[0]
const last = ages.slice(-1)
//variables created to hold the first and last elements in the array

console.log((first) - (last))
//subtracting the variables that hold the first and last elements

ages.push(10)
//adding a number to the end of the array

let ElementFirst = ages[0]
let ElementLast = ages.slice(-1)
//creating new variables for the array

console.log((ElementFirst) - (ElementLast))
//subtracting the new variables that hold the first and last elements

function averageAge(ages){
let sum = 0
for (let i = 0; i < ages.length; i++){
  sum += ages[i]
}
return sum / ages.length
}
//created a function with a for loop to count the elements and then average them

console.log(averageAge(ages))
//printing the average age of the elements in the array


// Prompt 2

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
//creating new array

names.map(w => w.length)
//could not figure out how to average the number of letters in each name

let string = ' '
for(let i = 0; i < names.length; i++){
  string += names[i]
  if (i < 5){
    string += " "
  }
}
//for loop to combines all names with a space

console.log(string)
//printing the string to the console

// Prompt 3
// You can access the last element of an array with array.slice(-1),the
// pop() method which removes and returns the last element, or if you know the number of
// elements in an array you can use array[last number of element] realizing the element
// numbers start at 0 for the first element

// Prompt 4
// You can access the first element of an array with array[0], the array.shift() which removes
// and returns the first element but also removes it. You can add array.slice(0, 1).shift()
// to not remove the first element.

// Prompt 5

let namesLength = [3, 5, 3, 5, 4, 3]
// I could not figure out how to create a loop to find the number of letters in each element
// so I manually create what the new array would be

// Prompt 6

function averageNameLength(namesLength){
    let sum = 0
    for (let i = 0; i < namesLength.length; i++){
      sum += namesLength[i]
    }
    return sum / namesLength.length
    }
//created a function with a for loop to count the elements and then average them
    
console.log(averageNameLength(namesLength))
//printing the average age of the elements in the array

// Prompt 7

let word = 'Howdy'
let n = 4
// used for testing below

const repeatWord = word.repeat(n)
// function for repeating a word

console.log(repeatWord)
// printing the repeated word to the console

// Prompt 8

function fullName(firstName, lastName){
    return firstName + " " + lastName
}

console.log(fullName)
// function that will combine first name and last name into one name with a space between

// Prompt 9

const numbers = [25, 35, 50]

function oneHundred(numbers){
    let sum = 0
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i]
    }
    if (sum > 100){
      return true
    }
}
// I used a for loop inside a function to add the numbers in the array and then an if
// statement to return the true or false statement

console.log(oneHundred(numbers))
// print the result of the function to the console

// Prompt 10

const bigNumbers = [124, 437, 483, 223]
// creating the array that holds the numbers

function averageBigNums(bigNumbers){
  let sum = 0
  for (let i = 0; i < bigNumbers.length; i++){
    sum += bigNumbers[i]
  }
  return sum / bigNumbers.length
  }
// function that counts the numbers in a function and returns the average

console.log(averageBigNums(bigNumbers))
// print the average of the numbers in the array to the console

// Prompt 11

const numArray1 = [12, 47, 50, 45]
const numArray2 = [13, 45, 60, 88]
// creating the two arrays of numbers

function biggerAverage(numArray1){
  let sum1 = 0
  for (let i = 0; i < numArray1.length; i++){
    sum1 += numArray1[i]
  }
  return sum1 / numArray1.length
  }

console.log(biggerAverage(numArray1))

function smallerAverage(numArray2){
  let sum2 = 0
  for (let i = 0; i < numArray2.length; i++){
    sum2 += numArray2[i]
  }
  return sum2 / numArray2.length
  }

console.log(smallerAverage(numArray2))

let average1 = biggerAverage(numArray1)
let average2 = smallerAverage(numArray2)

function isFirstGreater(average1, average2){
  if(average1 > average2){
    return true
  }
}

console.log(isFirstGreater(average1, average2))
// I created two different functions to find the averages of them and then a third function
// to see if the first one is larger than the second array average

// Prompt 12

const isHotOutside = true
const moneyInPocket = 14
// used to test code below


function willBuyDrink(isHotOutside, moneyInPocket){
  if ((isHotOutside === true) && (moneyInPocket > 10.50)){
    return true
  } else{
    return false
  }
}
// function that takes the two variables to test if true or false

console.log(willBuyDrink(isHotOutside, moneyInPocket))
// print result of function to the console

// Prompt 13

// I will create a function that will combine two number arrays and then show the
// average of the the combined array

const myNums1 = [4, 5, 6]
const myNums2 = [1, 2, 3]

function allAverage(myNums1, myNums2){
  const allNums = myNums1.concat(myNums2)
    let sum = 0
    for (let i = 0; i < allNums.length; i++){
    sum += allNums[i]
  }
  return sum / allNums.length
  }

console.log(allAverage(myNums1, myNums2))