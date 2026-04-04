const http=require('http');
const url=require('url');
const fs=require('fs');
const PORT=8000;

const replaceTemplate=(temp,product)=>{
    let output=temp.replace(/{%PRODUCTNAME%}/g,product.productName);
    output=output.replace(/{%IMAGE%}/g,product.image);
    output=output.replace(/{%PRICE%}/g,product.price);
    output=output.replace(/{%FROM%}/g,product.from);
    output=output.replace(/{%QUANTITY%}/g,product.quantity);
    output=output.replace(/{%DESCRIPTION%}/g,product.description);
    output=output.replace(/{%NUTRIENT%}/g,product.nutrients);
    output=output.replace(/{%ID%}/g,product.id);
    if (!product.organic) {
        output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    } else {
        output = output.replace(/{%NOT_ORGANIC%}/g, '');
    }
    return output;
}

const tempOverview=fs.readFileSync('overview.html','utf-8');
const tempCard=fs.readFileSync('template-card.html','utf-8');
const tempProduct=fs.readFileSync('products.html','utf-8');


const data=fs.readFileSync('data.json','utf-8');
const dataObj=JSON.parse(data);

const server=http.createServer((req,res)=>{
    const {query,pathname}=url.parse(req.url,true);
    // const pathName=req.url;
    //overview page
    if(pathname==='/' || pathname==='/overview'){
        res.writeHead(200,{
            'content-type':'text/html',
        });

        const cardsHtml=dataObj.map(el=>replaceTemplate(tempCard,el)).join(' ');
        // console.log(cardsHtml);
        // console.log(cardsHtml[0]);
        const output=tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml);
        res.end(output);
    }
    //product page
    else if(pathname==='/product'){
        // console.log(query);
        const product=dataObj[query.id];
        const output=replaceTemplate(tempProduct,product);
        res.writeHead(200,{
            'content-type':'text/html',
        });
        res.end(output);
    }
    //api
    else if(pathname==='/detailsapi'){
        res.writeHead(200,{
            'content-type':'application/json',
        });
        res.end(data);
    }
    //not found
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