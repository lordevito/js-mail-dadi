`use strict`;

/*Inizio a creare e dichiarare un array 
con tutte le mail da controllare, poi creo 
il prompt per chiedere l'inserimento della mail da cercare.*/

const listaMail = [`ciro.immobile@lazio.it` , `daichi.kamada@lazio.it`, `mattia.zaccagni@lazio.it` , `ivan.provedel@lazio.it`];
const controlMail = prompt(`Inserisci la tua mail`);

/*Creo una variabile per il controllo*/

let mail = false;

/*Creo un ciclo For per controllare che la mail inserita sia nell'array.*/

for (let i = 0; i < listaMail.length; i++){
    let lista = listaMail[i];
    if(lista == controlMail){
        mail = true;
      }
}

/*Creo un if affinchè: Se la mail è presente scrivere in console ("Mail inserita correttamente"),
altrimenti scrivere ("Mail non riconosciuta").*/

if (mail == true){
    console.log ('Mail inserita correttamente');
  }else{
    console.log ('Mail non riconosciuta');
  }