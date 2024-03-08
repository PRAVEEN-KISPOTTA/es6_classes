function main() {
    //Create your Message Class here with all the properties and methods
    class Message {
        constructor(sender, receiver, messageContent) {
            this.sender = sender;
            this.receiver = receiver;
            this.messageContent = messageContent;
        }

        static totalMessages = 0;
        static status = false;

        static recordMessage() {
            Message.totalMessages++;
        }

        static changeStatus() {
            Message.status = !Message.status;
            console.log(`The status has been changed to ${Message.status ? "online" : "offline"}`);
        }

        sendMessage() {
            Message.recordMessage();
            console.log(`The message '${this.messageContent}' has been sent from '${this.sender}' to '${this.receiver}'`);
        }

        displayDetails() {
            console.log(`Sender: ${this.sender}`);
            console.log(`Receiver: ${this.receiver}`);
            console.log(`Message: ${this.messageContent}`);
            console.log(`Status: ${Message.status ? "online" : "offline"}`);
            console.log(`Total Messages: ${Message.totalMessages}`);
        }
    }

    Message.changeStatus();
    const myMessage = new Message("John", "Jane", "Hello");
    myMessage.sendMessage();
    myMessage.displayDetails();

    // The status has been changed to online
    // The message 'Hello' has been sent from 'John' to 'Jane'
    // Sender: John
    // Receiver: Jane
    // Message: Hello
    // Status: online
    // Total Messages: 1

    return Message;
}

main();
