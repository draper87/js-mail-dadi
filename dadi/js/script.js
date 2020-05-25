// Lancio dei dadi
// Creiamo un gioco dei dadi dove vince chi ha il punteggio piu alto da 1 a 6

// Generiamo lanci casuali usando la funzione math.random
var giocatore = Math.floor(Math.random() * 6) + 1;
var computer = Math.floor(Math.random() * 6) + 1;

// Mi creo le variabili per accedere al DOM
var risultato = document.getElementById('risultato');
document.getElementById('dadigiocatore').innerHTML = 'Hai lanciato ' + giocatore;
document.getElementById('dadicomputer').innerHTML = 'Il computer ha lanciato ' + computer;

// Verifico i due lanci per determinare chi ha vinto
if ( giocatore == computer) {
  risultato.innerHTML = 'Parità!';
}
else if (giocatore > computer) {
  risultato.innerHTML = 'Hai vinto!';
}
else {
  risultato.innerHTML = 'Hai perso!';
}
