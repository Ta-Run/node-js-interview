const {createServer} = require('node:http')
const server =createServer((req,res)=>{
    res.writeHead(200 ,{"content-type":'text/plain'})
    res.end('hello wor;d')
})

server.listen(5000,()=>{
    console.log('server listen at port 5000')
})