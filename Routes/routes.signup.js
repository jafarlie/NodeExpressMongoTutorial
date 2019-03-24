var express = require('express');
var router = express.Router();
const path = require('path');
const userController = require('../Controllers/userController');





router.get('/', (req, res) =>{
    console.log(path.join(path.dirname(require.main.filename) + '/Public/index.html'));
    res.sendFile(path.join(path.dirname(require.main.filename) + '/Public/index.html'));
});

router.post('/', (req, res) => {
    userController.create_user_post(req, res);
});

module.exports = router;