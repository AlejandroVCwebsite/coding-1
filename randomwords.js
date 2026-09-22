onst words = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi"];

function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);

    const randomWord = words[randomIndex];

    document.getElementById("wordDisplay").innerText = randomWord;
}
