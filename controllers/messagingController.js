
const express = require('express');
var router = express.Router();
const { body, validationResult,query } = require('express-validator');
const { SendMessage, ReceiveMessage } = require('../Schemas/MessagingSchemas/schemas');
var incomingMessages = [];


router.get('/', (req, res) => {
    res.send('Messaging Controller Works..!');
});

router.post('/api/sendMessage',
    //Validation that the sender and recipient has valid email address
    body('sender').isEmail(),
    body('recipient').isEmail(),
    body('message').notEmpty(),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        incomingMessages.push(new SendMessage(req.body['sender'],req.body['recipient'],req.body['message']))
        res.send('Message sent...!');
    })

router.get('/api/receiveMessage/:recipientId',
    // query('recipientId').isEmail(),
     (req, res) => {
    const recipientId = req.params['recipientId'];
    const recipientMessages = incomingMessages.filter(f=>f.recipient == recipientId);
    if(recipientMessages.length==0){
        res.send(`No messages found for ${recipientId}`);
    }
    res.send(recipientMessages);
})


module.exports = router;