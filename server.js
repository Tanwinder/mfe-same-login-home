const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('./'));
app.use(express.static('dist'));

app.get('/*', function(req, res) {
	res.sendFile(`${ __dirname }/dist/index.html`);
}); 

const server = http.createServer(app);
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`server running at port ${ port }`));