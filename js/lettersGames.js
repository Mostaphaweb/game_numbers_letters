    let secretWord =""
        let revealed =[]
        let wrongGuesses = 0
        const maxGuesses = 6

        const wordDiv = document.getElementById("word")
        const lettersDiv = document.getElementById("letters")
        const message = document.getElementById("message")
        const triesDiv = document.getElementById("tries")

        const generateButtons = ()=>{
            const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
            alphabet.forEach(letter => {
                const btn = document.createElement("button")
                btn.textContent = letter
                btn.onclick = () => handleGuess(letter, btn)
                lettersDiv.appendChild(btn)
            });
        }
        function disableAll() {
        document.querySelectorAll("#letters button").forEach(b => b.disabled = true);
        }

        fetch("https://random-words-api.kushcreates.com/api?language=en&type=uppercase&words=1")
        .then(res => res.json())
        .then(data =>{ 
            secretWord = data[0].word;

            console.log("Secret word:", secretWord)
            generateButtons()
            revealed = Array(secretWord.length).fill("_");
            wordDiv.textContent = revealed.join(" ");
        })

    function handleGuess(letter, btn) {
        btn.disabled = true;
        if (secretWord.includes(letter)) {
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) revealed[i] = letter;
        }
        wordDiv.textContent = revealed.join(" ")
        if (!revealed.includes("_")) {
            message.textContent = "🎉 You guessed it!"
            disableAll()
        }
        } else {     
        wrongGuesses++;
        triesDiv.textContent = `❌ Wrong guesses: ${wrongGuesses} / ${maxGuesses}`
        btn.style.color = "red"

        
            if (wrongGuesses >= maxGuesses) {
            message.textContent = `😢 You lost! The word was ${secretWord}`
            disableAll()
        }
        }
    }