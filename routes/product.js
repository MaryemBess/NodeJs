var express = require('express');
var router = express.Router();
var fs = require('fs');
var product=JSON.parse(
fs.readFileSync('./data/product.json'));
 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(product);
});

router.get('/:id', function(req, res, next) {
    res.json(product[req.params.id]);
  });

  router.get('/instock/:qt', function(req, res, next){
      tab=[];
        for (var p in product){
            if(product[p]["stock"]<= req.params.qt){
                tab.push(product[p]["stock"]);
            }
        }
        res.json(tab);
  
  }
  );

  router.get('/:id/:qt', function(req, res, next) {
    res.json(product[req.params.id]);
  });

module.exports = router;
