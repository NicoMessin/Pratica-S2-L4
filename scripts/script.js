/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  let areaRettangolo = l1 * l2;

  console.log(areaRettangolo);
};
area(2, 4);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function (n1, n2) {
  let somma = n1 + n2;
  let operazione = 3 * (n1 + n2);
  if (n1 !== n2) {
    console.log(somma);
  } else {
    console.log(operazione);
  }
};

crazySum(4, 4);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (num1) {
  let differenza = Math.abs(num1 - 19);
  let diffPerTre = Math.abs(num1 - 19) * 3;
  if (num1 < 19) {
    console.log(differenza);
  } else {
    console.log(diffPerTre);
  }
};
crazyDiff(20);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function (num) {
  if ((20 <= num && num <= 100) || num === 400) {
    console.log(true);
  } else {
    console.log(false);
  }
};
boundary(19);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function (stringa) {
  if (stringa.startsWith("EPICODE")) {
    console.log(stringa);
  } else {
    let nuovaStringa = "EPICODE " + stringa;
    console.log(nuovaStringa);
  }
};
epify("CORSO");
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num) {
  if (num % 2 !== 0) {
    console.log("Errore, numero dispari");
  } else if (num % 3 === 0 || num % 7 === 0) {
    console.log("questo numero è un multiplo di 3 o 7");
  } else {
    console.log("questo numero non è ne un multiplo di 3 ne 7");
  }
};
check3and7(14);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (stringa) {
  let parolaInvertita = stringa.split("").reverse().join("");
  console.log(parolaInvertita);
};
reverseString("CIAO");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (stringa) {
  let array = stringa.split(" ");
};

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (stringa) {
  let array = stringa.split("");
  console.log(array);
  let nuovaStringa = array.slice(1, stringa.length - 1);
  console.log(nuovaStringa);
};
cutString("Ciao Epicode");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = function (n) {
  const numeriCasuali = [];

  for (let i = 0; i < n; i++) {
    const numero = Math.floor(Math.random() * 11);
    numeriCasuali.push(numero);
  }

  console.log(numeriCasuali);
};
giveMeRandom(20);
