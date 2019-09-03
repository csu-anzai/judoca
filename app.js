var app = require('./config/server.js');

app.listen(3000, function(){
	console.log('Server ON in port 3000!');
	console.log('http://localhost:3000');
})