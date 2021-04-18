const http = require('http')
const port = 5000

const server = http.createServer( (req, res) => {
    const ip = req.headers['x-forworded-for'] || req.connection.remoteAddress
    console.log(`ip: ${ip}`)
    console.log(`url: ${req.url}`)
    console.log(`header: ${req.headers}`)

    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain')
    res.end(`Hello World\n${JSON.stringify(req.headers, null, 4)}`)
})

server.listen(port, (err) => {
    if(err) {
        console.log(err)
    }
    console.log(`server is running on ${port}`)
})