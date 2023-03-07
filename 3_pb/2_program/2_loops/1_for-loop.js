console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n")
}

divider('For loops');

/**
 * Simpler for-loop
 * @description ein for loop laesst uns aktionen beliebig oft wiederholen, und wir koennen steuern wie oft, oder ob ein zaehler uebersprungen wird.
 */

let counter = 5;

for(let i = 0; i < counter; i++)
{
    console.log(i, 'Hallo Welt!');
}

// statement 1: let i = 0;  ==> wird einmal ausgefuehrt, bevor der codeblock ausgefuehrt wird, und legt den anfang der intertion fest.
// statement 2; i < counter; ==> definiert die kondition zum ausfuehren und beenden des codeblocks.
// statement 3: i++;  ==> wird nach jedem durchlauf ausgefuehrt, und veraendert die iterationszahl.

divider('Ein weiters beispiel');

// wir koennen variable i, die wir innerhalb des loops angeleft haben, auch nur innerhalb des code blocks unserer for schleife nutzen.

// wenn  wir im dirtten statement das zweite + mit einem gleich, gefolgt von einer zahl ersetzen, koennen wir schritte ueberspringen.

for (let i = 0; i < counter; i+=2)
{
    console.log(`Interation: ${ i + 1}`);
}

divider('for loop unterbrechen');

// wir koennen einen for-loop auch anhand von bestimmten konditionen unterbrechen.

counter = 20;
const breakpoint = 11;

for (let i = 0; i < counter; i++)
{
    if(i == breakpoint)
    {
        // mit break; koennen wir, genau wie in switches, einen loop unterbrechen.
        break;
    }

    if(i == 4)
    {
        i = 5;
        // mit continue; kann ein durchlauf uebersprungen werden;
        continue;
    }

    console.log(`Durchlauf nummer ${ i }`)
}

// wir koennen auch mehrere for-loops ineinander verschachteln, um biespielsweise eine tabelle mit rows und cols zu fuellen.

// meist nehmen wir nicht mehr als 2 for loops ineinander verschachtelt, hier waere im ersten for loop i der interator, und im zweiten j.

const rows = 5;
const columns = 4;

// rows
for (let i = 0; i < rows; i++)
{
    let ausgabe = "|";

    // //columns
    for (let j = 0; j < columns; j++)
    {
        // console.log('row', i + 1, 'column', j + 1);
        ausgabe += ` ${ j + 1 } |`;
    }

    console.log(`${ i + 1}: ${ ausgabe}`)
}

// ein undlicher loop wird so lange laufen, bis der speicher voll ist, und sollte deswegen niemals ausgefuehrt werden.

// for (let i = 1; i > 0: i++)
// {
//     console.log('Oh no....', i);
// }

divider('For loop mit array');

const testArray = ['Imad', 'Hussi', 'Hansi', 'Benni', 'Jana', 'Melanie'];

for (let i = 0; i < testArray.length; i++)
{
    console.log(testArray[i]);
}