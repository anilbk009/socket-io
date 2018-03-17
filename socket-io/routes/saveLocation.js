module.exports = function(io) {
    var express = require('express');
    var router = express.Router();

    router.post('/', function(req, res, next) {
        // io.sockets.emit('testerEvent', { description: 'Saved loaction success....!'});
         //Send a message after a timeout of 4seconds
       setTimeout(function() {
            io.sockets.emit('testerEvent', { description: 'A custom event from save loaction....!'});
       }, 4000);
        res.send({});
    });
    
    return router;
}