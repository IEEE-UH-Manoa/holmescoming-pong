var restify = require('restify');

var server = restify.createServer({
      name: 'holmescoming-pong-serve',
        version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/leaderboard', function (req, res, next) {
    res.send(req.params);
    return next();
});

