
let secret = [];

for (let i = 0; i < 4; i++) {
  secret.push(Math.floor(Math.random() * 10));
}
console.log("Secret :", secret.join(" "))

function verifier() {
    let guess = [
        parseInt(document.getElementById("n1").value),
        parseInt(document.getElementById("n2").value),
        parseInt(document.getElementById("n3").value),
        parseInt(document.getElementById("n4").value)
    ]

    let messages = []

    for (let i = 0; i < 4; i++) {
        if (guess[i] === secret[i]) {
        messages.push(`${guess[i]} est correct et bien place`);
        } 
        else if (secret.includes(guess[i])) {
        messages.push(`${guess[i]} est correct mais mal place`);
        } 
        else {
        messages.push(`${guess[i]} n'existe pas`);
        }
    }

    document.getElementById("resultat").innerHTML = messages.join("<br>")
}