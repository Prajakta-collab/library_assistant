const {spawn} =require('child_process');
var express = require('express');
var app = express();

app.listen(5000, function() {
	console.log('server running on port 5000');
} )


app.get('/assistant', callName);

function callName(req, res) {
	
	var spawn = require("child_process").spawn;
	
	
	var process = spawn('python',["../python_backend/main.py",
							] );

	
	process.stdout.on('data', function(data) {
        console.log(data)
		res.send(data.toString());
	} )
}

