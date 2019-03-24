var express = require('express');
var router = express.Router();
const path = require('path');
const userController = require('../Controllers/userController');



const uri = "mongodb://heroku_gcl6z7x6:Iwtscf2d!@ds153609.mlab.com:53609/heroku_gcl6z7x6";
const client = new MongoClient(encodeURI(uri), { useNewUrlParser: true });

router.get('/', (req, res) =>{
    console.log(path.join(path.dirname(require.main.filename) + '/Public/index.html'));
    res.sendFile(path.join(path.dirname(require.main.filename) + '/Public/index.html'));
});

router.post('/', (req, res) => {
    userController.create_user_post(req, res);
});

module.exports = router;