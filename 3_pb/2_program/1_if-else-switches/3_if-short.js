console.clear();

// Divider mit funktion
function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('shortcode fuer if statements');

const testBool = true;

// normals If statement:
if(testBool)
{
    console.log('1.Dies ist wahr');
}

if(testBool)
{
    console.log('2.Dies ist wahr');
}
else
{
    console.log('Dies ist falsch')
}

// Ein einzeiliges IF statement
if(testBool) console.log('Ich bin ein einzeilges if statement');

if(testBool) console.log('Ich bin einzeilig');
else console.log('Ich bin das einzeilige else');

// ein if statement mit nur einer zeile code im codeblock, koennen wir abkuerzen, in dem wir es ohne die klammern direkt in die gleiche zeile wie die abfrage schreiben.