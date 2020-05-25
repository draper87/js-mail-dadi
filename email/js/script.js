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
// In base al valore di emailVerificata andiamo a restituire un messaggio
if (emailVerificata == 0) {
  document.getElementById('autorizzato').innerHTML = 'Non sei autorizzato ad accedere alla pagina';
}
else {
  document.getElementById('autorizzato').innerHTML = 'Sei autorizzato ad accedere alla pagina';
}
