console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer + "\n");
}

divider("Function parameters");

// Um daten und werte an eine funktion zu uebergeben, koennen wir diese als festlegen, und dann mit dem funktionsaufruf uebergeben. Dabei erstellen wir einel lokale variable, die den uebergebenne wert beinhaltet.

const showMessage = function(text)
{
// wir nutzen den uebergebenen wert von "text" und arbeiten mit ihm.
    console.log(text);
}

// beim funkctionsaufruf fuegen wir dem gewollten wert rein.
showMessage('Ich bin eine Nachricht');
showMessage('Ich bin noch eine Nachricht');

// wir koennen auch beliebig viele werte an eine funktion uebergeben, wenn wir diese mit einem komma trennen.

const chatMessage = function(benutzer, nachricht)
{
    // auf die uebergebenen werte koennen wir zugreifen, und sie auch aendern:
    benutzer = "===> " + benutzer;

    console.log(benutzer, ":", nachricht);
}

divider("Chatbeispiel");

let user = "Max";
let message = "Hallo, wie gehts dir?";

// gibt an: benutzer und nachricht
chatMessage(user, message);

user = "Hans"
message = "Ach mir geht es prima!";

chatMessage(user, message);

chatMessage("Lilli", "Ich bin gerade fertig.");

divider("Defaultwerte")

// mit sogenannten default values koennen wir werte festlegen, die fuer variablen genutzt werden, bei denen wir keinen wert uebergeben. Das funktioniert, bei mehrern paramentern, nur mit dem letzten.

const chatMessageDefault = function(user, message = "Der user hat nichts geschrieben")
{
    // theoretisch steht hier: message = message || "Der user hat nichts geschrieben";
    console.log(user, ":", message);
}

user = "John";

chatMessageDefault(user);
chatMessageDefault(user, "Der hat doch etwas geschrieben");

message = "Hallo, JS ist cool!";

chatMessageDefault(user, message);

divider("rekusive funktion");

// eine funktion kann sich selber, auch innerhalbe des eigenen code blockes aufrufen.

const countDown = function(number)
{
    if(number === 0)
    {
        // die funktion verlassen und etwas ausgeben, hier "nichts"
        return;
    }
    console.log(number);

    countDown(number - 1);
}

let testNummer = 5;

countDown(testNummer);