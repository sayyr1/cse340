const requestHandler = (req, res) =>{
    const url = req.url;

    if (url === '/') {
        // return a code when it is / path
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>This is the prove Assignment 01</title></head>');
        res.write('<body><h1>Welcome to Prove Assignment Week 01</h1>');
        res.write('<form action="/users" method="POST">Name = <input type="text" name="name"> LastName = <input type="text" name="lastname">Username = <input type="text" name="username"><button type="submit">Send</button></form>')
        res.write('</body>');
        res.write('</html>')

    }

    if (url === '/users') {
        // Return something when the path is /user
        const usersInformation = [];
        req.on('data', (chunk)=>{
            usersInformation.push(chunk);
            console.log(chunk)
        });
        req.on('end', ()=>{
            const parseBody = Buffer.concat(usersInformation).toString();
            // deleting the & character of the string
            const string = parseBody.split('&').join('=');
            
            const name = string.split('=')[1];
            const lastname = string.split('=')[3];
            const username = string.split('=')[5];
      
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>This is the prove Assignment 01</title></head>');
        res.write('<body><h1>Welcome this is your information: </h1>');
        res.write(`<ul><li> Name = ${name}</li> <li> Lastname = ${lastname}</li><li> Username = ${username}</li></ul>`)
        res.write('</body>')
        res.write('</html>');
    })
    }

    if(url === '/create-user'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        
        req.on('end', ()=> {
            const parseBody = Buffer.concat(body).toString();
            const users = parseBody.split('&').join('=');
            const usersInformation = users.split('=')
            console.log(usersInformation)
            console.log(parseBody)
        })
    }




}
module.exports = requestHandler;