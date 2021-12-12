var express = require('express');
var router = express.Router();
let MongoClient = require('mongodb').MongoClient;

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', async (req, res, next) => {

  MongoClient.connect('mongodb://127.0.0.1:27017', function (err, db) {
    if (err) throw err;
    var dbo = db.db("users");
    dbo.collection("users").insertOne({
      firstname: req.body.fname,
      lastname: req.body.lname
    },
      function (err, result) {
        if (err) throw err;
        res.json(result);
        db.close();
      });
  });

})

module.exports = router;
