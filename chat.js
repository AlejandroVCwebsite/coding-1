const chatbotResponses={
  "hello":"Hi There",
  "how are you":"Im good how are you?"
  "Im fine":"good to hear",
  "Im alright":"Thats good",
  "default":"sorry i didint get that could ask again?"
  };

function handleUserInput(event) {
  if(event.key=="Enter"){
    const userInput=document.getElementbyId("userInput").value;
    const chat=document.getElementById("chat");

    document.getElementById("userInput").value = "";
    chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;
    const respond = chatbotResponses[userInput.toLowerCase()] || chatBotResponses["default"];
    chat.innerHTML += `<p><strong>Chicken:</strong> ${response}</p>;
    }
    
  }
