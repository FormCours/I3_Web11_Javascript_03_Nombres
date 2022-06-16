// L'objet global « Number »
// *************************
//  -> Ensemble de méthode et constante pour manipuler les nombres
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number

// Quelques constantes
// - Les limites des entiers
Number.MAX_SAFE_INTEGER
Number.MIN_SAFE_INTEGER
// - Méthode pour convertir un string en number
const nb1 = Number.parseInt("42");
const nb2 = Number.parseFloat("3.14");


// L'objet global « Math »
// ***********************
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math

// Quelques constantes
// - PI
const pi = Math.PI
// - La racine carré de 2
const sqrt2 = Math.SQRT2

// Quelques méthodes
// - Racine carré
const sqrt3 = Math.sqrt(3)
// - Valeur absolue
Math.abs(-42);
// - Arondir
const v1 = -4.3;

const r1 = Math.round(v1);  // à partir de 0.5 (classic)
console.log(`Round ${v1} : ${r1}`);

const r2 = Math.floor(v1);  // A l'entier inferieur
console.log(`Floor ${v1} : ${r2}`);

const r3 = Math.ceil(v1);   // A l'entier supérieur
console.log(`Ceil ${v1} : ${r3}`);

// - Nombre aleatoire
// Valeur aleatoire (reel) entre 0 et 1
const rng1 = Math.random() ;    
console.log(`RNG 1 : ${rng1}`);

// Valeur entiere aleatoire avec un maximum
// Exemple pour 0 → 10
const rng2max = 10;
const rng2 = Math.round(Math.random() * rng2max);
console.log(`RNG 2 : ${rng2}`);

// Valeur entiere aleatoire avec un minimum et maximum
// Exemple pour 5 → 15
const rng3min = 5;
const rng3max = 15;
const rng3 = Math.round(Math.random() * (rng3max - rng3min)) + rng3min;    
console.log(`RNG 3 : ${rng3}`);


// Declaration d'un nombre
// ***********************
// - Number
const val1 = 42;    // type "number"
const val2 = 3.14   // type "number"
// - BigInt
// (Entier / Limite a la valeur "MAX_SAFE_INTEGER")
const val3 = 52n;   


// Limite des nombres a virgule (Tout langage !)
// ****************************
const lim1 = 0.1;
const lim2 = 0.2;
const lim3 = 0.3;

const test1 = (lim1 + lim2) === lim3;
console.log(`Est ce que "(0.1+0.2) === 0.3" : ${test1}`);

const resError =lim1 + lim2;
console.log(`Que vaut "(0.1+0.2)" : ${resError}`);

// Des erreurs sont possible sur les manipulations
// -> Celles-ci sont du à la précision des nombres à virgule flottante 
//    https://fr.wikipedia.org/wiki/Virgule_flottante

// Solution possible : Utiliser les arondis
// -> Exemple avec un arondi avec 1 chiffre après la virgule

const resArondi = Math.round(resError * 10) / 10;
console.log(`Valeur arondi à 1 décimal : ${resArondi}`);


// Les conversions (String -> Number)
// ***************

// Exemple en utilisant l'API du DOM => La page web =)
const conversionInput = document.getElementById('conversion_input');
const conversionBtn = document.getElementById('conversion_btn');
const conversionResult = document.getElementById('conversion_result');

conversionBtn.addEventListener('click', () => {
    // Récuperer la valeur et on l'a converti
    const resValue = conversionInput.value;
    const resConvert = parseFloat(resValue);

    // Affichage de la valeur dans le span
    conversionResult.innerText = `${resValue} → ${resConvert}`;

    // Supression de la valeur de l'input
    conversionInput.value = '';
});

// Le JS va essayer de convertir la valeur et il s'arret si il tombe sur une valeur inatendu.
// Si la conversion echoue totalement => Il affect la valeur "NaN"


// La constante « NaN » 
// ********************

// - Une valeur de type Number
// - Elle represente une valeur numerique éroné
// - Peut être obtenu via : 
//      • Une conversion qui a échoué.
//      • Un operation mathematique invalide
//      • Via la constante « NaN »
// - Ne peut pas etre tester avec une egalité
//      • Une egalité renvoi TOUJOURS la valeur false.
//      • Pour test cette valeur, il faut utiliser « isNaN »

const demoNaN = parseInt('Test');    // NaN
const testNaN = isNaN(demoNaN);
console.log(`Test de la valeur NaN : ${testNaN}`);

const demoNaN1 = undefined / 5;
const demoNaN2 = 42 - 'r';
const demoNaN3 = parseFloat('');


// La constante « Infinity » 
// *************************

// - Une valeur de type Number
// - Elle représente une valeur infini.

const demoInfinity1 = 42/0;
const demoInfinity2 = Math.pow(5555, 10000);


// Les operateurs arithmetiques
// ****************************
const a = 25;
const b = 4;

// - Addition
const op1 = a + b;
// - Soustraction
const op2 = a - b;
// - Multiplication
const op3 = a * b;
// - Division
const op4 = a / b;
// - Reste d'une division (Modulo)
const op5 = a % b;
// - Exposant
const op6 = a ** b;

// Affectation raccourci (Tout les opperateur fonctionne)
let op7 = 5;
op7 += 2;       // op7 = op7 + 2    => 7
op7 -= 1;       // op7 = op7 - 1    => 6
op7 *= 3;       // op7 = op7 * 3    => 18

// Incrementation et décrementation
// ********************************
let count = 0;
count = count + 1;
count += 1;
count++;

// Deux types de fonctionnement :

// - Post
// Le systeme lit le contenu de la variable, il l'utilise et ensuite il incremente la variable.
let c = 5
const incr1 = c++ * 2;
console.log(`La valeur de c (post-incr) : ${incr1}`);

// - Pre
// Le systeme lit le contenu de la variable, il l'incremente et ensuite il utilise la variable.
let d = 5;
const incr2 = ++d * 2;
console.log(`La valeur de d (pre-incr) : ${incr2}`);
