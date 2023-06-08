function sendMessage(event) {
  // Check if the Enter key was pressed
  if (event.key === "Enter" || event.type === "click") {
    // Get the message input field value
    var messageInput = document.getElementById("message-input");
    var messageText = messageInput.value.trim();

    // Check if the message is not empty
    if (messageText !== "") {
      // Create a new message item
      var messageItem = document.createElement("div");
      messageItem.classList.add("message-item");

      // Create the message bubble
      var messageBubble = document.createElement("div");
      messageBubble.classList.add("message-bubble-left");
      messageBubble.textContent = messageText;
      messageItem.appendChild(messageBubble);

      // Create the message time
      var messageTime = document.createElement("div");
      messageTime.classList.add("message-time-left");
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      messageTime.textContent = hours + ":" + (minutes < 10 ? "0" : "") + minutes;
      messageItem.appendChild(messageTime);

      // Add the message item to the message list
      var messageList = document.getElementById("message-list");
      messageList.appendChild(messageItem);

      // Reset the message input field
      messageInput.value = "";

      messageItem.scrollIntoView();
    }
  }
}

// Attach the sendMessage function to the send button
var sendButton = document.getElementById("send-btn");
sendButton.addEventListener("click", sendMessage);

// Attach the sendMessage function to the keydown event of message-input
var messageInput = document.getElementById("message-input");
messageInput.addEventListener("keydown", sendMessage);
