const { error } = require("console");
const Message = require("../models/message");

//GET ALL
exports.getAllMessages = (req, res, next) => {
    Message.findAll()
    .then(messages => res.status(200).json(messages))
    .catch(error => res.status(400).json({error}));
};

//GET ONE
exports.getOneMessage = (req, res, next) => {
    Message.findById(req.params.id)
    .then(message => res.status(200).json(message))
    .catch(error => res.status(400).json({error}));
};

//POST NEW
exports.createMessage = (req, res, next) => {
    const messageObject = JSON.parse(req.body.message);
    delete messageObject._id;
    //création du nouveau message
    const message = new Message({
        ...messageObject
    });
    message.save()
    .then(() => res.status(201).json({message : "Message envoyé!"}))
    .catch(error => res.status(400).json({error}));
};

//MODIFY ONE
exports.modifyMessage = (req, res, next) => {
    //recherche du message dans la base de donnée
    Message.findById(req.body.id)
    .then(message => {
        //mise à jour du message
        const messageObject = {
            ...message,
            message : req.body.message
        };
        Message.updateOne({_id : req.params.id}, {...messageObject, _id : req.params.id})
        .then(() => res.status(200).json({message : "Message modifié."}))
        .catch(error => res.status(400).json({error}));
    })
    .catch(error => res.status(400).json({error}));
};

//DELETE ONE
exports.deleteMessage = (req, res, next) => {
    Message.deleteOne(req.params.id)
    .then(() => res.status(200).json({message : "Message supprimé."}))
    .catch(error => res.status(400).json({error}));
};