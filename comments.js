// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise. It should be saved in the same directory as comments.js.

// The server should respond to the root URL (/) and serve the comments.html file.

// The server should respond to the /comments URL and serve a JSON response with the comments array from the previous exercise.

// Use the fs module to read the comments.html file.

// Use the http module to create the server.

// Use the JSON.stringify() method to convert the comments array to a JSON string.

// Use the res.end() method to send the JSON response.

// Use the res.writeHead() method to set the Content-Type header to application/json.

// Use the res.statusCode property to set the status code to 200.

// Use the fs.readFile() method to read the comments.html file.

// Use the res.end() method to send the comments.html file.

// Use the res.writeHead() method to set the Content-Type header to text/html.

// Use the res.statusCode property to set the status code to 200.

// Use the server.listen() method to listen on port 3000.

const http = require('http');
const fs = require('fs');

const comments = require('./comments.json');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('comments.html', (err, data) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  }
});

server.listen(3000, () => {
  console.log('Server is running...');
});