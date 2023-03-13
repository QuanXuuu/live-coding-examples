console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer + "\n");
}

divider("Function variables");

divider("lokale variablen")

// eine variable die wir innerhable einer funktion oder eines code-blocks anlegen, nennt sich lokale variable und ist nur in diesem code-block nutzbar, oder verfuegbar.

const showMessage =  function()
{
    const message = "Ich bin eine lokale variable";

    console.log(message);
}

showMessage();

divider("globale variablen");

let username = "Max";

const welcomeMessage = function()
{
    username = "John";

    console.log(2, username);
}

console.log("vorher:", username);
welcomeMessage();
console.log("nachher:", username);

divider("variablenklone");

const value1 = 5;
console.log("value1", value1);

const chageValue1 = function()
{
    const value1 = 10;
    console.log("value1", value1);
}

chageValue1();
console.log("value1", value1);

// use let
let value2 = 5;
console.log("value2", value2);

const chageValue2 = function()
{
    value2 = 10;
    console.log("value2", value2);
}

chageValue2();
console.log("value2", value2);