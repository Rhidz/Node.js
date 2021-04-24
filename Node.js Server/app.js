const http = require('http'); // import the http module.
const fs = require('fs');


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        
        res.write('<html>');
        res.write('<head><title> Enter Message </title></head>');
        res.write('<body><form action="/message" method="POST"><input type= "text" name="I am sending a message"><button type = "submit">Send</button></form></body>')
        res.write('</html>');
        return res.end();
        /* POST Request HEADER */

    }
    if (url === '/message' && method == 'POST') {
        fs.writeFileSync('message.txt', 'Dummy');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();

    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title> My first page </title></head>');
    res.write('<body><h1>Rhidita Server</h1></body>')
    res.write('</html>');
    res.end();
    /* Get Request HEADER */
}); 


server.listen(3000); 





























// listen to incoming requests.
/* The requestListenerfunction listens to the req and returns a res
This func is executed everytime the server listens to a req
// create a server by implementing the listener function. This is like a handler func in Swift
 */