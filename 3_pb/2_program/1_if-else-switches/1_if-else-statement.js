console.clear();

// Divider mit funktion
function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

/**
 * IF/ELSE statement
 * @description Mit einem if/else statement koennen wir bestimmen, das etwas passiert, wenn ein bistimer fall eintritt, oder etwas anderes passiert, wenndieser fall nicht eintritt.
 */

divider("IF/ELSE");

const today = "Dienstag";

if(today === "Montag")
{
    console.log('Ich brauche mehr Kaffee!');
}
else
{
    console.log('Bald ist wochenende!')
}

// Das else statement wird nur ausgefuehrt, wenn das if statement "false" zurueckgibt.

/**
 * IF/ELSE IF
 * @description mit einem if/else if koennen wir bestimmen das sowohl bei einem zutreffenden vergleich, wie auch bei einem weiteren vergleich etwas ausgefueht wird.
 */

divider("IF/ELSE IF");

if(today === 'Montag')
{
    console.log('Ich brauche mehr kaffee!');
}
else if(today === 'Dienstag')
{
    console.log('Mein kaffee ist alle....');
}
else
{
    console.log('Schlafen....')
}

