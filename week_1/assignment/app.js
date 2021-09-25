const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>')
        res.write('<body><h1>Welcome to the page</h1></body>')
        res.write('</html>)')
        // res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form>')
        return res.end;
    }

    
    if (url === '/user') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body>')
        res.write('<div>')
        res.write('<ul>')
        res.write('<li>User 1</li>')
        res.write('<li>User 2</li>')
        res.write('<li>User 3</li>')
        res.write('</ul>')
        res.write('</div>')
        res.write('</body>')
        res.write('</html>')
        return res.end;
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log(chunk);
        });
         req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody.split('=')[1]);

        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
});
server.listen(3000);