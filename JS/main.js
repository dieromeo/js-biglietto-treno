"use strict";
/*
Effettuare dei prompt che chiedano all'utente:
1) Numero di chilometri da percorrere.
2) Età del passeggero.
Entrambe saranno da inserire all'interno di delle variabili. */

const km = parseInt(prompt("Inserire il numero di km da percorrere."));

if (isNaN(km)) { // verificare che sia un numero
    alert("Inserire un numero! Ricaricare la pagina");
}

console.log(km);

const etaUtente = parseInt(prompt("Inserisci la tua età"));

if (isNaN(etaUtente)) { // verificare che sia un numero
    alert("Inserire un numero! Ricaricare la pagina");
}

console.log(etaUtente);


/*
### Calcolo prezzo

Definire un a variabile che calcoli il prezzo del biglietto moltiplicando i km inseriti dall'utente per il prezzo al km (0,21€).*/

var prezzoBiglietto = km * 0.21;
console.log(prezzoBiglietto + '€');

/*
### Funzione sconto

In una fuzione calcolare il prezzo aggiornato del biglietto a seconda dell'età nel seguente modo:
- Se l'età è minore di 18 
    - allora il prezzo è scontato del 20%.
- Se l'età e maggiore o uguale a 65
    - allora il prezo scontato è del 40%.
- Altrimenti non viene effettuato nessuno sconto.*/

if (etaUtente < 18) { //caso minorenne
    prezzoBiglietto = prezzoBiglietto * 0.8;
    console.log('Il tuo biglietto scontato per minorenni costa: ', prezzoBiglietto.toFixed(2));
}
else if (etaUtente >= 65) { //caso over 65
    prezzoBiglietto = prezzoBiglietto * 0.6;
    console.log('Il tuo biglietto scontato per over 65 costa: ', prezzoBiglietto.toFixed(2));
}
else {
    console.log('Il tuo biglietto costa: ', prezzoBiglietto.toFixed(2));
}
/*
Indicare il prezzo finale con al massimo due numeri decimali. */