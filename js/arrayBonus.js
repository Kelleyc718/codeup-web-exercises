// 1. Write a function called average(numbers) that takes in an array of numbers  and returns the average
const average = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  return sum;
};
console.log(average([1, 2, 3]));

// 2. Write a function called sumAll(numbers) that takes in an array of  numbers and returns the sum of adding all of them.
let arr = [1, 2, 3, 4, 5];
const sumAll = arr => {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};
console.log(sumAll(arr));

// 3. Write a function called max(numbers) that takes in an array of numberrs  and returns the largest
let numbers = [1, 2, 3, 4, 5];
const max = numbers => {
  numbers.sort((a, b) => { return b - a; });
  return numbers[0];
};
console.log(max(numbers));

// 4. Write a function called min(numbers) that takes in an array of numbers and returns the smallest
const min = numbers => {
  numbers.sort((a, b) => { return a - b; });
  return numbers[0];
};
console.log(min(numbers));

// 5. Write a function called reverseArray(array) that takes in an array and   returns the elements in reverse order
const reverseArray = arr => {
  return arr.reverse();
};
console.log(reverseArray(arr));

// 6. Write a function called randomElement(array) that takes in an array and  returns a random element
const randomElement = arr => {
  return arr[(Math.floor((Math.random() * arr.length) + 1))];
};
console.log(randomElement(arr));

// 7. Write a function called upperCaseAll(array) that takes in an array of  strings and returns an array of uppercased strings.
let strArr = ['this', 'that', 'other'];
const upperCase = strArr.reduce((str, curr) => {
  return str.concat(curr.toString().toUpperCase());
}, []);
console.log(upperCase);

// 8. Write a function called getOdds(array) that returns an array of only the  odd numbers from an array of numbers.
const getOdds = arr => {
  return arr.filter(num => num % 2 !== 0);
};
console.log(getOdds(arr));

// 9. Write a function called getEvens(array) that returns only the even numbers  from an array of numbers
const getEvens = arr => {
  return arr.filter(num => num % 2 === 0);
};
console.log(getEvens(arr));

// 10. Write a function called multiplyAll(array) that takes in an array of numbers and returns the result of multiplying all the numbers
const multiplyAll = arr.reduce((a, b) => {
  return (a * b);
});
console.log(multiplyAll);
