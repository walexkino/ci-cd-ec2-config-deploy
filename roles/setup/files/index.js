var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Welcome to walexkino ansible home page, the ansible playbook script worked!! IP address");
});
server.listen(3000); // this port as already been allowed in the ingress port (in the cloudformation script) for the target ec2 instance
