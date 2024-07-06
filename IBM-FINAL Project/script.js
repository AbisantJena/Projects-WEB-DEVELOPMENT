function showChat() {
    document.getElementById('chatbox').style.display = 'flex';
}

function closeChat() {
    document.getElementById('chatbox').style.display = 'none';
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        document.querySelector('.messages').appendChild(messageElement);
        input.value = '';

        // Simulate Plumy's response
        setTimeout(() => {
            const responseElement = document.createElement('div');
            responseElement.textContent = `Plumy: ${generateResponse(message)}`;
            document.querySelector('.messages').appendChild(responseElement);
        }, 1000);
    }
}

function generateResponse(message) {
    // Simple response logic for demonstration
    return "Thank you for your message! Let's save water together!";
}
