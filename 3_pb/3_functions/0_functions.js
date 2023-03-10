console.clear();

function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer + "\n");
}

divider("Function Intro");

/**
 * @function darfSchonAutoFahren()
 * @description gibt true zurück, wenn das alter >= 18, sonst false.
 * @param { number } alter
 */

function darfSchonAutoFahren(alter)
{
    const darfFahren = alter >= 18 ? true : false;
    return darfFahren;
}

console.log("Person 1:", darfSchonAutoFahren(16));
console.log("Person 2:", darfSchonAutoFahren(25));

/**
 * @function checkAlleAusweise()
 * @description geht durch ein array von ausweisen, und ruft für jeden ausweis die funktion checkAusweis auf.
 * @param ausweise
 */

const ausweise = [
    { name: "Hans", alter: 90 },
    { name: "Lisa", alter: 12 },
    { name: "Monika", alter: 18 },
    { name: "Ali", alter: 13 },
    { name: "Pebbles", alter: 0 }
];

function checkAlleAusweise(ausweise)
{
    for (let i = 0; i < ausweise.length; i++) {
        const aktuellerAusweis = ausweise[i];

        console.log(checkAusweis(aktuellerAusweis));
    }
}

/**
 * @function checkAusweis()
 * @description Ruft für jeden ausweis die funktion darfSchonAutofahren auf, und gibt den Name + darf oder nicht darf auto fahren zurück.
 * @param ausweis
 */


function checkAusweis(ausweis)
{
    const aktuellesAlter = ausweis.alter;

    if(darfSchonAutoFahren(aktuellesAlter))
    {
        return `${ ausweis.name } darf schon autofahren`;
    }

    return `${ ausweis.name } darf noch nicht autofahren`;
}


checkAlleAusweise(ausweise);