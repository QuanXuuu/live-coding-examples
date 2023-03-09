console.clear();

// Divider mit funktion
function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('Booleans');

const isTestBool = true;

// wenn etwas WAHR ist, fuehre diesen fall aus.
if(isTestBool === true)
{
    console.log('Dies ist wahr')
}

if(isTestBool)
{
    console.log('Dies ist wahr')
}

// die folgende variable beinhaltet einen String, wenn dieser mit text gefuellt ist, dann hat die varable einen inhalt. Wenn dort keine text steht, ist der inhalt "null", also gernichts, Da der text dann GARKEINEN inhalt hat, kann man auf ihn auch nicht pruefen, ergo ist er "false";

const testString = "123";

if(testString)
{
    console.log("Dies wir ausgefuehrt, wenn der testString inhalt hat");
}

// alle nummern ueber 0 und unter 0 sind true.
const testNummer = 0;

if(testNummer)
{
    console.log('Dies ist eine nummer');
}

let testStringName;
const isAdmin = true;
const hasCookies = true;

if(isAdmin)
{
    testStringName = "Lilli";
}
else if(isAdmin && hasCookies)
{
    testStringName = "Benni";
}
else
{
    testStringName = "Jana";
}

console.log(testStringName);