//const User = require('../Models/user');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://jafarlie:Iwtscf2d!@ds151941.mlab.com:51941/heroku_wxdf3cn5";
const client = new MongoClient(encodeURI(uri), { useNewUrlParser: true });

// handle user create on POST
exports.create_user_post = function(req, res){
    client.connect(err => {
        if (err) {
          console.log("Can't insert Student", err);
      } else {
          console.log("Connected"); // ops has the documents added
          
    }
    const collection = client.db("heroku_wxdf3cn5").collection("Collection0");

    //const name = document.getElementById("studentName")
    //const year = document.getElementById("studentYear")
    var name = req.body.nameInput; //mytext is the name of your input box
    var email = parseInt(req.body.email);
    collection.insertOne({
          //_id: 7,
          name: name,
          email: email
      }, (error, result) => {
          if (error) {
              console.log("Can't insert Student", error);
          } else {
              console.log(result.ops); // ops has the documents added
              console.log(result.ops[0]._id.getTimestamp());
          }

      });
      client.close();
    });
};