const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === '/home.html') {
        fs.readFile('home.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    else if (req.url === '/login.html') {
        fs.readFile('login.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    else if (req.url==='/registrationpage.html'){
        fs.readFile('registrationpage.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, this is my first Node.js server!');
    }
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
