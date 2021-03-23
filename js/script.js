//Chiedi all’utente la sua email, stampa un messaggio appropriato sull’esito del controllo.


//EMAIL-VERIFICA DATA BASE
var indirizzoEmail = ['pollino@live.it', 'lollino@live.it', 'picco@live.it'];
console.log(indirizzoEmail);
console.log("Numero elementi array", indirizzoEmail.length);

//EMAIL INSERITA DALL'UTENTE
var indirizzo = prompt("Inserisci email");

var trovataEmailValida = false;

//CONDIZIONI VERIFICA
for (var i = 0; i < indirizzoEmail.length; i++){
    if (indirizzo === indirizzoEmail[i]){
        trovataEmailValida = true;
        break;
    } 
}

if (trovataEmailValida){
    console.log("Email trovata");
} else{
    console.log("Email non valida");
}


//DADO
var giocatore = Math.floor(Math.random() * 6) + 1;
console.log("Giocatore", giocatore);

var computer = Math.floor(Math.random() * 6) + 1;
console.log("Computer", computer);

var vincitore;

if (giocatore > computer){
    alert("Complimenti, hai vinto!");
}else if (giocatore == computer){
    alert("Pareggio!");
}else{
    alert("Hai perso, ritenta!");
}