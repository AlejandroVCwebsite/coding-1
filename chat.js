const chatbotResponses = {
  "hello": "Hi There, are you here for the literature club?",
  "how are you?": "Im good, how are you?",
  "im fine": "Good to hear",
  "im alright": "Thats good",
  "what is your name?": "im monika, whats your name?",
  "my name is hakan": "Hakan, that sounds greek, are you the new club member?",
  "my name is dragos": "Dragos, thats a stupid name, are you here to join the literature club?",
  "my name is elsie": "oh your Elsie, your the clubs newest member right?",
  "my name is ms kennedy": "ahh Ms Kennedy, you like coding right, arent you the clubs newest member?",
  "yes": "wonderfull!",
  "no": "oh are you sure. maybe try ansewring again",
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
