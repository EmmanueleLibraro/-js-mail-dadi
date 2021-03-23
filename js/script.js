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
    } 
}

if (trovataEmailValida){
    console.log("Email trovata");
} else{
    console.log("Email non valida");
}


//DADO
var giocatore = Math.floor(Math.random() * 6) + 1;
console.log(giocatore);

var computer = Math.floor(Math.random() * 6) + 1;
console.log(computer);

var vincitore;

if (giocatore > computer){
    alert("Complimenti, hai vinto!");
}else if (giocatore == computer){
    alert("Pareggio!");
}else{
    alert("Hai perso, ritenta!");
}
    











// var numero = ['1', '2', '3', '4', '5', '6'];

// console.log(numero);

//  for (var i = 0; i < numero.length; i++) {

//  }

//  var giocatore = parseInt( prompt("Inserisci un numero da 1 a 6") );