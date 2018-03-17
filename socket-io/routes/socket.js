module.exports = function(io) {
    var express = require('express');
    var router = express.Router();

    router.get('/', function(req, res, next) {
        res.sendFile(__dirname + '/app.html');
    });
    
    return router;
}