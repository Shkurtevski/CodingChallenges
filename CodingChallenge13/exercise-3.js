class EmailMessage {
    constructor(from, to, subject, message) {
        this.from = from;
        this.to = to;
        this.subject = subject;
        this.message = message;
    }

    displayMessage() {
        const fullMessage = `From: ${this.from}\nTo: ${this.to}\nSubject: ${this.subject}\nMessage: ${this.message};`
        alert(fullMessage);
    }
}

function handleSendButtonClick() {
    const from = document.getElementById("fromField").value;
    const to = document.getElementById("toField").value;
    const subject = document.getElementById("subjectField").value;
    const message = document.getElementById("messageField").value;

    const email = new EmailMessage(from, to, subject, message);
    email.displayMessage();
}

const sendButton = document.getElementById("sendButton");
sendButton.addEventListener("click", handleSendButtonClick);