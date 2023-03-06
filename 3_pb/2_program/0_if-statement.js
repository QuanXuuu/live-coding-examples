function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider("1.IF vergleich");

// variable um die abfrage zu testen
const ergebnis = 5;
const name = "Max";

// das statement das wir abfragen

// wenn(wet kleiner gleich 5)
if(ergebnis <= 5)
{
    // code block anfang
    console.log('ich werder nur angezeigt, wenn das if statement zutrifft!')

    // code block end
}

// wenn die abfrage zutrifft, wird das console.log(); ausgegeben, wenn nicht, wir der komplette code block ignoriert.

divider("2.If vergleich mit logischem UND");

if (ergebnis === 5 && name === "Max")
{
    console.log('Ich werde angezeigt, wenn das ergebnis 5 ist, UND der name "Max" ist');
}

// Nur wenn beides(oder multiples) zutrifft, wird der code block ausgefuehrt.

divider("3. If vergleich mit logischem ODER");

if(ergebnis === 5 || name === "Max")
{
    console.log('Ich erder angezeigt wenn das ergebnis 5 ist, ODER der name "Max" ist.')
}


// Als erstes wird geschaut ob die erste abfrage stimmt, sollte dies zutreffen, wird das if statement ausgefuehrt, wenn nicht, wird geschaut ob die zweite abfrage stimmt, sollte das zutreffen wird das if statement ausgefuehrt, andernfalls nicht.

console.log("Ich werde immer angezeight");

// Beispiel mit booleans
const istKuehlschranksVoll = true;

if(istKuehlschranksVoll === true)
{
    console.log("Heute muss ich nicht einkaufen");
}
