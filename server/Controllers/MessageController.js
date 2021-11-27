const express = require("express");

const MessageService = require("../Service/MessageService");
const auth = require("../Middleware/auth");

const router = express.Router();

router.post("/", MessageService.addMessage);
router.get("/", auth, MessageService.getAllMessages);
router.put("/:messageId", auth, MessageService.updateMessage);

module.exports = router;