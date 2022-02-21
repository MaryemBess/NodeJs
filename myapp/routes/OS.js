var express = require('express');
var router = express.Router();
var os= require('os');

 router.get('/', function(req, res){
     var cpus=os.cpus();
     for( var i=0; i<cpus.length;i++ ){
         console.log("cpu:",i);
         console.log(cpus[i]);
         for (var type in cpus.times){
             console.log(cpu.times[type]);
         }

     }

     res.json({
     hostname:os.hostname(),
     type:os.type(),
     platform:os.platform(),
     cpus:JSON.stringify(cpus)

 });
});

router.get('/cpus/:id', function(req, res){
    var id = req.params.id;
    res.json({
        cpus:os.cpus()[id],
    })

});


 module.exports = router;
