console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer + "\n");
}

divider("Function Return");

// Wenn wir in einer funktion etwas auswerten, koennen wir das ergebnis dieser funktio ausgeben, dies ist ein sogenanntes return statement.

const number1 = 2;
const number2 = 5;

const examplseFunction = function(firstInput, secondInput)
{
    const ergebnis = firstInput + secondInput;

    // mit return uebergeben wir einen wert, beim verlassen der funktion
    return ergebnis;
    
    // dieser code ist nicht erreichbar, da die funktion beim return verlassen wird
    console.log("Hallo Welt!")
}

const funktionsErgebnis = examplseFunction(number1, number2);

console.log(funktionsErgebnis);

console.log(examplseFunction(1, 10));

// beispiel mit einme if statement
const checkAge = function(age)
{
    const adultAge = 18;

    if(age >= adultAge)
    {
        return true;
    }
    else
    {
        return false;
    }

    // oder: return age >= adultAge;
}

const myAge = 45;
const message = "Bist du schon volljaehrig? " + (checkAge(myAge) ? 'JA!' : 'Nein');

console.log(message);

// wir koennen eine funktion mit einme leerem retun statement auch dirckt unterbrechen:
const tokensLeft = 3;

const playGame = function(tokens)
{
    if(tokens === 0)
    {
        return;
    }
    
    console.log("Noch ein runde spielen...");
}

playGame(tokensLeft);