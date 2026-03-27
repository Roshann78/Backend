const http = require('http');
const PORT=8000;


const server = http.createServer((req,res)=>{
    res.end('Hello Schrodinger at server');
});


server.listen(PORT,'127.0.0.1',()=>{
    console.log(`Listening to server on port ${PORT}`);
});
