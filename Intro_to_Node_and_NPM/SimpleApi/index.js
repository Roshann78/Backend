const http=require('http');
const url=require('url');
const fs=require('fs');
const PORT=8000;

const data=fs.readFileSync('data.json','utf-8');
const dataObj=JSON.parse(data);

const server=http.createServer((req,res)=>{
    const pathName=req.url;
    if(pathName==='/' || pathName==='/overview'){
        res.end('WELCOME TO SCHRODINGERS DEN');
    }
    else if(pathName==='/realname'){
        res.writeHead(200,{
            'content-type':'text/html',
        });
        res.end('<h1>My real name is Schrodinger</h1>');
    }
    else if(pathName==='/detailsapi'){
        res.writeHead(200,{
            'content-type':'application/json',
        });
        res.end(data);
    }
    else{
        res.writeHead(404,{
            'content-type':'text/html',
            'my-own-header':'koi baat nahi chalta hai dunya hai'
        });
        res.end('<h1>Schrodinger is alone at the server</h1>');
    }
});

server.listen(PORT,()=>{
    console.log(`Schrodinger listening at port ${PORT}`);
});