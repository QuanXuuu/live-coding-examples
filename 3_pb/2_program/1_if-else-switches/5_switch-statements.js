console.clear();

// Divider mit funktion
function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

/**
 * Switch statements
 * @see https://love2dev.com/blog/javascript-switch-statement/
 */

divider('SWITCH STATEMENT');

divider('Beispiel')

// eine beispeilvariable;
const testValue = 2;

// wir pruefen den wert der variable, indem wir ihn in die klammern des switches uebergeben:
switch(testValue)
{
    // der fall, den wir ueberpruefen wollen
    case 1:

        console.log('testValue ist 1');
        // break; sorgt dafuer, das nach dem ausfuehren des inhaltes des cases, der switch verlassen wird.
        break;

    case 2:

        console.log('testValue ist 2');
        break;

    // wie "else", wird default ausgefuehrt, wenn kein anderer vergleich zutrifft.
    default:

        console.log('testValue hat einen anderen wert...');
        break;
}

console.log('Hallo');

divider('Realitaetsbezogener switch')

const position = 1;

switch (position) {
    case 0:
        console.log('Ausgeschaltet')
        break;
    
    case 1:
        console.log('Eingeschaltet')
        break;
}

divider('Ein weiteres Einspiel');

const today = 'Sonntag';

switch(today)
{
    case 'Montag':
        console.log(1, 'Heute ist Montag');
        break;
    case 'Dienstag':
        console.log(2, 'Heute ist Dienstag');
        break;
    case 'Mittwoch':
        console.log(3, 'Heute ist Mittwoch');
        break;
    case 'donnerstag':
        console.log(4, 'Heute ist Donnerstag');
        break;
    case 'Freitag':
        console.log(5, 'Heute ist Freitag');
        break;
    default:
        console.log('Haha, Wochenende!')
}

divider('Advanced Switch');

// bei leeren cases, springt der switch zum naechsten case, der inhalt hat um diesen ausfuehren, bis zum break;

// arbeitswochenbeispiel
const dayOfWeek = 'Saturday';

switch (dayOfWeek.toLowerCase()) 
{
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thurday':
    case 'friday':
        console.log('wir muessen leider arbeiten!', dayOfWeek)
        break;
    case 'saturday':
    case 'sunday':
        console.log('WOCHENENDEEEEE!', dayOfWeek)
        break;
}

console.log('Pruefung zuende');

divider('Funktionales Beispiel');

const currentDate = new Date();
const currentDay = currentDate.getDay();
let currentDayName;

console.log(currentDay);

switch (currentDay) {

    case 1:
        currentDayName = 'Montag';
        break;

    case 2:
        currentDayName = 'Dienstag';
        break;

    case 3:
        currentDayName = 'Mittwoch';
        break;

    case 4:
        currentDayName = 'Donnerstag';
        break;

    case 5: 
        currentDayName = 'Freitag';
        break;
    
    case 6:
        currentDayName = 'Samstag';
        break;
    
    case 7:
        currentDayName = 'Sonntag';
        break;
}

console.log(currentDay, currentDayName);

if(currentDay < 6)
{
    console.log(`Heute ist ${ currentDayName }, und ich muss arbeiten!`);
}
else
{
    console.log(`Heute ist ${ currentDayName }, und ich habe wochenende!`)
} 

divider('Berechnung in switches');

const speed = 34;

switch (speed) 
{
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:

        if(speed === 33)
        {
            console.log('33 km/h');
        }

        console.log('Nicht zu schnell');
        break; 

    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 48:
    case 49:
    case 50:
        console.log('Etwas schneller');
        break;
    
    default:

    if(speed >= 120)
    {
        console.log('Extrem schnell')
    }
    else
    {
        console.log('Zu schnell');
    }

    break; 
}