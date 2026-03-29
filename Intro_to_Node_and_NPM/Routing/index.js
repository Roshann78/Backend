const http = require('http');
const PORT=8000;
const url=require('url');

const server = http.createServer((req,res)=>{
    const pathname=req.url;
    if(pathname==='/' || pathname==='/overview'){
        res.end('Schrodinger Welcomes You to the OVERVIEW');
    }
    else if(pathname==='/realname'){
        res.end('The real name of Schrodinger is Roshan');
    }
    else{
        res.writeHead(404,{
            'content-type':'text/html',
            'my-own-header':'koi baat nahi chalta hai'
        });
        res.end('<h1>Hello Schrodinger at but no one found at support</h1>');
    }
    
});


server.listen(PORT,'127.0.0.1',()=>{
    console.log(`Listening to server on port ${PORT}`);
});
