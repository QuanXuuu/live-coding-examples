function divider(input)
{
    const spacer = "=".repeat(20);
    console.log("\n" + spacer, input, spacer, "\n");
}

divider('Die Math library');

// Um die mathe bibliothek zu nutzen, schreiben Math gefolgt von einem punkt, und dem befehl den wir nutzen wollen, so machen wir das mit alle arten von methoden.

divider('Auf und abrunden');

// Aufrunden / .ceil();
console.log('Aufgerundet: ', Math.ceil(2.3));

// Abrunden / .floor();
console.log('Abgerundet: ', Math.floor(2.7));

// Runden / .round();
console.log('Runden: ', Math.round(2.7));

divider('Zufallsgeneratoren');

// zufallszahl 0 - 1
console.log('Zufall von 0-1: ', Math.random());

// zufallszahl von 0-10, da die 0 startzahl ist. Muss die hoechste zahl eins hoeher als die gewuenschte zahl sein.
console.log('Zufall von 0-10: ', Math.random()*11);

// normalerweise schreiben wir einen ganzzahlen zufallsgenerator wie folgt:
const endZahl = 10;
console.log('Zufall con 0-10: ', Math.floor(Math.random() * endZahl) + 1);

// Zufallszahlen von einer start zu einer endzahl definieren. ( x - y);
const min = 5;
const max = 10;

console.log('von 5 bis 10: ', Math.floor(Math.random() * (max - min + 1)) + min);
console.log('von 5 bis 10: ', Math.floor(Math.random() * (max - min + 1)) + min);
console.log('von 5 bis 10: ', Math.floor(Math.random() * (max - min + 1)) + min);
console.log('von 5 bis 10: ', Math.floor(Math.random() * (max - min + 1)) + min);
console.log('von 5 bis 10: ', Math.floor(Math.random() * (max - min + 1)) + min);

divider('Maximale und Minimale Zahlen');

// mit Mth.max(); koennen wir uns die groesste zahl aus einer reihe von zahlen aus geben lassen.
console.log('Groesste zahl ueber 0: ', Math.max(1, 3, 2, 7, 12));
console.log('Groesste zahl unter 0: ', Math.max(-1, -3, -5));

// mit Math.min(); koennen wir uns die kleinste zahl aus einer reihe von zahlen ausgeben lassen.
console.log('Kleinste zahl: ', Math.min(2, 3, 1, 6, 7, -1));

divider('Pi');

console.log('Pi: ', Math.PI);

divider('Absoluter unterschied');

console.log(Math.abs( 3.124 - 5.5678));
console.log(Math.abs(2 - -2));

divider('Zahlen abschneiden');
console.log(Math.trunc(13.89));
console.log(Math.trunc(-2.45));

divider('Counter iteration');

let counter = 1;

console.log(counter);

counter ++; // bedeutet counter = counter + 1;

console.log(counter);

counter--; // bedeutet counter = counter - 1;

console.log(counter);

++counter; // bedeutet counter = 1 + counter;

console.log(counter);

divider()

for(
    let i = 0;
    i < 10;
    i ++

){
    console.log(i);
}
