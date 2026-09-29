const chatbotResponses = {
  "hello": "Hi There",
  "how are you": "Im good, how are you?",
  "im fine": "Good to hear",
  "im alright": "Thats good",
  "default": "Sorry, I didn't get that. Could you ask again?"
};

function handleUserInput(event) {
  if (event.key === 'Enter') {
    const userInput = document.getElementById("userInput").value;
    const chat = document.getElementById("chat");

    document.getElementById("userInput").value = "";

    chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    const response =
      chatbotResponses[userInput.toLowerCase()] ||
      chatbotResponses["default"];

    chat.innerHTML += `<p><strong>Monika:</strong> ${response}</p>`;
  }
}
