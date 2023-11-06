"use strict";
/*
Effettuare dei prompt che chiedano all'utente:

1) Numero di chilometri da percorrere.
2) Età del passeggero.

Entrambe saranno da inserire all'interno di delle variabili. */

const km = parseInt(prompt("Inserire il numero di km da percorrere."));
console.log(km);

const etaUtente = parseInt(prompt("Inserisci la tua età"));
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



/*
Indicare il prezzo finale con al massimo due numeri decimali. */