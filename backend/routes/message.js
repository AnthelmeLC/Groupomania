const express = require("express");
const router = express.Router();

const messageCtrl = require("../controllers/message");
const auth = require("../middlewares/auth");

router.get("/",  messageCtrl.getAllMessages);
router.get("/:id", messageCtrl.getOneMessage);
router.post("/",  messageCtrl.createMessage);
router.put("/:id",  messageCtrl.modifyMessage);
router.delete("/:id",  messageCtrl.deleteMessage);

module.exports = router;