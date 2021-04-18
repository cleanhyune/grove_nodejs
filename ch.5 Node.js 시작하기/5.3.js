const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('Hello World')
}).listen(5000, (err) => {
    console.log(`server is running on 5000`)
})