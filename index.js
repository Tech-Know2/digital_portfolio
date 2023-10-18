const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    let filePath = __dirname + '/public' + req.url;

    if (filePath === __dirname + '/public/') {
        filePath = __dirname + '/public/index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();

    let contentType = 'text/html';

    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.statusCode = 404; // Not Found
                res.end('Not Found');
            } else {
                res.statusCode = 500; // Internal Server Error
                res.end('Internal Server Error');
            }
        } else {
            res.statusCode = 200; // OK
            res.setHeader('Content-Type', contentType);
            res.end(data, 'utf8');
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});
