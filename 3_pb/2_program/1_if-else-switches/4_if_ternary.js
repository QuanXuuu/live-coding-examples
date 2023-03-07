console.clear();

// Divider mit funktion
function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

/**
 * Ternary Operator
 * @description Mit einem ternary operator koennen wir if/else abfragen abkuerzen, und zum beispiel die gefragte ausgabe direkt in einer variable speichern, der ternary operator wird vor allem in react excessiv benutzt.
*/

divider('Ternary Operator');

const isTestBool = true;

// unser typisches if-statement
if(isTestBool === true)
{
    console.log('Boolean sagt ja');
}
else
{
    console.log('Boolean sagt nein');
}

// unser vorheriges if statement als ternary operator
const ternaryCheck = isTestBool
?                   //IF
'Boolean sagt ja'   //IF
:                   //ELSE
'Boolean saft nein'; //ELSE

console.log(ternaryCheck);

// <div style={`background: ${ isLoggedIn ? "#00FF00" : "#FFFF00"}`}>Hello World</div>

divider('Ternary operator if/else if')

const speed = 33;

const ternaryCheck2 = 
speed >= 120 ? 'Zu schnell!' // IF: speed groesser als gleich 120
:
speed >= 80 ? 'Schnell' // ELSE IF: speed groesser als gleich 80
:
'Alles gut'; // ELSE

// const ternaryCheck2 = speed >= 120 ? 'Zu schnell' : speed >= 80 ? 'Schnell' : 'Alles gut';
                       // if {                    } else if {                } else {       }
console.log(ternaryCheck2);

const testValue = 1;
let isTrue;

// ist es wahr das testValue 1 ist? ja : nein

// if(testValue ===1)
// {
//     isTrue = true;
//     console.log(isTrue);
// }
// else
// {
//     isTrue = false;
//     console.log(isTrue);
// }

// isTrue = testValue === 1 ? true : false;

isTrue = testValue === 1;

console.log(isTrue);

// Das && innerhalb eines vergleiches sagt aus, das das folgende statement nur ausgefuehrt wird, wenn die abfrage zutrifft, sonst wird NICHTS getan.
speed  === 33 && console.log('Du faehrst zu schnell');

// Equivalent zu:

// if(speed === 33)
// {
//     console.log('Du faehrst zu schnell')
// }

/*
  <div>
  {
    isVerfied === false && <Message text ="verfizier dich, DU DOOF" />
  }
  </div>
 */


// boolean immer "is" / "has" -- convention

// const car = true; -- NO
const hasCar = true;

// const admin = true; -- NO
const isAdmin = true;

const hasMembers = false;
const isValid = true;