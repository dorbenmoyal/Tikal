class SendMessage {
    constructor(sender,recipient,message){
        this.sender = sender;
        this.recipient=recipient;
        this.message = message;
    }
}

class ReceiveMessage{
    constructor(recipient,messages){
        this.recipient = recipient;
        this.messages = recipient;
    }
}



module.exports ={
    ReceiveMessage,
    SendMessage
}