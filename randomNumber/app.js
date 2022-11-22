let user;
let number = Math.floor(Math.random() * 11);
console.log(number);

function guessTheNumber() {
  for (let count = 0; count < 1; ) {
    user = prompt("Ingrese un numero del 0 al 10");
    if (user > number) {
      alert(`El  numero debe ser menor al ${user}`);
    }
    if (user < number) {
      alert(`El  numero debe ser mayor al ${user}`);
    } else if (user == number) {
      alert(`El numero era el ${number} a ganado`);
      count++;
    }
  }
}
guessTheNumber();

// time 15mins