var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//change
router.get('/', function(req, res, db) {
    var collection=db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', { "userlist": docs });
    }
);
});
module.exports = router;
