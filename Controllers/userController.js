//const User = require('../Models/user');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://heroku_gcl6z7x6:Iwtscf2d!@ds153609.mlab.com:53609/heroku_gcl6z7x6";
const client = new MongoClient(encodeURI(uri), { useNewUrlParser: true });

// handle user create on POST
exports.create_user_post = function(req, res){
    client.connect(err => {
        if (err) {
          console.log("Can't insert Student", err);
      } else {
          console.log("Connected"); // ops has the documents added
          
      }
    const collection = client.db("heroku_gcl6z7x6").collection("Collection0");

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