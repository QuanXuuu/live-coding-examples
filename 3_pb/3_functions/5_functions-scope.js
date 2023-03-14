console.clear();

// block scope
// let und const sind block scoped
// if(true)
// {
//     var user = 'Chuck Norris';
//     let user2 = 'Not Chuck Norris';
//     console.log(user);
//     console.log(user2);
// }

// console.log(user);
// console.log(user2);

let zahl = 5;

function tooBigForChuckNorris()
{
    var user = 'Chuck Norris';
    let user2 = 'Not Chuck Norris';
    let zahl = 6; // variable shadowing
    console.log(user);
    console.log(user2);
    console.log(zahl);
}

tooBigForChuckNorris();
console.log(zahl);

// scope === visibility of a variable / sichbarkeitsbereich einer Variablen

let name = 'hans';

// if(name === 'hans')
// {
//     let name = 'jan';
//     console.log(name);
// }

function egal()
{
    let name = 'jan';
    console.log(name);
}

egal();
console.log(name);

// hard coded

// let x = 6;
// console.log(`Die Quadratzahl von ${x} ist gleich ${x * x}`);
// x++;
// console.log(`Die Quadratzahl von ${x} ist gleich ${x * x}`);
// x++;
// console.log(`Die Quadratzahl von ${x} ist gleich ${x * x}`);
// x++;
// console.log(`Die Quadratzahl von ${x} ist gleich ${x * x}`);
// x++;
// console.log(`Die Quadratzahl von ${x} ist gleich ${x * x}`);
// x++;



// Eine Funktion ist ein Code-block zur Wiederverwendbarkeit

function berechne(start, end, updater = 1)
{
    for (let i = start; i <= end; i += updater)
    {
        console.log(`Die Quadratzahl von ${i} ist gleich ${i * i}`);
    }
}

function gibQuadatzahl(start, end, updater = 1)
{
    const result = [];  // let result = [];
    
    for (let i = start; i <= end; i += updater)
    {
     result.push(i * i); // result = i * i ==> 10000
    }
    return result;
}

console.log(gibQuadatzahl(10, 100, 10));

// durchschnitt

const deutschNote = 3;
const englishNote = 4;
const matheNote = 2;

// function getAverageOf3(note1, note2, note3)
// {
//     return (note1 + note2 + note3) / 3;
// }

// console.log(getAverageOf3(deutschNote, englishNote, matheNote));

function getAverage(arr)
{
    let result = 0;
    for (let i = 0; i < arr.length; i++)
    {
        result += arr[i];
    }
    return result / arr.length;
}

console.log(getAverage([deutschNote, englishNote, matheNote]));

// Math.max

function getMaxNumbers(num1, num2, num3)
{
    if(num1 > num2 && num1 > num3) return num1;
    if(num2 > num3) return num2;
    return num3;
}

function getMaxArray(numbers)
{
    if(numbers.length === 0)
    {
        return null;
    }
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++)
    {
        if(numbers[i] > max)
        {
            max = numbers[i];
        }
    }
    return max;
}

const max1 = getMaxNumbers(5, 6, 9);
const max2 = getMaxArray([5, 60, 9]);

console.log(max1);
console.log(max2);

// palindrome
const word = 'level';
const word2 = 'hallo';

// console.log(word === word.split('').reverse().join(''));
// console.log(word2 === word2.split('').reverse().join(''));

function isPalindrome(word)
{
    const reversed = word.split('').reverse().join('');
    return word === reversed;
}

console.log(isPalindrome('world'));
console.log(isPalindrome('sos'));

// Function Declaration
myFunc(); // can be used before decalration

function myFunc()
{
    console.log('Function declaration');
}

// Function expression
const myFunc2 = function()
{
    console.log('Function expression');
}

// Arrow function
const myFunc3 = () =>
{
    console.log('Arrow function');
}

// bei nur einer expression ist return statement impliziert und body block nicht noetig
const myArrow = (num1, num2) => num1 * num2;

// bei nur einem Parameter ist keine Runde klammer noetig, aber empfohlen
const quadrat = x => x * x;

myFunc3();
myFunc3();
console.log(myArrow(5,6));
console.log(quadrat(8));