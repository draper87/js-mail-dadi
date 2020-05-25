// Lancio dei dadi
// Creiamo un gioco dei dadi dove vince chi ha il punteggio piu alto da 1 a 6

// Generiamo lanci casuali usando la funzione math.random
var dadiGiocatore = Math.floor(Math.random() * 6) + 1;
var dadiComputer = Math.floor(Math.random() * 6) + 1;

// Mi creo le variabili per accedere al DOM
var risultato = document.getElementById('risultato');
document.getElementById('dadigiocatore').innerHTML = 'Hai lanciato ' + dadiGiocatore;
document.getElementById('dadicomputer').innerHTML = 'Il computer ha lanciato ' + dadiComputer;

// Verifico i due lanci per determinare chi ha vinto
if ( dadiGiocatore == dadiComputer) {
  risultato.innerHTML = 'Parità!';
}
else if (dadiGiocatore > dadiComputer) {
  risultato.innerHTML = 'Hai vinto!';
}
else {
  risultato.innerHTML = 'Hai perso!';
}
