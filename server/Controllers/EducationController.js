const express = require('express');
const app = express();
const router = express.Router();

router.get('/inside', (req , res) => {
    res.send({
        name : "Samad",
        age : "22"
    });
})


module.exports = router;