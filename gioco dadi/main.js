`use strict`;

/*Inizio a creare un prompt con cui chiedo il nome al giocatore.
 Creo le variabili per il punteggio del giocatore che del computer con numeri random e li stampo in console.*/ 

let nomeGiocatore = prompt(`inserisci il nome del primo giocatore`);
let punteggioGiocatore = Math.floor(Math.random() * 6) + 1;
console.log(nomeGiocatore + ` hai realizzato ` + punteggioGiocatore + ` punti`);
let punteggioComputer = Math.floor(Math.random() * 6) + 1;
console.log(`Il computer ha realizzato ` + punteggioComputer + ` punti`);

/*Creo una condizione con un if se il punteggio del giocatore è maggiore di quello del computer:
se si allora scrivere in console "Hai Vinto". 
se i numeri sono uguali allora scrivere in console "Pari. Nessun vincitore".
se no allora scrivere in console "Hai Perso".*/ 

  if(punteggioGiocatore > punteggioComputer) {
    console.log(`Hai vinto`);
  }else if (punteggioGiocatore === punteggioComputer) {
    console.log(`Pari. Nessun vincitore`);
  }else {
    console.log(`Hai perso`);
  }
