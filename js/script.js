//Chiedi all’utente la sua email, stampa un messaggio appropriato sull’esito del controllo.

var indirizzoEmail = ['pollino@live.it', 'lollino@live.it', 'picco@live.it'];
console.log(indirizzoEmail);
console.log("Numero elementi array", indirizzoEmail.length);

var indirizzo = prompt("Inserisci email" );

 
if ( indirizzoEmail === indirizzoEmail){
    console.log("Utente trovato", indirizzoEmail);
} else{
    console.log("email non valida");
}