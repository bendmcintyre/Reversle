//This function generates a random letter in the alphabet that will be assigned to letters 1-5.
document.getElementById("random-letter-generator").innerHTML =
  randomLetterGenerator();

function randomLetterGenerator() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return (randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]);
  return true;
}

//These three functions below allow user to drag random generated letter into a spot 1-5
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
