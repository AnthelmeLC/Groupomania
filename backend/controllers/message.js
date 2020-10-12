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
    Message.findOne({where : {id : req.params.id}})
    .then(message => res.status(200).json(message))
    .catch(error => res.status(400).json({error}));
};

//POST NEW
exports.createMessage = (req, res, next) => {
    Message.create({
        //userId : ???,
        time : Date(),
        message : req.body.message
    })
    .then(() => res.status(201).json({message : "Message envoyé!"}))
    .catch(error => res.status(400).json({error}));
};

//MODIFY ONE
exports.modifyMessage = (req, res, next) => {
    //recherche du message dans la base de donnée
    Message.update({ message : req.body.message}, {
        where : {id : req.params.id}
    })
    .then(() => res.status(200).json({message : "Message modifié."}))
    .catch(error => res.status(400).json({error}));
};

//DELETE ONE
exports.deleteMessage = (req, res, next) => {
    Message.destroy({where : {
        id : req.params.id
    }})
    .then(() => res.status(200).json({message : "Message supprimé."}))
    .catch(error => res.status(400).json({error}));
};