const http = require('http');
const fs = require('fs');
/*The passed in functions inside of functions are executed in a later point in time. But the evenlistener inside of 
js registers them serially. */
console.log("In next line server will be created.(1)")
const server = http.createServer((req, res) => { // Registered in event listener

  //console.log("Server has been created"); Why is thine line executed twice?
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => { // Event listener
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => { /* 'return' here in order to block the execution of lines 30 - 34 */
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
    /* req.on() is fired when after node.js has stopped parsing the request*/
   }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
}); //

//console.log("Did the server started listening?(2)")
server.listen(4000);