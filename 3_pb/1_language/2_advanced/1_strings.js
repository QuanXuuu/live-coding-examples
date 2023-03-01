// Strings escapen
  // mit \n koennen wir einen zeilenumbruch einfuegen
const escapeZeile = "Dies ist\nein mehrzeiliger\nString"
console.log(escapeZeile + '1');

  //mit \t koennen wir eine tabulator einfuegen(tab)
const escapeTab = "Dies ist ein g\te\tt\ta\tb\tt string";
console.log(escapeTab);

  // \" oder \' koennen wir innerhalb von strings unsere anfuehrungszeichen benutzen.
const escapeGans = "Dies ist ein Text mit doppelten \" im String";
console.log(escapeGans);

console.log("==========")

// String Funktionen/Methoden/Properties
    // .length: gibt uns die anzahl der zeichen 
   const lengthExample = "Dies ist ein strings".length;
   console.log(lengthExample);

/**
 * 00 = D
 * 01 = i
 * 02 = e
 * 03 = s
 * 04 = 
 * 05 = i
 */

// .charAt(); zeigt uns ein zeichen innerhalb des strings an der gewuenschten position, gezaelt von 0.

const exampleString = 'Dies is ein string'
const charAtExample = exampleString.charAt(2);
console.log(charAtExample);

//.toLowerCase();
// .toLowerCase(); koennen wir einen string zum kleinschreiben zwingen.
const lowerCaseExample = 'Dies is ein STRING'.toLowerCase();
console.log('Klein gechrieben:', lowerCaseExample);

// .toUpperCase();
const upperCaseExample = 'dies is ein string'.toUpperCase();
console.log('Gross geschrieben:', upperCaseExample);

// .includes();
// mit .includes(); koennen wir pruefen, ob ein zeichen, oder mehrere zeichen innerhalb eines strings existieren.

// method chaining
const includesExample = 'Dies is ein String'.toLowerCase().includes('string');
console.log('Beinhaltet \'String\':', includesExample);

// .replace();
// mit .replace(); koenne wir zeichen oder zeichenketten innerhalb eines strings ersetzen.
// der erste wert ist der gesuchte, und er zweite wert ist der ersatz dafuer.
const replaceExample = 'Dies ist ein String'.replace('String', 'Kaesekuchen');
console.log('Ersetzter string:', replaceExample);

// mit.replace(); ersetzen wir nomalerweise das erste vorkommnis eines gesuchten string, wir koennen aber auch dafuer sorgen das er alle vorkommnisse innerhalb eines strings ersetzt.
const replaceExampleGlobal = 'Dies ist ein String String mit Strings drin'.replace(/String/g, 'Kaessekuchen');
console.log(replaceExampleGlobal);

// .trim();
// mit .trim(); koennen wir whitespace (leerzeichen) aus einem string am anfang und am end loeschen.
const trimExample = '     "TestWort"   ';
console.log('Ungetrimmte string:', trimExample, "|");
console.log('Getrimmter string:', trimExample.trim(), "|")

// .substring();
// mit .substring(); koennen wir teile des strings ausschneiden, die erste stelle sagt von wo, und die zweite optionale stelle, bis wohin.
const substringExample = 'Dies ist eine String';
console.log(substringExample.substring(5));
console.log('Ab der 5. stelle abschneiden:', substringExample.substring(5));
console.log(substringExample.substring(0, 4), "hier", substringExample.substring(5));

console.log("=============")

// Template literals

/**
 * @see https://css-tricks.com/template-literals/
 */

// mit template literals, die mit einleiten, koennen wir werte berechnen oder ganze code strukturen in einen string einfuegen.

const berechnung = 3 * 2;
const templateLiteralExample = `Ich haette gerne einen tisch fuer ${ berechnung } Personen`;
console.log(templateLiteralExample);

const personName = "John Doe";
console.log(`Hallo, mein name ist ${ personName.toUpperCase()}.`);

// Multiline und zusammenfuegungs beispiele:
const testString1 = 'Dies\nsind\nmehrere\nzeilen';
console.log(testString1);

const testString2 = "Dies \
sind \
mehrere \
zeilen \
die \
zu \
einer \
werden";
console.log(testString2);

const testString3 = "Dies " +
"ist " + 
"etwas " +
"text";
console.log(testString3);

const person ="Jana";
const tag = "Dienstag";
const laune = "Nicht so toll";

const brief = `
Mein Brief

Hallo ${ person}, wie geht es dir?
Heute ist ${ tag }.
Mir geht es ${ laune}!
`;

console.log(brief);

