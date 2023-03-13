console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer + "\n");
}

divider("Function Simple");

// simple function
// function showMessage()
// {
//      console.log("Hallo Welt!")
// }

// alternative schreibweise
// const showMessage = function()
// {
//     console.log("Hallo");
// }

const showMessage = function()
{
    console.log("Hallo Welt!");
}

// damit der codeblock einer funktion ausgefuehrt wird, machen wir einen sogenannten "function call", andernfalls wird der code nicht ausgefuehrt.

const darfAusfuehren = true;

if(darfAusfuehren)
{
    showMessage();
    showMessage();
    showMessage();
    showMessage();
}

// eine funktion kann sich auch selbst starten, das nennt mann dann eine rekursive funktion, dies koennen wir erreichen indem wir hinter die funktion klammern setzen.

const recursiveFunction = function()
{
    console.log("Ich habe mich selber ausgefuehrt!")
}();