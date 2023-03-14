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


