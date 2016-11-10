var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config.js');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');

var app = express();

var corsOptions = {
	origin: 'localhost:8000'
};

app.use(cors(corsOptions));
app.use(session({secret: config.sessionSecret}));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.post('/api/login', function(req,res,next){
	if (userCtrl.login(req.body.name, req.body.password, req.session)){
		res.send({userFound: true});
	} else {
		res.send({userFound: false});
	}
})
app.get('/api/profiles', function(req, res, next){
	var result = profileCtrl.userAndFriends(req.session.currentUser, req.session.currentUser.friends);
	res.json(result);
})








app.listen(8000, function(){
	console.log("im listening");
})