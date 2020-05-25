// Chiedo all utente la sua email
var email = prompt('Inserisci indirizzo email');

// Creo il mio archivio di indirizzi email verificati
var archivioEmail = ['draper87@gmail.com', 'alessandro@libero.it', 'federico@yahoo.com', 'maria@tiscali.it'];

// Creo una variabile di appoggio
var emailVerificata = 0;


// Verifico che l indirizzo email inserito dall utente rientri tra quelli autorizzati

for (var i = 0; i < archivioEmail.length; i++) {
  if (archivioEmail[i] == email) {
    emailVerificata = 1; // restituisco true se la mail viene verificata
  }
}

if (emailVerificata == 0) {
  document.getElementById('autorizzato').innerHTML = 'Non sei autorizzato ad accedere alla pagina';
}
else {
  document.getElementById('autorizzato').innerHTML = 'Sei autorizzato ad accedere alla pagina';
}

// Lancio dei dadi
// Creiamo un gioco dei dadi dove vince chi ha il punteggio piu alto da 1 a 6

// Generiamo lanci casuali usando la funzione math.random
var dadiGiocatore = Math.floor(Math.random() * 6) + 1;
var dadiComputer = Math.floor(Math.random() * 6) + 1;

// Mi creo le variabili per accedere al DOM
var risultato = document.getElementById('risultato');
document.getElementById('dadigiocatore').innerHTML = 'Hai lanciato ' + dadiGiocatore;
document.getElementById('dadicomputer').innerHTML = 'Il computer ha lanciato ' + dadiComputer;

console.log(dadiGiocatore);
console.log(dadiComputer);

if ( dadiGiocatore == dadiComputer) {
  risultato.innerHTML = 'Parità!';
}
else if (dadiGiocatore > dadiComputer) {
  risultato.innerHTML = 'Hai vinto!';
}
else {
  risultato.innerHTML = 'Hai perso!';

}
